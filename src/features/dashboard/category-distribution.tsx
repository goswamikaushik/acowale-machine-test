'use client';

import { Pie, PieChart } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from '@/components/ui/chart';
import { categories } from '@/constants';
import { Feedback } from '@/redux/feedback-api';

const chartConfig = {
  count: { label: 'Feedback Count' },
  Product: { label: 'Product', color: 'var(--chart-1)' },
  Service: { label: 'Service', color: 'var(--chart-2)' },
  Support: { label: 'Support', color: 'var(--chart-3)' },
  Billing: { label: 'Billing', color: 'var(--chart-4)' },
  Other: { label: 'Other', color: 'var(--chart-5)' }
} satisfies ChartConfig;

interface ChartPieDonutProps {
  data: Feedback[];
}

export function ChartPieDonut({ data }: ChartPieDonutProps) {
  // Calculate category distribution dynamically
  const categoryCounts = categories.reduce(
    (acc, cat) => {
      acc[cat] = 0;
      return acc;
    },
    {} as Record<string, number>
  );

  data.forEach((item) => {
    const cat = item.category || 'Other';
    if (categoryCounts[cat] !== undefined) {
      categoryCounts[cat]++;
    } else {
      categoryCounts['Other']++;
    }
  });

  const chartData = Object.entries(categoryCounts)
    .filter(([, count]) => count > 0)
    .map(([category, count]) => ({
      category,
      count,
      fill: `var(--color-${category})`
    }));

  const totalFeedback = data.length;

  return (
    <Card className="border-border/80 bg-card shadow-soft flex flex-col rounded-3xl border">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-lg font-bold">Category Distribution</CardTitle>
        <CardDescription>Real-time Customer Feedback</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center justify-center pb-4">
        {totalFeedback === 0 ? (
          <div className="text-muted-foreground flex h-48 items-center justify-center text-sm">
            No feedback data available
          </div>
        ) : (
          <>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-48 w-full">
              <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={chartData}
                  dataKey="count"
                  nameKey="category"
                  innerRadius={45}
                  outerRadius={70}
                />
              </PieChart>
            </ChartContainer>

            {/* Custom Legend with Counts */}
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
              {chartData.map((item) => (
                <div key={item.category} className="flex items-center gap-1.5">
                  <div
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: (
                        chartConfig[item.category as keyof typeof chartConfig] as { color?: string }
                      )?.color
                    }}
                  />
                  <span className="text-foreground font-medium">{item.category}</span>
                  <span className="text-muted-foreground font-semibold">{item.count}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
