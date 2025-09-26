import React from "react";
import { AlertTriangle, CheckCircle, Shield, Clock } from "lucide-react";
import Chatbot from "../components/Chatbot";
export default function AlertsReports() {
  const alerts = [
    {
      id: 1,
      time: "10:32 AM",
      type: "critical",
      message: "Bench 2: Rockfall probability 85% - Immediate evacuation needed",
    },
    {
      id: 2,
      time: "09:50 AM",
      type: "warning",
      message: "Rainfall > 120 mm/hr increasing pore pressure risk",
    },
    {
      id: 3,
      time: "09:00 AM",
      type: "safe",
      message: "Bench 1 stable - No anomalies detected",
    },
  ];

  const reports = [
    {
      id: "TX123456",
      timestamp: "2025-09-17 08:45:00",
      status: "Logged on Blockchain",
      action: "Evacuation Alert Sent to Bench 4 workers",
    },
    {
      id: "TX123457",
      timestamp: "2025-09-17 07:30:00",
      status: "Logged on Blockchain",
      action: "Drone survey recorded and stored",
    },
  ];

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">⚠️ Alerts & Reports</h1>
        <p className="text-gray-500 text-sm">
          Real-time alerts with blockchain logging
        </p>
      </header>

      {/* Alerts Feed */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Live Alerts</h2>
        <ul className="space-y-4">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className={`p-4 rounded-lg flex items-center ${
                alert.type === "critical"
                  ? "bg-red-50 border-l-4 border-red-600"
                  : alert.type === "warning"
                  ? "bg-yellow-50 border-l-4 border-yellow-600"
                  : "bg-green-50 border-l-4 border-green-600"
              }`}
            >
              {alert.type === "critical" && (
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              )}
              {alert.type === "warning" && (
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
              )}
              {alert.type === "safe" && (
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              )}
              <div>
                <p className="font-medium text-gray-800">{alert.message}</p>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {alert.time}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Blockchain Reports */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Immutable Reports (Blockchain Log)
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm">
              <th className="p-3">Transaction ID</th>
              <th className="p-3">Timestamp</th>
              <th className="p-3">Action</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b text-sm">
                <td className="p-3 font-mono">{report.id}</td>
                <td className="p-3">{report.timestamp}</td>
                <td className="p-3">{report.action}</td>
                <td className="p-3 flex items-center text-green-600">
                  <Shield className="w-4 h-4 mr-2" />
                  {report.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Chatbot />
    </div>
  );
}
