<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

# Next.js Boilerplate — Frontend

> Master knowledge base for all AI tools (Claude Code, Cursor, Copilot, Antigravity)
> and developers. Start here. Every other AI config file in this repo defers to this document.

---

## Product Context

A production-ready Next.js 16 boilerplate with feature-based architecture, a full chart library showcase, auth page scaffolding, and a code-quality pipeline. It is a starting point for SaaS-style apps — authentication logic, API integration, and Redux slices are intentionally left empty for the builder to wire up.

---

## Tech Stack

| Layer             | Technology                                                           |
| ----------------- | -------------------------------------------------------------------- |
| Framework         | Next.js 16.2.4 (App Router)                                          |
| Language          | TypeScript 5 (strict mode)                                           |
| UI Runtime        | React 19.2.4 + React Compiler                                        |
| Styling           | Tailwind CSS 4 + `tw-animate-css`                                    |
| Component Library | shadcn/ui (radix-nova style) + Base UI (`@base-ui/react`) + radix-ui |
| Icons             | lucide-react 1.16                                                    |
| Charts            | Recharts 3.8.0                                                       |
| Tables            | TanStack Table 8                                                     |
| State Management  | Redux Toolkit 2 + redux-persist 6                                    |
| Env Validation    | Zod 4                                                                |
| Package Manager   | pnpm                                                                 |
| Code Quality      | ESLint 9 + Prettier 3 + Husky 9 + lint-staged 16                     |

---

## Quick Start

```bash
pnpm install
# .env already exists with dev defaults; copy to .env.local if needed
pnpm dev                    # http://localhost:3000 → redirects to /dashboard
```

Required `.env`:

```env
NEXT_PUBLIC_DOMAIN=http://localhost:3000
```

---

## Commands Reference

| Command            | Purpose                                                        |
| ------------------ | -------------------------------------------------------------- |
| `pnpm dev`         | Start dev server                                               |
| `pnpm build`       | Production build (runs lint + type-check first via `prebuild`) |
| `pnpm start`       | Start production server                                        |
| `pnpm lint`        | Run ESLint                                                     |
| `pnpm prettier`    | Format all files with Prettier                                 |
| `pnpm check-types` | TypeScript type-check (no emit)                                |

---

## Manual Command Rule

**NEVER run code generation, schema pulls, type generation, migrations, or any build step the developer should control. Stop and tell the user the exact command to run.**

Relevant commands for this project:

- Add a shadcn component: `pnpm dlx shadcn@latest add <component>`
- Type-check: `pnpm check-types`
- Full build (required before push, enforced by Husky pre-push): `pnpm build`

---

## Project Structure

### App Router — Entry Points

| File                                           | Purpose                                                                                |
| ---------------------------------------------- | -------------------------------------------------------------------------------------- |
| [src/app/layout.tsx](src/app/layout.tsx)       | Root layout: Geist fonts, body wrapper, per-route metadata via `x-current-path` header |
| [src/app/page.tsx](src/app/page.tsx)           | Root `/` — immediately redirects to `/dashboard`                                       |
| [src/app/not-found.tsx](src/app/not-found.tsx) | Global 404 page                                                                        |
| [src/app/robots.ts](src/app/robots.ts)         | `/robots.txt` — disallows all `APP_ROUTES`, allows marketing + auth                    |
| [src/app/sitemap.ts](src/app/sitemap.ts)       | `/sitemap.xml` — includes marketing + auth routes                                      |

### Route Groups

