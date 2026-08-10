<!-- refreshed: 2026-08-11 -->
# Architecture

**Analysis Date:** 2026-08-11

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                  Next.js App Router web UI                   │
├───────────────────────┬─────────────────────────────────────┤
│ Root layout           │ Home route                          │
│ `src/app/layout.tsx`  │ `src/app/page.tsx`                 │
└────────────┬──────────┴───────────────────┬─────────────────┘
             │                              │
             ▼                              ▼
┌─────────────────────────────────────────────────────────────┐
│          Shared visual foundation and framework services     │
│ `src/app/globals.css` · `next/font/google` · `next/image`   │
└────────────┬────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│ Static asset output: `public/`                               │
│ No application API, persistence, or external service layer   │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Root layout | Provides the document shell, root HTML/body attributes, global CSS, metadata, and font CSS variables for every App Router route. | `src/app/layout.tsx` |
| Home route | Renders the sole `/` route, including starter content, responsive Tailwind utilities, links, and optimized static images. | `src/app/page.tsx` |
| Global styles | Imports Tailwind CSS, defines color/font theme tokens, applies a dark-mode media override, and establishes body defaults. | `src/app/globals.css` |
| Static assets | Holds publicly served SVG logos and starter assets referenced by route components with root-relative URLs. | `public/` |

## Pattern Overview

**Overall:** Minimal Next.js App Router application with file-system routing and a shared root-layout shell.

**Key Characteristics:**
- The `src/app/` directory maps route-special files to framework behavior: `page.tsx` supplies route content and `layout.tsx` wraps descendants.
- Components are server-rendered by default: neither `src/app/layout.tsx` nor `src/app/page.tsx` declares `"use client"`, uses browser state, or installs a client-side state provider.
- Visual styling is colocated at the route/layout level through Tailwind utility classes, with cross-route tokens and browser defaults centralized in `src/app/globals.css`.
- The application has no domain, service, API-route, database, authentication, middleware, or server-action module under `src/`.

## Layers

**Route and document layer:**
- Purpose: Define URL-rendered React UI and the shared HTML document scaffold.
- Location: `src/app/`
- Contains: The `/` route in `src/app/page.tsx` and the root route wrapper in `src/app/layout.tsx`.
- Depends on: Next.js UI primitives (`next/image`, `next/font/google`), Next metadata typing, and `src/app/globals.css`.
- Used by: The Next.js 16 App Router runtime configured through `next.config.ts`.

**Presentation/theme layer:**
- Purpose: Supply global Tailwind CSS availability, CSS custom properties, color-scheme adaptation, and base body presentation.
- Location: `src/app/globals.css`
- Contains: Tailwind v4 import, `:root` tokens, inline Tailwind theme bindings, dark-scheme token values, and `body` declarations.
- Depends on: The PostCSS Tailwind plugin declared by `postcss.config.mjs`.
- Used by: `src/app/layout.tsx`, which imports it once at the application root.

**Static-resource layer:**
- Purpose: Serve immutable public images at root-relative URLs.
- Location: `public/`
- Contains: `next.svg`, `vercel.svg`, `globe.svg`, `file.svg`, and `window.svg`.
- Depends on: No application code.
- Used by: `src/app/page.tsx` uses `/next.svg` and `/vercel.svg` with `next/image`.

