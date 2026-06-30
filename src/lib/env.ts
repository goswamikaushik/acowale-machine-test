import { z } from 'zod';

const clientSchema = z.object({
  NEXT_PUBLIC_DOMAIN: z.url()
});

export const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN
});

export const DOMAIN = clientEnv.NEXT_PUBLIC_DOMAIN;
