
import React, { useState } from 'react';
import { Friend, GuestbookEntry } from '../types';

interface Props {
  currentUser: Friend;
  entries: GuestbookEntry[];
  onUpdate: (entries: GuestbookEntry[]) => void;
}

const Guestbook: React.FC<Props> = ({ currentUser, entries, onUpdate }) => {
  const [activeCategory, setActiveCategory] = useState<'hype' | 'thanks'>('hype');
  const [newMsg, setNewMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;

    const entry: GuestbookEntry = {
      id: Math.random().toString(36).substr(2, 9),
      authorId: currentUser.id,
      authorName: currentUser.name,
      text: newMsg,
      timestamp: Date.now()
    };

    onUpdate([entry, ...entries]);
    setNewMsg('');
  };

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-indigo-950 mb-4">Message Board</h2>
        <p className="text-gray-500 italic max-w-md mx-auto">Shared notes with the gang.</p>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <button 
          onClick={() => setActiveCategory('hype')}
          className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all ${activeCategory === 'hype' ? 'bg-rose-500 text-white shadow-lg' : 'bg-white text-gray-500 hover:text-rose-500 border border-gray-100'}`}
        >
          🚀 Pre-Gathering Hype
        </button>
        <button 
          onClick={() => setActiveCategory('thanks')}
          className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all ${activeCategory === 'thanks' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-500 hover:text-indigo-600 border border-gray-100'}`}
        >
          💌 Post-Gathering Love
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-16 bg-white p-8 rounded-[2.5rem] shadow-xl border border-indigo-50 relative overflow-hidden">
        <textarea
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder={activeCategory === 'hype' ? `What are you excited for, ${currentUser.name}?` : `Thank the group, ${currentUser.name}...`}
          className="w-full h-32 p-6 rounded-3xl bg-indigo-50/50 border-none focus:ring-2 ring-indigo-200 outline-none text-gray-800 placeholder-indigo-300 resize-none transition-all text-xl font-light leading-relaxed italic"
        />
        <div className="flex justify-end mt-6">
          <button className="bg-indigo-950 hover:bg-black text-white font-bold py-4 px-10 rounded-2xl shadow-xl transition-all active:scale-95 flex items-center gap-2">
            Post Note <span>{activeCategory === 'hype' ? '✨' : '💝'}</span>
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 gap-8">
        {entries.map(entry => (
          <div key={entry.id} className={`group p-8 rounded-[2.5rem] border border-white shadow-sm transition-all hover:translate-x-1 relative overflow-hidden ${entry.authorId === currentUser.id ? 'bg-indigo-50/50 ml-12' : 'bg-white mr-12'}`}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-400">
                  {entry.authorName[0]}
                </div>
                <span className="font-bold text-indigo-950 text-lg">{entry.authorName}</span>
              </div>
              <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">
                {new Date(entry.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed italic text-xl">
              "{entry.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
