"use client"

import { useParams, useRouter } from "next/navigation"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { User, Mail, Calendar, BookOpen, Phone, MapPin, ArrowLeft, Edit, GraduationCap } from "lucide-react"
import { useModal } from "@/context/modal-context"
import EditUser from "./component/EditUser"

export default function UserDetails() {
    const params = useParams()
    const {openSheet} =useModal();
    const router = useRouter()
    const userId = params?.id as string

    // Simple mock data - easy to replace with real data later
    const student = {
        id: userId,
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        phone: "+1 (555) 123-4567",
        status: "Active",
        joinedDate: "January 15, 2024",
        location: "San Francisco, CA",
        totalCourses: 4,
        completedCourses: 2,
    }

    const courses = [
        {
            id: 1,
            title: "React Fundamentals",
            progress: 100,
            status: "Completed",
            score: 92,
        },
        {
            id: 2,
            title: "Node.js Backend Development",
            progress: 75,
            status: "In Progress",
            score: null,
        },
        {
            id: 3,
            title: "TypeScript Advanced",
            progress: 100,
            status: "Completed",
            score: 88,
        },
        {
            id: 4,
            title: "Database Design",
            progress: 30,
            status: "In Progress",
            score: null,
        },
    ]

    const getStatusColor = (status: string) => {
        if (status === "Active") return "bg-green-200 text-green-800"
        if (status === "Completed") return "bg-green-200 text-green-800"
        if (status === "In Progress") return "bg-blue-200 text-blue-800"
        return "bg-gray-200 text-gray-800"
    }

    return (
        <div className="p-8  max-w-7xl mx-auto">
            {/* Header with Back Button */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" onClick={() => router.back()}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                           Back to Dashboard
                    </Button>
                    <h1 className="text-2xl font-bold">Student Details</h1>
                </div>
                <Button variant="outline" size="sm" onClick={()=>{openSheet(<EditUser/>)}}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Student
                </Button>
            </div>

            {/* Student Profile Card */}
            <Card className="mb-6 shadow-sm border bg-white">
                <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                        <Avatar className="w-20 h-20">
                            <AvatarFallback className="bg-violet-500 text-white text-xl">
                                {student.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-4">
                                <h2 className="text-xl font-bold">{student.name}</h2>
                                <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-2 bg-blue-200 px-3 py-2 rounded-md">
                                    <Mail className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm text-gray-800">{student.email}</span>
                                </div>

                                <div className="flex items-center space-x-2 bg-green-200 px-3 py-2 rounded-md">
                                    <Phone className="w-4 h-4 text-green-500" />
                                    <span className="text-sm text-gray-800">{student.phone}</span>
                                </div>

                                <div className="flex items-center space-x-2 bg-yellow-200 px-3 py-2 rounded-md">
                                    <MapPin className="w-4 h-4 text-yellow-500" />
                                    <span className="text-sm text-gray-800">{student.location}</span>
                                </div>

                                <div className="flex items-center space-x-2 bg-indigo-200 px-3 py-2 rounded-md">
                                    <Calendar className="w-4 h-4 text-indigo-500" />
                                    <span className="text-sm text-gray-800">Joined: {student.joinedDate}</span>
                                </div>

                                <div className="flex items-center space-x-2 bg-pink-200 px-3 py-2 rounded-md">
                                    <User className="w-4 h-4 text-pink-500" />
                                    <span className="text-sm text-gray-800">ID: {student.id}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-blue-200 border-none shadow-sm">
                    <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                            <span className="text-sm text-gray-600">Total Courses</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{student.totalCourses}</p>
                    </CardContent>
                </Card>

                <Card className="bg-green-200 border-none shadow-sm">
                    <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <GraduationCap className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-gray-600">Completed</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{student.completedCourses}</p>
                    </CardContent>
                </Card>

                <Card className="bg-purple-200 border-none shadow-sm">
                    <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <Calendar className="w-5 h-5 text-purple-600" />
                            <span className="text-sm text-gray-600">Success Rate</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                            {Math.round((student.completedCourses / student.totalCourses) * 100)}%
                        </p>
                    </CardContent>
                </Card>
            </div>


            <div className="flex w-full gap-4 ">

                <Card className="w-3/4">
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <BookOpen className="w-5 h-5" />
                            <span>Course Progress</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {courses.map((course) => (
                                <div key={course.id} className="border rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <h3 className="font-semibold">{course.title}</h3>
                                            <Badge className={getStatusColor(course.status)} >
                                                {course.status}
                                            </Badge>
                                        </div>
                                        {course.score && (
                                            <div className="text-right">
                                                <p className="text-sm text-gray-500">Score</p>
                                                <p className="font-bold text-lg">{course.score}%</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Progress</span>
                                            <span>{course.progress}%</span>
                                        </div>
                                        <Progress value={course.progress} className="h-2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Additional Info */}
                <Card className=" w-1/2 h-fit">
                    <CardHeader>
                        <CardTitle>Additional Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-2">Account Details</h4>
                                <div className="space-y-2 text-sm">
                                    <p>
                                        <strong>Student ID:</strong> {student.id}
                                    </p>
                                    <p>
                                        <strong>Account Status:</strong> {student.status}
                                    </p>
                                    <p>
                                        <strong>Registration Date:</strong> {student.joinedDate}
                                    </p>
                                    <p>
                                        <strong>Last Login:</strong> December 20, 2024
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-2">Learning Summary</h4>
                                <div className="space-y-2 text-sm">
                                    <p>
                                        <strong>Total Study Hours:</strong> 120 hours
                                    </p>
                                    <p>
                                        <strong>Average Score:</strong> 90%
                                    </p>
                                    <p>
                                        <strong>Certificates Earned:</strong> 2
                                    </p>
                                    <p>
                                        <strong>Current Streak:</strong> 15 days
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
