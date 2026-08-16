import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Bell, User, LogOut } from 'lucide-react'

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur border-b border-gray-800 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-300 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-phantom-500 to-phantom-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">👻</span>
              </div>
              <span className="gradient-text text-xl font-bold hidden sm:inline">Phantom VPS</span>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-phantom-600 flex items-center justify-center cursor-pointer hover:bg-phantom-700 transition">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
