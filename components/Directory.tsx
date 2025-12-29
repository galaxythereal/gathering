
import React from 'react';
import { Friend } from '../types';

interface Props {
  friends: Friend[];
}

const Directory: React.FC<Props> = ({ friends }) => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-indigo-900 mb-4">The People</h2>
        <p className="text-gray-500">The ten souls who make this group special.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {friends.map(friend => (
          <div key={friend.id} className="group bg-white rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition-all border border-indigo-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:scale-110"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                  {friend.name[0]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-950 leading-none">{friend.name}</h3>
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">"{friend.nickname}"</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-1">About</p>
                  <p className="text-sm text-gray-600 italic leading-relaxed">{friend.bio}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-1">How we met</p>
                    <p className="text-xs text-gray-500">{friend.howWeMet}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-1">Best Memory</p>
                    <p className="text-xs text-gray-500">{friend.bestMemory}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;
