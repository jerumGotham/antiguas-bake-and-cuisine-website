# Codebase Structure

**Analysis Date:** 2026-08-11

## Directory Layout

```text
[project-root]/
├── src/
│   └── app/                    # Next.js App Router routes, root layout, and global CSS
│       ├── favicon.ico          # Browser favicon for the app route tree
│       ├── globals.css          # Tailwind import, theme tokens, and document-wide styles
│       ├── layout.tsx           # Root HTML/body shell and metadata
│       └── page.tsx             # The `/` route component
├── public/                      # Publicly served static SVG assets
├── .planning/
│   └── codebase/                # Generated GSD codebase reference documents
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs           # Tailwind PostCSS plugin registration
├── tsconfig.json                # Strict TypeScript and `@/*` source alias configuration
├── eslint.config.mjs            # Next.js Core Web Vitals and TypeScript lint configuration
├── package.json                 # NPM scripts and package manifest
├── package-lock.json            # NPM dependency lockfile
├── next-env.d.ts                # Next.js-generated TypeScript declarations
├── README.md                    # Default create-next-app usage notes
├── AGENTS.md                    # Repository agent instruction file
└── CLAUDE.md                    # References `AGENTS.md` for agent instructions
```

Ignored/generated directories present locally are `node_modules/`, `.next/`, and `tsconfig.tsbuildinfo`; do not place authored application code in them. Their generated/ignored status is declared in `.gitignore`.

## Directory Purposes

**`src/app/`:**
- Purpose: Own the route tree and application-wide App Router presentation shell.
- Contains: App Router special files (`page.tsx`, `layout.tsx`), global stylesheet (`globals.css`), and route-level static metadata (`favicon.ico`).
- Key files: `src/app/page.tsx`, `src/app/layout.tsx`, and `src/app/globals.css`.
- Add route segments here using Next App Router special-file names; this project has no `pages/` directory.

**`public/`:**
- Purpose: Hold static files served from the web root without importing them as source modules.
- Contains: Starter SVG assets including `public/next.svg` and `public/vercel.svg`, both referenced by `src/app/page.tsx`.
- Key files: `public/next.svg`, `public/vercel.svg`, `public/globe.svg`, `public/file.svg`, and `public/window.svg`.
- Reference assets with root-relative URLs such as `/next.svg`, as in `src/app/page.tsx:9`.

**`.planning/codebase/`:**
- Purpose: Store generated architecture, stack, integration, quality, and concern maps for GSD workflows.
- Contains: Markdown reference documents such as `ARCHITECTURE.md` and `STRUCTURE.md`.
- Key files: `.planning/codebase/ARCHITECTURE.md` and `.planning/codebase/STRUCTURE.md`.
- Keep planning artifacts separate from application code in `src/`.

## Key File Locations

**Entry Points:**
- `src/app/page.tsx`: Default-exported `Home` component for the `/` route.
- `src/app/layout.tsx`: Default-exported `RootLayout` applied around all routes within `src/app/`.
- `next.config.ts`: Typed framework configuration consumed by Next.js commands in `package.json`.

**Configuration:**
- `package.json`: Defines `dev`, `build`, `start`, and `lint` commands and application dependencies.
- `tsconfig.json`: Enables strict TypeScript, Next's compiler plugin, and the `@/*` → `src/*` alias.
- `postcss.config.mjs`: Registers `@tailwindcss/postcss` for processing `src/app/globals.css`.
- `eslint.config.mjs`: Composes Next Core Web Vitals and TypeScript ESLint rules and ignores generated output.
- `next-env.d.ts`: Framework-generated TypeScript declarations; do not hand-edit.

**Core Logic:**
- `src/app/page.tsx`: Contains all current application UI logic.
- `src/app/layout.tsx`: Contains document-level composition, metadata, and Google-font configuration.
- `src/app/globals.css`: Contains the current global design-token and base-style layer.

**Testing:**
- Not present: no test configuration, test directory, or `*.test.*` / `*.spec.*` files exist in the repository.

## Naming Conventions

**Files:**
- Use Next.js App Router reserved lowercase names for route files: `page.tsx` for route content and `layout.tsx` for route wrapping, as in `src/app/`.
- Use kebab-free, lowercase filenames for global route resources where the framework requires them: `globals.css` and `favicon.ico` in `src/app/`.
- Use `.tsx` for React components (`src/app/page.tsx`, `src/app/layout.tsx`), `.ts` for typed non-JSX configuration (`next.config.ts`), and `.mjs` for ESM tooling configuration (`postcss.config.mjs`, `eslint.config.mjs`).
- Name public assets descriptively with lowercase filenames and their native extension, such as `public/next.svg`.

**Directories:**
- Use lowercase App Router route-segment directories under `src/app/`; a segment directory should contain its own `page.tsx` and optional route-special siblings.
- Place project-owned code beneath `src/`; resolve shared source imports using the `@/*` alias from `tsconfig.json` once additional directories exist.
- Keep deployable static resources in `public/`, not under `src/app/`, when they must be addressed by a stable root URL.

## Where to Add New Code

**New Feature:**
- Primary route code: Create a route segment beneath `src/app/`, for example `src/app/menu/page.tsx` for `/menu`.
- Shared shell changes: Update `src/app/layout.tsx` only for document-wide metadata, providers, fonts, or layout behavior.
- Feature styles: Prefer Tailwind utilities in the feature component; put only app-wide tokens and defaults in `src/app/globals.css`.
- Tests: No test location exists. Establish a test runner and colocated `*.test.tsx` files alongside the relevant `src/` module, or add a documented dedicated test directory, before adding test coverage.

**New Component/Module:**
- Route-local implementation: Create a descriptive component file in the owning segment, e.g. `src/app/menu/MenuGrid.tsx`, and import it from that segment's `page.tsx`.
- Reusable implementation: Create a dedicated source directory such as `src/components/` only once a component serves multiple route segments; import it through `@/components/...` according to `tsconfig.json`.
- Interactive implementation: Keep the route and root layout server-rendered by default; add `"use client"` only to the smallest interactive component file beneath `src/app/` or a future shared component directory.

**Utilities:**
- Shared helpers: A `src/lib/` directory is not currently present. Create `src/lib/` for framework-independent utilities that are reused by multiple modules, then import via `@/lib/...`.
- Do not put helper logic in `src/app/globals.css`, `public/`, `.next/`, or `node_modules/`; their current responsibilities are styling, served assets, or generated/vendor output.

## Special Directories

**`src/app/`:**
- Purpose: Next.js file-system routing and nested layout composition.
- Generated: No.
- Committed: Yes.

**`public/`:**
- Purpose: Static asset web root.
- Generated: No.
- Committed: Yes.

**`.planning/codebase/`:**
- Purpose: Generated planning reference documents.
- Generated: Yes, by GSD mapping workflows.
- Committed: Not specified by `.gitignore`; treat its version-control policy as project workflow configuration.

**`.next/`:**
- Purpose: Next.js build and development output.
- Generated: Yes.
- Committed: No; excluded by `.gitignore`.

**`node_modules/`:**
- Purpose: Installed NPM dependencies.
- Generated: Yes, from `package.json` and `package-lock.json`.
- Committed: No; excluded by `.gitignore`.

---

*Structure analysis: 2026-08-11*