| File                                                                                             | Purpose                                                                          |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| [src/app/(app)/layout.tsx](<src/app/(app)/layout.tsx>)                                           | App shell: `TooltipProvider` → `SidebarProvider` → `AppSidebar` + `SidebarInset` |
| [src/app/(app)/dashboard/page.tsx](<src/app/(app)/dashboard/page.tsx>)                           | Dashboard page shell — renders `<Dashboard />` from features                     |
| [src/app/(app)/profile/page.tsx](<src/app/(app)/profile/page.tsx>)                               | Profile page shell — renders `<Profile />` from features                         |
| [src/app/(app)/charts/page.tsx](<src/app/(app)/charts/page.tsx>)                                 | Charts page shell — renders `<Charts />` from features                           |
| [src/app/(auth)/layout.tsx](<src/app/(auth)/layout.tsx>)                                         | Auth shell: `TooltipProvider` wrapper only                                       |
| [src/app/(auth)/sign-in/page.tsx](<src/app/(auth)/sign-in/page.tsx>)                             | Sign-in page shell                                                               |
| [src/app/(auth)/sign-up/page.tsx](<src/app/(auth)/sign-up/page.tsx>)                             | Sign-up page shell                                                               |
| [src/app/(auth)/forgot-password/page.tsx](<src/app/(auth)/forgot-password/page.tsx>)             | Forgot password page shell                                                       |
| [src/app/(marketing)/layout.tsx](<src/app/(marketing)/layout.tsx>)                               | Marketing shell: bare `<main>` wrapper                                           |
| [src/app/(marketing)/about/page.tsx](<src/app/(marketing)/about/page.tsx>)                       | About page                                                                       |
| [src/app/(marketing)/contact-us/page.tsx](<src/app/(marketing)/contact-us/page.tsx>)             | Contact page                                                                     |
| [src/app/(marketing)/privacy-policy/page.tsx](<src/app/(marketing)/privacy-policy/page.tsx>)     | Privacy policy page                                                              |
| [src/app/(marketing)/terms-of-service/page.tsx](<src/app/(marketing)/terms-of-service/page.tsx>) | Terms of service page                                                            |

### Features — App

| File                                                                                                           | Purpose                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [src/features/app/index.ts](src/features/app/index.ts)                                                         | Barrel: exports `Dashboard`, `Profile`, `Charts`                                            |
| [src/features/app/dashboard/index.tsx](src/features/app/dashboard/index.tsx)                                   | Dashboard: `SectionCards` + `ChartAreaInteractive` + `DataTable`                            |
| [src/features/app/dashboard/section-cards.tsx](src/features/app/dashboard/section-cards.tsx)                   | 4 KPI cards (static mock data, container-query responsive)                                  |
| [src/features/app/dashboard/chart-area-interactive.tsx](src/features/app/dashboard/chart-area-interactive.tsx) | Interactive area chart with 90d/30d/7d time range filter, mobile-aware                      |
| [src/features/app/dashboard/data-table.tsx](src/features/app/dashboard/data-table.tsx)                         | TanStack Table with sorting, filtering, pagination, column toggle, `TableCellViewer` drawer |
| [src/features/app/profile/index.tsx](src/features/app/profile/index.tsx)                                       | Profile page: tabbed layout (Personal Info, Security, Notifications)                        |
| [src/features/app/profile/profile-header.tsx](src/features/app/profile/profile-header.tsx)                     | Profile header with avatar and user info                                                    |
| [src/features/app/profile/personal-info-tab.tsx](src/features/app/profile/personal-info-tab.tsx)               | Personal information form tab                                                               |
| [src/features/app/profile/security-tab.tsx](src/features/app/profile/security-tab.tsx)                         | Password / security settings tab                                                            |
| [src/features/app/profile/notifications-tab.tsx](src/features/app/profile/notifications-tab.tsx)               | Notification preferences tab                                                                |
| [src/features/app/charts/index.tsx](src/features/app/charts/index.tsx)                                         | Charts showcase: renders all 6 chart family sections                                        |

### Features — Auth

