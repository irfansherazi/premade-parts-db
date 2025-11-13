-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "media_id" TEXT NOT NULL,
    CONSTRAINT "Category_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "Media" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "media_id" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "parent_id" INTEGER,
    CONSTRAINT "SubCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubCategory_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "Media" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SubCategory_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "SubCategory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Part" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "media_id" TEXT NOT NULL,
    "sub_category_id" INTEGER NOT NULL,
    "is_bookmarked" BOOLEAN NOT NULL DEFAULT false,
    "count" INTEGER NOT NULL,
    "tags" TEXT,
    CONSTRAINT "Part_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "Media" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Part_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "SubCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PartSize" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "size" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "thickness" TEXT,
    "RS1" TEXT,
    "RS2" TEXT,
    "design_file" BLOB NOT NULL,
    "is_bookmarked" BOOLEAN NOT NULL DEFAULT false,
    "meta" TEXT NOT NULL,
    "part_id" INTEGER NOT NULL,
    CONSTRAINT "PartSize_part_id_fkey" FOREIGN KEY ("part_id") REFERENCES "Part" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" BLOB NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_label_key" ON "Category"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Category_media_id_key" ON "Category"("media_id");

-- CreateIndex
CREATE UNIQUE INDEX "SubCategory_label_key" ON "SubCategory"("label");

-- CreateIndex
CREATE UNIQUE INDEX "SubCategory_media_id_key" ON "SubCategory"("media_id");

-- CreateIndex
CREATE INDEX "SubCategory_category_id_idx" ON "SubCategory"("category_id");

-- CreateIndex
CREATE INDEX "SubCategory_parent_id_idx" ON "SubCategory"("parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "Part_media_id_key" ON "Part"("media_id");

-- CreateIndex
CREATE INDEX "Part_sub_category_id_idx" ON "Part"("sub_category_id");

-- CreateIndex
CREATE INDEX "Part_label_idx" ON "Part"("label");

-- CreateIndex
CREATE INDEX "PartSize_part_id_idx" ON "PartSize"("part_id");
