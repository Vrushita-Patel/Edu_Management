'use client'

import { Save, Lock, Mail, Phone, MapPin } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account and system settings</p>
      </div>

      {/* Institute Information */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h2 className="font-semibold text-lg text-foreground mb-4">Institute Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Institute Name</label>
            <input
              type="text"
              defaultValue="SSG Coaching Classes"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Description</label>
            <textarea
              defaultValue="Premier coaching institute for competitive exams and academic excellence."
              rows={3}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white resize-none"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Phone Number
              </label>
              <input
                type="tel"
                defaultValue="+91 98765 43210"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Address
              </label>
              <input
                type="email"
                defaultValue="info@ssgcoaching.com"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Address
            </label>
            <textarea
              defaultValue="Pimpri, Pune, Maharashtra, India"
              rows={2}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white resize-none"
            />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h2 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
          <Lock className="w-5 h-5" /> Security
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Current Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              placeholder="Enter current password"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg border border-border p-6">
        <h2 className="font-semibold text-lg text-foreground mb-4">Notifications</h2>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
            />
            <span className="text-sm text-foreground">New inquiry notifications</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
            />
            <span className="text-sm text-foreground">Daily summary emails</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
            />
            <span className="text-sm text-foreground">Weekly analytics report</span>
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 rounded-lg border border-red-200 p-6">
        <h2 className="font-semibold text-lg text-red-600 mb-4">Danger Zone</h2>
        <div className="space-y-3">
          <p className="text-sm text-red-700">These actions cannot be undone. Please be careful.</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium">
              Clear All Data
            </button>
            <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 btn-primary">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
        <button className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all font-semibold">
          Cancel
        </button>
      </div>
    </div>
  )
}
