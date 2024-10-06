'use client'

// import { TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
// import { Row } from './pie-graph'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
// const chartData = [
//     { month: 'January', applications: 186, mobile: 80 },
//     { month: 'February', applications: 305, mobile: 200 },
//     { month: 'March', applications: 237, mobile: 120 },
//     { month: 'April', applications: 73, mobile: 190 },
//     { month: 'May', applications: 209, mobile: 130 },
//     { month: 'June', applications: 214, mobile: 140 },
// ]

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))',
    },
    mobile: {
        label: 'Mobile',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig

// interface AreaGraphProps {
//     applications: Row[]
// }
export type ChartData = {
    month: string;
    applications: number;
}

export function AreaGraph({ chartData }: { chartData: ChartData[] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Area Chart </CardTitle>
                <CardDescription>
                    Showing total applied applications by month
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[310px] w-full"
                >
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        {/* <Area
                            dataKey="mobile"
                            type="natural"
                            fill="var(--color-mobile)"
                            fillOpacity={0.4}
                            stroke="var(--color-mobile)"
                            stackId="a"
                        /> */}
                        <Area
                            dataKey="applications"
                            type="natural"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            {/* Trending up by 5.2% this month{' '} */}
                            {/* <TrendingUp className="h-4 w-4" /> */}
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            May - Oct 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
