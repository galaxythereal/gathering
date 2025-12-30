
import React, { useState, useEffect } from 'react';
import { Friend, SecretSantaMatch } from '../types';
import { generateGiftIdeas } from '../services/geminiService';

interface Props {
  friends: Friend[];
  currentUser: Friend;
  matches: SecretSantaMatch[];
  onUpdate: (matches: SecretSantaMatch[]) => void;
}

const SecretSanta: React.FC<Props> = ({ friends, currentUser, matches, onUpdate }) => {
  const [giftIdeas, setGiftIdeas] = useState<string[]>([]);
  const [isLoadingGifts, setIsLoadingGifts] = useState(false);

  const myMatch = matches.find(m => m.giverId === currentUser.id);
  const target = myMatch ? friends.find(f => f.id === myMatch.receiverId) : null;

  useEffect(() => {
    if (target && giftIdeas.length === 0) {
      loadGifts();
    }
  }, [target]);

  const loadGifts = async () => {
    if (!target) return;
    setIsLoadingGifts(true);
    const ideas = await generateGiftIdeas(currentUser, target);
    setGiftIdeas(ideas);
    setIsLoadingGifts(false);
  };

  const performDraw = () => {
    if (matches.length > 0) return;
    
    const attemptDraw = () => {
      let givers = [...friends];
      let receivers = [...friends];
      let result: SecretSantaMatch[] = [];

      for (let giver of givers) {
        let validReceivers = receivers.filter(r => r.id !== giver.id);
        if (validReceivers.length === 0) return null;
        let randomIndex = Math.floor(Math.random() * validReceivers.length);
        let receiver = validReceivers[randomIndex];
        result.push({ giverId: giver.id, receiverId: receiver.id });
        receivers = receivers.filter(r => r.id !== receiver.id);
      }
      return result;
    };

    let drawResult = null;
    let attempts = 0;
    while (!drawResult && attempts < 100) {
      drawResult = attemptDraw();
      attempts++;
    }

    if (drawResult) {
      onUpdate(drawResult);
    }
  };

  return (
    <div className="bg-white/40 p-10 rounded-[3rem] shadow-xl backdrop-blur-md border border-white/20">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-4xl font-serif text-indigo-900 mb-2">Secret Santa</h2>
          <p className="text-gray-500 italic">Your mission, {currentUser.name}, should you choose to accept it...</p>
        </div>
        {matches.length === 0 && (
          <button 
            onClick={performDraw}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-2xl font-bold text-sm shadow-lg transition-all"
          >
            Admin: Start Global Draw
          </button>
        )}
      </div>
      
      {matches.length === 0 ? (
        <div className="text-center py-20 bg-white/20 rounded-[2rem] border border-dashed border-indigo-200">
          <p className="text-indigo-400 font-bold italic">The draw hasn't happened yet. Check back soon!</p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="bg-indigo-900 p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl group-hover:scale-110 transition-transform">🎁</div>
              <p className="text-rose-300 font-bold uppercase tracking-[0.2em] text-xs mb-4">Your Gift Target</p>
              <h3 className="text-6xl font-serif text-white mb-6 tracking-tight">{target?.name}</h3>
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                <p className="text-xs text-indigo-200 uppercase tracking-widest font-bold mb-1">Their Bio</p>
                <p className="text-white italic leading-relaxed text-sm">"{target?.bio}"</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h4 className="text-xl font-bold text-indigo-900 mb-6 flex items-center">
              <span className="mr-3">💡</span> Gemini Gift Suggestions
            </h4>
            
            {isLoadingGifts ? (
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 bg-white/30 rounded-2xl animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {giftIdeas.map((idea, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-50 hover:border-indigo-200 transition-colors">
                    <p className="text-gray-700 font-medium">{idea}</p>
                  </div>
                ))}
              </div>
            )}
            
            <p className="text-[10px] text-gray-400 mt-6 italic text-center uppercase tracking-widest">
              Gifts should be under $50. Have fun!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecretSanta;
