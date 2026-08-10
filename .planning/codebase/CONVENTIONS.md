# Coding Conventions

**Analysis Date:** 2026-08-11

## Naming Patterns

**Files:**
- Use Next.js App Router reserved names in lowercase: `page.tsx`, `layout.tsx`, and `globals.css` in `src/app/`.
- Use lowercase kebab-case when adding non-reserved stylesheet or asset filenames, matching `src/app/globals.css` and `public/next.svg`.
- Use `.tsx` for React components/routes and `.ts` for typed configuration or non-JSX modules, as in `src/app/page.tsx` and `next.config.ts`.

**Functions:**
- Use PascalCase for exported React component functions: `Home` in `src/app/page.tsx` and `RootLayout` in `src/app/layout.tsx`.
- Export a route or layout component as the module default, per the App Router pattern in `src/app/page.tsx` and `src/app/layout.tsx`.
- Use camelCase for local configuration values: `nextConfig` in `next.config.ts`, `eslintConfig` in `eslint.config.mjs`, and `geistSans` in `src/app/layout.tsx`.

**Variables:**
- Use camelCase for local values and configuration objects. Prefer meaningful, domain-specific names over abbreviations when extending `src/app/`.
- Use `const` for module-level configuration and immutable component setup, as in `src/app/layout.tsx` and `postcss.config.mjs`.

**Types:**
- Use PascalCase for TypeScript types imported from frameworks, such as `Metadata` in `src/app/layout.tsx` and `NextConfig` in `next.config.ts`.
- Use `import type` for type-only imports, demonstrated by `src/app/layout.tsx` and `next.config.ts`.
- Maintain strict TypeScript: `tsconfig.json` sets `strict: true`, `isolatedModules: true`, and `noEmit: true`. Do not introduce untyped `any`; declare or infer precise types.

## Code Style

**Formatting:**
- No Prettier, Biome, or explicit formatter configuration is present in the repository root.
- Match the existing TypeScript/TSX style in `src/app/page.tsx`: two-space indentation, semicolons, double-quoted strings, trailing commas in multiline structures, and one JSX prop per line when an element spans multiple lines.
- Keep Tailwind utility strings directly in `className`, as in `src/app/page.tsx` and `src/app/layout.tsx`; group responsive and dark-mode variants alongside their base utilities.
- Put global CSS in `src/app/globals.css`. Use CSS custom properties and Tailwind theme mappings there rather than scattering global visual tokens through route files.

**Linting:**
- Run `npm run lint` from `package.json` before submitting changes. It executes ESLint and completed successfully for the current source tree.
- `eslint.config.mjs` composes `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`; follow their Next.js performance and TypeScript rules rather than adding per-file suppressions.
- ESLint intentionally ignores generated output (`.next/**`, `out/**`, `build/**`) and `next-env.d.ts` in `eslint.config.mjs`. Do not hand-edit generated `next-env.d.ts`.

## Import Organization

**Order:**
1. Type-only framework imports (`import type { Metadata } from "next"`) in `src/app/layout.tsx`.
2. Runtime framework or package imports (`next/font/google`, `next/image`) in `src/app/layout.tsx` and `src/app/page.tsx`.
3. Relative side-effect/style imports last (`import "./globals.css"`) in `src/app/layout.tsx`.

Keep imports at module scope and leave a blank line between imports and component/config declarations, matching `src/app/page.tsx`, `src/app/layout.tsx`, and `next.config.ts`.

**Path Aliases:**
- `@/*` resolves to `src/*` via `tsconfig.json`. Use `@/` for cross-directory imports placed under `src/`; retain `./` for adjacent files such as `src/app/globals.css`.

## Error Handling

**Patterns:**
- No application error boundaries, route handlers, data fetching, `throw`, `try`/`catch`, or error logging currently exists in `src/app/`.
- When adding App Router error behavior, implement it at the relevant route boundary (for example, an `error.tsx` adjacent to its `page.tsx` under `src/app/`) rather than swallowing failures inside presentation components. Preserve errors with contextual handling appropriate to the operation.
- Do not add silent fallback values merely to avoid errors; return an explicit, typed state or allow the route boundary to render an error UI.

## Logging

**Framework:** No logging framework or `console` usage is present in application source under `src/`.

**Patterns:**
- Do not introduce ad hoc client-side `console` calls in `src/app/page.tsx` or `src/app/layout.tsx`.
- If server-side logging is introduced, centralize it in a dedicated module under `src/` and log structured operational context without secrets. No such module exists yet.

## Comments

**When to Comment:**
- Use comments only to explain non-obvious configuration intent, following the concise ignore-list comments in `eslint.config.mjs`.
- Do not restate JSX or self-evident assignments. The route and layout modules in `src/app/` use no explanatory comments.

**JSDoc/TSDoc:**
- No JSDoc/TSDoc convention is established in `src/`. Add documentation only for exported utilities or complex public contracts when they are introduced; keep React route components self-explanatory through names and types.

## Function Design

**Size:**
- Keep route components focused on rendering one route/layout. `Home` in `src/app/page.tsx` and `RootLayout` in `src/app/layout.tsx` hold route-level markup and metadata/font setup respectively.
- Extract repeated or independently testable UI behavior from `src/app/page.tsx` into a component module under `src/` once it appears; no reusable component directory exists yet.

**Parameters:**
- Destructure React component props in the function parameter and use framework-provided route prop types where available, as `RootLayout({ children }: LayoutProps<"/">)` does in `src/app/layout.tsx`.

**Return Values:**
- Have React route and layout components return JSX directly. Avoid unnecessary intermediate variables for static markup, matching `src/app/page.tsx`.

## Module Design

**Exports:**
- Use default exports for Next.js special files (`src/app/page.tsx`, `src/app/layout.tsx`) and configuration modules (`next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`).
- Use named exports for route metadata, as `export const metadata` in `src/app/layout.tsx`.

**Barrel Files:**
- No barrel files are present. Do not add an index barrel until multiple reusable modules require a stable public surface.

---

*Convention analysis: 2026-08-11*
