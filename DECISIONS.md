# Design & Architecture Decisions

This document outlines the architectural choices, database selection, structural patterns, and trade-offs made during the development of the Customer Feedback & Analytics platform.

---

### 1. Why did you choose this technology stack?

- **Next.js 16 (App Router) + React 19**: Standard for modern React applications. Offers server-side rendering (SSR), optimized build performance, and dynamic routing capabilities.
- **RTK Query**: RTK Query handles async data fetching, request deduplication, loading states, and error handling out-of-the-box.
- **Tailwind CSS (v4)**: Enables highly responsive utility-first styling. Combines CSS variables and theme variables for premium, modern visual aesthetics.
- **TypeScript**: Guarantees compile-time type safety, minimizing runtime exceptions and interface mismatches.

---

### 2. Why did you choose this database?

- **Supabase (PostgreSQL)**: Offers a fully-managed, highly-scalable relational database with real-time capabilities.
- **Row Level Security (RLS)**: Allows setting up fine-grained access policies at the database layer (e.g., enabling public read/write access policies for anonymous feedback collection without requiring a separate custom backend server).

---

### 3. Why did you structure your application this way?

- **Feature-Based Architecture**: All code is structured inside `src/features/` (e.g., `feedback/` and `dashboard/`). Grouping logic, components, types, and local state together makes the app modular and significantly easier to maintain and scale.
- **API Separation**: Database queries and mutations are isolated in a specialized RTK API slice (`feedback-api.ts`), separating UI components from direct network fetch code.

---

### 4. What trade-offs did you make due to time constraints?

- **Client-Side Search and Filters**: Feedback filtering and text searches are computed client-side over the fetched list. This is fast for a small number of entries but scales poorly.
- **Lack of User Authentication**: Submissions are anonymous to keep the feedback loop frictionless. In a real-world scenario, feedback should be authenticated to avoid duplicate spam.

---

### 5. What would you improve if you had one more week?

- **User Authentication**: Set up auth-gated feedback submission to ensure feedback is tied to genuine user accounts.
- **Unit & E2E Testing**: Add Jest unit tests for Redux slices and Playwright end-to-end integration tests.
- **More Analytics Metrics**: Add additional metric views and charts to the dashboard, such as tracking feedback submission velocity and average rating trends over time.

---

### 6. Share one instance where AI helped you.

- Rapidly configuring the RTK Query slice and setting up database models, generating clean TypeScript definitions for the feedback rows and response payload objects.

---

### 7. Share one instance where you disagreed with AI and why.

- Sometimes the AI did not follow best coding practices, for example suggesting multiple separate `useState` declarations instead of combining related and dependent states into a single unified object state.

---

### 8. What would break first if this application suddenly had 100,000 users?

- **Browser Tab Memory**: Fetching all feedback rows in a single query would lead to loading large amounts of data into the Redux store, causing substantial DOM rendering delays and crashing client browser tabs.
- **Supabase API Rate Limits / Database Spam**: Anonymous insert policy with no rate-limiting or CAPTCHA validation would allow malicious script attacks to flood the database with garbage records.

---

### 9. What is one thing in this assignment that you would improve, change, or challenge?

- **Authentication & Dashboard Security**: Currently, anyone can access the analytics dashboard and submit entries. In a real product, we should use user authentication tokens to validate users, allowing only authorized users to submit their feedback, and reserving dashboard/analytics access strictly for administrators.

---
