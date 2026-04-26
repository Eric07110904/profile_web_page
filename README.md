# Personal Portfolio Website

This repo is based on the AstroZen template and has been adjusted so you can replace the sample content with your own profile more easily.

## Where to edit your content

Update [`src/config/index.ts`](./src/config/index.ts).

That file controls:

- Site title, description, logo, social links, and canonical URL
- Hero section
- Work experience
- Projects
- About section

The default values are now placeholders, so you can swap them out with your own data directly.

## Images

If you want to replace the placeholder graphics, put your files in [`public`](./public) and update the paths in [`src/config/index.ts`](./src/config/index.ts).

Useful defaults already included:

- `/profile-placeholder.svg`
- `/project-placeholder.svg`
- `/og-cover.svg`

## Local development

Use Node.js 22.12 or newer.

```bash
nvm use
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

## Deploy to Vercel

1. Push this repo to your own GitHub repository.
2. Go to [Vercel](https://vercel.com/new).
3. Import the GitHub repo.
4. Keep the default framework preset detected by Vercel for Astro.
5. Set the Node.js version to `22.x` in the Vercel project settings if Vercel does not pick it automatically.
6. Click deploy.
7. After the first deployment, copy your Vercel production domain and update `canonicalURL` in [`src/config/index.ts`](./src/config/index.ts).

No extra adapter is required for this project because it builds as a static Astro site.

## Build commands

- `pnpm dev` starts the local dev server
- `pnpm build` creates the production build in `dist`
- `pnpm preview` previews the production build locally
