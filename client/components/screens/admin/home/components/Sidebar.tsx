"use client"

import { useAuth } from "@/context/AuthContext"
import { Home, BookOpen, Users, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface AdminSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const Sidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  const menuItems = [
    { id: "Home", label: "Dashboard", icon: Home },
    { id: "courses", label: "Course Management", icon: BookOpen },
    { id: "users", label: "User Management", icon: Users },
  ]

  const {logout}=useAuth();
  const router=useRouter()

  const handleLogout=()=>{
      logout();
      toast.success("logout successfully done ");
      router.push("/login")
  }

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 h-screen flex flex-col justify-between">
      <div>
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Admin Portal</h2>
          <p className="text-sm text-gray-600">Studease Management</p>
        </div>
        <nav className="p-4">
          {menuItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (activeTab !== item.id) setActiveTab(item.id)
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors mb-2 ${
                  activeTab === item.id
                    ? "bg-violet-50 text-violet-700 border border-violet-200"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() =>handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>    
      </div>
    </div>
  )
}

export default Sidebar
