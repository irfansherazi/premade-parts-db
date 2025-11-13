# 🗄️ Premade Database Builder

Automated build and deployment system for the XO-Armor premade parts database. This repository contains everything needed to build, version, and deploy the SQLite database to AWS S3.

## 🚀 Quick Start

### Automated Build (Recommended)

1. Go to **Actions** tab in GitHub
2. Select **"Build and Deploy Database"** workflow
3. Click **"Run workflow"**
4. Wait ~5 minutes
5. Done! ✅ Database is automatically uploaded to S3

### Local Build

```bash
# Install dependencies
npm install

# Run migrations
npx prisma migrate deploy

# Seed the database
npm run seed

# Build and upload (auto-increment version)
npm run build:upload

# Or specify a version
npm run build:upload -- 10
```

## 📁 Repository Structure

```
premade-database-builder/
├── .github/
│   └── workflows/
│       └── build-and-deploy.yml    # GitHub Actions automation
├── prisma/
│   ├── schema.prisma               # Database schema
│   └── migrations/                 # Database migrations
├── src/
│   ├── seed.ts                     # Database seeding script
│   └── build-and-upload.ts         # Build and S3 upload script
├── seeder/
│   └── assets/
│       ├── data/                   # Part data (images, STL files)
│       └── main.csv                # Part metadata CSV
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Setup

### Prerequisites

- Node.js 22.18.0 or higher
- AWS credentials with S3 write access
- Access to S3 bucket: `xoarmor-desktop-installation-files`

### GitHub Secrets/Variables

Configure these in your repository settings:

**Secrets:**
- `AWS_ACCESS_KEY_ID` - AWS access key
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `TEAMS_WEBHOOK_URL` (optional) - For notifications

**Variables:**
- `AWS_REGION` - AWS region (e.g., `us-east-1`)

### Local AWS Setup

```bash
# Configure AWS credentials
aws configure

# Or set environment variables
export AWS_ACCESS_KEY_ID=your_key
export AWS_SECRET_ACCESS_KEY=your_secret
export AWS_REGION=us-east-1
```

## 📦 Usage

### Building the Database

The build process:
1. Runs Prisma migrations
2. Seeds the database from `seeder/assets/main.csv` and `seeder/assets/data/`
3. Creates a zip file
4. Uploads to S3 with versioning

### Version Management

- Versions auto-increment from S3
- Format: `xoarmor-premade-parts-db-v{version}.zip`
- Stored at: `s3://xoarmor-desktop-installation-files/xoarmor-premade-parts-db/`

### Adding New Parts

1. Add part data to `seeder/assets/data/` following the folder structure
2. Update `seeder/assets/main.csv` with part metadata
3. Run the build workflow
4. Database is automatically versioned and deployed

## 📂 Folder Structure Requirements

```
seeder/assets/
├── data/
│   ├── <category>/              # e.g., "Medical"
│   │   ├── <category>.png       # Category image
│   │   └── <sub-category>/      # e.g., "Flat Prints"
│   │       ├── <sub-category>.png
│   │       └── <part>/          # e.g., "Ankle Stirrups"
│   │           ├── <part>.png
│   │           └── stl-files/    # STL/3MF files
│   └── ...
└── main.csv                      # Part metadata
```

## 🔄 Workflow

### GitHub Actions

The workflow can be triggered:
- **Manually** via GitHub UI
- **On push** to main branch (optional)
- **On schedule** (optional)

### Build Process

1. ✅ Checkout code
2. ✅ Install dependencies
3. ✅ Generate Prisma client
4. ✅ Run migrations
5. ✅ Seed database
6. ✅ Get next version from S3
7. ✅ Create zip file
8. ✅ Upload to S3
9. ✅ Send notifications

## 📝 CSV Format

The `seeder/assets/main.csv` file must include these columns:

| Column | Description |
|--------|-------------|
| `CATEGORY` | Main category (e.g., "Medical") |
| `TYPE` | Sub-category (e.g., "Flat Prints") |
| `PART NAME` | Part name (must match folder name) |
| `DESCRIPTION` | Part description |
| `Tags/Metadata` | Tags/keywords |
| `Number of Parts` | Quantity |
| `Sizing` | Sizing information |

## 🛠️ Development

### Running Locally

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Seed database
npm run seed

# Build and upload
npm run build:upload
```

### Scripts

- `npm run seed` - Seed the database
- `npm run build:upload` - Build and upload to S3 (auto-version)
- `npm run build:upload -- <version>` - Build with specific version
- `npx prisma studio` - Open Prisma Studio to view database

## 🔍 Troubleshooting

### Database not found
- Ensure migrations have run: `npx prisma migrate deploy`
- Check `PREMADE_DATABASE_URL` environment variable

### S3 upload fails
- Verify AWS credentials are configured
- Check S3 bucket permissions
- Ensure bucket exists: `xoarmor-desktop-installation-files`

### Seed script errors
- Verify `seeder/assets/main.csv` format
- Check folder structure matches CSV data
- Ensure images exist at specified paths

## 📊 Database Schema

The database uses Prisma with SQLite and includes:
- **Category** - Main categories
- **SubCategory** - Sub-categories (with hierarchy support)
- **Part** - Individual parts
- **PartSize** - Part variations (sizes, thicknesses, etc.)
- **Media** - Images for categories, sub-categories, and parts

## 🔐 Security

- AWS credentials are stored as GitHub secrets
- Never commit credentials to the repository
- Use IAM roles with minimal required permissions

## 📞 Support

For issues or questions:
1. Check the [troubleshooting](#-troubleshooting) section
2. Review GitHub Actions logs
3. Check S3 bucket for uploaded files

## 📄 License

ISC

