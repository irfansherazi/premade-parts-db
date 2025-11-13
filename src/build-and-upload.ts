/**
 * Helper script to build and upload the premade database to S3
 * This can be run locally or in CI/CD
 * 
 * Usage:
 *   npm run build:upload [version]
 * 
 * If version is not provided, it will auto-increment from S3
 */

import * as AWS from "aws-sdk";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const BUCKET = "xoarmor-desktop-installation-files";
const PREFIX = "xoarmor-premade-parts-db/";
const DB_FILE_NAME = "premade-database.db";
const DB_PATH = path.join(__dirname, "..", DB_FILE_NAME);

interface S3Object {
  Key?: string;
}

async function getLatestVersion(): Promise<number> {
  const s3 = new AWS.S3({
    region: process.env.AWS_REGION || "us-east-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
  });
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
        const match = fileName.match(/xoarmor-premade-parts-db-v(\d+)\.zip/);
        if (match) {
          const version = parseInt(match[1], 10);
          if (version > latestVersion) {
            latestVersion = version;
          }
        }
      }
    }

    return latestVersion;
  } catch (error) {
    console.log("No existing versions found, starting at version 1");
    return 0;
  }
}

async function uploadToS3(zipPath: string, version: number): Promise<void> {
  const s3 = new AWS.S3();
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

  console.log(`Successfully uploaded database version ${version} to S3`);
}

function createZip(dbPath: string, version: number): string {
  const zipPath = path.join(__dirname, "..", `xoarmor-premade-parts-db-v${version}.zip`);
  
  // Use PowerShell Compress-Archive on Windows, zip on Unix
  if (process.platform === "win32") {
    execSync(`powershell -Command "Compress-Archive -Path '${dbPath}' -DestinationPath '${zipPath}' -Force"`, {
      stdio: "inherit",
    });
  } else {
    execSync(`zip -j '${zipPath}' '${dbPath}'`, {
      stdio: "inherit",
    });
  }

  const zipSize = fs.statSync(zipPath).size;
  console.log(`Created zip file: ${zipPath} (${zipSize} bytes)`);
  return zipPath;
}

async function main(): Promise<void> {
  const providedVersion = process.argv[2];
  let version: number;

  if (providedVersion) {
    version = parseInt(providedVersion, 10);
    if (isNaN(version)) {
      console.error("Invalid version number provided");
      process.exit(1);
    }
    console.log(`Using provided version: ${version}`);
  } else {
    const latestVersion = await getLatestVersion();
    version = latestVersion + 1;
    console.log(`Auto-incremented version: ${version} (latest was ${latestVersion})`);
  }

  // Verify database exists
  if (!fs.existsSync(DB_PATH)) {
    console.error(`Database file not found at ${DB_PATH}`);
    console.error("Please run the seed script first: npm run seed");
    process.exit(1);
  }

  const dbSize = fs.statSync(DB_PATH).size;
  console.log(`Database file size: ${dbSize} bytes`);

  // Create zip
  const zipPath = createZip(DB_PATH, version);

  // Upload to S3
  await uploadToS3(zipPath, version);

  // Clean up zip file
  fs.unlinkSync(zipPath);
  console.log("Cleanup complete");

  console.log(`\n✅ Successfully built and uploaded database version ${version}`);
  console.log(`   S3 Location: s3://${BUCKET}/${PREFIX}xoarmor-premade-parts-db-v${version}.zip`);
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});

