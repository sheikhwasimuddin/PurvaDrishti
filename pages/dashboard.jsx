import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, ChevronLeft, MapPin, Activity, PieChart, Menu, X } from "lucide-react";

// Pages
import SensorsPage from "../pages/SensorData";
import EnvironmentPage from "../pages/envData";
import DronePage from "../pages/DroneImagery";
import AlertsPage from "../pages/AlertsReports";
import SettingsPage from "../pages/ProfilePage";
import Chatbot from "../components/Chatbot";
// Child Components
import MapView from "../components/MapView";
import SlopeAnalysisChart from "../components/SlopeAnalysisChart";
import RiskFactorsDonut from "../components/RiskFactorsDonut";
import NotificationPanel from "../components/NotificationPanel";

const riskData = [
  { name: 'Rainfall', value: 40, color: '#f39c12' },
  { name: 'Seismic Activity', value: 25, color: '#3498db' },
  { name: 'Geological Faults', value: 20, color: '#9b59b6' },
  { name: 'Other Factors', value: 15, color: '#e74c3c' },
];

/* ---------------- Overview content ---------------- */
const OverviewPage = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-6">
      <div className="h-96 lg:h-auto lg:col-span-2 lg:row-span-2 bg-white p-4 rounded-2xl shadow flex flex-col">
        <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-blue-600"/>
            <h3 className="text-lg font-semibold">Geospatial Risk Heatmap</h3>
        </div>
        <div className="flex-1">
            <MapView />
        </div>
      </div>
      <div className="h-96 lg:h-auto lg:col-span-1 lg:row-span-1 bg-white p-4 rounded-2xl shadow flex flex-col">
        <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-blue-600"/>
            <h3 className="text-lg font-semibold">Stability Analysis</h3>
        </div>
        <div className="flex-1">
            <SlopeAnalysisChart />
        </div>
      </div>
      <div className="h-96 lg:h-auto lg:col-span-1 lg:row-span-1 bg-white p-4 rounded-2xl shadow flex flex-col">
        <div className="flex items-center gap-2 mb-2">
            <PieChart className="w-5 h-5 text-blue-600"/>
            <h3 className="text-lg font-semibold">Risk Factors</h3>
        </div>
        <div className="flex-1">
            <RiskFactorsDonut data={riskData} riskLevel="High" />
        </div>
        <Chatbot />
      </div>
    </div>
  );
};

/* ---------------- Main Dashboard ---------------- */
export default function Dashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("overview");
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsPanelOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [panelRef]);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "sensors", label: "Sensors" },
    { id: "environment", label: "Environment" },
    { id: "drone", label: "Drone" },
    { id: "alerts", label: "Alerts" },
    { id: "settings", label: "Settings" },
  ];

  const render = useMemo(() => {
    switch (tab) {
      case "sensors": return <SensorsPage />;
      case "environment": return <EnvironmentPage />;
      case "drone": return <DronePage />;
      case "alerts": return <AlertsPage />;
      case "settings": return <SettingsPage />;
      default: return <OverviewPage />;
    }
  }, [tab]);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="sticky top-0 z-10 bg-white shadow flex items-center justify-between px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back</span>
        </button>
              
                <div className="w-10 h-10 bg-gradient-to-r from-white-600 to-gray-600 rounded-lg flex items-center justify-center">
               <img src="/logo.png" alt="Logo" className="w-16 h-8" />
              </div>
                <span className="text-xl font-bold">PurvaDrishti</span>
              
        {/* --- DESKTOP Navigation (Hidden on mobile) --- */}
        <nav className="hidden md:flex flex-1 justify-center px-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-3 py-1.5 text-sm rounded-full transition whitespace-nowrap ${
                tab === t.id
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* --- Right-side controls --- */}
        <div className="flex items-center gap-2">
          <div ref={panelRef} className="relative">
            <button onClick={() => setIsPanelOpen(!isPanelOpen)} className="relative p-2">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>
            {isPanelOpen && <NotificationPanel onClose={() => setIsPanelOpen(false)} />}
          </div>

          {/* --- HAMBURGER Button (Visible on mobile only) --- */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE Menu (Dropdown) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTab(t.id);
                  setIsMobileMenuOpen(false); // Close menu on selection
                }}
                className={`w-full text-left p-2 rounded-md ${
                  tab === t.id ? "bg-blue-100 text-blue-700" : "text-gray-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <main className="flex-1 overflow-y-auto p-4 md:p-6">{render}</main>
    </div>
  );
}