| File                                                                                                                     | Purpose                                                                      |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [src/features/auth/index.ts](src/features/auth/index.ts)                                                                 | Barrel: exports `SignIn`, `SignUp`, `ForgotPassword`                         |
| [src/features/auth/sign-in/index.tsx](src/features/auth/sign-in/index.tsx)                                               | Sign-in page layout                                                          |
| [src/features/auth/sign-in/sign-in-form.tsx](src/features/auth/sign-in/sign-in-form.tsx)                                 | Sign-in form: email/password + Apple/Google buttons (UI only, no auth logic) |
| [src/features/auth/sign-up/index.tsx](src/features/auth/sign-up/index.tsx)                                               | Sign-up page layout                                                          |
| [src/features/auth/sign-up/sign-up-form.tsx](src/features/auth/sign-up/sign-up-form.tsx)                                 | Sign-up form: name/email/password/confirm (UI only, no auth logic)           |
| [src/features/auth/forgot-password/index.tsx](src/features/auth/forgot-password/index.tsx)                               | Forgot-password page layout                                                  |
| [src/features/auth/forgot-password/forgot-password-form.tsx](src/features/auth/forgot-password/forgot-password-form.tsx) | Forgot-password form (UI only)                                               |

### Features — Marketing

| File                                                                                                                     | Purpose                                   |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| [src/features/marketing/index.ts](src/features/marketing/index.ts)                                                       | Barrel exports for all marketing features |
| [src/features/marketing/about/index.tsx](src/features/marketing/about/index.tsx)                                         | About page content                        |
| [src/features/marketing/contact-us/index.tsx](src/features/marketing/contact-us/index.tsx)                               | Contact page layout                       |
| [src/features/marketing/contact-us/contact-form.tsx](src/features/marketing/contact-us/contact-form.tsx)                 | Contact form component                    |
| [src/features/marketing/contact-us/contact-info.tsx](src/features/marketing/contact-us/contact-info.tsx)                 | Contact information display               |
| [src/features/marketing/privacy-policy/index.tsx](src/features/marketing/privacy-policy/index.tsx)                       | Privacy policy page                       |
| [src/features/marketing/privacy-policy/policy-sections.tsx](src/features/marketing/privacy-policy/policy-sections.tsx)   | Privacy policy section components         |
| [src/features/marketing/terms-of-service/index.tsx](src/features/marketing/terms-of-service/index.tsx)                   | Terms of service page                     |
| [src/features/marketing/terms-of-service/terms-sections.tsx](src/features/marketing/terms-of-service/terms-sections.tsx) | Terms of service section components       |

### Shared Components

| File                                                                 | Purpose                                                                                        |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [src/components/app-sidebar.tsx](src/components/app-sidebar.tsx)     | Main app sidebar with hardcoded nav data (teams, navMain, projects)                            |
| [src/components/nav-main.tsx](src/components/nav-main.tsx)           | Collapsible nav section with sub-items                                                         |
| [src/components/nav-projects.tsx](src/components/nav-projects.tsx)   | Projects nav section (commented out in sidebar)                                                |
| [src/components/nav-user.tsx](src/components/nav-user.tsx)           | User footer in sidebar with avatar, name, and actions                                          |
| [src/components/team-switcher.tsx](src/components/team-switcher.tsx) | Team/workspace switcher in sidebar header                                                      |
| [src/components/common/index.ts](src/components/common/index.ts)     | Barrel for **custom** shared components — this is where developers add new reusable components |
| [src/components/ui/](src/components/ui/)                             | **shadcn-managed** primitives — DO NOT edit these files (see shadcn Component Rules below)     |

### shadcn Component Rules

`src/components/ui/` is **shadcn-owned territory**. Every file in that folder is generated and managed by the shadcn CLI. Running `pnpm dlx shadcn@latest add <component>` or `pnpm dlx shadcn@latest upgrade` will **overwrite** any manual edits you make to these files without warning.

**Rule:** Never edit files inside `src/components/ui/`. If you need a customized variant of a shadcn primitive, create a wrapper component in `src/components/common/` that composes from `@/components/ui/`.

```
src/components/
├── ui/              ← shadcn-managed — READ ONLY for developers
│   ├── button.tsx
│   ├── card.tsx
│   └── ...          (54 components, see catalog below)
└── common/          ← developer-owned — add all custom shared components here
    └── index.ts     (barrel — export your components from here)
```

