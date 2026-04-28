import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import pentolImg from '../assets/Pentol.png';

const ProductSection = ({ scrollToOrder, isDark }) => {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section id="menu" ref={ref} className={`py-32 px-6 transition-all duration-1000 ${revealClass} ${isDark ? 'bg-gray-950' : 'bg-white'
      }`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-anton uppercase italic tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-gray-900'
            }`}>
            Menu <span className="bg-gradient-to-r from-brand-orange to-yellow-400 bg-clip-text text-transparent">Andalan</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-red mt-4 rounded-full"></div>
        </div>

        <div className="flex justify-center">
          <div className={`group rounded-[40px] p-10 max-w-sm w-full shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${isDark
              ? 'bg-gray-900/50 border-white/5 backdrop-blur-sm hover:border-brand-red/30'
              : 'bg-white border-gray-100 hover:border-brand-red/20 hover:shadow-brand-red/5'
            }`}>
            <div className="relative mb-10">
              <div className={`w-full h-64 rounded-3xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 overflow-hidden ${isDark ? 'bg-gradient-to-br from-brand-red/20 to-orange-500/10' : 'bg-gray-50'
                }`}>
                <img src={pentolImg} alt="Pentol Mercon" className="w-full h-full object-contain p-4 drop-shadow-xl" />
              </div>
              <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase">
                Terlaris
              </div>
            </div>

            <h3 className={`font-anton text-3xl mb-2 tracking-tight transition-colors ${isDark ? 'text-white' : 'text-gray-900'
              }`}>Pentol Mercon</h3>
            <p className={`text-sm mb-6 font-medium transition-colors ${isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>Pentol kenyal pedas level mercon</p>

            <div className="flex items-center justify-between mb-8">
              <span className="text-brand-red font-anton text-4xl">Rp 7.000</span>

            </div>

            <button
              onClick={scrollToOrder}
              className={`block w-full font-anton text-lg py-5 rounded-2xl transition-all shadow-xl active:scale-95 ${isDark
                  ? 'bg-white text-brand-dark hover:bg-brand-red hover:text-white'
                  : 'bg-brand-dark text-white hover:bg-brand-red'
                }`}
            >
              BELI SEKARANG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
