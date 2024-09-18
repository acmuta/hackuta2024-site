'use client'

import * as React from 'react'
// import { TrendingUp } from 'lucide-react'
import { Label, Pie, PieChart } from 'recharts'
import { Application } from '@/lib/db/models/User'

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

const chartConfig = {
    applications: {
        label: 'Applicants',
    },
    chrome: {
        label: 'Chrome',
        color: 'hsl(var(--chart-1))',
    },
    safari: {
        label: 'Safari',
        color: 'hsl(var(--chart-2))',
    },
    firefox: {
        label: 'Firefox',
        color: 'hsl(var(--chart-3))',
    },
    edge: {
        label: 'Edge',
        color: 'hsl(var(--chart-4))',
    },
    other: {
        label: 'Other',
        color: 'hsl(var(--chart-5))',
    },
} satisfies ChartConfig

export type Row = Omit<Application, 'resume'> & {
    email: string
    resume: boolean
    status: 'accepted' | 'rejected' | 'waitlisted' | 'undecided'
    checkedIn: string
}

export interface ApplicantDataTableProps {
    applications: Row[]
}

export function PieGraph({ applications }: ApplicantDataTableProps) {
    const schoolCountMap = applications.reduce(
        (acc: Record<string, number>, app: Row) => {
            const school = String(app.school).trim()
            if (school) {
                acc[school] = (acc[school] || 0) + 1
            }
            return acc
        },
        {}
    )
    // console.log('SCHOOL COUNT MAP:', schoolCountMap)

    const schoolCounts = Object.entries(schoolCountMap).map(
        ([school, count]) => ({
            school,
            applications: count,
        })
    )

    // console.log('SCHOOL COUNTS:', schoolCounts)

    schoolCounts.sort((a, b) => b.applications - a.applications)

    // console.log('SCHOOL COUNTS SORTED:', schoolCounts)

    const topN = 4
    const topSchools = schoolCounts.slice(0, topN)

    // console.log('TOP SCHOOLS:', topSchools)

    const otherCount = schoolCounts
        .slice(topN)
        .reduce((sum, item) => sum + item.applications, 0)

    // console.log('OTHER COUNT:', otherCount)

    let chartData = [...topSchools]

    if (otherCount > 0) {
        chartData.push({ school: 'Other', applications: otherCount })
    }

    // console.log('NEW CHART DATA:', chartData)

    const colors = [
        'var(--color-chrome)',
        'var(--color-safari)',
        'var(--color-firefox)',
        'var(--color-edge)',
        'var(--color-other)',
    ]

    chartData = chartData.map((item, index) => ({
        ...item,
        fill: colors[index] || 'var(--default-color)',
    }))

    // console.log('EVEN NEWER CHART DATA:', chartData)

    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.applications, 0)
    }, [])

    // console.log(chartData)
    // console.log(totalVisitors)

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Top School by Number of Applicants</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[360px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="applications"
                            nameKey="school"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        'cx' in viewBox &&
                                        'cy' in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Applicants
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    From all applications on hackuta.org{' '}
                    {/* <TrendingUp className="h-4 w-4" /> */}
                </div>
                <div className="leading-none text-muted-foreground">Sample</div>
            </CardFooter>
        </Card>
    )
}
