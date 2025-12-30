
import React, { useState, useEffect } from 'react';
import { Photo, Friend } from '../types';

interface Props {
  currentUser: Friend;
}

const Gallery: React.FC<Props> = ({ currentUser }) => {
  const [photos, setPhotos] = useState<Photo[]>(() => {
    const saved = localStorage.getItem('reunion_gallery');
    if (saved) return JSON.parse(saved);
    return [
      { 
        id: '1', 
        url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400', 
        caption: 'The original squad goals!', 
        uploadedBy: 'Admin', 
        timestamp: Date.now() - 100000000, 
        rotation: '-3deg' 
      },
      { 
        id: '2', 
        url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400', 
        caption: 'Summer 2018 vibes.', 
        uploadedBy: 'Admin', 
        timestamp: Date.now() - 50000000, 
        rotation: '2deg' 
      }
    ];
  });

  const [isUploading, setIsUploading] = useState(false);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    localStorage.setItem('reunion_gallery', JSON.stringify(photos));
  }, [photos]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPhoto: Photo = {
        id: Math.random().toString(36).substr(2, 9),
        url: reader.result as string,
        caption: caption || 'Captured Moment',
        uploadedBy: currentUser.name,
        timestamp: Date.now(),
        rotation: `${(Math.random() * 8 - 4).toFixed(1)}deg`
      };
      setPhotos(prev => [newPhoto, ...prev]);
      setCaption('');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-12 px-4">
        <h2 className="text-3xl font-serif text-indigo-900">The Gallery</h2>
        <button 
          onClick={() => setIsUploading(!isUploading)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-2xl shadow-lg transition-all flex items-center gap-2"
        >
          {isUploading ? 'Cancel' : '📸 Upload Memory'}
        </button>
      </div>

      {isUploading && (
        <div className="max-w-md mx-auto mb-12 bg-white p-6 rounded-[2rem] shadow-xl border border-indigo-50 animate-in fade-in zoom-in duration-300">
          <input 
            type="text" 
            placeholder="Add a caption..." 
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-4 mb-4 rounded-xl bg-indigo-50 border-none focus:ring-2 ring-indigo-200 outline-none text-gray-800"
          />
          <label className="block w-full text-center p-8 border-2 border-dashed border-indigo-200 rounded-2xl cursor-pointer hover:bg-indigo-50 transition-colors">
            <span className="text-indigo-400 font-bold block mb-1">Select Image</span>
            <span className="text-[10px] text-gray-400">JPG, PNG, WebP supported</span>
            <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
          </label>
        </div>
      )}

      <div className="flex justify-center gap-8 py-10 px-4 flex-wrap">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="bg-white p-3 pb-12 shadow-xl rounded-sm transform transition-all hover:scale-105 hover:z-20 cursor-pointer group"
            style={{ transform: `rotate(${photo.rotation})` }}
          >
            <div className="relative overflow-hidden w-56 h-56 bg-gray-100">
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="mt-4 px-2 max-w-[224px]">
              <p className="text-sm text-indigo-900 font-bold truncate">{photo.caption}</p>
              <div className="flex justify-between mt-2">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{photo.uploadedBy}</p>
                <p className="text-[10px] text-gray-400">{new Date(photo.timestamp).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
