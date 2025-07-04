"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus } from "lucide-react"

interface CourseManagementHeaderProps {
  onAddCourse: () => void
}

export default function CourseManagementHeader({ onAddCourse }: CourseManagementHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Management</h1>
        <p className="text-gray-600">Manage your courses and content</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search courses..." className="pl-10 w-80 rounded-lg" />
        </div>
        <Button variant="outline" className="rounded-lg bg-transparent">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button onClick={onAddCourse} className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg">
          <Plus className="w-4 h-4 mr-2" />
          Add New Course
        </Button>
      </div>
    </div>
  )
}
