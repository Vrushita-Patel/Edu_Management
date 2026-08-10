import type { Metadata } from 'next'
import AdminSidebar from '@/components/admin/sidebar'
import AdminHeader from '@/components/admin/header'

export const metadata: Metadata = {
  title: 'Admin Dashboard - SSG Coaching',
  description: 'Manage courses, students, and inquiries',
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen bg-secondary">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
