'use client'

import { Mail, Phone, CheckCircle, Clock, User } from 'lucide-react'

const inquiries = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh@email.com',
    phone: '+91 98765 43210',
    course: 'SSC Combined Graduate Level',
    date: '2024-01-15',
    status: 'New',
    message: 'Interested in enrolling for the SSC CGL batch.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@email.com',
    phone: '+91 98765 43211',
    course: 'Banking Exams',
    date: '2024-01-14',
    status: 'Contacted',
    message: 'Questions about the banking exam preparation program.'
  },
  {
    id: 3,
    name: 'Amit Singh',
    email: 'amit@email.com',
    phone: '+91 98765 43212',
    course: 'SSC 10+2 Level',
    date: '2024-01-13',
    status: 'Enrolled',
    message: 'Started enrollment process for 10+2 level course.'
  },
  {
    id: 4,
    name: 'Anjali Verma',
    email: 'anjali@email.com',
    phone: '+91 98765 43213',
    course: 'Mathematics Intensive',
    date: '2024-01-12',
    status: 'New',
    message: 'Wants to know about math intensive program details.'
  },
]

export default function InquiriesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Manage Inquiries</h1>
        <p className="text-muted-foreground mt-2">View and respond to student inquiries</p>
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <button className="px-4 py-2 bg-white border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium">
          All (4)
        </button>
        <button className="px-4 py-2 bg-white border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium">
          New (2)
        </button>
        <button className="px-4 py-2 bg-white border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium">
          Contacted (1)
        </button>
        <button className="px-4 py-2 bg-white border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium">
          Enrolled (1)
        </button>
      </div>

      {/* Inquiries List */}
      <div className="space-y-4">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className="bg-white rounded-lg border border-border p-6 hover:shadow-md transition-all">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Section */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      {inquiry.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{inquiry.course}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    inquiry.status === 'New' ? 'bg-blue-100 text-blue-700' :
                    inquiry.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {inquiry.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${inquiry.email}`} className="hover:text-primary transition-colors">
                      {inquiry.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${inquiry.phone}`} className="hover:text-primary transition-colors">
                      {inquiry.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{inquiry.date}</span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Message</p>
                  <p className="text-sm text-foreground">{inquiry.message}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-all text-sm font-medium">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </button>
                  <button className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-all text-sm font-medium">
                    Mark as {inquiry.status === 'New' ? 'Contacted' : 'Enrolled'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
