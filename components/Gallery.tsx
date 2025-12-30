
import React from 'react';
import { Photo, Friend } from '../types';

interface Props {
  currentUser: Friend;
  photos: Photo[];
  onUpdate: (photos: Photo[]) => void;
}

const Gallery: React.FC<Props> = ({ photos }) => {
  return (
    <div className="py-12 px-4 animate-fade-in">
      <div className="mb-12">
        <h2 className="text-4xl font-serif text-indigo-950">Group Memories</h2>
        <p className="text-gray-500 italic mt-1">Photos of our favorite moments, hardcoded in the codebase.</p>
      </div>

      <div className="flex justify-center gap-10 py-10 flex-wrap">
        {photos.length === 0 && (
          <div className="text-center py-20 text-gray-400 italic">No hardcoded photos found in constants.tsx.</div>
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
            </div>
            <div className="mt-5 px-1">
              <p className="text-lg text-indigo-950 font-serif italic mb-1 truncate max-w-[220px]">{photo.caption}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">{photo.uploadedBy}</span>
                <span className="text-[10px] text-gray-400 font-medium">EST. MEMORY</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gallery;
