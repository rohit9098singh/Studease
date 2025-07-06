"use client"

import { useState } from "react"
import type { Course } from "@/types/admin"
import CourseManagementHeader from "./components/CourseManagementHeader"
import CourseStats from "./components/CourseStats"
import CourseTable from "./components/CourseTable"
import { data } from "./components/data/data"

export default function CourseManagement() {
  const [courses] = useState<Course[]>(data)
  const [searchText, setSearchText] = useState("")
  const [statusFilter, setStatusFilter] =
    useState<"all" | "active" | "draft">("all")

  const filteredCourses = courses.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchText.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchText.toLowerCase())

    const matchesStatus =
      statusFilter === "all" ? true : course.status === statusFilter

    return matchesSearch && matchesStatus
  })


  return (
    <div className="p-8">
      <CourseManagementHeader
        searchText={searchText}
        setSearchText={setSearchText}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <CourseStats />
      <CourseTable courses={filteredCourses} />
    </div>
  )
}
