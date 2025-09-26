import React, { useState } from "react";

export default function Settings() {
  const [sms, setSms] = useState(true);
  const [email, setEmail] = useState(false);

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen space-y-8">
      {/* Header */}
      <header>
        <h1 className="text-2xl font-bold text-gray-800">⚙️ Settings</h1>
        <p className="text-gray-500 text-sm">
          Configure alerts, notifications & user management
        </p>
      </header>

      {/* Alert Thresholds */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Alert Thresholds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex flex-col">
            Rainfall Threshold (mm/hr)
            <input
              type="number"
              defaultValue={100}
              className="p-2 border rounded mt-1"
            />
          </label>
          <label className="flex flex-col">
            Displacement Threshold (mm)
            <input
              type="number"
              defaultValue={10}
              className="p-2 border rounded mt-1"
            />
          </label>
          <label className="flex flex-col">
            Pore Pressure Threshold (kPa)
            <input
              type="number"
              defaultValue={20}
              className="p-2 border rounded mt-1"
            />
          </label>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={sms}
              onChange={() => setSms(!sms)}
            />
            <span>SMS Alerts</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={email}
              onChange={() => setEmail(!email)}
            />
            <span>Email Alerts</span>
          </label>
        </div>
      </div>

      {/* User Management */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">User Management</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm">
              <th className="p-3">Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Email</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-sm">
              <td className="p-3">Rahul Verma</td>
              <td className="p-3">Mine Planner</td>
              <td className="p-3">rahul@mines.gov.in</td>
              <td className="p-3">
                <button className="text-red-600">Remove</button>
              </td>
            </tr>
            <tr className="border-b text-sm">
              <td className="p-3">Anjali Singh</td>
              <td className="p-3">Safety Officer</td>
              <td className="p-3">anjali@mines.gov.in</td>
              <td className="p-3">
                <button className="text-red-600">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
