import { PrismaClient } from "../prisma/client";
import * as fs from "fs";
import * as path from "path";
import Papa from "papaparse";

// Ensure database URL is set correctly
const dbPath = process.env.PREMADE_DATABASE_URL 
  ? process.env.PREMADE_DATABASE_URL.replace("file:", "")
  : path.join(__dirname, "..", "premade-database.db");

// Set environment variable if not already set
if (!process.env.PREMADE_DATABASE_URL) {
  process.env.PREMADE_DATABASE_URL = `file:${dbPath}`;
}

const prisma = new PrismaClient();

interface Part {
  STATE: string;
  CATEGORY: string;
  TYPE: string;
  "PART NAME": string;
  "Tags/Metadata": string;
  DESCRIPTION: string;
  PICTURE: string;
  "PICTURE LINK": string;
  "Number of Parts": string;
  Sizing: string;
}

const getFilePath = (...paths: string[]): string => {
  const parsedPaths = paths.map((i) => i.trim());
  return path.join(__dirname, "assets", "data", ...parsedPaths);
};

function csvToJson(filePath: string): Part[] {
  const fileContent = fs.readFileSync(filePath, "utf8");

  const parsedData = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  return parsedData.data as Part[];
}

function readImage(...paths: string[]): Buffer {
  const fileName = paths.at(-1);
  let imageBuffer: Buffer | null = null;

  const extensions = ["png", "jfif"];
  for (const ext of extensions) {
    const path = getFilePath(
      ...paths,
      (fileName ?? "default") + `.${ext ?? "txt"}`,
    );
    try {
      imageBuffer = fs.readFileSync(path);
      break;
    } catch (e) {
      /* empty */
    }
  }

  if (imageBuffer === null) {
    const dummyFilePath = path.join(__dirname, "assets", "no-image-found.png");
    imageBuffer = fs.readFileSync(dummyFilePath);
  }

  return imageBuffer;
}

function partDirectoryExists(...paths: string[]): boolean {
  const parsedPaths = paths.map((i) => i.trim());
  const directoryPath = getFilePath(...parsedPaths);
  try {
    return fs.statSync(directoryPath).isDirectory();
  } catch (err) {
    return false;
  }
}

function isActualPart(folderPath: string): boolean {
  try {
    const contents = fs.readdirSync(folderPath);
    const hasImages = contents.some(item => {
      const lowerItem = item.toLowerCase();
      return lowerItem.endsWith('.png') || 
             lowerItem.endsWith('.jpg') || 
             lowerItem.endsWith('.jpeg') || 
             lowerItem.endsWith('.jfif');
    });
    return hasImages;
  } catch (err) {
    return false;
  }
}

function getActualPartFolders(parentPath: string): string[] {
  try {
    const allFolders = fs.readdirSync(parentPath).filter((f) =>
      fs.statSync(path.join(parentPath, f)).isDirectory()
    );
    
    return allFolders.filter(folderName => {
      const folderPath = path.join(parentPath, folderName);
      const isFileOrgFolder = [
        'stl-files', '3mf', 'configurations', 'configs', 'config', 
        'files', 'models', 'designs', 'assets', 'images'
      ].includes(folderName.toLowerCase());
      
      return !isFileOrgFolder && isActualPart(folderPath);
    });
  } catch (err) {
    return [];
  }
}

const parseDimensions = (fileName: string): any => {
  const height = "";
  const width = "";
  const size = "";

  return {
    height: height.replace("in", '"'),
    width: width.replace("in", '"'),
    size: size.replace("in", '"'),
  };
};

const parseMeta = (fileName: string): any => {
  const value: Record<string, string | number> = {};
  const regex = /_(\w+)\(([^)]+)\)/g;

  let match;
  while ((match = regex.exec(fileName)) !== null) {
    value[match[1]] = match[2];
  }

  const findMatch = (patterns: string[], fileName: string): string | null => {
    for (const pattern of patterns) {
      const match = fileName.match(new RegExp(pattern, "i"));
      if (match != null) return match[0];
    }
    return null;
  };

  const sizes = ["extra large", "extra small", "large", "medium", "small"];
  const orientations = ["left", "right"];

  const sizeMatch = findMatch(sizes, fileName);
  const orientationMatch = findMatch(orientations, fileName);

  const capitalize = (str: string): string => {
    return str.toLowerCase().replace(/^\w/, (char) => char.toUpperCase());
  };

  if (sizeMatch != null) {
    value.Size = sizeMatch;
  }
  if (orientationMatch != null) {
    value["Hand Orientation"] = capitalize(orientationMatch);
  }

  // Normalize Thickness into meta just like Size:
  // If token T(x mm) was parsed, copy to a readable key; otherwise derive from filename.
  if ("T" in value && typeof value.T === "string") {
    value.Thickness = String(value.T);
    delete (value as any).T; // prevent duplicate thickness keys in meta
  } else {
    const thickness = parseThickness(fileName);
    if (thickness) value.Thickness = thickness;
  }

  return JSON.stringify(value);
};

