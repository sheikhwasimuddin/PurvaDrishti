import React from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Scatter,
} from 'recharts';

// --- Realistic Data for the Chart ---

// This represents the "Failure Envelope". Any point above this line is unstable.
const failureEnvelopeData = [
  { x: 0, y: 15 }, { x: 20, y: 25 },
  { x: 40, y: 35 }, { x: 60, y: 45 },
  { x: 80, y: 55 }, { x: 100, y: 65 },
];

// These points represent the current stress on different parts of the slope.
const stressPointsData = [
  { x: 15, y: 18 }, { x: 35, y: 30 },
  { x: 50, y: 42 }, // This point is close to the failure line
  { x: 70, y: 48 }, { x: 85, y: 55 },
];

// --- The Chart Component ---

const SlopeAnalysisChart = () => {
  // Key metrics derived from the data
  const factorOfSafety = 1.28; // Example calculation
  const status = "At Risk";

  return (
    <div className="w-full h-full flex flex-col">
      {/* --- Display Key Metrics --- */}
      <div className="flex justify-around text-center mb-4">
        <div>
          <p className="text-sm text-gray-500">Factor of Safety</p>
          <p className="text-2xl font-bold text-orange-500">{factorOfSafety}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className="text-2xl font-bold text-orange-500">{status}</p>
        </div>
      </div>

      {/* --- Interactive Chart --- */}
      <div className="flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Normal Stress (σ)" 
              unit=" kPa"
              label={{ value: 'Normal Stress (kPa)', position: 'insideBottom', offset: -10 }}
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="Shear Stress (τ)" 
              unit=" kPa"
              label={{ value: 'Shear Stress (kPa)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend verticalAlign="top" height={36}/>
            
            <Scatter name="Failure Envelope" data={failureEnvelopeData} line shape="cross" stroke="#e74c3c" />
            <Scatter name="Current Stress Points" data={stressPointsData} fill="#3498db" shape="circle" />

          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SlopeAnalysisChart;