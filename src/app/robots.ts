import type { MetadataRoute } from 'next';
import { DOMAIN } from '@/lib/env';
import { SITE_ROUTES } from '@/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [SITE_ROUTES.HOME, SITE_ROUTES.FEEDBACK, SITE_ROUTES.DASHBOARD]
    },
    sitemap: `${DOMAIN}/sitemap.xml`
  };
}
