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

export interface Course {
  id: string
  title: string
  instructor: string
  students: number
  duration: string
  rating: number
  status: "active" | "draft" | "archived"
  price: number
  category: string
  createdAt: string
}