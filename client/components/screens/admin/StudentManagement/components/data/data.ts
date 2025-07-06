import {User} from "@/types/admin"
 
 export const data=<User[]>([
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "student",
      status: "active",
      enrolledCourses: 3,
      joinedAt: "2024-01-15",
      lastActive: "2 hours ago",
    },
    {
      id: "2",
      name: "Bob Smith",
      email: "bob@example.com",
      role: "instructor",
      status: "active",
      enrolledCourses: 0,
      joinedAt: "2024-01-10",
      lastActive: "1 day ago",
    },
    {
      id: "3",
      name: "Carol Davis",
      email: "carol@example.com",
      role: "student",
      status: "inactive",
      enrolledCourses: 1,
      joinedAt: "2024-01-20",
      lastActive: "1 week ago",
    },
  ])