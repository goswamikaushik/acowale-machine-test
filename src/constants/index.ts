import { DOMAIN as base } from '@/lib/env';
import { Metadata } from 'next';

export const SITE_ROUTES = {
  MARKETING: {
    HOME: '/',
    ABOUT: '/about',
    TERMS_OF_SERVICE: '/terms-of-service',
    PRIVACY_POLICY: '/privacy-policy',
    CONTACT_US: '/contact-us'
  },
  AUTH: {
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    FORGOT_PASSWORD: '/forgot-password'
  },
  APP: {
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    CHARTS: '/charts'
  }
};
export const AUTH_ROUTES = Object.values(SITE_ROUTES.AUTH);
export const APP_ROUTES = Object.values(SITE_ROUTES.APP);
export const MARKETING_ROUTES = Object.values(SITE_ROUTES.MARKETING);

export const METADATA: Record<string, Metadata> = {
  [SITE_ROUTES.MARKETING.HOME]: {
    title: 'Home',
    description: 'Home',
    alternates: {
      canonical: base
    }
  },
  [SITE_ROUTES.AUTH.SIGN_UP]: {
    title: 'Sign Up',
    description: 'Sign Up',
    alternates: {
      canonical: `${base}${SITE_ROUTES.AUTH.SIGN_UP}`
    }
  },
  [SITE_ROUTES.AUTH.SIGN_IN]: {
    title: 'Sign In',
    description: 'Sign In',
    alternates: {
      canonical: `${base}${SITE_ROUTES.AUTH.SIGN_IN}`
    }
  },
  [SITE_ROUTES.AUTH.FORGOT_PASSWORD]: {
    title: 'Forgot Password',
    description: 'Reset your password',
    alternates: {
      canonical: `${base}${SITE_ROUTES.AUTH.FORGOT_PASSWORD}`
    }
  },
  [SITE_ROUTES.MARKETING.PRIVACY_POLICY]: {
    title: 'Privacy Policy',
    description: 'Privacy Policy',
    alternates: {
      canonical: `${base}${SITE_ROUTES.MARKETING.PRIVACY_POLICY}`
    }
  },
  [SITE_ROUTES.MARKETING.TERMS_OF_SERVICE]: {
    title: 'Terms of Service',
    description: 'Terms of Service',
    alternates: {
      canonical: `${base}${SITE_ROUTES.MARKETING.TERMS_OF_SERVICE}`
    }
  },
  [SITE_ROUTES.MARKETING.CONTACT_US]: {
    title: 'Contact Us',
    description: 'Contact Us',
    alternates: {
      canonical: `${base}${SITE_ROUTES.MARKETING.CONTACT_US}`
    }
  },
  [SITE_ROUTES.MARKETING.ABOUT]: {
    title: 'About Us',
    description: 'About Us',
    alternates: {
      canonical: `${base}${SITE_ROUTES.MARKETING.ABOUT}`
    }
  },
  [SITE_ROUTES.APP.DASHBOARD]: {
    title: 'Dashboard',
    description: 'Dashboard',
    alternates: {
      canonical: `${base}${SITE_ROUTES.APP.DASHBOARD}`
    }
  },
  [SITE_ROUTES.APP.PROFILE]: {
    title: 'Profile',
    description: 'Profile',
    alternates: {
      canonical: `${base}${SITE_ROUTES.APP.PROFILE}`
    }
  }
} as const;

export const SOCIAL_LINKS = {
  COMPANY_WEBSITE: 'https://goswamikaushik.dev'
};
