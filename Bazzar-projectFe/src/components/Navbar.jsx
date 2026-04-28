import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ scrollToOrder, isDark, toggleTheme }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${isDark ? 'bg-gray-950/90 border-red-900/30' : 'bg-white/80 border-gray-200 shadow-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div>
            <div className={`font-anton text-2xl leading-none transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>PENTOL</div>
            <div className="font-anton text-sm text-brand-red tracking-[0.2em] -mt-1">MERCON</div>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
            <a href="#branding" className={`${isDark ? 'text-gray-400' : 'text-gray-500'} hover:text-brand-red transition-all`}>Branding</a>
            <a href="#menu" className={`${isDark ? 'text-gray-400' : 'text-gray-500'} hover:text-brand-red transition-all`}>Menu</a>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl transition-all duration-300 ${isDark ? 'bg-gray-900 text-yellow-400 border border-white/5' : 'bg-gray-100 text-gray-600 border border-gray-200'
              }`}
            title={isDark ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={scrollToOrder}
            className="bg-brand-red text-white text-[10px] md:text-[11px] font-black px-5 py-2.5 rounded-xl uppercase tracking-wider active:scale-95 transition-all shadow-lg shadow-red-600/20"
          >
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
