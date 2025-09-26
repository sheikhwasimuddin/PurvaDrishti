import { NavLink } from "react-router-dom";
import {
  Gauge,
  Activity,
  Satellite,
  AlertTriangle,
  Cloud,
  Settings,
  Mountain,
}from "lucide-react";

export default function Sidebar() {
  const navLinkClasses=
    "block px-4 py-2 rounded-lg hover:bg-[#145374] transition text-sm md:text-base";

  return (
    <aside className="w-72 bg-gradient-to-b from-[#0A3D62] to-black text-white flex flex-col fixed inset-y-0 left-0 z-50">
      <div className="p-6 text-2xl font-bold border-b border-gray-700 flex items-center space-x-2">
        <Mountain className="w-8 h-8 text-[#FF9933]" />
        <span>NRPAS</span>
      </div>
      <p className="px-6 pt-2 text-sm text-gray-300">
        National Rockfall Prediction & Alert System
      </p>
      <nav className="flex-1 p-6 space-y-3">
        <NavLink to="/" end className={navLinkClasses}>
          <Gauge className="inline w-4 h-4 mr-2" /> Dashboard
        </NavLink>
        <NavLink to="/sensors" className={navLinkClasses}>
          <Activity className="inline w-4 h-4 mr-2" /> Sensor Data
        </NavLink>
        <NavLink to="/environment" className={navLinkClasses}>
          <Cloud className="inline w-4 h-4 mr-2" /> Environment
        </NavLink>
        <NavLink to="/drone" className={navLinkClasses}>
          <Satellite className="inline w-4 h-4 mr-2" /> Drone Imagery
        </NavLink>
        <NavLink to="/alerts" className={navLinkClasses}>
          <AlertTriangle className="inline w-4 h-4 mr-2" /> Alerts & Reports
        </NavLink>
        <NavLink to="/settings" className={navLinkClasses}>
          <Settings className="inline w-4 h-4 mr-2" /> Settings
        </NavLink>
      </nav>
      <footer className="p-4 text-xs text-gray-400 border-t border-gray-700">
        Ministry of Mines, Govt. of India
      </footer>
    </aside>
  );
}
