
import React from 'react';
import { Friend } from '../types';

interface Props {
  friends: Friend[];
}

const Directory: React.FC<Props> = ({ friends }) => {
  return (
    <div className="py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-indigo-950 mb-4 tracking-tight">The Gang</h2>
        <p className="text-gray-500 max-w-lg mx-auto italic">
          Profile cards for each one of us. Still as cool as day one.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {friends.map(friend => (
          <div key={friend.id} className="group bg-white rounded-[2.5rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-indigo-50 relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:scale-110 group-hover:bg-rose-50 duration-500"></div>
            
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-rose-100 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-white">
                  {friend.name[0]}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-indigo-950 leading-tight">{friend.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">"{friend.nickname}"</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-2 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 mr-2"></span>
                    Current Vibe
                  </p>
                  <p className="text-sm text-gray-600 italic leading-relaxed bg-indigo-50/30 p-4 rounded-2xl border border-indigo-50/50">
                    {friend.bio}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-1">How we met</p>
                    <p className="text-xs text-gray-500 font-medium">{friend.howWeMet}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-50">
                    <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-1">Favorite Memory</p>
                    <p className="text-xs text-indigo-900/70 font-medium leading-relaxed italic">
                      "{friend.bestMemory}"
                    </p>
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
