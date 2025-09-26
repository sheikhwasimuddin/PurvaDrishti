export default function ARMockup() {
  return (
    <div className="bg-black text-white h-full min-h-[600px] rounded-xl p-3">
      <div className="h-96 border-2 border-dashed border-gray-600 rounded-lg relative">
        <img src="/mock/phone-camera.jpg" alt="cam" className="w-full h-full object-cover opacity-70"/>
        <div className="absolute top-20 left-8 p-2 border-2 border-red-500 rounded animate-pulse">
          <div className="text-sm font-bold">Bench 2</div>
          <div className="text-xs">Risk: 82%</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-300">This is a prototype AR overlay. Real AR uses WebXR / ARCore.</div>
    </div>
  );
}
