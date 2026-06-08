import React, { useState } from 'react';
import { ShieldAlert, Info, CheckCircle2 } from 'lucide-react';

export default function SprayDecision() {
  const [target, setTarget] = useState('corn-earworm');
  const [pressure, setPressure] = useState('moderate');
  const [beneficials, setBeneficials] = useState('present');

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">Spray Decision Checker</h2>
        <p className="text-xs text-slate-500 max-w-3xl">Evaluate field conditions, resistance risks, and IPM principles before initiating chemical controls.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 mb-4 pl-1">Assessment Matrix</h3>
            
            <div className="space-y-5 pl-1">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Target Pest Situation</label>
                <select 
                  className="w-full border-slate-200 rounded shadow-sm text-xs p-2 border focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 font-medium"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                >
                  <option value="corn-earworm">Corn Earworm (Silk stage)</option>
                  <option value="aphids">Aphids (Vegetative stage)</option>
                  <option value="spider-mites">Spider Mites (Drought stressed)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Scouting / Trap Pressure</label>
                <div className="flex rounded shadow-sm">
                  <button onClick={() => setPressure('low')} className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-wider border rounded-l ${pressure === 'low' ? 'bg-slate-200 border-slate-300 text-slate-800' : 'bg-white border-slate-200 text-slate-500'}`}>Low</button>
                  <button onClick={() => setPressure('moderate')} className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-wider border-t border-b border-r ${pressure === 'moderate' ? 'bg-amber-100 border-amber-200 text-amber-800' : 'bg-white border-slate-200 text-slate-500'}`}>Threshold</button>
                  <button onClick={() => setPressure('high')} className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-wider border-t border-b border-r rounded-r ${pressure === 'high' ? 'bg-red-100 border-red-200 text-red-800' : 'bg-white border-slate-200 text-slate-500'}`}>Over Limit</button>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Beneficial Insects</label>
                <select 
                  className="w-full border-slate-200 rounded shadow-sm text-xs p-2 border focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 font-medium"
                  value={beneficials}
                  onChange={(e) => setBeneficials(e.target.value)}
                >
                  <option value="present">Active & Building</option>
                  <option value="absent">Sparse / Absent</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {pressure === 'high' ? (
             <div className="bg-red-50 border border-red-200 rounded-xl p-6 lg:p-8 h-full flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
               <div className="flex items-center text-red-700 mb-4 pl-2">
                 <ShieldAlert className="h-6 w-6 mr-2" />
                 <h3 className="text-xl font-bold">Action Recommended: SPRAY</h3>
               </div>
               <p className="text-red-900 text-sm font-medium mb-6 pl-2">
                 Pressure has exceeded established economic injury thresholds. Waiting may result in significant yield or quality loss.
               </p>
               <div className="bg-white/60 p-4 rounded-lg ml-2">
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200/50 pb-1">IPM Principles</h4>
                 <ul className="list-[square] pl-4 text-slate-700 space-y-1.5 text-xs font-medium">
                   <li>Rotate modes of action (MoA groups) if treating again.</li>
                   <li>Select products with lower toxicity to {beneficials === 'present' ? 'the currently active beneficials' : 'non-target species'}.</li>
                   <li>Check upcoming weather for rain-fastness windows.</li>
                 </ul>
               </div>
             </div>
          ) : pressure === 'moderate' ? (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 lg:p-8 h-full flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
               <div className="flex items-center text-amber-700 mb-4 pl-2">
                 <Info className="h-6 w-6 mr-2" />
                 <h3 className="text-xl font-bold">Action Recommended: WATCH</h3>
               </div>
               <p className="text-amber-900 text-sm font-medium mb-6 pl-2">
                 Pressure is grouping near the action threshold, but may not have definitively crossed it.
                 {beneficials === 'present' && " Natural enemy populations are active and may suppress the outbreak."}
               </p>
               <div className="bg-white/60 p-4 rounded-lg ml-2">
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200/50 pb-1">Next Steps</h4>
                 <ul className="list-[square] pl-4 text-slate-700 space-y-1.5 text-xs font-medium">
                   <li>Re-scout in 48-72 hours.</li>
                   <li>Review disease or weather stressors that may compound damage.</li>
                   <li>Prepare equipment but hold fire unless damage escalates.</li>
                 </ul>
               </div>
             </div>
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 lg:p-8 h-full flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
               <div className="flex items-center text-emerald-700 mb-4 pl-2">
                 <CheckCircle2 className="h-6 w-6 mr-2" />
                 <h3 className="text-xl font-bold">Action Recommended: HOLD</h3>
               </div>
               <p className="text-emerald-900 text-sm font-medium mb-6 pl-2">
                 Current pressure is below economic thresholds. An application now is unlikely to provide economic returns and risks flaring secondary pests.
               </p>
               <div className="bg-white/60 p-4 rounded-lg ml-2">
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200/50 pb-1">Current Status</h4>
                 <ul className="list-[square] pl-4 text-slate-700 space-y-1.5 text-xs font-medium">
                   <li>Maintain standard 7-10 day scouting intervals.</li>
                   <li>Allow beneficial predators to establish.</li>
                 </ul>
               </div>
             </div>
          )}
        </div>
      </div>
      
      <div className="pl-4 py-2 border-l-4 border-slate-400 text-[10px] text-slate-500 mt-8 font-medium">
        <strong className="uppercase tracking-widest text-slate-700 mr-2">Disclaimer</strong> This tool is a theoretical decision support matrix. Always consult current product labels, state extension recommendations, and certified crop advisors for prescriptive chemical recommendations.
      </div>
    </div>
  );
}
