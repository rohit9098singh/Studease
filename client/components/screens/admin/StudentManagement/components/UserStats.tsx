"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, BookOpen, TrendingUp } from "lucide-react"

export default function UserStats() {
  const stats = [
    { title: "Total Users", value: "12,847", icon: Users },
    { title: "Students", value: "11,234", icon: GraduationCap },
    { title: "Instructors", value: "1,598", icon: BookOpen },
    { title: "Active Today", value: "3,456", icon: TrendingUp },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <stat.icon className="w-8 h-8 text-violet-500" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
