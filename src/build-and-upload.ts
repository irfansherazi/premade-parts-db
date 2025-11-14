/**
 * Helper script to build and upload the premade database to S3
 * This can be run locally or in CI/CD
 * 
 * Usage:
 *   npm run build:upload [version]        # Build and upload (requires AWS credentials)
 *   npm run build:upload -- --build-only  # Build zip only (no upload, no credentials needed)
 * 
 * If version is not provided, it will auto-increment from S3 (or start at 1 if no access)
 */

import * as AWS from "aws-sdk";
import * as fs from "fs";
import * as path from "path";
import archiver from "archiver";

const BUCKET = "xoarmor-desktop-installation-files-staging";
const PREFIX = "xoarmor-premade-parts-db/";
const DB_FILE_NAME = "premade-database.db";
const DB_PATH = path.join(__dirname, "..", DB_FILE_NAME);

interface S3Object {
  Key?: string;
}

function hasAWSCredentials(): boolean {
  return !!(
    process.env.AWS_ACCESS_KEY_ID &&
    process.env.AWS_SECRET_ACCESS_KEY
  ) || !!(
    process.env.AWS_SDK_LOAD_CONFIG === "1" &&
    fs.existsSync(path.join(process.env.HOME || process.env.USERPROFILE || "", ".aws", "credentials"))
  );
}

function getS3Client(): AWS.S3 {
  const config: AWS.S3.ClientConfiguration = {
    region: process.env.AWS_REGION || "us-east-1",
  };

  // If credentials are provided via environment variables, use them
  if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
    config.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    };
  } else if (process.env.AWS_SDK_LOAD_CONFIG === "1") {
    // Let AWS SDK load from config file
    process.env.AWS_SDK_LOAD_CONFIG = "1";
  }

  return new AWS.S3(config);
}

async function getLatestVersion(): Promise<number> {
  if (!hasAWSCredentials()) {
    console.log("⚠️  AWS credentials not found. Starting at version 1");
    return 0;
  }

  const s3 = getS3Client();
  const params = {
    Bucket: BUCKET,
    Prefix: PREFIX,
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    let latestVersion = 0;

    if (data.Contents) {
      for (const obj of data.Contents) {
        const fileName = obj.Key?.split("/").pop() || "";
        const match = fileName.match(/staging-xoarmor-premade-parts-db-v(\d+)\.zip/);
        if (match) {
          const version = parseInt(match[1], 10);
          if (version > latestVersion) {
            latestVersion = version;
          }
        }
      }
    }

    return latestVersion;
  } catch (error: any) {
    console.log("⚠️  Could not access S3 to get latest version:", error.message);
    console.log("   Starting at version 1");
    return 0;
  }
}

async function uploadToS3(zipPath: string, version: number): Promise<void> {
  if (!hasAWSCredentials()) {
    throw new Error(
      "AWS credentials not found. Set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables, " +
      "or use --build-only flag to skip upload."
    );
  }

  const s3 = getS3Client();
  const key = `${PREFIX}xoarmor-premade-parts-db-v${version}.zip`;

  console.log(`Uploading ${zipPath} to s3://${BUCKET}/${key}`);

  const fileContent = fs.readFileSync(zipPath);
  await s3
    .putObject({
      Bucket: BUCKET,
      Key: key,
      Body: fileContent,
      ContentType: "application/zip",
    })
    .promise();

  console.log(`✅ Successfully uploaded database version ${version} to S3`);
}

function createZip(dbPath: string, version: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const zipPath = path.join(__dirname, "..", `xoarmor-premade-parts-db-v${version}.zip`);
    
    // Remove existing zip if it exists
    if (fs.existsSync(zipPath)) {
      fs.unlinkSync(zipPath);
    }

    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip", {
      zlib: { level: 9 } // Maximum compression
    });

    output.on("close", () => {
      const zipSize = fs.statSync(zipPath).size;
      console.log(`Created zip file: ${zipPath} (${zipSize} bytes)`);
      resolve(zipPath);
    });

    archive.on("error", (err: Error) => {
      reject(err);
    });

    archive.pipe(output);
    
    // Add the database file to the zip
    const fileName = path.basename(dbPath);
    archive.file(dbPath, { name: fileName });
    
    archive.finalize();
  });
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const buildOnly = args.includes("--build-only");
  const providedVersion = args.find(arg => arg !== "--build-only" && !arg.startsWith("--"));

  let version: number;

  if (providedVersion) {
    version = parseInt(providedVersion, 10);
    if (isNaN(version)) {
      console.error("Invalid version number provided");
      process.exit(1);
    }
    console.log(`Using provided version: ${version}`);
  } else if (buildOnly) {
    // For build-only, start at version 1 or use a timestamp
    version = 1;
    console.log(`Build-only mode: Using version ${version}`);
  } else {
    const latestVersion = await getLatestVersion();
    version = latestVersion + 1;
    console.log(`Auto-incremented version: ${version} (latest was ${latestVersion})`);
  }

  // Verify database exists
  if (!fs.existsSync(DB_PATH)) {
    console.error(`❌ Database file not found at ${DB_PATH}`);
    console.error("Please run the seed script first: npm run seed");
    process.exit(1);
  }

  const dbSize = fs.statSync(DB_PATH).size;
  console.log(`📦 Database file size: ${(dbSize / 1024 / 1024).toFixed(2)} MB`);

  // Create zip
  const zipPath = await createZip(DB_PATH, version);

  if (buildOnly) {
    console.log(`\n✅ Build complete! Zip file created: ${zipPath}`);
    console.log(`   To upload, set AWS credentials and run without --build-only flag`);
    return;
  }

  // Upload to S3
  try {
    await uploadToS3(zipPath, version);
    
    // Clean up zip file after successful upload
    fs.unlinkSync(zipPath);
    console.log("🧹 Cleanup complete");

    console.log(`\n✅ Successfully built and uploaded database version ${version}`);
    console.log(`   S3 Location: s3://${BUCKET}/${PREFIX}xoarmor-premade-parts-db-v${version}.zip`);
  } catch (error: any) {
    // Keep zip file if upload fails
    console.error(`\n❌ Upload failed: ${error.message}`);
    console.error(`   Zip file preserved at: ${zipPath}`);
    console.error(`\n   To build without uploading, use: npm run build:upload -- --build-only`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});

