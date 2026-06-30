# Acowale CRM Machine Test

> Software Engineer Assignment Submission

**Candidate:** Kaushik Goswami

---

## Overview

This project is my submission for the Acowale Software Engineer Machine Test.

The application is built as a production-oriented full-stack Next.js application that enables users to submit customer feedback and visualize analytics through an interactive dashboard.

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
- TanStack Query
- Recharts

### Backend

- Next.js Route Handlers
- Prisma ORM
- Supabase PostgreSQL

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
- Server-side validation
- Success & error handling
- Responsive UI

---

### Dashboard

- Total feedback count
- Average rating
- Feedback by category
- Recent feedback list
- Analytics charts
- Search & filtering
- Loading & empty states

---

### APIs

| Method | Endpoint |
|---------|----------|
| POST | /api/feedback |
| GET | /api/feedback |
| GET | /api/analytics |
| GET | /api/health |

---

## Project Structure

```
src
├── app
│   ├── (dashboard)
│   ├── api
│   └── page.tsx
│
├── components
│
├── features
│   ├── feedback
│   └── analytics
│
├── hooks
│
├── lib
│   ├── prisma.ts
│   ├── validations
│   └── utils
│
├── services
│
├── types
│
├── constants
│
└── styles
```

---

## Database

Supabase PostgreSQL is used as the database provider.

Prisma ORM manages:
- Schema definition and migrations
- Type-safe database client generation
- Database queries and operations

### Schema: `Feedback`

The feedback data is persisted in a `Feedback` table with the following schema:

| Field Name  | Type       | Description                                                      |
| ----------- | ---------- | ---------------------------------------------------------------- |
| `id`        | `String`   | Unique identifier (Primary Key, UUID)                            |
| `category`  | `Enum`     | One of: `PRODUCT`, `FEATURE_REQUEST`, `SUPPORT`, `BILLING`       |
| `rating`    | `Int`      | Score rating between 1 and 5 (for analytics and average ratings) |
| `feedback`  | `Text`     | The detailed comment or feedback body text                       |
| `userId`    | `String?`  | Optional ID of the user (nullable for public submissions)        |
| `userName`  | `String?`  | Optional name of the user                                        |
| `userEmail` | `String?`  | Optional email address (useful for follow-up)                    |
| `createdAt` | `DateTime` | Timestamp when the feedback was submitted (defaults to now)      |

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

### Configure Environment

```bash
cp .env.example .env
```

Update the required environment variables.

### Generate Prisma Client

```bash
pnpm prisma generate
```

### Run Migrations

```bash
pnpm prisma migrate dev
```

### Start Development

```bash
pnpm dev
```

---

## Environment Variables

```env
DATABASE_URL=

NEXT_PUBLIC_APP_URL=
```

---

## Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Database | Supabase |

---

## Engineering Decisions

This project intentionally favors simplicity over unnecessary complexity.

Key decisions:

- Single full-stack Next.js application
- Next.js Route Handlers instead of a separate backend
- Prisma for type-safe database access
- Feature-based architecture
- Zod for runtime validation
- TanStack Query for server state
- Reusable UI components using shadcn/ui

---

## AI Usage

AI tools were used responsibly during development.

Tools used:

- ChatGPT
- Cursor

AI assisted with:

- Architecture discussions
- Code review
- Documentation
- Brainstorming

All implementation, debugging, testing, validation, and engineering decisions were reviewed and completed by me.

---

## Future Improvements

- Authentication
- Pagination
- Export Analytics
- Unit & Integration Tests
- Role-Based Access Control
- Docker Support
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