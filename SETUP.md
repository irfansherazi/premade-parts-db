# 🚀 Setup Guide for New Repository

This guide will help you set up the premade database builder repository.

## Step 1: Create the GitHub Repository

1. Go to GitHub and create a new repository
2. Name it: `premade-database-builder` (or your preferred name)
3. Make it **private** (recommended) or public
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)

## Step 2: Initialize Git Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Premade database builder"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/premade-database-builder.git

# Push to GitHub
git push -u origin main
```

## Step 3: Set Up GitHub Secrets and Variables

Go to your repository → **Settings** → **Secrets and variables** → **Actions**

### Add Secrets:
- `AWS_ACCESS_KEY_ID` - Your AWS access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
- `TEAMS_WEBHOOK_URL` (optional) - For notifications

### Add Variables:
- `AWS_REGION` - Your AWS region (e.g., `us-east-1`)

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Create Initial Migration

```bash
# Generate Prisma client
npx prisma generate

# Create initial migration (if needed)
npx prisma migrate dev --name init
```

## Step 6: Test Locally (Optional)

```bash
# Run migrations
npm run prisma:migrate

# Seed the database
npm run seed

# Build and upload (requires AWS credentials)
npm run build:upload
```

## Step 7: Test GitHub Actions

1. Go to **Actions** tab in your repository
2. Select **"Build and Deploy Database"** workflow
3. Click **"Run workflow"**
4. Wait for it to complete (~5 minutes)
5. Verify the database was uploaded to S3

## File Structure

After setup, your repository should look like:

```
premade-database-builder/
├── .github/
│   └── workflows/
│       └── build-and-deploy.yml
├── .gitignore
├── seeder/
│   └── assets/
│       ├── data/
│       │   └── Medical/
│       └── main.csv
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── seed.ts
│   └── build-and-upload.ts
├── package.json
├── README.md
├── SETUP.md
└── tsconfig.json
```

## Troubleshooting

### Database not found
- Ensure you've run migrations: `npm run prisma:migrate`
- Check that `PREMADE_DATABASE_URL` is set correctly

### Assets folder missing
- Make sure the `seeder/assets/` folder exists
- Verify `seeder/assets/main.csv` exists
- Verify `seeder/assets/data/Medical/` exists

### AWS upload fails
- Verify AWS credentials are set in GitHub Secrets
- Check S3 bucket permissions
- Ensure bucket `xoarmor-desktop-installation-files` exists

### Prisma client not found
- Run `npx prisma generate`
- Check that `prisma/client` directory exists

## Next Steps

1. ✅ Repository created and files pushed
2. ✅ GitHub Secrets/Variables configured
3. ✅ Dependencies installed
4. ✅ Test workflow runs successfully
5. ✅ Database uploaded to S3

You're all set! 🎉

