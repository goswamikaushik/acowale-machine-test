import AreaCharts from '@/components/area-charts';
import BarCharts from '@/components/bar-charts';
import LineCharts from '@/components/line-charts';
import PieCharts from '@/components/pie-charts';
import RadarCharts from '@/components/radar-charts';
import RadialCharts from '@/components/radial-charts';

const Charts = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-col gap-8 px-4 py-6 lg:px-6">
        <AreaCharts />
        <BarCharts />
        <LineCharts />
        <PieCharts />
        <RadarCharts />
        <RadialCharts />
      </div>
    </div>
  );
};

export default Charts;
