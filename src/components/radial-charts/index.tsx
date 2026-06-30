import { ChartRadialSimple } from './chart-radial-simple';
import { ChartRadialLabel } from './chart-radial-label';
import { ChartRadialGrid } from './chart-radial-grid';
import { ChartRadialText } from './chart-radial-text';
import { ChartRadialShape } from './chart-radial-shape';
import { ChartRadialStacked } from './chart-radial-stacked';

const RadialCharts = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight">Radial Charts</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ChartRadialSimple />
        <ChartRadialLabel />
        <ChartRadialGrid />
        <ChartRadialText />
        <ChartRadialShape />
        <ChartRadialStacked />
      </div>
    </section>
  );
};

export default RadialCharts;
