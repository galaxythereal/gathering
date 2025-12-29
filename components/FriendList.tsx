
import React from 'react';
import { Friend } from '../types';

interface Props {
  friends: Friend[];
  onUpdate: (friends: Friend[]) => void;
}

const FriendList: React.FC<Props> = ({ friends, onUpdate }) => {
  const handleBioChange = (id: string, newBio: string) => {
    const next = friends.map(f => f.id === id ? { ...f, bio: newBio } : f);
    onUpdate(next);
  };

  const handleNameChange = (id: string, newName: string) => {
    const next = friends.map(f => f.id === id ? { ...f, name: newName } : f);
    onUpdate(next);
  };

  return (
    <div className="bg-indigo-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden mb-12">
      <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="100" />
        </svg>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl font-serif mb-2">The Gathering List</h2>
        <p className="text-indigo-200 mb-8">Tell us a bit about yourself so the AI can find the perfect activities and gifts!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {friends.map(friend => (
            <div key={friend.id} className="bg-indigo-800/50 p-4 rounded-2xl border border-indigo-700/50 group focus-within:ring-2 ring-rose-400 transition-all">
              <input 
                value={friend.name}
                onChange={(e) => handleNameChange(friend.id, e.target.value)}
                className="bg-transparent font-bold text-lg w-full mb-1 focus:outline-none placeholder-indigo-300"
                placeholder="Name"
              />
              <textarea
                value={friend.bio}
                onChange={(e) => handleBioChange(friend.id, e.target.value)}
                className="bg-transparent text-xs w-full h-20 resize-none opacity-70 focus:opacity-100 transition-opacity focus:outline-none leading-relaxed"
                placeholder="What are you into lately?"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendList;
