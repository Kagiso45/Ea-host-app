import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const performanceData = [
  { name: 'Mon', requests: 400, bandwidth: 240 },
  { name: 'Tue', requests: 300, bandwidth: 221 },
  { name: 'Wed', requests: 200, bandwidth: 229 },
  { name: 'Thu', requests: 278, bandwidth: 200 },
  { name: 'Fri', requests: 189, bandwidth: 220 },
  { name: 'Sat', requests: 239, bandwidth: 250 },
  { name: 'Sun', requests: 349, bandwidth: 210 },
]

const resourceData = [
  { name: 'CPU', value: 45 },
  { name: 'Memory', value: 62 },
  { name: 'Disk', value: 28 },
  { name: 'Network', value: 15 },
]

const COLORS = ['#7b2cbf', '#06b6d4', '#10b981', '#f59e0b']

export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Analytics</h1>
        <p className="text-gray-400 mt-2">Monitor your infrastructure performance</p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Performance Chart */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Weekly Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }} />
              <Legend />
              <Bar dataKey="requests" fill="#7b2cbf" />
              <Bar dataKey="bandwidth" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Resource Distribution */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Resource Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={resourceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {resourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metrics Table */}
      <div className="card">
        <h2 className="text-xl font-bold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Requests', value: '2,847' },
            { label: 'Avg Response Time', value: '125ms' },
            { label: 'Error Rate', value: '0.02%' },
            { label: 'Cache Hit Ratio', value: '94.5%' },
          ].map((metric, idx) => (
            <div key={idx} className="p-4 bg-gray-800/50 rounded-lg">
              <p className="text-gray-400 text-sm">{metric.label}</p>
              <p className="text-2xl font-bold text-white mt-2">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
