export interface StatCardProps {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
  suffix?: string;
}

export interface PanelProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}
