import React from 'react';

const HeroSection = ({ scrollToOrder, isDark }) => {
  return (
    <section className={`min-h-screen relative flex items-center justify-center overflow-hidden transition-colors duration-500 ${isDark ? '' : 'bg-white'}`}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 transition-colors duration-500 ${isDark
          ? 'bg-gradient-to-br from-red-950/40 via-gray-950 to-orange-950/20'
          : 'bg-gradient-to-br from-red-50/50 via-white to-orange-50/50'
          }`}></div>

        {/* Animated Orbs */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse transition-colors ${isDark ? 'bg-brand-red/10' : 'bg-brand-red/5'
          }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse transition-colors ${isDark ? 'bg-brand-orange/5' : 'bg-brand-orange/5'
          }`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 text-center">
        <div className={`inline-block px-4 py-1.5 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase mb-8 animate-fadeIn transition-colors ${isDark ? 'border-brand-red/30 bg-brand-red/5 text-brand-red' : 'border-brand-red/20 bg-brand-red/5 text-brand-red'
          }`}>
          Sensasi Pedas Meledak
        </div>

        <h1 className="text-6xl md:text-9xl font-anton mb-8 leading-[0.85] tracking-tighter">
          <span className={`transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>PENTOL</span><br />
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(232,35,10,0.3)]">MERCON</span>
        </h1>

        <p className={`text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium leading-relaxed transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
          Sensasi pedas yang meledak seperti lava di setiap gigitan. Rasakan ledakan kelezatannya!
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button
            onClick={scrollToOrder}
            className="w-full sm:w-auto bg-gradient-to-r from-brand-red to-brand-orange text-white px-10 py-5 rounded-2xl font-anton text-xl tracking-wider shadow-2xl shadow-red-600/30 hover:scale-105 active:scale-95 transition-all"
          >
            ORDER SEKARANG
          </button>
          <a
            href="#branding"
            className={`w-full sm:w-auto border px-10 py-5 rounded-2xl font-bold text-lg transition-all ${isDark
              ? 'border-white/10 text-gray-300 hover:text-white hover:bg-white/5'
              : 'border-gray-200 text-gray-600 hover:text-brand-dark hover:bg-gray-100'
              }`}
          >
            Lihat Branding
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
