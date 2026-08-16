import React, { useState } from 'react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import StatCard from '../components/StatCard'
import { Server, Cpu, HardDrive, Activity } from 'lucide-react'

const chartData = [
  { time: '00:00', cpu: 30, memory: 40 },
  { time: '04:00', cpu: 35, memory: 45 },
  { time: '08:00', cpu: 42, memory: 55 },
  { time: '12:00', cpu: 55, memory: 65 },
  { time: '16:00', cpu: 48, memory: 60 },
  { time: '20:00', cpu: 40, memory: 50 },
  { time: '24:00', cpu: 35, memory: 45 },
]

const recentActivity = [
  { id: 1, action: 'Server Backup Completed', server: 'production-01', status: '✓', color: 'text-green-400' },
  { id: 2, action: 'Reboot Scheduled', server: 'dev-02', status: '⏱', color: 'text-yellow-400' },
  { id: 3, action: 'Security Update Applied', server: 'All servers', status: '↑', color: 'text-blue-400' },
  { id: 4, action: 'Memory Alert Triggered', server: 'staging-01', status: '⚠', color: 'text-orange-400' },
]

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Dashboard</h1>
        <p className="text-gray-400 mt-2">Welcome back, Phantom Administrator 👻</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Active Servers" value="12" icon={Server} color="phantom" trend={8} />
        <StatCard title="CPU Usage" value="45%" icon={Cpu} color="blue" trend={-5} />
        <StatCard title="Memory Usage" value="62%" icon={HardDrive} color="green" trend={3} />
        <StatCard title="Uptime" value="99.9%" icon={Activity} color="orange" trend={0.1} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* CPU Chart */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">CPU Usage Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7b2cbf" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#7b2cbf" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                cursor={{ fill: 'rgba(123, 44, 191, 0.1)' }}
              />
              <Area type="monotone" dataKey="cpu" stroke="#7b2cbf" fillOpacity={1} fill="url(#colorCpu)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Memory Chart */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Memory Usage Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                cursor={{ stroke: '#7b2cbf' }}
              />
              <Line type="monotone" dataKey="memory" stroke="#06b6d4" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity Section */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0">
              <div>
                <p className="text-white">{activity.action}</p>
                <p className="text-sm text-gray-400">{activity.server}</p>
              </div>
              <span className={`text-lg ${activity.color}`}>{activity.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
