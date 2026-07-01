export interface StatCardProps {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
  suffix?: string;
  trend: string;
  positive: boolean;
}

export interface PanelProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}
