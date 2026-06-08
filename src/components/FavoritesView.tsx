import React, { useState } from 'react';
import { ViewState } from '../types';
import { TOOLS } from '../data/tools';
import ToolCard from './ToolCard';

interface FavoritesViewProps {
  onNavigate: (view: ViewState) => void;
  favorites: string[];
  toggleFavorite: (id: string, e?: React.MouseEvent) => void;
}

export default function FavoritesView({ onNavigate, favorites, toggleFavorite }: FavoritesViewProps) {
  const favoriteTools = TOOLS.filter(tool => favorites.includes(tool.id));

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">Saved Tools</h2>
        <p className="text-xs text-slate-500 max-w-3xl">Quick access to your frequently used pest risk and monitoring modules.</p>
      </div>

      {favoriteTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteTools.map(tool => (
            <ToolCard 
              key={tool.id}
              tool={tool}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm">
          <div className="mx-auto text-slate-200 text-6xl mb-4">♡</div>
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">No tools saved yet</h3>
          <p className="text-xs text-slate-500 mb-6 max-w-sm mx-auto font-medium">
            Click the heart icon on any tool card from the Dashboard to save it here for quick access.
          </p>
          <button 
            onClick={() => onNavigate('Home')}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[10px] uppercase tracking-widest rounded shadow-sm transition-colors"
          >
            Browse Tools
          </button>
        </div>
      )}
    </div>
  );
}
