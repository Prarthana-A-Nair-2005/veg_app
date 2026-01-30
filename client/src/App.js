import React, { useState } from 'react';
import { AppProvider, useApp } from './context';
import AuthFlow from './components/AuthFlow';
import Dashboard from './components/Dashboard';
import DiscoveryPanel from './components/DiscoveryPanel';
import RescueMap from './components/RescueMap';
import ImpactStats from './components/ImpactStats';

const MainApp = () => {
  const { user } = useApp();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!user) return <AuthFlow />;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-white pb-20 transition-colors">
      <header className="p-6 flex justify-between items-center bg-white dark:bg-zinc-900 border-b dark:border-zinc-800">
        <div>
          <h1 className="text-xl font-bold text-emerald-600">RESCUE PROTOCOL</h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Emergency B2B Pivot</p>
        </div>
        <div className="bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full text-emerald-600 text-sm font-bold">
          Impact Score: 450
        </div>
      </header>

      <main className="max-w-md mx-auto p-4">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'map' && <RescueMap />}
        {activeTab === 'stats' && <ImpactStats />}
        {activeTab === 'discovery' && <DiscoveryPanel />}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border-t dark:border-zinc-800 flex justify-around p-4">
        {['dashboard', 'map', 'discovery', 'stats'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize text-xs font-medium ${activeTab === tab ? 'text-emerald-500' : 'text-slate-400'}`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default () => (<AppProvider><MainApp /></AppProvider>);
