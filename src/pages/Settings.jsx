import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function Settings() {
  const [settings, setSettings] = useState({
    email: 'user@phantom-vps.com',
    username: 'phantom_admin',
    notifications: true,
    emailAlerts: true,
    twoFactor: false,
    apiNotifications: true,
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Settings</h1>
        <p className="text-gray-400 mt-2">Manage your account and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Account Settings */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email Address</label>
              <input
                type="email"
                defaultValue={settings.email}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Username</label>
              <input
                type="text"
                defaultValue={settings.username}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="input-field"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Notifications</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-4 border-b border-gray-800">
              <div>
                <p className="text-white font-medium">Push Notifications</p>
                <p className="text-sm text-gray-400">Receive alerts on your devices</p>
              </div>
              <button
                onClick={() => handleToggle('notifications')}
                className={`w-12 h-6 rounded-full transition ${settings.notifications ? 'bg-phantom-600' : 'bg-gray-700'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition transform ${settings.notifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between py-4 border-b border-gray-800">
              <div>
                <p className="text-white font-medium">Email Alerts</p>
                <p className="text-sm text-gray-400">Get notified via email</p>
              </div>
              <button
                onClick={() => handleToggle('emailAlerts')}
                className={`w-12 h-6 rounded-full transition ${settings.emailAlerts ? 'bg-phantom-600' : 'bg-gray-700'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition transform ${settings.emailAlerts ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-white font-medium">API Notifications</p>
                <p className="text-sm text-gray-400">Webhook notifications for API events</p>
              </div>
              <button
                onClick={() => handleToggle('apiNotifications')}
                className={`w-12 h-6 rounded-full transition ${settings.apiNotifications ? 'bg-phantom-600' : 'bg-gray-700'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition transform ${settings.apiNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Security</h2>
          
          <div className="flex items-center justify-between py-4 border-b border-gray-800">
            <div>
              <p className="text-white font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-gray-400">Add an extra layer of security</p>
            </div>
            <button
              onClick={() => handleToggle('twoFactor')}
              className={`w-12 h-6 rounded-full transition ${settings.twoFactor ? 'bg-phantom-600' : 'bg-gray-700'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition transform ${settings.twoFactor ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="card border border-red-900/50">
          <h2 className="text-2xl font-bold mb-6 text-red-400">Danger Zone</h2>
          
          <div className="space-y-3">
            <button className="w-full btn-danger">
              Reset All Settings
            </button>
            <button className="w-full btn-danger">
              Delete Account
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex gap-4">
          <button className="btn-primary px-6">Save Changes</button>
          <button className="btn-secondary px-6">Cancel</button>
        </div>
      </div>
    </div>
  )
}
