
import React, { useState } from 'react';
import { AppTab } from './types';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Capability from './views/Capability';
import Management from './views/Management';
import Analysis from './views/Analysis';
import Profile from './views/Profile';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  
  // Lifted state for internal sub-tabs to allow cross-view navigation
  const [capabilitySub, setCapabilitySub] = useState<'qa' | 'map' | 'training' | 'poster'>('qa');
  const [managementSub, setManagementSub] = useState<'daily' | 'voice' | 'report'>('daily');

  const navigateTo = (tab: AppTab, sub?: string) => {
    setActiveTab(tab);
    if (tab === AppTab.CAPABILITY && sub) {
      setCapabilitySub(sub as any);
    }
    if (tab === AppTab.MANAGEMENT && sub) {
      setManagementSub(sub as any);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME: 
        return <Home onNavigate={navigateTo} />;
      case AppTab.CAPABILITY: 
        return <Capability activeSub={capabilitySub} onSubChange={setCapabilitySub} />;
      case AppTab.MANAGEMENT: 
        return <Management activeSub={managementSub} onSubChange={setManagementSub} />;
      case AppTab.ANALYSIS: 
        return <Analysis />;
      case AppTab.PROFILE: 
        return <Profile />;
      default: 
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 max-w-md mx-auto relative overflow-x-hidden flex flex-col shadow-2xl ring-1 ring-slate-200">
      {/* Global Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-xl bg-gradient-to-br from-[#547c86] to-[#3a5861] text-white flex items-center justify-center shadow-lg shadow-teal-900/10">
            <span className="material-symbols-outlined text-lg">verified_user</span>
          </div>
          <div>
            <h1 className="font-bold tracking-tight text-slate-800 text-base leading-none">智涂安</h1>
            <p className="text-[8px] font-black text-teal-600 uppercase tracking-widest mt-1">AI Safety Pilot</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="relative p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-500">
            <span className="material-symbols-outlined text-xl">search</span>
          </button>
          <button className="relative p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-500">
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 px-6 py-4 no-scrollbar overflow-y-auto">
        {renderContent()}
      </main>

      {/* Persistent Navigation */}
      <Navigation activeTab={activeTab} onTabChange={(tab) => navigateTo(tab)} />
    </div>
  );
};

export default App;
