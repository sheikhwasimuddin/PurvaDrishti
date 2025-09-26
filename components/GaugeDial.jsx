import GaugeDial from "../components/GaugeDial";

export default function TestGauge() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Safe zone */}
      <GaugeDial value={25} />

      {/* Caution zone */}
      <GaugeDial value={55} />

      {/* High Risk zone */}
      <GaugeDial value={85} />
    </div>
  );
}
