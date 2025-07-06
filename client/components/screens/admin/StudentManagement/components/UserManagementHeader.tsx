"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useModal } from "@/context/modal-context"
import AddUser from "./AddUser"


interface props {
  searchText: string
  setSearchText: (text: string) => void
  filter: "all" | "active" | "inactive"
  setFilter: (status: "all" | "active" | "inactive") => void
}
export default function UserManagementHeader({ searchText, setSearchText, filter, setFilter }: props) {

  const {openSheet}=useModal();

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">User Management</h1>
        <p className="text-gray-600">Manage students, instructors, and administrators</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value as string)}
            placeholder="Search users..." className="pl-10 w-80 rounded-lg" />
        </div>
        <Select value={filter} onValueChange={(value) => setFilter(value as "all" | "active" | "inactive")}>
          <SelectTrigger className="w-[150px] rounded-lg border px-3 py-2 text-sm text-gray-700">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={()=>openSheet(<AddUser/>)}
         className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>
    </div>
  )
}