const parseThickness = (fileName: string): string | undefined => {
  // 1) Prefer explicit T(x mm) token when present
  const tMatch = fileName.match(/T\(\s*(\d+(?:\.\d+)?)\s*mm\)/i);
  if (tMatch) return `${tMatch[1]}mm`;

  // 2) Otherwise, find all occurrences of number + mm (with optional spaces)
  const all = [...fileName.matchAll(/(\d+(?:\.\d+)?)\s*mm/gi)].map(m => m[1]);
  if (all.length === 0) return undefined;

  // 3) Choose the first reasonable thickness (<= 10mm) to avoid widths/lengths like 10 mm, 20 mm, 240 mm
  for (const val of all) {
    const num = parseFloat(val);
    if (!Number.isNaN(num) && num <= 10) {
      return `${num}mm`;
    }
  }

  // 3b) Try numeric inside parentheses without unit, e.g., (2.5)
  const parenNoUnit = fileName.match(/\(\s*(\d+(?:\.\d+)?)\s*\)/);
  if (parenNoUnit) {
    const num = parseFloat(parenNoUnit[1]);
    if (!Number.isNaN(num) && num <= 10) return `${num}mm`;
  }

  // 3c) As a last resort, pick a standalone small number (<=10) if present
  const standaloneNums = [...fileName.matchAll(/\b(\d+(?:\.\d+)?)\b/g)].map(m => parseFloat(m[1]))
    .filter(n => !Number.isNaN(n) && n <= 10);
  if (standaloneNums.length > 0) {
    return `${standaloneNums[standaloneNums.length - 1]}mm`;
  }

  // 4) Fallback: if nothing <= 10mm, return the last occurrence (most likely closest to end)
  const last = all[all.length - 1];
  return `${last}mm`;
};

