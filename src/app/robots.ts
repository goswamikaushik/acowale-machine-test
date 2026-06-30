import type { MetadataRoute } from 'next';
import { DOMAIN } from '@/lib/env';
import { APP_ROUTES, AUTH_ROUTES, MARKETING_ROUTES } from '@/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [...AUTH_ROUTES, ...MARKETING_ROUTES],
      disallow: [...APP_ROUTES]
    },
    sitemap: `${DOMAIN}/sitemap.xml`
  };
}