**When to use `common/` vs `ui/`:**

| Scenario                                                 | Where to put it                                                                |
| -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| New reusable component built on top of shadcn primitives | `src/components/common/`                                                       |
| Wrapper that adds custom behavior to a shadcn component  | `src/components/common/`                                                       |
| Tweaking the look of a shadcn component                  | `src/components/common/` — wrap, don't edit                                    |
| Adding a brand-new shadcn component not yet installed    | Run `pnpm dlx shadcn@latest add <component>` — it lands in `ui/` automatically |

### Installed shadcn Components (pre-installed — do not re-add)

All of the following are already present in `src/components/ui/`. Check this list before running `shadcn add` to avoid duplicates.

`accordion` · `alert-dialog` · `alert` · `aspect-ratio` · `avatar` · `badge` · `breadcrumb` · `button-group` · `button` · `calendar` · `card` · `carousel` · `chart` · `checkbox` · `collapsible` · `combobox` · `command` · `context-menu` · `dialog` · `direction` · `drawer` · `dropdown-menu` · `empty` · `field` · `hover-card` · `input-group` · `input-otp` · `input` · `item` · `kbd` · `label` · `menubar` · `native-select` · `navigation-menu` · `pagination` · `popover` · `progress` · `radio-group` · `resizable` · `scroll-area` · `select` · `separator` · `sheet` · `sidebar` · `skeleton` · `slider` · `sonner` · `spinner` · `switch` · `table` · `tabs` · `textarea` · `toggle-group` · `toggle` · `tooltip`

### Chart Component Libraries

| File                                                                             | Purpose                                                                                                                                  |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [src/components/area-charts/index.tsx](src/components/area-charts/index.tsx)     | Area charts section: interactive, axes, default, gradient, linear, stacked, step, icons variants                                         |
| [src/components/bar-charts/index.tsx](src/components/bar-charts/index.tsx)       | Bar charts: active, default, horizontal, interactive, label, label-custom, mixed, multiple, negative, stacked                            |
| [src/components/line-charts/index.tsx](src/components/line-charts/index.tsx)     | Line charts: default, dots, dots-colors, dots-custom, interactive, label, label-custom, linear, multiple, step                           |
| [src/components/pie-charts/index.tsx](src/components/pie-charts/index.tsx)       | Pie/donut charts: simple, donut, donut-active, donut-text, interactive, label, label-custom, label-list, legend, separator-none, stacked |
| [src/components/radar-charts/index.tsx](src/components/radar-charts/index.tsx)   | Radar charts: default, dots, grid variants, label-custom, legend, lines-only, multiple                                                   |
| [src/components/radial-charts/index.tsx](src/components/radial-charts/index.tsx) | Radial bar charts: simple, grid, label, shape, stacked, text                                                                             |

### Core Utilities

| File                                                     | Purpose                                                                                                                |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [src/constants/index.ts](src/constants/index.ts)         | `SITE_ROUTES`, `METADATA`, `AUTH_ROUTES`, `APP_ROUTES`, `MARKETING_ROUTES`, `GEIST_SANS`, `GEIST_MONO`, `SOCIAL_LINKS` |
| [src/constants/dashboard.ts](src/constants/dashboard.ts) | `tableMockData` — 68 rows of mock table data for the dashboard DataTable                                               |
| [src/lib/env.ts](src/lib/env.ts)                         | Zod-validated env: exports `clientEnv` and `DOMAIN`                                                                    |
| [src/lib/utils.ts](src/lib/utils.ts)                     | `cn()` — clsx + tailwind-merge helper                                                                                  |
| [src/hooks/use-mobile.ts](src/hooks/use-mobile.ts)       | `useIsMobile()` — detects viewport < 768px via `matchMedia`                                                            |
| [src/redux/store.ts](src/redux/store.ts)                 | Redux store with `redux-persist` (all slices currently commented out)                                                  |
| [src/redux/hook.ts](src/redux/hook.ts)                   | Typed `useAppDispatch` / `useAppSelector` hooks                                                                        |
| [src/proxy.ts](src/proxy.ts)                             | Next.js 16 middleware (sets `x-current-path` header; **named `proxy.ts` not `middleware.ts`**)                         |

