import React, { useState } from 'react'
import { CreditCard, Download, Plus } from 'lucide-react'

const invoices = [
  { id: 1, date: 'Nov 15, 2024', amount: '$299.99', status: 'paid', description: 'Monthly Hosting' },
  { id: 2, date: 'Oct 15, 2024', amount: '$299.99', status: 'paid', description: 'Monthly Hosting' },
  { id: 3, date: 'Sep 15, 2024', amount: '$299.99', status: 'paid', description: 'Monthly Hosting' },
  { id: 4, date: 'Aug 15, 2024', amount: '$199.99', status: 'paid', description: 'Upgrade Fee' },
]

export default function Billing() {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'Visa', last4: '4242', exp: '12/25', default: true },
    { id: 2, type: 'Mastercard', last4: '5555', exp: '06/26', default: false },
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-text">Billing</h1>
        <p className="text-gray-400 mt-2">Manage your payments and subscriptions</p>
      </div>

      {/* Billing Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <p className="text-gray-400 text-sm">Current Balance</p>
          <p className="text-3xl font-bold mt-2">$0.00</p>
        </div>
        <div className="card">
          <p className="text-gray-400 text-sm">Next Billing Date</p>
          <p className="text-3xl font-bold mt-2">Dec 15, 2024</p>
        </div>
        <div className="card">
          <p className="text-gray-400 text-sm">Monthly Cost</p>
          <p className="text-3xl font-bold mt-2">$299.99</p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="card mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Payment Methods</h2>
          <button className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Method
          </button>
        </div>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="p-4 border border-gray-800 rounded-lg flex items-center justify-between hover:border-gray-700 transition">
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-phantom-500" />
                <div>
                  <p className="text-white font-medium">{method.type} •••• {method.last4}</p>
                  <p className="text-sm text-gray-400">Expires {method.exp}</p>
                </div>
              </div>
              {method.default && (
                <span className="px-3 py-1 bg-phantom-600 text-white text-sm rounded-full">Default</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Invoices */}
      <div className="card">
        <h2 className="text-xl font-bold mb-6">Invoice History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-6 text-gray-400">Date</th>
                <th className="text-left py-4 px-6 text-gray-400">Description</th>
                <th className="text-left py-4 px-6 text-gray-400">Amount</th>
                <th className="text-left py-4 px-6 text-gray-400">Status</th>
                <th className="text-left py-4 px-6 text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                  <td className="py-4 px-6 text-white">{invoice.date}</td>
                  <td className="py-4 px-6 text-gray-300">{invoice.description}</td>
                  <td className="py-4 px-6 text-white font-medium">{invoice.amount}</td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-phantom-400 hover:text-phantom-300 flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
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
