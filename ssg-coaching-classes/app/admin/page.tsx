'use client'

import { BarChart3, Users, BookOpen, MessageSquare, TrendingUp } from 'lucide-react'

const stats = [
  { title: 'Total Students', value: '5,234', change: '+12%', icon: Users, color: 'bg-blue-100 text-blue-600' },
  { title: 'Active Courses', value: '4', change: 'On Schedule', icon: BookOpen, color: 'bg-purple-100 text-purple-600' },
  { title: 'Inquiries', value: '187', change: '+28 this week', icon: MessageSquare, color: 'bg-green-100 text-green-600' },
  { title: 'Revenue', value: '₹42.5L', change: '+18%', icon: TrendingUp, color: 'bg-orange-100 text-orange-600' },
]

const recentInquiries = [
  { id: 1, name: 'Rajesh Kumar', email: 'rajesh@email.com', course: 'SSC CGL', date: '2024-01-15', status: 'New' },
  { id: 2, name: 'Priya Sharma', email: 'priya@email.com', course: 'Banking Exams', date: '2024-01-14', status: 'Contacted' },
  { id: 3, name: 'Amit Singh', email: 'amit@email.com', course: 'SSC 10+2', date: '2024-01-13', status: 'Enrolled' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome to SSG Coaching Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="bg-white rounded-lg border border-border p-6 hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                  <p className="text-xs text-green-600 mt-2">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Content Area */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Inquiries */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-border p-6">
          <h2 className="font-bold text-lg text-foreground mb-4">Recent Inquiries</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Course</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="py-3 px-4 text-sm">
                      <div>
                        <p className="font-medium text-foreground">{inquiry.name}</p>
                        <p className="text-xs text-muted-foreground">{inquiry.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-foreground">{inquiry.course}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{inquiry.date}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        inquiry.status === 'New' ? 'bg-blue-100 text-blue-700' :
                        inquiry.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {inquiry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-border p-6">
          <h2 className="font-bold text-lg text-foreground mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-all text-sm font-semibold">
              Add New Course
            </button>
            <button className="w-full px-4 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition-all text-sm font-semibold">
              Send Notification
            </button>
            <button className="w-full px-4 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-all text-sm font-semibold">
              View Reports
            </button>
            <button className="w-full px-4 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-all text-sm font-semibold">
              Manage Admins
            </button>
          </div>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">Tip:</span> Use the navigation menu to manage courses, students, and view analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
