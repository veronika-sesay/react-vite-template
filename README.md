# React Vite Template

Simple React + TypeScript + Vite starter for small web projects.

This template is intended for junior and less experienced coders:

- clear folder structure
- minimal architecture
- ready-to-use routing
- basic styling system with shared CSS variables

## What This Template Includes

- React 19 + TypeScript
- Vite 8
- React Router setup with Home, About and Not Found pages
- Separated layout pieces (Header and Footer components)
- ESLint + Prettier setup
- React Compiler preset in Vite config

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start local development

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - TypeScript project build + Vite build
- `npm run preview` - preview built app locally
- `npm run lint` - run ESLint
- `npm run format` - format files with Prettier

## Project Structure

```text
.
├─ public/
│  ├─ _redirects
│  ├─ favicon.svg
│  └─ icons.svg
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Footer/
│  │  │  ├─ Footer.css
│  │  │  └─ Footer.tsx
│  │  └─ Header/
│  │     ├─ Header.css
│  │     └─ Header.tsx
│  ├─ layouts/
│  │  ├─ MainLayout.css
│  │  └─ MainLayout.tsx
│  ├─ pages/
│  │  ├─ AboutPage/
│  │  │  ├─ AboutPage.css
│  │  │  └─ AboutPage.tsx
│  │  ├─ HomePage/
│  │  │  ├─ HomePage.css
│  │  │  └─ HomePage.tsx
│  │  └─ NotFoundPage/
│  │     └─ NotFoundPage.tsx
│  ├─ router/
│  │  └─ router.tsx
│  ├─ services/
│  ├─ types/
│  ├─ utils/
│  ├─ main.css
│  └─ main.tsx
├─ eslint.config.js
├─ index.html
├─ package.json
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## How The App Is Organized

### Routing

Routes are defined in `src/router/router.tsx` using `createBrowserRouter`.

Current pages:

- `/` -> HomePage
- `/about` -> AboutPage
- `*` -> NotFoundPage

### Layout

- `src/layouts/MainLayout.tsx` is intentionally simple
- Header and Footer are reusable components in `src/components/`

### Styling

- Shared tokens and base styles are in `src/main.css`
- Page-specific styles are in each page folder
- Component-specific styles are next to each component

## How To Use This Template For Your Own Project

1. Replace text and content in Home/About pages.
2. Rename the project in `package.json`.
3. Add your own pages under `src/pages/`.
4. Register new routes in `src/router/router.tsx`.
5. Put common helpers in `src/utils/`, API logic in `src/services/`, shared types in `src/types/`.

## Notes For Beginners

- Keep components small and focused on one task.
- Prefer simple CSS before introducing external UI frameworks.
- Reuse the CSS variables from `src/main.css` for consistent look.
- Add features in small steps: route -> page -> component -> styles.

## Useful Docs

- Vite: https://vite.dev
- React: https://react.dev
- React Router: https://reactrouter.com
- TypeScript: https://www.typescriptlang.org/docs/
Replace or remove it if your local lint command fails.
