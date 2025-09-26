export default function ActionPlan({risk,benches}){
     const actions = [];
  if (risk >= 80) actions.push("Immediate evacuation of affected benches");
  else if (risk >= 60) actions.push("Preparation for controlled evacuation; restrict access");
  if (benches.includes(2)) actions.push("Deploy inspection drone to Bench 2");
  actions.push("Increase dewatering measures in Sector A if pore pressure > threshold");

  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h4 className="font-semibold">Suggested Actions</h4>
      <ol className="list-decimal list-inside mt-3 space-y-2 text-sm">
        {actions.map((a,i)=>(<li key={i}>{a}</li>))}
      </ol>
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 bg-red-600 text-white rounded">Dispatch Evacuation</button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded">Deploy Drone</button>
        <button className="px-3 py-1 bg-gray-200 rounded">Log Action</button>
      </div>
    </div>
  )
}