import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Activity, Droplet, TrendingUp, Thermometer } from "lucide-react";
import Chatbot from "../components/Chatbot";
// Sample dummy data
const sensorData = [
  { time: "08:00", strain: 5, displacement: 2, pore: 10, rainfall: 1 },
  { time: "09:00", strain: 6, displacement: 3, pore: 12, rainfall: 5 },
  { time: "10:00", strain: 8, displacement: 5, pore: 15, rainfall: 12 },
  { time: "11:00", strain: 12, displacement: 7, pore: 18, rainfall: 25 },
  { time: "12:00", strain: 15, displacement: 9, pore: 20, rainfall: 35 },
];

export default function SensorData() {
  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">📡 Sensor Data</h1>
        <p className="text-gray-500 text-sm">Real-time monitoring of pit mine</p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow flex flex-col">
          <Activity className="w-6 h-6 text-red-500" />
          <span className="text-sm text-gray-500">Strain</span>
          <h2 className="text-xl font-bold">15 µε</h2>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow flex flex-col">
          <TrendingUp className="w-6 h-6 text-yellow-600" />
          <span className="text-sm text-gray-500">Displacement</span>
          <h2 className="text-xl font-bold">9 mm</h2>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow flex flex-col">
          <Thermometer className="w-6 h-6 text-blue-600" />
          <span className="text-sm text-gray-500">Pore Pressure</span>
          <h2 className="text-xl font-bold">20 kPa</h2>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow flex flex-col">
          <Droplet className="w-6 h-6 text-blue-400" />
          <span className="text-sm text-gray-500">Rainfall</span>
          <h2 className="text-xl font-bold">35 mm/hr</h2>
        </div>
      </div>

      {/* Line Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Strain & Displacement */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Strain vs Displacement
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sensorData}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="strain" stroke="#EF4444" />
              <Line type="monotone" dataKey="displacement" stroke="#F59E0B" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pore Pressure & Rainfall */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Pore Pressure vs Rainfall
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sensorData}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="pore" stroke="#3B82F6" />
              <Line type="monotone" dataKey="rainfall" stroke="#10B981" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Chatbot/>
    </div>
  );
}
