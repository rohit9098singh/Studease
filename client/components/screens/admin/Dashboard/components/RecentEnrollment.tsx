"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

interface Enrollment {
  id:string,
  student: string
  course: string
  time: string
  avatar: string
}

interface RecentEnrollmentsProps {
  enrollments: Enrollment[]
}

export default function RecentEnrollments({ enrollments }: RecentEnrollmentsProps) {

  console.log("inside that find it out ",enrollments)

  const router = useRouter();
  const handleUserClick = (id: string) => {
    router.push(`/user/profile/${id}`)
  }
  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-gray-900">Recent Enrollments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {enrollments.map((enrollment, index) => (
            <div
              onClick={() => handleUserClick(enrollment.id)}
              key={index}
              className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center text-white font-semibold">
                {enrollment?.avatar}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{enrollment?.student}</p>
                <p className="text-sm text-gray-600">enrolled in {enrollment?.course}</p>
              </div>
              <p className="text-sm text-gray-500">{enrollment?.time}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
