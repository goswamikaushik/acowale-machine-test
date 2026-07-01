export function CategoryBadge({ category }: { category: string }) {
  const styles: Record<string, string> = {
    Product: 'bg-blue-500/10 text-brand-blue border-brand-blue/20 dark:bg-blue-500/20',
    Service: 'bg-emerald-500/10 text-emerald border-emerald/20 dark:bg-emerald-500/20',
    Support: 'bg-purple-500/10 text-brand-purple border-brand-purple/20 dark:bg-purple-500/20',
    Billing: 'bg-amber-500/10 text-amber border-amber/20 dark:bg-amber-500/20',
    Other: 'bg-slate-500/10 text-muted-foreground border-border/80 dark:bg-slate-500/20'
  };

  const currentStyle = styles[category] || styles.Other;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${currentStyle}`}
    >
      {category}
    </span>
  );
}
