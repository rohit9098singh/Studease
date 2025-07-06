"use client"

import { useState } from "react"
import UserManagementHeader from "./components/UserManagementHeader"
import UserStats from "./components/UserStats"
import UserTable from "./components/UserTable"
import { data } from "./components/data/data"
const StudentManagement = () => {
  const [users, setUsers] = useState(data)
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState<"all" | "inactive" | "active">("all");

  const filteredUser = users.filter((user) => {
    const searchResult = user.name.toLowerCase().includes(searchText.toLowerCase()) || user.role.toLowerCase().includes(searchText.toLowerCase());
    const filteredStatus = filter === "all" ? true : user.status === filter
    return searchResult && filteredStatus
  })

  return (
    <div className="p-8">
      <UserManagementHeader searchText={searchText} filter={filter} setSearchText={setSearchText} setFilter={setFilter} />
      <UserStats />
      <UserTable users={filteredUser} />
    </div>
  )
}

export default StudentManagement;
