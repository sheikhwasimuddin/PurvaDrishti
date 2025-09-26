import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TimeForecast({ forecast }) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h3 className="font-semibold">24h Risk Forecast</h3>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecast}>
            <XAxis dataKey="time" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="risk"
              stroke="#EB5757"
              strokeWidth={2}
            ></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3">
        <Slider
          min={0}
          max={forecast.length - 1}
          value={idx}
          onChange={(v) => setIdx(v)}
        />
        <div className="mt-2 text-sm text-gray-600">
          Forecast at <strong>{forecast[idx].time}</strong>:{" "}
          <strong>{forecast[idx].risk}%</strong>
        </div>
      </div>
    </div>
  );
}
