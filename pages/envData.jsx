import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Droplet, Thermometer, Activity, Wind } from "lucide-react";
import Chatbot from "../components/Chatbot";
const envData = [
  { time: "08:00", rainfall: 5, temp: 24, vibration: 1, humidity: 70 },
  { time: "09:00", rainfall: 15, temp: 25, vibration: 2, humidity: 72 },
  { time: "10:00", rainfall: 40, temp: 26, vibration: 4, humidity: 75 },
  { time: "11:00", rainfall: 60, temp: 27, vibration: 5, humidity: 80 },
  { time: "12:00", rainfall: 100, temp: 28, vibration: 7, humidity: 85 },
];

export default function Environment() {
  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">🌦️ Environment Data</h1>
        <p className="text-gray-500 text-sm">Weather & vibration monitoring</p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <Droplet className="w-6 h-6 text-blue-500" />
          <p className="text-sm text-gray-500">Rainfall</p>
          <h2 className="text-xl font-bold">100 mm/hr</h2>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <Thermometer className="w-6 h-6 text-red-500" />
          <p className="text-sm text-gray-500">Temperature</p>
          <h2 className="text-xl font-bold">28 °C</h2>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <Activity className="w-6 h-6 text-yellow-600" />
          <p className="text-sm text-gray-500">Vibrations</p>
          <h2 className="text-xl font-bold">7 Hz</h2>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <Wind className="w-6 h-6 text-green-600" />
          <p className="text-sm text-gray-500">Humidity</p>
          <h2 className="text-xl font-bold">85%</h2>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rainfall vs Temperature */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Rainfall vs Temperature
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={envData}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="rainfall" stroke="#3B82F6" />
              <Line type="monotone" dataKey="temp" stroke="#EF4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Vibrations vs Humidity */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Vibrations vs Humidity
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={envData}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="vibration" stroke="#F59E0B" />
              <Line type="monotone" dataKey="humidity" stroke="#10B981" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <Chatbot/>
      </div>
    </div>
  );
}