---

## Architecture Decisions

- **Feature-based structure**: each feature owns its own components rather than scattering them by type. Related code stays co-located.
- **Thin page shells**: `src/app/**/page.tsx` files only import and render the feature component. Zero business logic in page files.
- **`SITE_ROUTES` as single source of truth**: routes drive metadata, robots.txt, sitemap.xml, and navigation links. Adding a route requires only adding it to `SITE_ROUTES`.
- **Zod env validation at startup**: env vars are parsed by Zod when the module loads — throws immediately if misconfigured instead of failing silently at runtime.
- **Redux scaffolded but empty**: store and persist config are wired up but all slices are commented out. The boilerplate provides the plumbing; the builder adds slices.
- **React Compiler enabled**: `reactCompiler: true` in `next.config.ts` means React auto-optimizes renders. Manual memoization (`useMemo`, `useCallback`, `React.memo`) conflicts with this.
- **`proxy.ts` as Next.js 16 middleware**: In Next.js 16, the middleware file is named `proxy.ts` (not `middleware.ts`). It sets the `x-current-path` header so `generateMetadata()` in root layout can return per-route metadata from a static map.
- **Tailwind v4**: Uses `@tailwindcss/postcss`, CSS variables for theme tokens, `data-[slot=*]` targeting, and container queries. No `tailwind.config.js`.
- **shadcn radix-nova style**: Component style is `radix-nova`. Adding components with `shadcn add` must use this style — otherwise component APIs may differ.
- **`ui/` vs `common/` separation**: `src/components/ui/` is shadcn-owned and must never be hand-edited — upgrades overwrite it. All developer-authored shared components live in `src/components/common/` and compose from `ui/` primitives.

---

## Core Conventions

### Naming

- Page files: `page.tsx` (always — Next.js App Router convention)
- Feature entry: `index.tsx` inside `src/features/{group}/{feature}/`
- Feature sub-components: `{feature-name}-{concern}.tsx` (e.g., `sign-in-form.tsx`, `section-cards.tsx`)
- Chart components: `chart-{type}-{variant}.tsx` (e.g., `chart-area-gradient.tsx`)
- Hook files: `use-{name}.ts`
- Barrel files: `index.ts` (not `index.tsx`) for re-exports only

### Imports

- Always use path aliases: `@/lib/...`, `@/features/...`, `@/components/...`, `@/constants`, `@/hooks/...`, `@/redux/...`
- Never use relative `../../` imports
- Import routes from `@/constants` → `SITE_ROUTES`, not hardcoded strings
- Import typed Redux hooks from `@/redux/hook`, not directly from `react-redux`

### Adding a New Page

1. Add route to `SITE_ROUTES` in [src/constants/index.ts](src/constants/index.ts)
2. Add metadata entry to `METADATA` in the same file
3. Create `src/app/(group)/route-name/page.tsx` (thin shell)
4. Create `src/features/{group}/route-name/index.tsx` (actual component)
5. Export from `src/features/{group}/index.ts` barrel
6. Update `robots.ts` / `sitemap.ts` if the route classification changes

### State Management

- Add new Redux slices to [src/redux/store.ts](src/redux/store.ts) inside `appReducer`
- Use `useAppSelector` and `useAppDispatch` from [src/redux/hook.ts](src/redux/hook.ts) — never import raw `useSelector`/`useDispatch`
- redux-persist is configured; new slices are persisted by default unless blacklisted

### Charts

- All charts use `ChartContainer` + `ChartTooltip` from [src/components/ui/chart.tsx](src/components/ui/chart.tsx)
- Chart colors: reference CSS variables `var(--primary)` or `var(--color-{key})` where `{key}` matches a key in `chartConfig`
- `chartConfig` must be typed with `satisfies ChartConfig`

