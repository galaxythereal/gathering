
import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import SecretSanta from './components/SecretSanta';
import Directory from './components/Directory';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import { Friend } from './types';
import { DEFAULT_FRIENDS, HARDCODED_SANTA_MATCHES, HARDCODED_PHOTOS } from './constants';

type Tab = 'gallery' | 'santa' | 'directory';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<Friend | null>(() => {
    const saved = localStorage.getItem('reunion_auth');
    return saved ? JSON.parse(saved) : null;
  });

  const [activeTab, setActiveTab] = useState<Tab>('gallery');

  const handleLogin = (friend: Friend) => {
    setCurrentUser(friend);
    localStorage.setItem('reunion_auth', JSON.stringify(friend));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('reunion_auth');
  };

  if (!currentUser) {
    return <Login friends={DEFAULT_FRIENDS} onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen pb-20 selection:bg-rose-200 selection:text-rose-900">
      <Header onLogout={handleLogout} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Countdown />

        {/* Navigation Tabs */}
        <div className="sticky top-6 z-40 flex justify-center mb-16">
          <div className="bg-white/70 backdrop-blur-xl p-2 rounded-3xl border border-white shadow-xl flex gap-1 overflow-x-auto no-scrollbar max-w-full">
            {[
              { id: 'gallery', icon: '📸', label: 'Gallery' },
              { id: 'santa', icon: '🎁', label: 'Santa' },
              { id: 'directory', icon: '👥', label: 'Gang' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-bold text-sm transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105' 
                  : 'text-gray-500 hover:text-indigo-600 hover:bg-white'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === 'gallery' && (
            <Gallery 
              currentUser={currentUser} 
              photos={HARDCODED_PHOTOS} 
              onUpdate={() => {}} 
            />
          )}
          {activeTab === 'santa' && (
            <SecretSanta 
              friends={DEFAULT_FRIENDS} 
              currentUser={currentUser} 
              matches={HARDCODED_SANTA_MATCHES}
              onUpdate={() => {}} 
            />
          )}
          {activeTab === 'directory' && <Directory friends={DEFAULT_FRIENDS} />}
        </div>

        <section className="mt-40 py-20 border-t border-gray-100 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif text-indigo-900 mb-6 italic">Stay Gold.</h2>
            <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
              "Nothing gold can stay," Frost said. But friends reuniting after two years might just prove him wrong.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
