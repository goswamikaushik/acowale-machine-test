import { ChartAreaInteractive } from './chart-area-interactive';
import { ChartAreaAxes } from './chart-area-axes';
import { ChartAreaDefault } from './chart-area-default';
import { ChartAreaGradient } from './chart-area-gradient';
import { ChartAreaLinear } from './chart-area-linear';
import { ChartAreaStacked } from './chart-area-stacked';
import { ChartAreaStackedExpand } from './chart-area-stacked-expand';
import { ChartAreaStep } from './chart-area-step';
import { ChartAreaIcons } from './chart-area-icons';

const AreaCharts = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight">Area Charts</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <ChartAreaInteractive />
        </div>
        <ChartAreaAxes />
        <ChartAreaDefault />
        <ChartAreaGradient />
        <ChartAreaIcons />
        <ChartAreaLinear />
        <ChartAreaStacked />
        <ChartAreaStackedExpand />
        <ChartAreaStep />
      </div>
    </section>
  );
};

export default AreaCharts;
