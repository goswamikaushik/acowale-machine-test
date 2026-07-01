import { FC } from 'react';
import { PanelProps } from './type';

const Panel: FC<PanelProps> = ({ title, icon, children }) => {
  return (
    <section className="border-border/80 bg-card shadow-soft rounded-3xl border p-6">
      <header className="mb-5 flex items-center gap-2">
        {icon}
        <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
      </header>
      {children}
    </section>
  );
};

export default Panel;
