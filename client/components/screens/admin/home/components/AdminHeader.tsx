"use client"

import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

const  AdminHeader=()=> {
  return (
    <header className="bg-white shadow-sm border-b px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard h</h1>
          <p className="text-gray-600">Welcome back, Administrator</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
          <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">AD</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader;
