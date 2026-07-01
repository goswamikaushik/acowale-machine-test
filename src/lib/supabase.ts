import { createClient } from '@supabase/supabase-js';
import { clientEnv } from './env';

const { NEXT_PUBLIC_PROJECT_URL, NEXT_PUBLIC_PUBLISHABLE_KEY } = clientEnv;

export const supabase = createClient(NEXT_PUBLIC_PROJECT_URL, NEXT_PUBLIC_PUBLISHABLE_KEY);