**Configuration/tooling layer:**
- Purpose: Configure compilation, module aliases, styling transformation, linting, and framework defaults.
- Location: `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, and `eslint.config.mjs`.
- Contains: An empty typed Next config, strict TypeScript compiler settings and `@/*` alias, Tailwind PostCSS registration, and Next Core Web Vitals/TypeScript ESLint presets.
- Depends on: Packages declared in `package.json`.
- Used by: Next.js, TypeScript, PostCSS, and ESLint command-line tooling.

## Data Flow

### Primary Request Path

1. A request for `/` is matched by the App Router to the default export in `src/app/page.tsx:3`.
2. Next.js renders `Home`, resolving its `next/image` references to static files such as `public/next.svg` and `public/vercel.svg` (`src/app/page.tsx:7-14`, `src/app/page.tsx:48-54`).
3. The framework wraps route output in `RootLayout`, which loads global CSS and applies document-level font variables and body classes (`src/app/layout.tsx:3`, `src/app/layout.tsx:20-28`).
4. The resulting HTML/CSS and optimized image responses are delivered by the Next.js runtime configured by `next.config.ts`.

### Styling and Theme Flow

1. `src/app/layout.tsx:3` imports `src/app/globals.css` at the root so global styles apply to all current and future App Router routes.
2. `src/app/globals.css:1` imports Tailwind and maps CSS custom properties into Tailwind theme names at `src/app/globals.css:8-13`.
3. `RootLayout` registers generated Geist font variables on `<html>` (`src/app/layout.tsx:5-13`, `src/app/layout.tsx:22-25`), while route markup consumes Tailwind utilities in `src/app/page.tsx`.
4. The browser switches the root color variables when its dark-scheme preference matches `src/app/globals.css:15-20`.

**State Management:**
- No application state store, React context provider, URL-state handling, browser storage, request cache configuration, or persistence is implemented in `src/`.
- Treat components added beneath `src/app/` as Server Components unless browser interaction requires an explicit `"use client"` boundary.

## Key Abstractions

**App Router special files:**
- Purpose: Let file placement declare routing and layout composition rather than registering routes imperatively.
- Examples: `src/app/page.tsx` and `src/app/layout.tsx`.
- Pattern: Default-exported React component; `layout.tsx` receives framework-provided `children` and returns the outer document markup.

**Framework-managed presentation primitives:**
- Purpose: Encapsulate image optimization and font loading.
- Examples: `Image` in `src/app/page.tsx:1`, `Geist` and `Geist_Mono` in `src/app/layout.tsx:2`.
- Pattern: Import from Next.js package namespaces and configure at module scope before consuming in JSX.

**Design tokens:**
- Purpose: Provide semantic foreground/background and font values reusable from CSS and Tailwind utility classes.
- Examples: `--background`, `--foreground`, `--font-sans`, and `--font-mono` in `src/app/globals.css:3-13`.
- Pattern: Define root CSS variables, then expose the values through Tailwind's `@theme inline` block.

## Entry Points

**Root route:**
- Location: `src/app/page.tsx`
- Triggers: The Next.js App Router resolves requests for `/`.
- Responsibilities: Return the home-page React tree and reference public images and external links.

**Root layout:**
- Location: `src/app/layout.tsx`
- Triggers: The App Router renders every route beneath `src/app/`, including `/`.
- Responsibilities: Export root metadata; configure Geist fonts; import global CSS; provide `<html>` and `<body>` wrappers.

**Framework configuration:**
- Location: `next.config.ts`
- Triggers: `npm run dev`, `npm run build`, and `npm run start` from `package.json:5-10`.
- Responsibilities: Export typed Next configuration; it contains no custom runtime behavior.

## Architectural Constraints

- **Threading:** Rendering runs under the Next.js/Node.js request runtime; this project defines no workers, queues, cron tasks, or custom concurrent processes in `src/`.
- **Global state:** The only shared mutable-looking values are CSS custom properties in `src/app/globals.css`; no module-level application singleton or shared JavaScript state exists.
- **Circular imports:** None are present in the two source modules: `src/app/layout.tsx` imports only framework modules and `src/app/globals.css`; `src/app/page.tsx` imports only `next/image`.
- **Route surface:** Only `/` exists because `src/app/` contains just `page.tsx` and `layout.tsx`; no nested route segments, route handlers, middleware, or proxy entrypoint are present.
- **Module resolution:** Use the `@/*` alias for source-root imports when cross-directory imports are introduced, as defined in `tsconfig.json:21-23`; existing local global CSS is correctly imported relatively in `src/app/layout.tsx:3`.

## Anti-Patterns

### Client state in the root layout

**What happens:** Adding `"use client"` or browser state directly to `src/app/layout.tsx` would make the document shell a client component.
**Why it's wrong:** The current root layout centrally owns metadata and global styling; turning it into a client boundary unnecessarily expands client JavaScript and constrains server-rendered descendants.
**Do this instead:** Keep `src/app/layout.tsx` server-rendered and place isolated interactive UI in a focused client component imported by a route such as `src/app/page.tsx`.

### Broad global styling for route-specific UI

**What happens:** Route-only presentation rules could be added to `src/app/globals.css`.
**Why it's wrong:** `src/app/globals.css` is loaded by `src/app/layout.tsx` for every route, so route-specific rules would couple future routes and make style ownership unclear.
**Do this instead:** Reserve `src/app/globals.css` for tokens, resets, and truly cross-cutting styles; keep a route's presentation in its component utilities or a colocated CSS module under `src/app/`.

## Error Handling

**Strategy:** No custom error boundary, not-found boundary, route handler, or application error-handling code is implemented.

**Patterns:**
- The project relies on the Next.js default error behavior because `src/app/` has no `error.tsx`, `global-error.tsx`, or `not-found.tsx` special file.
- Add an App Router error special file under the applicable `src/app/` segment when a route gains fallible data loading or user-facing recovery requirements.

## Cross-Cutting Concerns

**Logging:** No application logging exists in `src/app/page.tsx` or `src/app/layout.tsx`.

**Validation:** No request inputs, forms, schemas, API routes, or validation modules exist under `src/`.

**Authentication:** No authentication provider, middleware/proxy file, session handling, or access-control boundary is present in the repository root or `src/`.

---

*Architecture analysis: 2026-08-11*
