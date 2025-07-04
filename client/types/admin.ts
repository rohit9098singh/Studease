export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "instructor" | "student"
  status: "active" | "inactive" | "suspended"
  enrolledCourses: number
  joinedAt: string
  lastActive: string
}