### Styling

- Use `cn()` from `@/lib/utils` for conditional class merging — never string-concat Tailwind classes
- Container queries: use `@container/{name}` on parent, `@[size]/{name}:` on children
- `data-[slot=*]` selectors: shadcn uses these to target internal component parts — do not remove them
- Tailwind v4: no `theme()` function in class values, no `tailwind.config.js` — use CSS variables directly

---

## Feature Reference

### Dashboard

- **SectionCards**: 4 static KPI cards using container queries (`@xl/main:grid-cols-2`, `@5xl/main:grid-cols-4`). All data is hardcoded.
- **ChartAreaInteractive**: Time-range-filtered area chart. Mobile defaults to 7-day view via `useIsMobile`. Reference date is hardcoded to `2024-06-30`.
- **DataTable**: TanStack Table over 68-row mock dataset from `tableMockData`. `TableCellViewer` opens a drawer with embedded mini-chart + edit form. The drawer "Submit" button fires no action — UI placeholder.

### Charts Showcase (`/charts`)

- 6 chart families, each with multiple variants. All data is hardcoded per-component.
- Each chart component is self-contained with its own `chartData` and `chartConfig`.
- Typo in filename: `chart-srea-step.tsx` (not `chart-area-step.tsx`) — do not rename without updating the import in `index.tsx`.

### Auth Pages

- Forms are complete UI with no backend integration. `<form>` elements have no `action` or `onSubmit` handlers.
- Sign-in shows Apple + Google OAuth buttons with no OAuth implementation.
- All navigation uses `SITE_ROUTES.AUTH.*` constants.

### Profile

- Three tabs: Personal Info, Security, Notifications — all UI-only forms with no save logic.

---

## Environment Variables

| Variable             | Required | Default                 | Purpose                                                    |
| -------------------- | -------- | ----------------------- | ---------------------------------------------------------- |
| `NEXT_PUBLIC_DOMAIN` | Yes      | `http://localhost:3000` | Base URL for metadata canonical links, sitemap, robots.txt |

---

## Backend API Routes

This is a frontend-only project. No API routes exist. No backend calls are made. All data is static mock data.

When adding API calls: use `DOMAIN` from `@/lib/env` as the base URL, and add any server-side env vars to the Zod schema in [src/lib/env.ts](src/lib/env.ts).

---

## Access Control / Auth Flow

**Current state: No auth is implemented.**

- `/` redirects to `/dashboard` unconditionally
- `(app)` routes are accessible without authentication
- [src/proxy.ts](src/proxy.ts) only sets `x-current-path` header — it does not check auth

**To implement auth, edit [src/proxy.ts](src/proxy.ts)** to redirect unauthenticated requests on `APP_ROUTES` to `/sign-in`, and authenticated requests on `AUTH_ROUTES` to `/dashboard`.

---

## Known Bugs & Gotchas

1. **`proxy.ts` IS the middleware**: Next.js 16 uses `proxy.ts`, not `middleware.ts`. AI trained on ≤15 will look for/create `middleware.ts` — that file is silently ignored. Always edit [src/proxy.ts](src/proxy.ts).

2. **Redux store is empty**: `appReducer` in [src/redux/store.ts](src/redux/store.ts) has all slices commented out. `useAppSelector` returns `undefined` for any key. Do not assume state exists.

3. **`useIsMobile` returns `false` on first render**: Returns `!!undefined` = `false` during SSR and hydration. Components branching on this may flash incorrect layout on initial mobile load.

4. **Dashboard chart reference date is hardcoded**: `ChartAreaInteractive` filters relative to `new Date('2024-06-30')`. The chart always shows the same historical window regardless of actual date.

5. **Auth forms have no submit handlers**: Clicking "Login" or "Create Account" does nothing. Intentional scaffolding — not a bug, but will surprise developers expecting something to happen.

