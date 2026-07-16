---
title: Deploy Astro with GitHub and Cloudflare Pages
description: Push an Astro site to GitHub, connect the repository to Cloudflare and enable automatic deployments.
published: 2026-07-16
difficulty: beginner
duration: 25–40 minutes
tags: [Astro, GitHub, Cloudflare Pages, Deployment]
---
## Deployment model

The finished workflow is:

```text
Edit locally → commit with Git → push to GitHub → Cloudflare builds → static site published
```

This guide assumes the Astro project uses static output, which is Astro's default. A Cloudflare runtime adapter is not needed for a conventional static site.

## 1. Confirm the site builds

From the project directory:

```bash
npm install
npm run build
```

The command must complete successfully and produce `dist/`.

## 2. Set the public site URL

Edit `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com'
});
```

Replace the address with the final custom domain or temporary Cloudflare Pages domain. This helps Astro generate canonical URLs and sitemap data correctly.

## 3. Create a GitHub repository

Create an empty repository in GitHub. Do not add a README when the local project already contains files.

In the project directory, confirm Git is initialised:

```bash
git status
```

When it is not initialised:

```bash
git init
git add .
git commit -m "Initial Astro site"
```

Set the primary branch and remote. Replace the sample account and repository names:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

For later changes:

```bash
git add .
git commit -m "Describe the change"
git push
```

## 4. Connect Cloudflare Pages

In the Cloudflare dashboard:

1. Open **Workers & Pages**.
2. Choose **Create application**.
3. Select **Pages** and connect to Git.
4. Authorise GitHub if prompted.
5. Select the repository and production branch, normally `main`.

Use these build settings:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` unless the Astro project is in a subfolder |

Save and deploy. Cloudflare installs dependencies, runs the build and publishes the contents of `dist`.

## 5. Automatic deployments

Each push to the production branch starts a production deployment. Pull requests and non-production branches can create preview deployments, depending on the project settings.

A typical publishing cycle is:

```bash
git checkout -b new-project-page
# edit files
npm run build
git add .
git commit -m "Add new project page"
git push -u origin new-project-page
```

Review the preview, merge the pull request into `main`, and Cloudflare publishes the production build.

## 6. Add a custom domain

Open the Pages project, choose **Custom domains**, and add the domain or subdomain.

When the domain already uses Cloudflare DNS, Cloudflare can normally create the required DNS record. For an external DNS provider, follow the target record Cloudflare displays.

After the domain works, update the `site` value in `astro.config.mjs`, commit and push the change.

## 7. Environment variables

Static Markdown sites often need none. When a build needs a token or configuration value, add it under the Pages project's settings rather than committing secrets.

Use a local `.env` file for development and ensure it remains ignored by Git:

```text
.env
.env.*
```

Only variables prefixed with `PUBLIC_` are exposed to browser code. Never place secrets in public variables.

## 8. Troubleshooting

### Build succeeds locally but fails on Cloudflare

Check the Node.js version, package-lock file and build log. Commit `package-lock.json` so Cloudflare installs the same dependency versions.

### The deployed site is blank or routes fail

Confirm the output directory is exactly `dist`. For a static Astro project, do not point Cloudflare at `public`.

### Images or links use the wrong domain

Set the correct `site` value in `astro.config.mjs` and redeploy.

### The Astro project is inside a monorepo folder

Set Cloudflare's root directory to that folder, for example `website/`. The build command and `dist` path are then resolved from that directory.

## 9. Optional GitHub Pages alternative

Astro also supports GitHub Pages through an official GitHub Action. Use that route when GitHub should perform and host the build. Do not configure both GitHub Pages and Cloudflare Pages for the same production domain unless there is a deliberate reason.
