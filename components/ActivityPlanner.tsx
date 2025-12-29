
import React, { useState, useEffect } from 'react';
import { Friend, ActivityIdea } from '../types';
import { generateActivities } from '../services/geminiService';

interface Props {
  friends: Friend[];
  currentUser: Friend;
}

const ActivityPlanner: React.FC<Props> = ({ friends, currentUser }) => {
  const [activities, setActivities] = useState<ActivityIdea[]>(() => {
    const saved = localStorage.getItem('reunion_activities');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newAct, setNewAct] = useState({ title: '', description: '', duration: '', vibes: '' });

  useEffect(() => {
    localStorage.setItem('reunion_activities', JSON.stringify(activities));
  }, [activities]);

  const handleAISuggest = async () => {
    setLoading(true);
    const data = await generateActivities(friends);
    const formatted = data.map(d => ({
      ...d,
      id: Math.random().toString(36).substr(2, 9),
      suggestedBy: 'Gemini AI',
      timestamp: Date.now()
    }));
    setActivities([...formatted, ...activities]);
    setLoading(false);
  };

  const handleManualAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAct.title.trim()) return;

    const activity: ActivityIdea = {
      id: Math.random().toString(36).substr(2, 9),
      title: newAct.title,
      description: newAct.description,
      duration: newAct.duration || 'Flexible',
      vibes: newAct.vibes.split(',').map(v => v.trim()).filter(v => v),
      suggestedBy: currentUser.name,
      timestamp: Date.now()
    };

    setActivities([activity, ...activities]);
    setNewAct({ title: '', description: '', duration: '', vibes: '' });
    setShowForm(false);
  };

  const removeActivity = (id: string) => {
    setActivities(activities.filter(a => a.id !== id));
  };

  return (
    <div className="mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-4xl font-serif text-indigo-900">Gathering Board</h2>
          <p className="text-gray-600 italic">Everyone contributes to the weekend vibe.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="flex-1 md:flex-none bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-all"
          >
            {showForm ? 'Close' : '✍️ Suggest Activity'}
          </button>
          <button 
            onClick={handleAISuggest}
            disabled={loading}
            className="flex-1 md:flex-none bg-white/50 hover:bg-white text-indigo-600 font-bold py-3 px-6 rounded-2xl border border-indigo-100 transition-all shadow-sm"
          >
            {loading ? 'Thinking...' : '🤖 Ask Gemini'}
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleManualAdd} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-indigo-50 mb-12 animate-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-indigo-300 uppercase mb-2 ml-1">Activity Title</label>
              <input 
                required
                value={newAct.title}
                onChange={e => setNewAct({...newAct, title: e.target.value})}
                className="w-full bg-indigo-50 rounded-xl p-4 focus:ring-2 ring-indigo-200 outline-none"
                placeholder="e.g. Backyard Stargazing"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-indigo-300 uppercase mb-2 ml-1">Vibes (comma separated)</label>
              <input 
                value={newAct.vibes}
                onChange={e => setNewAct({...newAct, vibes: e.target.value})}
                className="w-full bg-indigo-50 rounded-xl p-4 focus:ring-2 ring-indigo-200 outline-none"
                placeholder="Chill, Night, Wine"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-indigo-300 uppercase mb-2 ml-1">Description</label>
              <textarea 
                value={newAct.description}
                onChange={e => setNewAct({...newAct, description: e.target.value})}
                className="w-full bg-indigo-50 rounded-xl p-4 h-24 focus:ring-2 ring-indigo-200 outline-none resize-none"
                placeholder="Tell us more about it..."
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-indigo-300 uppercase mb-2 ml-1">Expected Duration</label>
              <input 
                value={newAct.duration}
                onChange={e => setNewAct({...newAct, duration: e.target.value})}
                className="w-full bg-indigo-50 rounded-xl p-4 focus:ring-2 ring-indigo-200 outline-none"
                placeholder="2-3 Hours"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button className="bg-indigo-600 text-white font-bold py-3 px-10 rounded-2xl shadow-lg hover:bg-indigo-700 transition-all">
              Post to Group
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.length === 0 && !loading && (
          <div className="col-span-full py-20 text-center text-gray-400 italic">
            No activities yet. Start suggesting!
          </div>
        )}
        
        {activities.map((act) => (
          <div key={act.id} className="bg-white p-8 rounded-[2rem] shadow-lg border border-indigo-50 hover:shadow-xl transition-all group relative">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-50 px-3 py-1 rounded-full">
                {act.duration}
              </span>
              <button 
                onClick={() => removeActivity(act.id)}
                className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-rose-500 transition-all text-xs"
              >
                Remove
              </button>
            </div>
            <h3 className="text-2xl font-bold text-indigo-950 mb-4">{act.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{act.description}"</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {act.vibes.map((vibe, i) => (
                <span key={i} className="text-[10px] bg-rose-50 text-rose-500 px-3 py-1 rounded-full font-bold">
                  #{vibe.toUpperCase()}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-[10px] font-bold text-indigo-600">
                  {act.suggestedBy[0]}
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">By {act.suggestedBy}</span>
              </div>
              <span className="text-[10px] text-gray-300">{new Date(act.timestamp).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityPlanner;
