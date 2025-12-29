
import React, { useState } from 'react';
import { Friend } from '../types';

interface Props {
  friends: Friend[];
  onLogin: (friend: Friend) => void;
}

const Login: React.FC<Props> = ({ friends, onLogin }) => {
  const [selectedId, setSelectedId] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const friend = friends.find(f => f.id === selectedId);
    if (friend && friend.secretCode === pin) {
      onLogin(friend);
    } else {
      setError('Invalid PIN. Please try again.');
      setPin('');
    }
  };

  return (
    <div className="fixed inset-0 bg-indigo-950 flex items-center justify-center p-6 z-[100]">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500 rounded-full blur-[120px]"></div>
      </div>

      <form onSubmit={handleLogin} className="relative glass p-10 rounded-[2.5rem] w-full max-w-md shadow-2xl border border-white/10">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">🥂</div>
          <h2 className="text-3xl font-serif text-white mb-2 italic">Who are you?</h2>
          <p className="text-indigo-200/60 text-sm">Select your name and enter your secret PIN.</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-indigo-300 uppercase tracking-widest mb-2 ml-1">Friend Name</label>
            <select 
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded-2xl p-4 focus:ring-2 ring-rose-400 outline-none appearance-none cursor-pointer"
              required
            >
              <option value="" className="text-gray-900">Choose from the gang...</option>
              {friends.map(f => (
                <option key={f.id} value={f.id} className="text-gray-900">{f.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-indigo-300 uppercase tracking-widest mb-2 ml-1">4-Digit PIN</label>
            <input 
              type="password"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••"
              className="w-full bg-white/10 border border-white/20 text-white text-center text-3xl tracking-[1em] rounded-2xl p-4 focus:ring-2 ring-rose-400 outline-none"
              required
            />
          </div>

          {error && <p className="text-rose-400 text-sm text-center font-bold animate-pulse">{error}</p>}

          <button 
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-rose-900/20 transition-all active:scale-95"
          >
            Enter The Reunion
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-white/30 italic">
          Psst... PINs are pre-configured in the system.
        </p>
      </form>
    </div>
  );
};

export default Login;
