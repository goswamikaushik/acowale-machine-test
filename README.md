# Acowale CRM Machine Test

**Candidate:** Kaushik Goswami

## Overview

This project is my submission for the Acowale Software Engineer Machine Test.

The application is built as a production-oriented customer feedback and analytics system that enables users to submit customer feedback and visualize analytics through an interactive dashboard.

Rather than focusing solely on feature completion, the implementation emphasizes:

- Clean Architecture
- Scalability
- Type Safety
- Maintainability
- Performance
- Accessibility
- Developer Experience

---

## Tech Stack

### Frontend

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- React Hook Form
- Zod
- Recharts
- Redux Toolkit (RTK Query)

### Backend & Database

- Supabase (PostgreSQL with RLS)
- Supabase JS SDK (direct client-side integration via RTK Query)

### Tooling

- ESLint
- Prettier
- Husky
- lint-staged
- GitHub

---

## Features

### Feedback Form

- Submit customer feedback
- Form validation using React Hook Form + Zod
- Success & error handling
- Responsive UI

---

### Dashboard

- Total feedback count KPI card
- Feedback by category donut chart distribution
- Recent feedback list with search & category filtering (client-side)
- Loading & empty states

---

## Project Structure

```
src
├── app
│   ├── dashboard      # Dashboard page route
│   ├── feedback       # Feedback form page route
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Redirects to home/dashboard
│
├── components
│   ├── common         # Reusable components (CategoryBadge, StarRating)
│   └── ui             # shadcn-managed primitives
│
├── constants          # SITE_ROUTES, categories, etc.
│
├── features
│   ├── dashboard      # Dashboard feature components
│   ├── feedback       # Feedback form feature components
│   └── home           # Home landing component
│
├── hooks
│
├── lib
│   ├── env.ts         # Environment validation
│   ├── supabase.ts    # Supabase client initialization
│   └── utils.ts       # Utility functions (cn)
│
└── redux
    ├── feedback-api.ts # RTK Query slice for Supabase
    ├── hook.ts         # Typed hooks
    ├── provider.tsx    # Redux Provider wrapper
    └── store.ts        # Redux store configuration
```

---

## Database

Supabase PostgreSQL is used as the database provider. Data fetching and mutation are managed client-side using Redux Toolkit Query (RTK Query) wrapping the Supabase client SDK.

### Schema: `feedbacks`

The feedback data is persisted in a `feedbacks` table with the following schema:

| Field Name   | Type       | Description                                                      |
| ------------ | ---------- | ---------------------------------------------------------------- |
| `id`         | `UUID`     | Unique identifier (Primary Key, Auto-generated)                  |
| `name`       | `Text`     | Customer name                                                    |
| `email`      | `Text`     | Email address of the customer                                    |
| `rating`     | `Int`      | Score rating between 1 and 5 (for analytics and average ratings) |
| `category`   | `Text`     | One of: `Product`, `Service`, `Support`, `Billing`, `Other`      |
| `comment`    | `Text`     | Detailed comment or feedback body text                           |
| `created_at` | `DateTime` | Timestamp when the feedback was submitted (defaults to now)      |

---

## Running Locally

### Clone

```bash
git clone https://github.com/goswamikaushik/acowale-machine-test
```

### Install

```bash
pnpm install
```

### Start Development

```bash
pnpm dev
```

---

## Environment Variables

```env
NEXT_PUBLIC_DOMAIN=http://localhost:3000
NEXT_PUBLIC_PROJECT_URL=
NEXT_PUBLIC_PUBLISHABLE_KEY=
```

---

## Future Improvements

- Authentication (Auth-gated feedback submission & dashboard access)
- Pagination (Server-side pagination for feedback list)
- Export Analytics (CSV/PDF export of dashboard insights)
- Unit & E2E Tests (Jest & Playwright setup)
- CI/CD Pipeline

---

## Starter Kit

This project is built on top of my personal Next.js Starter Kit:

https://github.com/goswamikaushik/nextjs-starter-kit

The starter kit provides:

- Feature-based architecture
- TypeScript configuration
- Tailwind CSS v4
- shadcn/ui integration
- Husky
- lint-staged
- ESLint
- Prettier

allowing me to focus on solving the engineering problem rather than project bootstrapping.

---

## Author

Kaushik Goswami

Portfolio

https://goswamikaushik.dev

GitHub

https://github.com/goswamikaushik

LinkedIn

https://linkedin.com/in/goswamikaushik
