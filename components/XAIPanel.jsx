import { useEffect,useState } from "react";
// This expects a backend API /api/xai/top-features that returns top contributors for current prediction.
// Backend: Use SHAP to compute feature contributions, return top 4 features.
export default function XAIPanel({sampleId}){
    const[top,setTop] = useState([]);
    useEffect(() =>{
        fetch(`/api/xai/top-features?sampleid=${sampleId}`)
        .then(r => r.json())
        .then(setTop)
        .catch(() => setTop([]))
    },[sampleId])
    return(
        <div className="bg-white rounded-2xl p-4 shadow">
      <h4 className="font-semibold">Why is risk high?</h4>
      {top.length===0 ? <p className="text-sm text-gray-500">Loading...</p> : (
        <ul className="mt-3 space-y-2 text-sm">
          {top.map((t,i)=>(
            <li key={i} className='flex justify-between items-center'>
              <div className ='text-gray-700'>{t.name}</div>
              <div className= 'text-gray-900 font-semibold'>{t.value > 0 ? "+" : ""}{t.value.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
    )
}