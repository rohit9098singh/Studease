"use client"

import CourseManagement from "../../CourseManagement/CourseManagement"
import Dashboard from "../../Dashboard/Dashboard"
import StudentManagement from "../../StudentManagement/StudentManagement"
// import Home from "../Home"

interface AdminContentProps {
    activeTab: string
}

export default function AdminContent({ activeTab }: AdminContentProps) {
    switch (activeTab) {
         case "Home":
            return <Dashboard />
        case "courses":
            return <CourseManagement />
        case "users":
            return <StudentManagement />
        default:
             return <Dashboard />
    }
}
