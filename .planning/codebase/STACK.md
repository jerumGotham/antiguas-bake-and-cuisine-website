# Technology Stack

**Analysis Date:** 2026-08-11

## Languages

**Primary:**
- TypeScript 5.9.3 (installed; declared as `^5`) - Application routes and components in `src/app/layout.tsx` and `src/app/page.tsx`, with strict type checking configured in `tsconfig.json`.
- CSS - Global styling and Tailwind CSS import/theme tokens in `src/app/globals.css`.

**Secondary:**
- JavaScript (ES modules) - Tool configuration in `eslint.config.mjs` and `postcss.config.mjs`.
- JSX/TSX - React component markup in `src/app/layout.tsx` and `src/app/page.tsx`.

## Runtime

**Environment:**
- Node.js v24.14.1 is installed in the development environment; `package.json` does not declare an `engines` constraint or pin a Node version.

**Package Manager:**
- npm 11.11.0; project scripts are defined in `package.json`.
- Lockfile: present — `package-lock.json` uses lockfile version 3.

## Frameworks

**Core:**
- Next.js 16.3.0 - Full-stack React framework using the App Router under `src/app/`; configured by `next.config.ts`.
- React 19.2.8 and React DOM 19.2.8 - UI rendering dependency pair used by Next.js application components in `src/app/`.
- Tailwind CSS 4.3.3 - Utility-first styling imported from `src/app/globals.css`; processed through `postcss.config.mjs`.

**Testing:**
- Not detected — `package.json` contains no test script or test framework dependency, and no test configuration or test files are present.

**Build/Dev:**
- Next.js CLI 16.3.0 - `npm run dev` runs `next dev`, `npm run build` runs `next build`, and `npm run start` runs `next start` (`package.json`).
- Turbopack - Development output is generated beneath `.next/dev/` by the active Next.js development build; it is not independently configured in source files.
- PostCSS with `@tailwindcss/postcss` 4.3.3 - Compiles Tailwind CSS via `postcss.config.mjs`.
- TypeScript 5.9.3 - Type checking and Next.js TypeScript integration configured in `tsconfig.json`.
- ESLint 9.39.5 with `eslint-config-next` 16.3.0 - Static analysis run by `npm run lint` using `eslint.config.mjs`.

## Key Dependencies

**Critical:**
- `next` 16.3.0 - Supplies the App Router, `next/image`, metadata types, Google-font loader, build system, and server runtime used by `src/app/`.
- `react` 19.2.8 - Supplies the component model used by `src/app/layout.tsx` and `src/app/page.tsx`.
- `react-dom` 19.2.8 - Provides React browser DOM rendering required by Next.js.
- `tailwindcss` 4.3.3 - Supplies utility classes used throughout `src/app/page.tsx` and the `@import "tailwindcss"` directive in `src/app/globals.css`.

**Infrastructure:**
- `@tailwindcss/postcss` 4.3.3 - Registers the Tailwind PostCSS plugin in `postcss.config.mjs`.
- `typescript` 5.9.3, `@types/node` 20.19.43, `@types/react` 19.2.18, and `@types/react-dom` 19.2.4 - Compile-time TypeScript tooling for files under `src/`.
- `eslint` 9.39.5 and `eslint-config-next` 16.3.0 - Enforce Next.js Core Web Vitals and TypeScript lint presets in `eslint.config.mjs`.

## Configuration

**Environment:**
- No `.env*` files are present at repository root. `.gitignore` excludes `.env*`, so add non-committed environment configuration only when an integration requires it.
- No application environment variables are referenced: a repository-wide source/configuration scan found no `process.env` usage.
- TypeScript targets ES2017, enables strict mode and no-emission checking, uses bundler module resolution, and exposes the `@/*` alias for `src/*` in `tsconfig.json`.

**Build:**
- `next.config.ts` exports the default empty `NextConfig`; add framework-level build, image, redirect, or deployment settings there.
- `postcss.config.mjs` enables `@tailwindcss/postcss`.
- `src/app/globals.css` imports Tailwind and defines light/dark custom properties and theme mappings.
- `eslint.config.mjs` composes Next Core Web Vitals and TypeScript configs, ignoring generated `.next/**`, output directories, and `next-env.d.ts`.
- `package.json` is the source of npm lifecycle commands; `package-lock.json` must be retained for reproducible npm installs.

## Platform Requirements

**Development:**
- Install dependencies with `npm install` from `package-lock.json`, then use Node.js compatible with Next.js 16.3.0. The current development environment uses Node.js v24.14.1 and npm 11.11.0.
- Run `npm run dev` and browse the Next.js server at `http://localhost:3000` as documented in `README.md`.

**Production:**
- Build with `npm run build` and serve with `npm run start`; no repository deployment descriptor, container definition, CI workflow, or provider configuration is present.
- `README.md` recommends Vercel as a deployment option, but `vercel.json` and `.vercel/` are not present, so hosting is not configured in the repository.

---

*Stack analysis: 2026-08-11*
