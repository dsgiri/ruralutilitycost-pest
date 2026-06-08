import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 px-6 py-3 flex flex-col sm:flex-row items-center justify-between text-[10px] font-medium text-slate-500 shrink-0">
      <div className="flex flex-wrap justify-center gap-4 mb-2 sm:mb-0">
        <button onClick={() => onNavigate('About')} className="hover:text-slate-800 transition-colors">About</button>
        <button onClick={() => onNavigate('Contact')} className="hover:text-slate-800 transition-colors">Contact</button>
        <button onClick={() => onNavigate('Legal')} className="hover:text-slate-800 transition-colors">Legal</button>
        <button onClick={() => onNavigate('License')} className="hover:text-slate-800 transition-colors">License</button>
      </div>
      <div className="flex items-center gap-2 text-slate-400">
        <span className="italic text-center sm:text-left">Guidance is informational only. Verify pesticide labels and regs.</span>
        <div className="hidden sm:block h-3 w-px bg-slate-200"></div>
        <span className="hidden sm:block">Part of Rural Utility Cost System</span>
      </div>
    </footer>
  );
}
