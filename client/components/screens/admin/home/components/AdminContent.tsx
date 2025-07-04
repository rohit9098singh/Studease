"use client"

import CourseManagement from "../../CourseManagement/CourseManagement"
import SettingsContent from "../../SettingsContent/SettingsContent"
import StudentManagement from "../../StudentManagement/StudentManagement"
// import Home from "../Home"

interface AdminContentProps {
    activeTab: string
}

export default function AdminContent({ activeTab }: AdminContentProps) {
    switch (activeTab) {
        // case "Home":
        //     return <Home />
        case "courses":
            return <CourseManagement />
        case "users":
            return <StudentManagement />
        case "settings":
            return <SettingsContent />
        default:
            return <div className="p-4">Select a tab to view content</div>
    }
}
