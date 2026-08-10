'use client'

import { Plus, Edit, Trash2, Eye } from 'lucide-react'

const courses = [
  {
    id: 1,
    name: 'SSC Combined Graduate Level',
    duration: '6 months',
    students: 45,
    status: 'Active',
    price: '₹8,999',
    startDate: '2024-01-08'
  },
  {
    id: 2,
    name: 'SSC 10+2 Level Preparation',
    duration: '4 months',
    students: 38,
    status: 'Active',
    price: '₹5,999',
    startDate: '2024-01-15'
  },
  {
    id: 3,
    name: 'Competitive Exams Masterclass',
    duration: '8 months',
    students: 52,
    status: 'Active',
    price: '₹12,999',
    startDate: '2024-01-01'
  },
  {
    id: 4,
    name: 'Mathematics Intensive',
    duration: '3 months',
    students: 30,
    status: 'Upcoming',
    price: '₹3,999',
    startDate: '2024-02-01'
  },
]

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Courses</h1>
          <p className="text-muted-foreground mt-2">Create, edit, and manage all courses</p>
        </div>
        <button className="flex items-center gap-2 btn-primary">
          <Plus className="w-5 h-5" />
          Add Course
        </button>
      </div>

      {/* Courses Table */}
      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Course Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Duration</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Students</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Price</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-medium text-foreground">{course.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">Started: {course.startDate}</p>
                  </td>
                  <td className="py-4 px-6 text-sm text-foreground">{course.duration}</td>
                  <td className="py-4 px-6 text-sm">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {course.students}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm font-semibold text-foreground">{course.price}</td>
                  <td className="py-4 px-6 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.status === 'Active' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-100 rounded-lg transition-colors text-muted-foreground hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
