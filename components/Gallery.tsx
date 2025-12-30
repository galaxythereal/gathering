
import React, { useState } from 'react';
import { Photo, Friend } from '../types';

interface Props {
  currentUser: Friend;
  photos: Photo[];
  onUpdate: (photos: Photo[]) => void;
}

const Gallery: React.FC<Props> = ({ currentUser, photos, onUpdate }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [caption, setCaption] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPhoto: Photo = {
        id: Math.random().toString(36).substr(2, 9),
        url: reader.result as string,
        caption: caption || 'Sweet Memory',
        uploadedBy: currentUser.name,
        timestamp: Date.now(),
        rotation: `${(Math.random() * 8 - 4).toFixed(1)}deg`
      };
      onUpdate([newPhoto, ...photos]);
      setCaption('');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = (id: string) => {
    if (window.confirm('Delete this photo for everyone?')) {
      onUpdate(photos.filter(p => p.id !== id));
    }
  };

  return (
    <div className="py-12 px-4 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-serif text-indigo-950">Group Memories</h2>
          <p className="text-gray-500 italic mt-1">Shared by everyone in the cloud.</p>
        </div>
        <button 
          onClick={() => setIsUploading(!isUploading)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-2xl shadow-xl transition-all flex items-center gap-3 transform hover:scale-105 active:scale-95"
        >
          {isUploading ? '✕ Cancel' : '📸 Upload Photo'}
        </button>
      </div>

      {isUploading && (
        <div className="max-w-xl mx-auto mb-16 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-indigo-50 animate-in slide-in-from-top-4 duration-300">
          <label className="block text-xs font-bold text-indigo-300 uppercase tracking-widest mb-3 ml-1">Add a Caption</label>
          <input 
            type="text" 
            placeholder="Remember that time when..." 
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-4 mb-6 rounded-2xl bg-indigo-50/50 border-none focus:ring-2 ring-indigo-200 outline-none text-gray-800 transition-all"
          />
          <div className="relative">
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
              accept="image/*" 
              onChange={handleFileUpload} 
            />
            <div className="w-full text-center p-12 border-2 border-dashed border-indigo-200 rounded-3xl hover:bg-indigo-50/50 transition-colors flex flex-col items-center">
              <span className="text-3xl mb-2">📁</span>
              <span className="text-indigo-600 font-bold text-lg">Select Image from Device</span>
              <span className="text-xs text-indigo-300 mt-1 uppercase tracking-widest">JPG, PNG, WebP supported</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center gap-10 py-10 flex-wrap">
        {photos.length === 0 && (
          <div className="text-center py-20 text-gray-400 italic">No photos yet. Be the first to upload!</div>
        )}
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="bg-white p-4 pb-12 shadow-xl rounded-sm transform transition-all hover:scale-110 hover:z-30 cursor-pointer group animate-in zoom-in duration-500"
            style={{ transform: `rotate(${photo.rotation})` }}
          >
            <div className="relative overflow-hidden w-64 h-64 bg-gray-50 shadow-inner">
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <button 
                onClick={(e) => { e.stopPropagation(); removePhoto(photo.id); }}
                className="absolute top-2 right-2 bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                ✕
              </button>
            </div>
            <div className="mt-5 px-1">
              <p className="text-lg text-indigo-950 font-serif italic mb-1 truncate">{photo.caption}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">{photo.uploadedBy}</span>
                <span className="text-[10px] text-gray-400 font-medium">{new Date(photo.timestamp).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
