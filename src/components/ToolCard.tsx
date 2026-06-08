import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { Tool, ViewState } from '../types';

interface ToolCardProps {
  tool: Tool;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onNavigate: (view: ViewState) => void;
}

export default function ToolCard({ tool, isFavorite, onToggleFavorite, onNavigate }: ToolCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden flex flex-col h-full group">
      <div className="absolute top-0 left-0 w-1 h-full bg-slate-300 group-hover:bg-emerald-500 transition-colors"></div>
      
      <div className="flex justify-between items-start mb-2 pl-2">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {tool.category}
        </span>
        <button
          onClick={(e) => onToggleFavorite(tool.id, e)}
          className={`focus:outline-none transition-colors ${
            isFavorite ? 'text-red-400' : 'text-slate-200 hover:text-slate-300'
          }`}
          aria-label={isFavorite ? `Remove ${tool.title} from favorites` : `Add ${tool.title} to favorites`}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>
      
      <h4 className="text-lg font-bold mb-1 pl-2 text-slate-800">{tool.title}</h4>
      <p className="text-xs text-slate-500 flex-grow pl-2 mb-4">{tool.description}</p>
      
      <div className="mt-auto flex items-center justify-between gap-3 pl-2">
        <div className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-center flex-1 border border-slate-100 min-w-0">
          <p className="text-[9px] uppercase font-bold opacity-60">Outcome</p>
          <p className="text-[10px] font-bold truncate" title={tool.primaryOutcome}>{tool.primaryOutcome}</p>
        </div>
        <button
          onClick={() => onNavigate(tool.viewPath)}
          className="inline-flex items-center justify-center px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[10px] font-bold rounded uppercase tracking-wider transition-colors border border-emerald-100"
        >
          Open
        </button>
      </div>
    </div>
  );
}
