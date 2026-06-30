import type { MetadataRoute } from 'next';
import { DOMAIN } from '@/lib/env';
import { MARKETING_ROUTES, AUTH_ROUTES } from '@/constants';
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes = [...MARKETING_ROUTES, ...AUTH_ROUTES];

  return publicRoutes.map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8
  }));
}
