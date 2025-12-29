
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import SecretSanta from './components/SecretSanta';
import ActivityPlanner from './components/ActivityPlanner';
import Directory from './components/Directory';
import MemoryLane from './components/MemoryLane';
import Guestbook from './components/Guestbook';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import { Friend } from './types';
import { DEFAULT_FRIENDS } from './constants';

type Tab = 'santa' | 'activities' | 'directory' | 'memories' | 'guestbook' | 'gallery';

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
              { id: 'activities', icon: '🎈', label: 'Board' },
              { id: 'directory', icon: '👥', label: 'Gang' },
              { id: 'memories', icon: '🕰️', label: 'History' },
              { id: 'guestbook', icon: '✍️', label: 'Notes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all whitespace-nowrap ${
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
          {activeTab === 'gallery' && <Gallery currentUser={currentUser} />}
          {activeTab === 'santa' && <SecretSanta friends={DEFAULT_FRIENDS} currentUser={currentUser} />}
          {activeTab === 'activities' && <ActivityPlanner friends={DEFAULT_FRIENDS} currentUser={currentUser} />}
          {activeTab === 'directory' && <Directory friends={DEFAULT_FRIENDS} />}
          {activeTab === 'memories' && <MemoryLane />}
          {activeTab === 'guestbook' && <Guestbook currentUser={currentUser} />}
        </div>

        <section className="mt-40 py-20 border-t border-gray-100 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif text-indigo-900 mb-6 italic">Stay Gold.</h2>
            <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
              "Nothing gold can stay," Frost said. But ten friends reuniting after two years might just prove him wrong.
            </p>
            <div className="mt-10 flex justify-center gap-6">
              <span className="h-1.5 w-1.5 bg-indigo-200 rounded-full animate-bounce"></span>
              <span className="h-1.5 w-1.5 bg-rose-200 rounded-full animate-bounce delay-75"></span>
              <span className="h-1.5 w-1.5 bg-amber-200 rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        </section>
      </main>

      {/* Social Shortcut */}
      <div className="fixed bottom-8 right-8 z-50 group">
        <a 
          href="https://photos.google.com" 
          target="_blank" 
          rel="noreferrer"
          className="bg-indigo-900 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all hover:scale-110 active:scale-95 group-hover:rotate-12"
        >
          ☁️
          <span className="absolute right-20 bg-indigo-900 text-white text-[10px] font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest shadow-xl border border-white/10">
            Cloud Backup
          </span>
        </a>
      </div>
    </div>
  );
};

export default App;
