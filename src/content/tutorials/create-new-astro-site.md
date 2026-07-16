---
title: Create a New Astro Site from Scratch
description: Install the prerequisites, run Astro's setup wizard and understand the generated project.
published: 2026-07-15
difficulty: beginner
duration: 20–30 minutes
tags: [Astro, Setup, Node.js]
---
## What you will build

A new local Astro project that runs in development mode and produces a static `dist` directory for deployment.

## 1. Install the prerequisites

Install the current **LTS release of Node.js** from the official Node.js website. Node includes `npm`, which is used throughout this guide.

Confirm both commands are available:

```bash
node --version
npm --version
```

Install Git and confirm it is available:

```bash
git --version
```

A code editor such as Visual Studio Code is useful but not required.

## 2. Create the project

Open a terminal in the directory where you keep development projects:

```bash
npm create astro@latest
```

The Astro wizard asks for a directory name and starter template. A sensible first setup is:

- Directory: `my-astro-site`
- Template: Empty or minimal
- TypeScript: Strict
- Install dependencies: Yes
- Initialise a Git repository: Yes

Move into the generated directory:

```bash
cd my-astro-site
```

## 3. Start the development server

```bash
npm run dev
```

Open the local address printed in the terminal, normally `http://localhost:4321`.

Stop the server with `Ctrl+C`.

## 4. Understand the main folders

```text
my-astro-site/
├── public/             Static files copied unchanged
├── src/
│   ├── components/     Reusable interface components
│   ├── layouts/        Shared page shells
│   └── pages/          File-based routes
├── astro.config.mjs    Astro configuration
├── package.json        Commands and dependencies
└── tsconfig.json       TypeScript configuration
```

A file at `src/pages/about.astro` becomes `/about`. A file at `src/pages/index.astro` becomes the home page.

## 5. Add Markdown content collections

Create `src/content.config.ts`:

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts };
```

Create `src/content/posts/first-post.md`:

```md
---
title: First Post
description: My first Markdown entry.
published: 2026-07-15
draft: false
---

## First heading

This page is written in Markdown.
```

Content collections validate frontmatter and make Markdown entries queryable from Astro pages.

## 6. Build the production site

```bash
npm run build
```

Astro writes the static site to `dist/`. Test that result locally:

```bash
npm run preview
```

## 7. Useful daily commands

```bash
npm run dev       # local development server
npm run build     # production build
npm run preview   # preview the production build
npm run astro -- check
```

## Next step

Continue with the deployment tutorial to push the repository to GitHub and connect it to Cloudflare Pages.
