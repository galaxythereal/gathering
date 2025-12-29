
import React from 'react';
import { MEMORY_TIMELINE } from '../constants';

const MemoryLane: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-indigo-900 mb-4">Memory Lane</h2>
        <div className="h-1 w-24 bg-rose-200 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-indigo-100"></div>
        
        <div className="space-y-12">
          {MEMORY_TIMELINE.map((mem, idx) => (
            <div key={mem.id} className={`flex items-center w-full ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/2 px-8">
                <div className={`bg-white p-6 rounded-3xl shadow-lg border border-indigo-50 hover:shadow-xl transition-all ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="text-rose-500 font-bold font-serif text-2xl">{mem.year}</span>
                  <h3 className="text-xl font-bold text-indigo-900 my-2">{mem.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{mem.description}</p>
                </div>
              </div>
              <div className="relative z-10 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white shadow-md"></div>
              <div className="w-1/2 px-8"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h3 className="text-2xl font-serif text-indigo-900 mb-8 text-center italic">"Remember when..." Moments</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "The time we got lost in the city at 2 AM",
            "Alex's accidental spicy wing challenge",
            "The library all-nighter with 5 coffees each",
            "Robin's yoga session that turned into a nap",
            "That music festival where it rained non-stop",
            "Winning the local trivia night as 'The Goofies'",
            "Our first group dinner after high school",
            "The chaotic board game marathon"
          ].map((moment, i) => (
            <div key={i} className="bg-white/50 border border-white p-4 rounded-2xl shadow-sm text-sm text-gray-600 italic hover:rotate-1 transition-transform">
              "{moment}"
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryLane;
