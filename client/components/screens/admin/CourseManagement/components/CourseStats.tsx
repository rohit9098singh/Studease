"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, CheckCircle, Edit, DollarSign } from "lucide-react"

export default function CourseStats() {
  const stats = [
    { title: "Total Courses", value: "156", icon: BookOpen },
    { title: "Active Courses", value: "142", icon: CheckCircle },
    { title: "Draft Courses", value: "14", icon: Edit },
    { title: "Total Revenue", value: "$48,392", icon: DollarSign },
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
