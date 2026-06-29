# Vikash Mishra Portfolio

A premium personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Dark theme with glassmorphism styling
- Smooth scrolling navigation
- Responsive layout for mobile, tablet, and desktop
- Animated sections with Framer Motion
- Reusable component architecture

## Project Structure

- `src/components`: UI sections and reusable components
- `src/data/portfolio.ts`: portfolio content and typed data
- `src/App.tsx`: application layout
- `src/main.tsx`: entry point
- `src/index.css`: Tailwind configuration and custom styles

## Install

```bash
cd "c:\Users\kingo\Desktop\PROJECTS\PORTFOLIO"
npm install
```

## Run Locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel, create a new project and connect the GitHub repository.
3. Set the framework preset to `Vite`.
4. Deploy with the default build command `npm run build` and output directory `dist`.

## Deploy to Netlify

1. Push the repository to GitHub.
2. Create a new Netlify site and connect the repository.
3. Use build command `npm run build` and publish directory `dist`.
4. Enable deploy previews if needed.

## Deploy to GitHub Pages

1. Add `homepage` to `package.json` if you use a custom domain or GitHub Pages path.
2. Build the site with `npm run build`.
3. Deploy the `dist` folder using a GitHub Pages deployment action or a separate deploy script.

No additional environment variables are required for the static portfolio.
