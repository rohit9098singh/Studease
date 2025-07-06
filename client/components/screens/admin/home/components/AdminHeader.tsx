"use client"

import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Bell, LogOut, User } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const AdminHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  // ✅ Click outside handler
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-sm border-b px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, Administrator</p>
        </div>

        <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
          <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>

          <div
            className="cursor-pointer"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="User" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>

          {showDropdown && (
            <div className="absolute right-1 mt-30 w-48 bg-white border rounded-lg shadow-lg p-4 z-50">
              <div className="mb-2 flex gap-2">
                <div className="">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="User" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="text-sm font-semibold">Admin User</p>
                  <p className="text-xs text-gray-500">admin@example.com</p>
                </div>
              </div>
              <hr className="my-2" />
              <Button variant="ghost" className="w-full text-left px-2 py-1 text-sm flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </Button>

              <Button variant="ghost" className="w-full text-left px-2 py-1 text-sm flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
