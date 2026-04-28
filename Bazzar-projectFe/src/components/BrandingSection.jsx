import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import pentolImg from '../assets/Pentol.png';

const BrandingSection = ({ isDark }) => {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section id="branding" ref={ref} className={`py-32 px-6 bg-brand-red text-white overflow-hidden transition-all duration-1000 ${revealClass}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-6xl md:text-8xl font-anton mb-8 leading-none uppercase tracking-tighter text-white">
            PRODUK <br /> <span className="text-yellow-300">BRAND</span>
          </h2>

          <div className="space-y-8 text-lg md:text-xl font-medium">
            <div className="p-4 border-l-4 border-yellow-300 bg-white/10 rounded-r-2xl">
              <span className="font-black text-yellow-300 uppercase text-sm tracking-widest block mb-1">Nama Produk</span>
              Pentol Mercon
            </div>

            <div className="p-4 border-l-4 border-yellow-300 bg-white/10 rounded-r-2xl">
              <span className="font-black text-yellow-300 uppercase text-sm tracking-widest block mb-1">Nama Brand</span>
              Mercon Lava
            </div>

            <p className="leading-relaxed text-justify opacity-90">
              Brand <span className="font-black underline decoration-yellow-300 decoration-2 italic">"Mercon Lava"</span> dipilih karena menggambarkan sensasi pedas yang panas dan meledak seperti lava. Nama ini memberikan kesan kuat, unik, dan mudah diingat, sehingga dapat menarik perhatian konsumen terutama kalangan anak muda.
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-[60px] group-hover:bg-yellow-400/40 transition-all duration-500 scale-110"></div>

            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500 overflow-hidden">
              <img src={pentolImg} alt="Mercon Lava Product" className="w-full h-full object-contain p-8 drop-shadow-2xl" />
            </div>

            <div className="absolute -top-4 -right-4 bg-yellow-400 text-brand-dark font-black px-6 py-2 rounded-full text-xs shadow-xl rotate-12">
              PREMIUM TASTE
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-dark text-white font-black px-6 py-2 rounded-full text-xs shadow-xl -rotate-12 border border-white/10">
              100% PEDAS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