6. **`NavProjects` is commented out**: `<NavProjects projects={data.projects} />` is commented out in [src/components/app-sidebar.tsx](src/components/app-sidebar.tsx). The `projects` data array exists but nothing renders it.

7. **`sitemap.ts` includes auth routes**: `/sign-in`, `/sign-up`, `/forgot-password` appear in the sitemap. Remove `...AUTH_ROUTES` from [src/app/sitemap.ts](src/app/sitemap.ts) if these should not be indexed.

8. **React Compiler + manual memoization conflict**: `useMemo`, `useCallback`, and `React.memo` can produce unexpected behavior with `reactCompiler: true`. Do not use them.

9. **Both chart series use same color**: In [src/features/app/dashboard/chart-area-interactive.tsx](src/features/app/dashboard/chart-area-interactive.tsx), both `desktop` and `mobile` are `color: 'var(--primary)'` — they render indistinguishably.

10. **Filename typo in area charts**: `src/components/area-charts/chart-srea-step.tsx` has a transposed `a` and `r`. The import in `index.tsx` already accounts for this typo — do not rename the file without updating the import.

---

## NEVER-Do Rules

1. NEVER create `middleware.ts` — the middleware is [src/proxy.ts](src/proxy.ts) in Next.js 16.
2. NEVER hardcode route strings — use `SITE_ROUTES` from `@/constants`.
3. NEVER use `useSelector` or `useDispatch` directly — use `useAppSelector`/`useAppDispatch` from `@/redux/hook`.
4. NEVER add `useMemo`, `useCallback`, or `React.memo` — React Compiler handles optimization.
5. NEVER create `tailwind.config.js` — Tailwind v4 config lives in CSS variables in `globals.css`.
6. NEVER use relative imports (`../../`) — use path aliases (`@/...`).
7. NEVER put business logic in `src/app/**/page.tsx` files — keep them as thin shells.
8. NEVER put shared UI in `src/features/` — shared components go in `src/components/`.
9. NEVER add shadcn components by hand — run: `pnpm dlx shadcn@latest add <component>`
10. NEVER access `process.env.*` directly in components — import from `@/lib/env`.
11. NEVER edit files inside `src/components/ui/` — they are shadcn-managed and will be overwritten on upgrade. Create wrappers in `src/components/common/` instead.
12. NEVER put new custom shared components in `src/components/ui/` — that folder is exclusively for shadcn-generated files. Custom components belong in `src/components/common/`.

---

## Actions Requiring Human Review Before Executing

- Any changes to [src/proxy.ts](src/proxy.ts) (middleware) — affects every request
- Adding new env vars — requires updating [src/lib/env.ts](src/lib/env.ts) Zod schema AND deployment config
- Changing Redux persist config — can corrupt persisted state in users' browsers
- Modifying `SITE_ROUTES` — cascades to metadata, robots.txt, and sitemap.xml
- Changing provider nesting in `(app)/layout.tsx` — `TooltipProvider` must wrap `SidebarProvider`

### Safe for autonomous execution

- Adding new chart components following existing patterns in `src/components/{type}-charts/`
- Adding new pages following the thin-shell + feature-component pattern
- Styling changes (Tailwind classes, CSS variables)
- Adding Redux slices following the commented-out pattern in [src/redux/store.ts](src/redux/store.ts)
- Bug fixes with narrow, clear scope
- Creating new custom shared components in `src/components/common/` (composing from `src/components/ui/` primitives)

---

## AI Tool Skills

| Skill                   | Invoke when                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `frontend-architecture` | Questions about routing, provider nesting, page structure, state wiring                |
| `api-client`            | Adding API calls, wiring RTK Query, auth headers, or server-side env vars              |
| `components`            | Adding new pages, working with shadcn, chart customization, form patterns              |
| `branch-review`         | Before every commit or push — reviews changed files and writes `docs/BRANCH_REVIEW.md` |
| `codebase-review`       | Full codebase health scan — writes `docs/CODEBASE_REVIEW.md`                           |
