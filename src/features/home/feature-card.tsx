import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { FeatureCardProps } from '../type';

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description, ctaLabel, href }) => {
  return (
    <div className="group border-border/80 bg-card shadow-soft hover:shadow-glow relative flex flex-col items-center rounded-3xl border p-8 text-center transition-all duration-300 hover:-translate-y-1 sm:p-10">
      <div className="via-brand-purple/40 absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent to-transparent" />
      <div className="bg-gradient-soft ring-border mb-6 flex h-20 w-20 items-center justify-center rounded-full ring-1 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="text-muted-foreground mt-3 max-w-xs text-sm leading-relaxed">{description}</p>
      <Link
        href={href}
        className="bg-gradient-brand shadow-elegant hover:shadow-glow mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default FeatureCard;
