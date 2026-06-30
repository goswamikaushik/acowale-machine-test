import { DOMAIN as base } from '@/lib/env';
import { Metadata } from 'next';

export const SITE_ROUTES = {
  HOME: '/',
  FEEDBACK: '/feedback',
  DASHBOARD: '/dashboard'
};

export const METADATA: Record<string, Metadata> = {
  [SITE_ROUTES.HOME]: {
    title: 'Customer Feedback System',
    description:
      'Collect customer feedback and visualize insights through a clean analytics dashboard.',
    alternates: {
      canonical: base
    }
  },
  [SITE_ROUTES.FEEDBACK]: {
    title: 'Submit Feedback',
    description: 'Share your experience by submitting customer feedback.',
    alternates: {
      canonical: `${base}${SITE_ROUTES.FEEDBACK}`
    }
  },
  [SITE_ROUTES.DASHBOARD]: {
    title: 'Analytics Dashboard',
    description: 'Monitor customer feedback insights.',
    alternates: {
      canonical: `${base}${SITE_ROUTES.DASHBOARD}`
    }
  }
} as const;

export const SOCIAL_LINKS = {
  COMPANY_WEBSITE: 'https://goswamikaushik.dev'
};
