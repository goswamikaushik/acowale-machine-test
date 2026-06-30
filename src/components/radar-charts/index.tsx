import { ChartRadarDefault } from './chart-radar-default';
import { ChartRadarDots } from './chart-radar-dots';
import { ChartRadarLinesOnly } from './chart-radar-lines-only';
import { ChartRadarLabelCustom } from './chart-radar-label-custom';
import { ChartRadarGridCustom } from './chart-radar-grid-custom';
import { ChartRadarGridNone } from './chart-radar-grid-none';
import { ChartRadarGridCircle } from './chart-radar-grid-circle';
import { ChartRadarGridCircleNoLines } from './chart-radar-grid-circle-no-lines';
import { ChartRadarGridCircleFill } from './chart-radar-grid-circle-fill';
import { ChartRadarGridFill } from './chart-radar-grid-fill';
import { ChartRadarMultiple } from './chart-radar-multiple';
import { ChartRadarLegend } from './chart-radar-legend';

const RadarCharts = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight">Radar Charts</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ChartRadarDefault />
        <ChartRadarDots />
        <ChartRadarLinesOnly />
        <ChartRadarLabelCustom />
        <ChartRadarGridCustom />
        <ChartRadarGridNone />
        <ChartRadarGridCircle />
        <ChartRadarGridCircleNoLines />
        <ChartRadarGridCircleFill />
        <ChartRadarGridFill />
        <ChartRadarMultiple />
        <ChartRadarLegend />
      </div>
    </section>
  );
};

export default RadarCharts;
