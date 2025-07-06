"use client"

import AnalyticsCard from "./components/AnalyticsCard"
import RecentEnrollments from "./components/RecentEnrollment"
import { analyticsData, recentEnrollments } from "./components/data/data"


const Dashboard = () => {
    console.log("check it out over here ",recentEnrollments)
    return (
        <div className="p-8 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {analyticsData.map((item, index) => (
                    <AnalyticsCard key={index} {...item} />
                ))}
            </div>
            <div className=" gap-8 mb-8">
                <RecentEnrollments enrollments={recentEnrollments} />
            </div>
        </div>
    )
}

export default Dashboard