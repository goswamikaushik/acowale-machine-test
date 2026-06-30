import type { MetadataRoute } from 'next';
import { DOMAIN } from '@/lib/env';
import { SITE_ROUTES } from '@/constants';

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [SITE_ROUTES.HOME, SITE_ROUTES.FEEDBACK, SITE_ROUTES.DASHBOARD];

  return routes.map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === SITE_ROUTES.HOME ? 1 : 0.8
  }));
}
