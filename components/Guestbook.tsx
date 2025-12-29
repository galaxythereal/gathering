
import React, { useState, useEffect } from 'react';
import { Friend, GuestbookEntry } from '../types';

interface Props {
  currentUser: Friend;
}

const Guestbook: React.FC<Props> = ({ currentUser }) => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(() => {
    const saved = localStorage.getItem('reunion_guestbook');
    return saved ? JSON.parse(saved) : [
      { id: '1', authorId: '8', authorName: 'Riley', text: "Can't wait to see everyone! It's been too long!", timestamp: Date.now() - 86400000 },
      { id: '2', authorId: '3', authorName: 'Sam', text: "Ready for the Secret Santa reveal! 🎁", timestamp: Date.now() - 43200000 }
    ];
  });
  const [newMsg, setNewMsg] = useState('');

  useEffect(() => {
    localStorage.setItem('reunion_guestbook', JSON.stringify(entries));
  }, [entries]);

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

    setEntries([entry, ...entries]);
    setNewMsg('');
  };

  return (
    <div className="py-12 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-serif text-indigo-900 mb-2">Guestbook</h2>
        <p className="text-gray-500">Leave a note for the gang.</p>
      </div>

      <form onSubmit={handleSubmit} className="mb-12 bg-white p-6 rounded-3xl shadow-lg border border-indigo-50">
        <textarea
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder={`What's on your mind, ${currentUser.name}?`}
          className="w-full h-24 p-4 rounded-2xl bg-indigo-50/50 border-none focus:ring-2 ring-indigo-200 outline-none text-gray-800 placeholder-indigo-300 resize-none transition-all"
        />
        <div className="flex justify-end mt-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transition-all active:scale-95">
            Post Note ✨
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {entries.map(entry => (
          <div key={entry.id} className={`p-6 rounded-3xl border border-white shadow-sm transition-all hover:translate-x-1 ${entry.authorId === currentUser.id ? 'bg-indigo-50 ml-12' : 'bg-white mr-12'}`}>
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-indigo-900">{entry.authorName}</span>
              <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">
                {new Date(entry.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed italic">"{entry.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
