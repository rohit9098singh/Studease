"use client"

import { Card, CardContent } from "@/components/ui/card"

interface AnalyticsCardProps {
  title: string
  value: string
  change: string
  color: string
  icon: any
}

export default function AnalyticsCard({ title, value, change, color, icon: IconComponent }: AnalyticsCardProps) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 bg-blue-400",
    indigo: "from-indigo-500 to-indigo-600 bg-indigo-400",
    violet: "from-violet-500 to-violet-600 bg-violet-400",
    purple: "from-purple-500 to-purple-600 bg-purple-400",
  }

  const gradientClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue

  return (
    <Card
      className={`bg-gradient-to-r ${gradientClass.split(" ")[0]} ${gradientClass.split(" ")[1]} text-white border-0 shadow-lg`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm font-medium">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-white/80 text-sm">{change}</p>
          </div>
          <div className={`${gradientClass.split(" ")[2]} p-3 rounded-full`}>
            <IconComponent className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
