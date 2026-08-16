import React, { useState } from 'react'
import { Plus, MoreVertical, Power, Trash2, Edit } from 'lucide-react'

const initialServers = [
  { id: 1, name: 'production-01', ip: '192.168.1.10', status: 'running', cpu: 35, memory: 56, disk: 720, uptime: '45d' },
  { id: 2, name: 'production-02', ip: '192.168.1.11', status: 'running', cpu: 42, memory: 68, disk: 580, uptime: '30d' },
  { id: 3, name: 'dev-01', ip: '192.168.1.20', status: 'running', cpu: 12, memory: 25, disk: 320, uptime: '8d' },
  { id: 4, name: 'staging-01', ip: '192.168.1.30', status: 'stopped', cpu: 0, memory: 0, disk: 450, uptime: '0d' },
  { id: 5, name: 'backup-01', ip: '192.168.1.40', status: 'running', cpu: 5, memory: 15, disk: 900, uptime: '120d' },
]

export default function Servers() {
  const [servers, setServers] = useState(initialServers)
  const [showModal, setShowModal] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  const toggleServer = (id) => {
    setServers(servers.map(s => 
      s.id === id ? { ...s, status: s.status === 'running' ? 'stopped' : 'running' } : s
    ))
  }

  const deleteServer = (id) => {
    setServers(servers.filter(s => s.id !== id))
    setActiveMenu(null)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold gradient-text">Servers</h1>
          <p className="text-gray-400 mt-2">Manage your virtual private servers</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Server
        </button>
      </div>

      {/* Server List */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Name</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">IP Address</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Status</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">CPU</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Memory</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Disk</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Uptime</th>
                <th className="text-left py-4 px-6 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {servers.map((server) => (
                <tr key={server.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                  <td className="py-4 px-6 text-white font-medium">{server.name}</td>
                  <td className="py-4 px-6 text-gray-300">{server.ip}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      server.status === 'running' 
                        ? 'bg-green-900/30 text-green-300 border border-green-800' 
                        : 'bg-gray-700/30 text-gray-300 border border-gray-600'
                    }`}>
                      {server.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{server.cpu}%</td>
                  <td className="py-4 px-6 text-gray-300">{server.memory}%</td>
                  <td className="py-4 px-6 text-gray-300">{server.disk}GB</td>
                  <td className="py-4 px-6 text-gray-300">{server.uptime}</td>
                  <td className="py-4 px-6">
                    <div className="relative">
                      <button
                        onClick={() => setActiveMenu(activeMenu === server.id ? null : server.id)}
                        className="text-gray-400 hover:text-white transition"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                      {activeMenu === server.id && (
                        <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                          <button
                            onClick={() => toggleServer(server.id)}
                            className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                          >
                            <Power className="w-4 h-4" />
                            {server.status === 'running' ? 'Stop' : 'Start'}
                          </button>
                          <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 flex items-center gap-2">
                            <Edit className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            onClick={() => deleteServer(server.id)}
                            className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 flex items-center gap-2"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
