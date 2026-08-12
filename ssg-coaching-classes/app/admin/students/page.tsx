'use client'

import { Search, Download, UserPlus } from 'lucide-react'

const students = [
  { id: 1, name: 'Rahul Kumar', email: 'rahul@email.com', course: 'SSC CGL', joinDate: '2024-01-08', status: 'Active' },
  { id: 2, name: 'Priya Sharma', email: 'priya@email.com', course: 'SSC 10+2', joinDate: '2024-01-10', status: 'Active' },
  { id: 3, name: 'Amit Patel', email: 'amit@email.com', course: 'Banking Exams', joinDate: '2024-01-12', status: 'Active' },
  { id: 4, name: 'Anjali Singh', email: 'anjali@email.com', course: 'SSC CGL', joinDate: '2024-01-09', status: 'Active' },
  { id: 5, name: 'Vikram Desai', email: 'vikram@email.com', course: 'UPSC Prep', joinDate: '2024-01-11', status: 'Inactive' },
]

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Students</h1>
          <p className="text-muted-foreground mt-2">View and manage student records</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 btn-primary">
            <UserPlus className="w-4 h-4" />
            Add Student
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-64 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search by name or email..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
          />
        </div>
        <select className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-sm">
          <option>All Courses</option>
          <option>SSC CGL</option>
          <option>SSC 10+2</option>
          <option>Banking Exams</option>
        </select>
        <select className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-sm">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Student Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Email</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Course</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Join Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{student.name}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{student.email}</td>
                  <td className="py-4 px-6 text-sm text-foreground">{student.course}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{student.joinDate}</td>
                  <td className="py-4 px-6 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm">
                    <button className="text-primary hover:underline transition-colors">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing 5 of 234 students</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium disabled:opacity-50">
            Previous
          </button>
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
