import React from 'react';

const RiskFactorsDonut = ({ data, riskLevel }) => {
  const circumference = 2 * Math.PI * 15.915; // Approximately 100
  let cumulativeOffset = 0;

  return (
    <div className="w-full h-full bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center text-gray-500">
      <p className="font-semibold mb-2">Key Risk Contributors</p>
      
      <div className="relative w-32 h-32">
        {/* The transform rotates the start of the circle to the 12 o'clock position */}
        <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
          
          {/* Background Circle */}
          <circle 
            cx="18" cy="18" r="15.915" 
            fill="none" 
            stroke="#e6e6e6" 
            strokeWidth="3"
          />

          {/* Data Segments - Mapped from props */}
          {data.map((item, index) => {
            const offset = cumulativeOffset;
            cumulativeOffset += item.value; // Increase offset for the next segment
            return (
              <circle
                key={index}
                cx="18" cy="18" r="15.915"
                fill="none"
                stroke={item.color}
                strokeWidth="3"
                strokeDasharray={`${item.value} ${circumference}`}
                strokeDashoffset={-offset}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>

        {/* Center Text - from props */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-gray-700">{riskLevel}</p>
          <p className="text-xs">Risk Level</p>
        </div>
      </div>

      {/* Dynamic Legend - Mapped from props */}
      <div className="text-xs mt-3 text-left w-full max-w-[150px]">
        {data.map((item, index) => (
          <p key={index} className="flex items-center">
            <span style={{ color: item.color }} className="mr-2 text-lg">■</span>
            {item.name}: {item.value}%
          </p>
        ))}
      </div>
    </div>
  );
};

export default RiskFactorsDonut;