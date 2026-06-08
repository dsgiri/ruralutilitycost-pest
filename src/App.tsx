/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InfoPages from './components/InfoPages';
import { ViewState } from './types';
import Dashboard from './components/Dashboard';
import RiskOverview from './components/RiskOverview';
import DiseaseOverview from './components/DiseaseOverview';
import ScoutingLog from './components/ScoutingLog';
import TrapTracker from './components/TrapTracker';
import SprayDecision from './components/SprayDecision';
import AlertsPanel from './components/AlertsPanel';
import FavoritesView from './components/FavoritesView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('Home');
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pest_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('pest_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (toolId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites(prev => 
      prev.includes(toolId) ? prev.filter(id => id !== toolId) : [...prev, toolId]
    );
  };

  const renderView = () => {
    switch (currentView) {
      case 'Home': return <Dashboard onNavigate={setCurrentView} favorites={favorites} toggleFavorite={toggleFavorite} />;
      case 'Risk': return <RiskOverview />;
      case 'Disease': return <DiseaseOverview />;
      case 'Scouting': return <ScoutingLog />;
      case 'Traps': return <TrapTracker />;
      case 'Spray': return <SprayDecision />;
      case 'Alerts': return <AlertsPanel />;
      case 'Favorites': return <FavoritesView onNavigate={setCurrentView} favorites={favorites} toggleFavorite={toggleFavorite} />;
      case 'About':
      case 'Contact':
      case 'Legal':
      case 'License':
        return <InfoPages view={currentView} />;
      default: return <Dashboard onNavigate={setCurrentView} favorites={favorites} toggleFavorite={toggleFavorite} />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full text-slate-900 overflow-hidden bg-[#f1f5f9] font-sans">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1 overflow-y-auto w-full p-4 sm:p-6 animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {renderView()}
        </div>
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}
