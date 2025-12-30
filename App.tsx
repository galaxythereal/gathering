
import React, { useState, useEffect, useCallback } from 'react';
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
import { syncService, GlobalState } from './services/syncService';

type Tab = 'santa' | 'activities' | 'directory' | 'memories' | 'guestbook' | 'gallery' | 'sync';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<Friend | null>(() => {
    const saved = localStorage.getItem('reunion_auth');
    return saved ? JSON.parse(saved) : null;
  });

  const [roomCode, setRoomCode] = useState<string>(() => {
    return localStorage.getItem('reunion_room_code') || '';
  });

  const [globalState, setGlobalState] = useState<GlobalState>({
    photos: [],
    activities: [],
    guestbook: [],
    santaMatches: [],
    lastUpdated: Date.now()
  });

  const [isSyncing, setIsSyncing] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('gallery');

  // Load cloud state on start or when room code changes
  useEffect(() => {
    if (roomCode) {
      handleSyncPull();
      // Poll for updates every 30 seconds
      const interval = setInterval(handleSyncPull, 30000);
      return () => clearInterval(interval);
    }
  }, [roomCode]);

  const handleSyncPull = async () => {
    if (!roomCode) return;
    setIsSyncing(true);
    const remote = await syncService.fetchState(roomCode);
    if (remote) {
      setGlobalState(remote);
    }
    setIsSyncing(false);
  };

  const handleSyncPush = async (newState: Partial<GlobalState>) => {
    const updated = { ...globalState, ...newState, lastUpdated: Date.now() };
    setGlobalState(updated);
    if (roomCode) {
      setIsSyncing(true);
      await syncService.saveState(roomCode, updated);
      setIsSyncing(false);
    }
  };

  const handleLogin = (friend: Friend) => {
    setCurrentUser(friend);
    localStorage.setItem('reunion_auth', JSON.stringify(friend));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('reunion_auth');
  };

  const setAndSaveRoomCode = (code: string) => {
    const cleanCode = code.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    setRoomCode(cleanCode);
    localStorage.setItem('reunion_room_code', cleanCode);
  };

  if (!currentUser) {
    return <Login friends={DEFAULT_FRIENDS} onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen pb-20 selection:bg-rose-200 selection:text-rose-900">
      <Header onLogout={handleLogout} isSyncing={isSyncing} isConnected={!!roomCode} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Countdown />

        {!roomCode && (
          <div className="max-w-md mx-auto my-12 bg-amber-50 border border-amber-200 p-8 rounded-[2rem] text-center animate-in zoom-in duration-500">
            <h3 className="text-xl font-bold text-amber-900 mb-2">Cloud Sync is Off</h3>
            <p className="text-amber-700 text-sm mb-6">Create or join a "Reunion Room" to share photos and activities with your friends across different devices!</p>
            <button 
              onClick={() => setActiveTab('sync')}
              className="bg-amber-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-amber-700 transition-all"
            >
              Setup Cloud Sync
            </button>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="sticky top-6 z-40 flex justify-center mb-16">
          <div className="bg-white/70 backdrop-blur-xl p-2 rounded-3xl border border-white shadow-xl flex gap-1 overflow-x-auto no-scrollbar max-w-full">
            {[
              { id: 'gallery', icon: '📸', label: 'Gallery' },
              { id: 'santa', icon: '🎁', label: 'Santa' },
              { id: 'activities', icon: '🎈', label: 'Board' },
              { id: 'directory', icon: '👥', label: 'Gang' },
              { id: 'guestbook', icon: '✍️', label: 'Notes' },
              { id: 'sync', icon: '☁️', label: 'Cloud' },
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
          {activeTab === 'gallery' && (
            <Gallery 
              currentUser={currentUser} 
              photos={globalState.photos} 
              onUpdate={(photos) => handleSyncPush({ photos })} 
            />
          )}
          {activeTab === 'santa' && (
            <SecretSanta 
              friends={DEFAULT_FRIENDS} 
              currentUser={currentUser} 
              matches={globalState.santaMatches}
              onUpdate={(matches) => handleSyncPush({ santaMatches: matches })}
            />
          )}
          {activeTab === 'activities' && (
            <ActivityPlanner 
              friends={DEFAULT_FRIENDS} 
              currentUser={currentUser} 
              activities={globalState.activities}
              onUpdate={(activities) => handleSyncPush({ activities })}
            />
          )}
          {activeTab === 'directory' && <Directory friends={DEFAULT_FRIENDS} />}
          {activeTab === 'guestbook' && (
            <Guestbook 
              currentUser={currentUser} 
              entries={globalState.guestbook}
              onUpdate={(guestbook) => handleSyncPush({ guestbook })}
            />
          )}
          {activeTab === 'sync' && (
            <div className="max-w-xl mx-auto py-12">
               <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-indigo-50">
                  <h2 className="text-3xl font-serif text-indigo-950 mb-4">Cloud Reunion Settings</h2>
                  <p className="text-gray-500 mb-8">Type a unique code and share it with your 10 friends. Everyone who uses this code will share the same photo gallery and activities.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-indigo-300 uppercase mb-2">Your Shared Reunion Code</label>
                      <input 
                        value={roomCode}
                        onChange={(e) => setAndSaveRoomCode(e.target.value)}
                        placeholder="e.g. THE-BEST-SQUAD-2025"
                        className="w-full bg-indigo-50 p-5 rounded-2xl text-2xl font-bold tracking-widest text-indigo-900 border-2 border-transparent focus:border-indigo-200 focus:outline-none"
                      />
                    </div>
                    
                    <button 
                      onClick={handleSyncPull}
                      className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
                    >
                      {isSyncing ? '🔄 Syncing...' : '📡 Force Refresh Cloud'}
                    </button>
                  </div>

                  <div className="mt-10 pt-10 border-t border-indigo-50">
                    <div className="flex items-center gap-3 text-sm text-green-600 font-medium">
                      <div className={`w-2 h-2 rounded-full ${roomCode ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
                      {roomCode ? `Connected to Cloud: ${roomCode}` : 'Offline Mode (Local Storage Only)'}
                    </div>
                  </div>
               </div>
            </div>
          )}
        </div>

        <section className="mt-40 py-20 border-t border-gray-100 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif text-indigo-900 mb-6 italic">Stay Gold.</h2>
            <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
              "Nothing gold can stay," Frost said. But ten friends reuniting after two years might just prove him wrong.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
