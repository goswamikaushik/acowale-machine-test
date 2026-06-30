<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

# Next.js Boilerplate — Frontend

> **Read [CLAUDE.md](CLAUDE.md) first.** It is the single source of truth —
> product context, full project structure, all conventions, known bugs, NEVER-do rules.

---

## Summary for AI agents

Next.js 16.2.4 + React 19 Customer Feedback Platform (App Router, TypeScript strict, Tailwind v4, Prisma ORM, Supabase/PostgreSQL). Dev server: `pnpm dev` at `http://localhost:3000`. This version has breaking changes from Next.js ≤15 — middleware is `src/proxy.ts`, not `middleware.ts`.

Full context in [CLAUDE.md](CLAUDE.md) including:

- **Middleware is `src/proxy.ts`** — do not create or edit `middleware.ts`
- **Feedback Database Schema** — category (enum), rating (int), feedback (text), userId (optional string), userName (optional string), userEmail (optional string), and createdAt (DateTime).
- **React Compiler is enabled** — never add `useMemo`, `useCallback`, or `React.memo`
- **All routes must go through `SITE_ROUTES`** in `src/constants/index.ts`

---

## Autonomy guidance

### Requires human review BEFORE executing

- Changes to `src/proxy.ts` (middleware) — affects every request
- Adding env vars — requires Zod schema update in `src/lib/env.ts` and deployment config
- Changing Redux persist config — can corrupt browser-persisted state
- Modifying `SITE_ROUTES` — cascades to metadata, robots.txt, sitemap.xml
- Changing provider nesting in `src/app/(app)/layout.tsx`

### Safe for autonomous execution

- New chart components in `src/components/{type}-charts/`
- New pages following thin-shell + feature-component pattern
- Styling changes (Tailwind classes, CSS variables)
- Adding Redux slices inside `appReducer` in `src/redux/store.ts`
- Bug fixes with narrow, clear scope

---

## Workflow

```bash
pnpm check-types   # TypeScript type check
pnpm lint          # ESLint
pnpm build         # Full production build (also runs lint + type-check)
```

---

## Manual command rule

**NEVER run code generation, schema pulls, type generation, migrations, or any build step the developer should control. Stop and tell the user the exact command to run.**

- Add shadcn component: `pnpm dlx shadcn@latest add <component>`
- Update / reinstall all shadcn components: `pnpm dlx shadcn@latest add --all --overwrite --yes`
- Type-check: `pnpm check-types`
- Full build: `pnpm build`
