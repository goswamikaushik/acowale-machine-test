import { ChartPieInteractive } from './chart-pie-interactive';
import { ChartPieSimple } from './chart-pie-simple';
import { ChartPieSeparatorNone } from './chart-pie-separator-none';
import { ChartPieLabel } from './chart-pie-label';
import { ChartPieLabelCustom } from './chart-pie-label-custom';
import { ChartPieLabelList } from './chart-pie-label-list';
import { ChartPieLegend } from './chart-pie-legend';
import { ChartPieDonut } from './chart-pie-donut';
import { ChartPieDonutActive } from './chart-pie-donut-active';
import { ChartPieDonutText } from './chart-pie-donut-text';
import { ChartPieStacked } from './chart-pie-stacked';

const PieCharts = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight">Pie Charts</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <ChartPieInteractive />
        </div>
        <ChartPieSimple />
        <ChartPieSeparatorNone />
        <ChartPieLabel />
        <ChartPieLabelCustom />
        <ChartPieLabelList />
        <ChartPieLegend />
        <ChartPieDonut />
        <ChartPieDonutActive />
        <ChartPieDonutText />
        <ChartPieStacked />
      </div>
    </section>
  );
};

export default PieCharts;
