'use client'

import { useState } from 'react'
import { X, Check } from 'lucide-react'

interface InquiryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function InquiryModal({ open, onOpenChange }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'SSC Combined Graduate Level',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setLoading(false)
      setTimeout(() => {
        onOpenChange(false)
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: 'SSC Combined Graduate Level',
          message: ''
        })
      }, 2000)
    }, 1000)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-white rounded-t-2xl">
          <h2 className="font-serif font-bold text-xl text-foreground">Inquiry Form</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="p-1 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We&apos;ll get back to you shortly with more information about your chosen course.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Course */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">
                  Course Interest *
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                >
                  <option>SSC Combined Graduate Level</option>
                  <option>SSC 10+2 Level Preparation</option>
                  <option>Competitive Exams Masterclass</option>
                  <option>Mathematics Intensive</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white resize-none"
                  placeholder="Any additional questions or details..."
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Inquiry'}
              </button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We&apos;ll contact you within 24 hours to discuss your course and enrollment options.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
