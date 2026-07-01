import { z } from 'zod';

const clientSchema = z.object({
  NEXT_PUBLIC_DOMAIN: z.url(),
  NEXT_PUBLIC_PROJECT_URL: z.url(),
  NEXT_PUBLIC_PUBLISHABLE_KEY: z.string()
});

export const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  NEXT_PUBLIC_PROJECT_URL: process.env.NEXT_PUBLIC_PROJECT_URL,
  NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY
});

export const DOMAIN = clientEnv.NEXT_PUBLIC_DOMAIN;
