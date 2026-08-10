'use client'

import { TrendingUp, Users, BookOpen, DollarSign } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-2">Track performance metrics and insights</p>
      </div>

      {/* Date Range Selector */}
      <div className="flex gap-4">
        <select className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-sm">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 3 Months</option>
          <option>Last Year</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-border p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Total Revenue</p>
              <p className="text-3xl font-bold text-foreground mt-2">₹42.5L</p>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +18% vs last month
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-border p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-muted-foreground text-sm font-medium">New Students</p>
              <p className="text-3xl font-bold text-foreground mt-2">342</p>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +24% vs last month
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-border p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Completion Rate</p>
              <p className="text-3xl font-bold text-foreground mt-2">87%</p>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +5% vs last month
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-border p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-muted-foreground text-sm font-medium">Avg. Satisfaction</p>
              <p className="text-3xl font-bold text-foreground mt-2">4.8/5</p>
              <p className="text-xs text-green-600 mt-2">Based on 500+ reviews</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Student Growth Chart Placeholder */}
        <div className="bg-white rounded-lg border border-border p-6">
          <h3 className="font-semibold text-lg text-foreground mb-4">Student Growth</h3>
          <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg">
            <div className="text-center">
              <p className="text-muted-foreground">Chart visualization area</p>
              <p className="text-xs text-muted-foreground mt-2">Line chart showing student enrollment trends</p>
            </div>
          </div>
        </div>

        {/* Course Distribution Placeholder */}
        <div className="bg-white rounded-lg border border-border p-6">
          <h3 className="font-semibold text-lg text-foreground mb-4">Course Distribution</h3>
          <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-lg">
            <div className="text-center">
              <p className="text-muted-foreground">Chart visualization area</p>
              <p className="text-xs text-muted-foreground mt-2">Pie chart showing students per course</p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h3 className="font-semibold text-lg text-foreground mb-4">Revenue by Course</h3>
        <div className="space-y-4">
          {[
            { course: 'SSC Combined Graduate', revenue: '₹18.5L', percentage: 43 },
            { course: 'Competitive Exams Masterclass', revenue: '₹16.2L', percentage: 38 },
            { course: 'SSC 10+2 Level', revenue: '₹5.8L', percentage: 14 },
            { course: 'Mathematics Intensive', revenue: '₹2.0L', percentage: 5 },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <p className="text-sm font-medium text-foreground">{item.course}</p>
                <p className="text-sm font-semibold text-foreground">{item.revenue}</p>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2 transition-all"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{item.percentage}% of total</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
