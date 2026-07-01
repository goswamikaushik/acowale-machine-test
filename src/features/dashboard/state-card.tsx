import { ArrowDown, ArrowUp } from 'lucide-react';
import { FC } from 'react';
import { StatCardProps } from './type';

const StatCard: FC<StatCardProps> = ({ icon, iconBg, label, value, suffix, trend, positive }) => {
  const TrendIcon = positive ? ArrowUp : ArrowDown;
  return (
    <div className="group border-border/80 bg-card shadow-soft hover:shadow-elegant relative overflow-hidden rounded-3xl border p-5 transition-all hover:-translate-y-0.5">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg} ring-border/60 ring-1`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-muted-foreground text-xs font-medium">{label}</div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-tight">{value}</span>
            {suffix && <span className="text-muted-foreground text-xs">{suffix}</span>}
          </div>
        </div>
      </div>
      <div
        className={`mt-3 inline-flex items-center gap-1 text-xs font-medium ${positive ? 'text-emerald' : 'text-rose'}`}
      >
        <TrendIcon className="h-3 w-3" />
        {trend}
        <span className="text-muted-foreground font-normal">from last month</span>
      </div>
    </div>
  );
};

export default StatCard;
