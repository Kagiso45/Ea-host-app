import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Server, BarChart3, CreditCard, Settings, X } from 'lucide-react'

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/servers', icon: Server, label: 'Servers' },
  { path: '/analytics', icon: BarChart3, label: 'Analytics' },
  { path: '/billing', icon: CreditCard, label: 'Billing' },
  { path: '/settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar({ open, setOpen }) {
  const location = useLocation()

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-16 left-0 h-[calc(100vh-64px)] w-64 bg-gray-900/95 border-r border-gray-800 overflow-y-auto transition-transform z-40 lg:z-0 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6">
          {/* Close button for mobile */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white mb-4"
          >
            <X className="w-5 h-5" />
          </button>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? 'bg-phantom-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}
