
import React from 'react';

interface Props {
  onLogout: () => void;
}

const Header: React.FC<Props> = ({ onLogout }) => {
  return (
    <header className="pt-8 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/40 backdrop-blur-md rounded-[2rem] p-4 pl-8 border border-white/40 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="text-2xl">🥂</div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">The Grand Reunion <span className="text-indigo-600">'25</span></h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Friends for Eternity</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <div className="hidden md:flex bg-green-50 text-green-600 text-[10px] font-bold py-2 px-4 rounded-full border border-green-100 animate-pulse">
            ● 10 FRIENDS ONLINE
          </div>
          <button 
            onClick={onLogout}
            className="bg-white/80 hover:bg-rose-50 text-rose-500 text-[10px] font-bold py-2 px-6 rounded-xl border border-rose-100 transition-all shadow-sm"
          >
            LOGOUT
          </button>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-24 mb-6">
        <h2 className="text-7xl md:text-9xl font-serif text-indigo-950 mb-8 italic tracking-tighter leading-tight">
          Still <span className="text-rose-500">Us.</span>
        </h2>
        <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-indigo-100 to-transparent"></div>
      </div>
    </header>
  );
};

export default Header;
