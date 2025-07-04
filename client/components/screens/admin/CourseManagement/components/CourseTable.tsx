"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Star } from "lucide-react"
import type { Course } from "@/types/admin"
import { Button } from "@/components/ui/button"
import { Eye, Edit, Trash2 } from "lucide-react"

interface CourseTableProps {
    courses: Course[]
}

export default function CourseTable({ courses }: CourseTableProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "active":
                return "bg-green-100 text-green-800"
            case "draft":
                return "bg-yellow-100 text-yellow-800"
            case "archived":
                return "bg-gray-100 text-gray-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <Card className="shadow-lg border-0">
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Course</TableHead>
                            <TableHead>Instructor</TableHead>
                            <TableHead>Students</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {courses.map((course) => (
                            <TableRow key={course.id}>
                                <TableCell>
                                    <div>
                                        <p className="font-medium text-gray-900">{course.title}</p>
                                        <p className="text-sm text-gray-600">{course.category}</p>
                                    </div>
                                </TableCell>
                                <TableCell>{course.instructor}</TableCell>
                                <TableCell>{course.students}</TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                                        {course.rating}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge className={`rounded-full ${getStatusColor(course.status)}`}>{course.status}</Badge>
                                </TableCell>
                                <TableCell>${course.price}</TableCell>
                                <TableCell>
                                    <div className="flex items-center space-x-2">
                                        <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                        <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                        <Button variant="outline" size="sm" className="rounded-lg bg-transparent text-red-600">
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
