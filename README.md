# Next.js Boilerplate

A production-ready Next.js 16 + React 19 boilerplate with feature-based architecture, a complete chart showcase, auth page scaffolding, and a strict code-quality pipeline.

**Full documentation for developers and AI tools: [CLAUDE.md](CLAUDE.md)**

---

## Quick Start

```bash
pnpm install
pnpm dev    # http://localhost:3000 → auto-redirects to /dashboard
```

Requires `.env` at project root (already committed with dev defaults):

```env
NEXT_PUBLIC_DOMAIN=http://localhost:3000
```

---

## Tech Stack

| Layer           | Technology                       |
| --------------- | -------------------------------- |
| Framework       | Next.js 16.2.4 (App Router)      |
| Language        | TypeScript 5 (strict)            |
| Styling         | Tailwind CSS 4                   |
| Components      | shadcn/ui (radix-nova) + Base UI |
| Charts          | Recharts 3.8                     |
| Tables          | TanStack Table 8                 |
| State           | Redux Toolkit 2 + redux-persist  |
| Env             | Zod 4 validation                 |
| Package Manager | pnpm                             |

---

## Commands

| Command            | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| `pnpm dev`         | Dev server                                      |
| `pnpm build`       | Production build (runs lint + type-check first) |
| `pnpm start`       | Production server                               |
| `pnpm lint`        | ESLint                                          |
| `pnpm prettier`    | Format all files                                |
| `pnpm check-types` | TypeScript check (no emit)                      |

Add shadcn components: `pnpm dlx shadcn@latest add <component>`
Update / overwrite all shadcn components: `pnpm dlx shadcn@latest add --all --overwrite --yes`

---

## Key Conventions

- **Middleware is `src/proxy.ts`**, not `middleware.ts` — Next.js 16 breaking change
- **Never hardcode routes** — use `SITE_ROUTES` from `@/constants`
- **Page files are thin shells** — all logic lives in `src/features/{group}/{feature}/`
- **Never use `useSelector`/`useDispatch`** — use `useAppSelector`/`useAppDispatch` from `@/redux/hook`
- **No `useMemo`/`useCallback`/`React.memo`** — React Compiler is enabled and handles this
- **No `tailwind.config.js`** — Tailwind v4 config lives in CSS variables in `globals.css`
- **Never access `process.env.*` directly** — import from `@/lib/env`

See [CLAUDE.md](CLAUDE.md) for the full rule set.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router (thin page shells only)
│   ├── (app)/              # Authenticated app routes: /dashboard, /profile, /charts
│   ├── (auth)/             # Auth routes: /sign-in, /sign-up, /forgot-password
│   ├── (marketing)/        # Public routes: /, /about, /contact-us, etc.
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── robots.ts           # /robots.txt
│   └── sitemap.ts          # /sitemap.xml
├── features/               # All actual page logic, co-located by feature
│   ├── app/                # Dashboard, Profile, Charts components
│   ├── auth/               # Sign-in, Sign-up, Forgot-password components
│   └── marketing/          # About, Contact, Privacy, Terms components
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── area-charts/        # Recharts area chart variants
│   ├── bar-charts/         # Recharts bar chart variants
│   ├── line-charts/        # Recharts line chart variants
│   ├── pie-charts/         # Recharts pie/donut chart variants
│   ├── radar-charts/       # Recharts radar chart variants
│   ├── radial-charts/      # Recharts radial bar chart variants
│   └── common/             # Shared reusable components
├── constants/              # SITE_ROUTES, METADATA, mock data
├── lib/                    # env.ts (Zod), utils.ts (cn)
├── hooks/                  # use-mobile.ts
├── redux/                  # store.ts, hook.ts
└── proxy.ts                # Next.js 16 middleware (x-current-path header)
```

See [CLAUDE.md](CLAUDE.md) for the file-by-file breakdown.

---

## Environment Variables

| Variable             | Required | Purpose                                    |
| -------------------- | -------- | ------------------------------------------ |
| `NEXT_PUBLIC_DOMAIN` | Yes      | Base URL for metadata, sitemap, robots.txt |

---

See [CLAUDE.md](CLAUDE.md) for architecture decisions, known gotchas, NEVER-do rules, and the full feature reference.
