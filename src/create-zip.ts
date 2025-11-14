/**
 * Standalone script to create a zip file from the database
 * Usage: ts-node src/create-zip.ts <dbPath> <zipPath>
 */

import * as fs from "fs";
import * as path from "path";
import archiver from "archiver";

async function createZip(dbPath: string, zipPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Verify database file exists
    if (!fs.existsSync(dbPath)) {
      reject(new Error(`Database file not found at ${dbPath}`));
      return;
    }

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
      const dbSize = fs.statSync(dbPath).size;
      console.log(`Database size: ${(dbSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Zip file size: ${(zipSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Compression ratio: ${((1 - zipSize / dbSize) * 100).toFixed(2)}%`);
      resolve();
    });

    archive.on("error", (err: Error) => {
      reject(err);
    });

    archive.on("warning", (err: archiver.ArchiverError) => {
      if (err.code === "ENOENT") {
        console.warn("Warning:", err);
      } else {
        reject(err);
      }
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
  
  if (args.length < 2) {
    console.error("Usage: ts-node src/create-zip.ts <dbPath> <zipPath>");
    process.exit(1);
  }

  const dbPath = args[0];
  const zipPath = args[1];

  try {
    await createZip(dbPath, zipPath);
    console.log(`✅ Successfully created zip file: ${zipPath}`);
  } catch (error: any) {
    console.error(`❌ Failed to create zip file: ${error.message}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});

