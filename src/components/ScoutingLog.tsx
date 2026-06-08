import React, { useState } from 'react';
import { Plus, Search, MapPin } from 'lucide-react';

const MOCK_SCOUTS = [
  { id: '1', date: '2023-08-14', field: 'North Block', crop: 'Soybeans', pest: 'Stink Bugs', count: 12, severity: 'Moderate', notes: 'Visible pod damage in 15% of samples.' },
  { id: '2', date: '2023-08-12', field: 'West Field', crop: 'Corn', pest: 'Rootworm', count: 4, severity: 'Low', notes: 'Adults present, silk clipping minimal.' },
  { id: '3', date: '2023-08-10', field: 'East Grove', crop: 'Apples', pest: 'Codling Moth', count: 0, severity: 'None', notes: 'Clean visual inspection.' },
];

export default function ScoutingLog() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">Scouting Log</h2>
          <p className="text-xs text-slate-500 max-w-xl">Ground-truth your risk forecasts by logging physical field observations.</p>
        </div>
        <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest flex items-center shadow-sm transition-colors">
          <Plus className="h-3 w-3 mr-1" />
          New Entry
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col min-h-0">
        <div className="p-3 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <Search className="h-3 w-3 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search field, crop, pest..." 
              className="block w-full pl-8 pr-2 py-1.5 border border-slate-300 rounded text-xs leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
            />
          </div>
          <button className="px-3 py-1.5 bg-white border border-slate-300 rounded shadow-sm text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50">
            Export CSV
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-400 uppercase text-[9px] font-bold sticky top-0 border-b border-slate-100">
              <tr>
                <th scope="col" className="px-4 py-2">Field & Crop</th>
                <th scope="col" className="px-4 py-2">Pest / Target</th>
                <th scope="col" className="px-4 py-2">Observation</th>
                <th scope="col" className="px-4 py-2">Severity</th>
                <th scope="col" className="px-4 py-2 text-right">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_SCOUTS.map(scout => (
                <tr key={scout.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-bold text-slate-800 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-emerald-500" /> {scout.field}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium ml-4">{scout.crop}</div>
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-800 whitespace-nowrap">
                    {scout.pest}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-xs font-semibold text-slate-700">Count: {scout.count}</div>
                    <div className="text-[10px] text-slate-400">{scout.date}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${
                       scout.severity === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                       scout.severity === 'Low' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                     }`}>
                       {scout.severity} Risk
                     </span>
                  </td>
                  <td className="px-4 py-3 text-right max-w-[200px] truncate text-[10px] italic text-slate-500" title={scout.notes || ''}>
                    {scout.notes || '--'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
