/* eslint-disable */
import { AreaGraph } from '@/components/charts/area-graph'
import { PieGraph } from '@/components/charts/pie-graph'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type User from '@/lib/db/models/User'
import { countDocuments } from '@/lib/utils/server'
import ApplicantDataTable, { Row } from './applications/ApplicantDataTable'
import type { ChartData } from '@/components/charts/area-graph'
import clientPromise from '@/lib/db'

type appliedDate = {
    applied: Date
}



function countApplicationsByMonth(appliedDate: appliedDate[]) {
    // Parse the dates into Date objects
    const dates = appliedDate.map(({ applied }) => new Date(applied));

    // Find the latest date by converting each date to its timestamp using getTime()
    const latestDate = new Date(Math.max(...dates.map(date => date.getTime())));

    // Initialize counts for the last 6 months
    const counts = Array(6).fill(0);

    // Iterate over each date and increment the appropriate month counter
    dates.forEach(date => {
        // Calculate the difference in months between the current date and the latest date
        const monthsDiff = latestDate.getFullYear() * 12 + latestDate.getMonth() - (date.getFullYear() * 12 + date.getMonth());

        // Only consider dates within the last 6 months
        if (monthsDiff >= 0 && monthsDiff < 6) {
            counts[monthsDiff]++;
        }
    });

    // Create a mapping of the counts with month names for display
    const monthNames = [];
    for (let i = 0; i < 6; i++) {
        const date = new Date(latestDate);
        date.setMonth(date.getMonth() - i);
        const monthName = date.toLocaleString('default', { month: 'long' });
        monthNames.push(monthName);
    }

    // Reverse counts and monthNames arrays to start from the oldest to the latest month
    return monthNames.reverse().map((month, index) => ({
        month,
        applications: counts.reverse()[index] as number,
    } as ChartData));
}

export default async function page() {
    try {
        const client = await clientPromise

        const applications = (await client
            .db()
            .collection<User>('users')
            .aggregate([
                {
                    $match: {
                        application: { $exists: true },
                    },
                },
                {
                    $set: {
                        'application.email': '$email',
                        'application.resume': {
                            $cond: {
                                if: {
                                    $regexMatch: {
                                        input: {
                                            $substrCP: [
                                                '$application.resume',
                                                0,
                                                32,
                                            ],
                                        },
                                        regex: '^data:application/pdf;base64,.',
                                    },
                                },
                                then: true,
                                else: false,
                            },
                        },
                        'application.status': {
                            $cond: {
                                if: '$applicationStatus',
                                then: '$applicationStatus',
                                else: 'undecided',
                            },
                        },
                        'application.checkedIn': '$checkedIn',
                    },
                },
                {
                    $replaceRoot: {
                        newRoot: '$application',
                    },
                },
            ])
            .toArray()) as Row[]

        const appliedTime = await client.db().collection<User>('users').find({ applied: { $exists: true } }, { projection: { applied: 1, _id: 0 } }).toArray() as appliedDate[]
        const chartData = countApplicationsByMonth(appliedTime)

        const totalRegistrations = await countDocuments(client, 'users', true)
        const totalAccepted = applications.filter(
            (application) => application.status === 'accepted'
        ).length
        return (
            <div className="space-y-2">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Hi, Admin 👋
                    </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Applications
                            </CardTitle>
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg> */}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {applications.length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                # of applications
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Users
                            </CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {totalRegistrations}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                accounts in hackuta.org
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Accepted
                            </CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <rect
                                    width="20"
                                    height="14"
                                    x="2"
                                    y="5"
                                    rx="2"
                                />
                                <path d="M2 10h20" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalAccepted}</div>
                            <p className="text-xs text-muted-foreground">
                                accplications
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Checked In
                            </CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {
                                    applications.filter(
                                        (application) => application.checkedIn
                                    ).length
                                }
                            </div>
                            <p className="text-xs text-muted-foreground">
                                +0 since last hour
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <div className="col-span-4">
                        {/* <AreaGraph
                            applications={applications.map((a) => ({
                                ...a,
                                checkedIn: a.checkedIn?.toString(),
                            }))}
                        /> */}
                        <AreaGraph chartData={chartData} />
                    </div>
                    <div className="col-span-4 md:col-span-3">
                        <PieGraph
                            applications={applications.map((a) => ({
                                ...a,
                                checkedIn: a.checkedIn?.toString(),
                            }))}
                        />
                    </div>
                </div>
            </div>
        )
    } catch (e) {
        console.log(e, '[/admin/post]')
        throw e
    }
}
