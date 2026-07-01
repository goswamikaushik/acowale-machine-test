import { ReactNode } from 'react';

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}
