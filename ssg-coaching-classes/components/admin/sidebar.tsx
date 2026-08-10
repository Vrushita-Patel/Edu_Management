'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BookOpen, Users, MessageSquare, BarChart3, LogOut, Settings } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Courses', href: '/admin/courses', icon: BookOpen },
  { label: 'Students', href: '/admin/students', icon: Users },
  { label: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-foreground text-white min-h-screen p-4 flex flex-col">
      {/* Logo */}
      <Link href="/admin" className="flex items-center gap-2 font-serif font-bold text-xl mb-8">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <BookOpen className="w-5 h-5" />
        </div>
        <span>SSG Admin</span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-accent text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="space-y-2 border-t border-gray-700 pt-4">
        <Link
          href="/admin/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-all"
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Account</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Site</span>
        </Link>
      </div>
    </div>
  )
}
