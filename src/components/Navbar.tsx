import React, { useState } from 'react';
import { ViewState } from '../types';
import { Bug, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const NAV_ITEMS: { label: string; view: ViewState }[] = [
  { label: 'Home', view: 'Home' },
  { label: 'Risk', view: 'Risk' },
  { label: 'Disease', view: 'Disease' },
  { label: 'Scouting', view: 'Scouting' },
  { label: 'Traps', view: 'Traps' },
  { label: 'Spray', view: 'Spray' },
  { label: 'Alerts', view: 'Alerts' },
  { label: 'Favorites', view: 'Favorites' }
];

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-slate-200 z-50 shadow-sm shrink-0 relative">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('Home')}>
        <div className="flex items-center bg-emerald-700 text-white px-3 py-1 rounded font-bold text-lg">
          RUC
        </div>
        <div className="hidden sm:block h-6 w-px bg-slate-300"></div>
        <div className="flex flex-col">
          <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-wider text-slate-500">Rural Utility Cost</span>
          <h1 className="text-lg sm:text-xl font-bold leading-none flex items-center gap-2">
            Pest <span className="hidden md:inline-block text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-sm uppercase tracking-widest">Decision Support</span>
          </h1>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.view}
            onClick={() => onNavigate(item.view)}
            className={`text-sm font-semibold transition-colors border-b-2 pt-1 pb-1 -mb-[2px] ${
              currentView === item.view
                ? 'text-emerald-700 border-emerald-700'
                : 'text-slate-600 hover:text-slate-900 border-transparent hover:border-slate-300'
            }`}
          >
            {item.label}
          </button>
        ))}
        <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-500 ml-2">
          OP
        </div>
      </nav>

      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-500 hover:bg-slate-100 p-2 rounded-md focus:outline-none transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg md:hidden z-50">
          <div className="px-4 py-2 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  onNavigate(item.view);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-semibold ${
                  currentView === item.view
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
