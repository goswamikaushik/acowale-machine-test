import { ChartBarInteractive } from './chart-bar-interactive';
import { ChartBarDefault } from './chart-bar-default';
import { ChartBarHorizontal } from './chart-bar-horizontal';
import { ChartBarMultiple } from './chart-bar-multiple';
import { ChartBarStacked } from './chart-bar-stacked';
import { ChartBarLabel } from './chart-bar-label';
import { ChartBarLabelCustom } from './chart-bar-label-custom';
import { ChartBarMixed } from './chart-bar-mixed';
import { ChartBarActive } from './chart-bar-active';
import { ChartBarNegative } from './chart-bar-negative';

const BarCharts = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight">Bar Charts</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <ChartBarInteractive />
        </div>
        <ChartBarDefault />
        <ChartBarHorizontal />
        <ChartBarMultiple />
        <ChartBarStacked />
        <ChartBarLabel />
        <ChartBarLabelCustom />
        <ChartBarMixed />
        <ChartBarActive />
        <ChartBarNegative />
      </div>
    </section>
  );
};

export default BarCharts;