async function main(): Promise<void> {
  const partsFilePath = path.join(__dirname, "assets", "main.csv");
  const parts = csvToJson(partsFilePath);

  let category = await prisma.category.upsert({
    where: { label: "Medical" },
    update: {},
      create: {
        label: "Medical",
        media: {
          create: {
            image: new Uint8Array(Buffer.from(readImage("Medical")).buffer),
            type: "image/jpeg",
          },
        },
      },
  });

  const medicalDir = getFilePath("Medical");
  const subcategoryFolders = fs.readdirSync(medicalDir).filter((f) =>
    fs.statSync(path.join(medicalDir, f)).isDirectory()
  );

  for (const subcategoryLabel of subcategoryFolders) {
    // Skip Dual-Material Flat Print as requested
    if (subcategoryLabel === "Dual-Material Flat Print") {
      console.log("Skipping subcategory [Dual-Material Flat Print]");
      continue;
    }
    const subcategoryPath = path.join(medicalDir, subcategoryLabel);
    const subcategoryContents = fs.readdirSync(subcategoryPath).filter((f) =>
      fs.statSync(path.join(subcategoryPath, f)).isDirectory()
    );

    const hasNestedSubcategories = subcategoryContents.some(item => {
      const itemPath = path.join(subcategoryPath, item);
      return fs.statSync(itemPath).isDirectory() && 
             getActualPartFolders(itemPath).length > 0;
    });

    if (hasNestedSubcategories) {
              if (subcategoryLabel === "Flat Prints") {
          let flatPrintsImage: Buffer;
          const flatPrintsCoverPath = path.join(subcategoryPath, "cover.png");
          if (fs.existsSync(flatPrintsCoverPath)) {
            flatPrintsImage = fs.readFileSync(flatPrintsCoverPath);
          } else {
            flatPrintsImage = readImage("Medical"); // fallback
          }

          const flatPrintsParent = await prisma.subCategory.upsert({
            where: {
              category_id: category.id,
              label: "Flat Prints",
            },
            update: {},
            create: {
              label: "Flat Prints",
              category: {
                connect: {
                  id: category.id,
                },
              },
              media: {
                create: {
                  image: new Uint8Array(Buffer.from(flatPrintsImage).buffer),
                  type: "image/jpeg",
                },
              },
            },
          });

        for (const nestedSubcategoryLabel of subcategoryContents) {
          if (nestedSubcategoryLabel === "Dual-Material Flat Print") {
            console.log("Skipping nested subcategory [Dual-Material Flat Print]");
            continue;
          }
          const nestedSubcategoryPath = path.join(subcategoryPath, nestedSubcategoryLabel);
          const partFolders = getActualPartFolders(nestedSubcategoryPath);

          let subcatImage: Buffer | null = null;
          const coverPath = path.join(nestedSubcategoryPath, "cover.png");
          if (fs.existsSync(coverPath)) {
            subcatImage = fs.readFileSync(coverPath);
          } else if (partFolders.length > 0) {
            const firstPart = partFolders[0];
            const img = readImage("Medical", subcategoryLabel, nestedSubcategoryLabel, firstPart);
            if (img) subcatImage = img;
          }
          if (!subcatImage) {
            subcatImage = readImage("Medical"); // fallback
          }

          const childSubCategory = await prisma.subCategory.upsert({
            where: {
              category_id: category.id,
              label: nestedSubcategoryLabel,
            },
            update: {
              parent_id: flatPrintsParent.id,
            },
            create: {
              label: nestedSubcategoryLabel,
              category: {
                connect: {
                  id: category.id,
                },
              },
              parent: {
                connect: {
                  id: flatPrintsParent.id,
                },
              },
              media: {
                create: {
                  image: new Uint8Array(Buffer.from(subcatImage).buffer),
                  type: "image/jpeg",
                },
              },
            },
          });

          for (const partLabel of partFolders) {
            const partPath = path.join(nestedSubcategoryPath, partLabel);
            const partMeta = parts.find((p) => p["PART NAME"] === partLabel && p.CATEGORY === "medical" && p.TYPE === nestedSubcategoryLabel);
            if (!partMeta) {
              console.log(`Skipping part [${partLabel}] - not found in CSV for type [${nestedSubcategoryLabel}]`);
              continue;
            }

            if (!partDirectoryExists("Medical", subcategoryLabel, nestedSubcategoryLabel, partLabel)) {
              console.log(`Skipping... part [${subcategoryLabel}/${nestedSubcategoryLabel}/${partLabel}] directory not found!`);
              continue;
            }

            const partSizes: Array<{
              price: number;
              size: string;
              width: string;
              height: string;
              thickness?: string;
              RS1?: string;
              RS2?: string;
              design_file: Uint8Array;
              is_bookmarked: boolean;
              meta: string;
            }> = [];

            const processDesignFiles = (folderType: string): void => {
              const folderPath = getFilePath("Medical", subcategoryLabel, nestedSubcategoryLabel, partLabel, folderType);
              if (fs.existsSync(folderPath)) {
                fs.readdirSync(folderPath).forEach((fileName) => {
                  const { height, width, size } = parseDimensions(fileName);
                  const meta = parseMeta(fileName);
                  const metaObj = JSON.parse(meta);

                  partSizes.push({
                    price: 19.99,
                    size,
                    width,
                    height,
                    thickness: parseThickness(fileName),
                    RS1: "RS1" in metaObj ? metaObj.RS1 : "",
                    RS2: "RS2" in metaObj ? metaObj.RS2 : "",
                    design_file: new Uint8Array(Buffer.from(fs.readFileSync(
                      getFilePath("Medical", subcategoryLabel, nestedSubcategoryLabel, partLabel, folderType, fileName)
                    )).buffer),
                    is_bookmarked: false,
                    meta,
                  });
                });
              }
            };

            processDesignFiles("stl-files");
            processDesignFiles("3mf");

            const dbPart = await prisma.part.create({
              data: {
                label: partLabel,
                description: partMeta.DESCRIPTION,
                tags: partMeta["Tags/Metadata"],
                count: Number(partMeta["Number of Parts"]),
                media: {
                  create: {
                    image: new Uint8Array(Buffer.from(readImage("Medical", subcategoryLabel, nestedSubcategoryLabel, partLabel)).buffer),
                    type: "image/jpeg",
                  },
                },
                subCategory: {
                  connect: {
                    id: childSubCategory.id,
                  },
                },
              },
            });

            for (const partSize of partSizes) {
              await prisma.partSize.create({
                // @ts-expect-error - Buffer to Uint8Array conversion is safe at runtime
                data: {
                  ...partSize,
                  part: {
                    connect: {
                      id: dbPart.id,
                    },
                  },
                },
              });
              console.log("Added part for", dbPart.id);
            }
          }
        }
      } else {
        for (const nestedSubcategoryLabel of subcategoryContents) {
          const nestedSubcategoryPath = path.join(subcategoryPath, nestedSubcategoryLabel);
          const partFolders = getActualPartFolders(nestedSubcategoryPath);

          let subcatImage: Buffer | null = null;
          const coverPath = path.join(nestedSubcategoryPath, "cover.png");
          if (fs.existsSync(coverPath)) {
            subcatImage = fs.readFileSync(coverPath);
          } else if (partFolders.length > 0) {
            const firstPart = partFolders[0];
            const img = readImage("Medical", subcategoryLabel, nestedSubcategoryLabel, firstPart);
            if (img) subcatImage = img;
          }
          if (!subcatImage) {
            subcatImage = readImage("Medical"); // fallback
          }

          const subCategory = await prisma.subCategory.upsert({
            where: {
              category_id: category.id,
              label: nestedSubcategoryLabel,
            },
            update: {},
            create: {
              label: nestedSubcategoryLabel,
              category: {
                connect: {
                  id: category.id,
                },
              },
              media: {
                create: {
                  image: new Uint8Array(Buffer.from(subcatImage).buffer),
                  type: "image/jpeg",
                },
              },
            },
          });

          for (const partLabel of partFolders) {
            const partPath = path.join(nestedSubcategoryPath, partLabel);
            const partMeta = parts.find((p) => p["PART NAME"] === partLabel && p.CATEGORY === "medical" && p.TYPE === nestedSubcategoryLabel);
            if (!partMeta) {
              console.log(`Skipping part [${partLabel}] - not found in CSV for type [${nestedSubcategoryLabel}]`);
              continue;
            }

            if (!partDirectoryExists("Medical", subcategoryLabel, nestedSubcategoryLabel, partLabel)) {
              console.log(`Skipping... part [${subcategoryLabel}/${nestedSubcategoryLabel}/${partLabel}] directory not found!`);
              continue;
            }

            const partSizes: Array<{
              price: number;
              size: string;
              width: string;
              height: string;
              RS1?: string;
              RS2?: string;
              design_file: Uint8Array;
              is_bookmarked: boolean;
              meta: string;
            }> = [];

            const processDesignFiles = (folderType: string): void => {
              const folderPath = getFilePath("Medical", subcategoryLabel, nestedSubcategoryLabel, partLabel, folderType);
              if (fs.existsSync(folderPath)) {
                fs.readdirSync(folderPath).forEach((fileName) => {
                  const { height, width, size } = parseDimensions(fileName);
                  const meta = parseMeta(fileName);
                  const metaObj = JSON.parse(meta);

                  partSizes.push({
                    price: 19.99,
                    size,
                    width,
                    height,
                    RS1: "RS1" in metaObj ? metaObj.RS1 : "",
                    RS2: "RS2" in metaObj ? metaObj.RS2 : "",
                    design_file: new Uint8Array(Buffer.from(fs.readFileSync(
                      getFilePath("Medical", subcategoryLabel, nestedSubcategoryLabel, partLabel, folderType, fileName)
                    )).buffer),
                    is_bookmarked: false,
                    meta,
                  });
                });
              }
            };

            processDesignFiles("stl-files");
            processDesignFiles("3mf");

            const dbPart = await prisma.part.create({
              data: {
                label: partLabel,
                description: partMeta.DESCRIPTION,
                tags: partMeta["Tags/Metadata"],
                count: Number(partMeta["Number of Parts"]),
                media: {
                  create: {
                    image: new Uint8Array(Buffer.from(readImage("Medical", subcategoryLabel, nestedSubcategoryLabel, partLabel)).buffer),
                    type: "image/jpeg",
                  },
                },
                subCategory: {
                  connect: {
                    id: subCategory.id,
                  },
                },
              },
            });

            for (const partSize of partSizes) {
              await prisma.partSize.create({
                // @ts-expect-error - Buffer to Uint8Array conversion is safe at runtime
                data: {
                  ...partSize,
                  part: {
                    connect: {
                      id: dbPart.id,
                    },
                  },
                },
              });
              console.log("Added part for", dbPart.id);
            }
          }
        }
      }
    } else {
      const partFolders = getActualPartFolders(subcategoryPath);

      let subcatImage: Buffer | null = null;
      const coverPath = path.join(subcategoryPath, "cover.png");
      if (fs.existsSync(coverPath)) {
        subcatImage = fs.readFileSync(coverPath);
      } else if (partFolders.length > 0) {
        const firstPart = partFolders[0];
        const img = readImage("Medical", subcategoryLabel, firstPart);
        if (img) subcatImage = img;
      }
      if (!subcatImage) {
        subcatImage = readImage("Medical"); // fallback
      }

      const subCategory = await prisma.subCategory.upsert({
        where: {
          category_id: category.id,
          label: subcategoryLabel,
        },
        update: {},
        create: {
          label: subcategoryLabel,
          category: {
            connect: {
              id: category.id,
            },
          },
          media: {
            create: {
              image: new Uint8Array(subcatImage),
              type: "image/jpeg",
            },
          },
        },
      });

      for (const partLabel of partFolders) {
        const partPath = path.join(subcategoryPath, partLabel);
        const partMeta = parts.find((p) => p["PART NAME"] === partLabel && p.CATEGORY === "medical" && p.TYPE === subcategoryLabel);
        if (!partMeta) {
          console.log(`Skipping part [${partLabel}] - not found in CSV for type [${subcategoryLabel}]`);
          continue;
        }

        if (!partDirectoryExists("Medical", subcategoryLabel, partLabel)) {
          console.log(`Skipping... part [${subcategoryLabel}/${partLabel}] directory not found!`);
          continue;
        }

        const partSizes: Array<{
          price: number;
          size: string;
          width: string;
          height: string;
          thickness?: string;
          RS1?: string;
          RS2?: string;
          design_file: Uint8Array;
          is_bookmarked: boolean;
          meta: string;
        }> = [];

        const processDesignFiles = (folderType: string): void => {
          const folderPath = getFilePath("Medical", subcategoryLabel, partLabel, folderType);
          if (fs.existsSync(folderPath)) {
            fs.readdirSync(folderPath).forEach((fileName) => {
              const { height, width, size } = parseDimensions(fileName);
              const meta = parseMeta(fileName);
              const metaObj = JSON.parse(meta);

              partSizes.push({
                price: 19.99,
                size,
                width,
                height,
                thickness: parseThickness(fileName),
                RS1: "RS1" in metaObj ? metaObj.RS1 : "",
                RS2: "RS2" in metaObj ? metaObj.RS2 : "",
                design_file: new Uint8Array(Buffer.from(fs.readFileSync(
                  getFilePath("Medical", subcategoryLabel, partLabel, folderType, fileName)
                )).buffer),
                is_bookmarked: false,
                meta,
              });
            });
          }
        };

        processDesignFiles("stl-files");
        processDesignFiles("3mf");

        const dbPart = await prisma.part.create({
          data: {
            label: partLabel,
            description: partMeta.DESCRIPTION,
            tags: partMeta["Tags/Metadata"],
            count: Number(partMeta["Number of Parts"]),
                media: {
                  create: {
                    image: new Uint8Array(Buffer.from(readImage("Medical", subcategoryLabel, partLabel)).buffer),
                    type: "image/jpeg",
                  },
                },
            subCategory: {
              connect: {
                id: subCategory.id,
              },
            },
          },
        });

        for (const partSize of partSizes) {
          await prisma.partSize.create({
            // @ts-expect-error - Buffer to Uint8Array conversion is safe at runtime
            data: {
              ...partSize,
              part: {
                connect: {
                  id: dbPart.id,
                },
              },
            },
          });
          console.log("Added part for", dbPart.id);
        }
      }
    }
  }

  console.log("Done with adding data.");
}

main()
  .then(() => {
    void prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
