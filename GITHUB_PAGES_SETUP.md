# GitHub Pages Setup Instructions

This project is configured for automatic deployment to GitHub Pages. Follow these steps to enable GitHub Pages for your repository:

## 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/MHReaz/reaz-flutter-folio`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

## 2. Repository Permissions

Make sure your repository has the following permissions enabled:
- **Actions**: Allow GitHub Actions to run
- **Pages**: Enable GitHub Pages

## 3. Automatic Deployment

Once enabled, the site will automatically deploy when you:
- Push changes to the `main` branch
- The GitHub Actions workflow will build and deploy the site
- Your site will be available at: `https://mhreaz.github.io/reaz-flutter-folio/`

## 4. Manual Deployment (Optional)

You can also build for GitHub Pages manually:

```bash
# Install dependencies
npm install

# Build for GitHub Pages
npm run build:pages

# Preview locally
npm run preview
```

## 5. Configuration Details

The project includes:
- **Vite configuration** with correct base path for GitHub Pages
- **GitHub Actions workflow** (`.github/workflows/deploy.yml`)
- **Jekyll bypass** (`.nojekyll` file)
- **SPA routing support** with 404.html redirect mechanism
- **React Router basename** configured for GitHub Pages subdirectory

## Troubleshooting

If deployment fails:
1. Check the **Actions** tab in your GitHub repository for error logs
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the `main` branch has the latest changes
4. Check that repository has proper permissions for GitHub Actions and Pages

### Common Issues:

**404 Error when accessing routes:**
- This has been fixed with SPA routing support
- The 404.html file automatically redirects to the main app
- React Router is configured with the correct basename

**Assets not loading:**
- Ensure the vite.config.ts has the correct base path
- Check that the build command uses production mode