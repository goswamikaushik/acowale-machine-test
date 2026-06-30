import { ChartLineInteractive } from './chart-line-interactive';
import { ChartLineDefault } from './chart-line-default';
import { ChartLineLinear } from './chart-line-linear';
import { ChartLineStep } from './chart-line-step';
import { ChartLineMultiple } from './chart-line-multiple';
import { ChartLineDots } from './chart-line-dots';
import { ChartLineDotsCustom } from './chart-line-dots-custom';
import { ChartLineDotsColors } from './chart-line-dots-colors';
import { ChartLineLabel } from './chart-line-label';
import { ChartLineLabelCustom } from './chart-line-label-custom';

const LineCharts = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight">Line Charts</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <ChartLineInteractive />
        </div>
        <ChartLineDefault />
        <ChartLineLinear />
        <ChartLineStep />
        <ChartLineMultiple />
        <ChartLineDots />
        <ChartLineDotsCustom />
        <ChartLineDotsColors />
        <ChartLineLabel />
        <ChartLineLabelCustom />
      </div>
    </section>
  );
};

export default LineCharts;
