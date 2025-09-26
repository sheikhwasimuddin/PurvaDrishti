import React from 'react';
import { AlertTriangle, ShieldCheck, Info, X } from 'lucide-react';

// --- MOCK DATA for notifications ---
const notifications = [
  {
    id: 1,
    level: 'Critical',
    message: 'Seismic sensor S-12 in Sector B reports critical vibration levels.',
    time: '2m ago',
  },
  {
    id: 2,
    level: 'Warning',
    message: 'Heavy rainfall predicted. Slope stability may be affected.',
    time: '1h ago',
  },
  {
    id: 3,
    level: 'Info',
    message: 'Drone scan of the Aravalli Range site completed successfully.',
    time: '4h ago',
  },
    {
    id: 4,
    level: 'Resolved',
    message: 'Alert for Sensor S-08 has been resolved by the on-site team.',
    time: 'Yesterday',
  },
];

const iconMap = {
  Critical: <AlertTriangle className="w-5 h-5 text-red-500" />,
  Warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
  Info: <Info className="w-5 h-5 text-blue-500" />,
  Resolved: <ShieldCheck className="w-5 h-5 text-green-500" />,
};

const NotificationPanel = ({ onClose }) => {
  return (
    <div className="absolute top-16 right-4 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-20">
      <div className="flex justify-between items-center p-3 border-b">
        <h3 className="font-semibold text-gray-800">Notifications</h3>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
          <X className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-3 flex items-start gap-3 hover:bg-gray-50">
            <div className="mt-1">{iconMap[notification.level]}</div>
            <div>
              <p className="text-sm text-gray-700">{notification.message}</p>
              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
       <div className="p-2 text-center border-t">
          <a href="#" className="text-sm text-blue-600 hover:underline">View All Alerts</a>
      </div>
    </div>
  );
};

export default NotificationPanel;