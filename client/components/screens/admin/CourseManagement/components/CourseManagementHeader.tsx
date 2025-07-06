"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type Props = {
  searchText: string
  setSearchText: (text: string) => void
  statusFilter: "all" | "active" | "draft"
  setStatusFilter: (status: "all" | "active" | "draft") => void
}

export default function CourseManagementHeader({
  searchText,
  setSearchText,
  statusFilter,
  setStatusFilter,
}: Props) {

  const router = useRouter();
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Management</h1>
        <p className="text-gray-600">Manage your courses and content</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search courses..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 w-80 rounded-lg"
          />
        </div>
        <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as "all" | "active" | "draft")}>
          <SelectTrigger className="w-[150px] rounded-lg border px-3 py-2 text-sm text-gray-700">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg"
          onClick={() => router.push("/admin/add-course")}
        >
          <Plus className="w-4 h-4 mr-2 cursor-pointer" />
          Add New Course
        </Button>
      </div>
    </div>
  )
}
