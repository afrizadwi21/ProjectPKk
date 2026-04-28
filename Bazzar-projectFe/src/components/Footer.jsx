import React from 'react';

const Footer = ({ isDark }) => {
  return (
    <footer className={`border-t transition-colors duration-500 py-24 px-6 ${isDark ? 'bg-gray-950 border-white/5' : 'bg-white border-gray-100'
      }`}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <div className={`font-anton text-4xl tracking-tighter mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
            PENTOL <span className="text-brand-red">MERCON</span>
          </div>
          <p className="text-gray-500 font-medium text-sm tracking-widest uppercase">Mercon Lava Official</p>
        </div>

        {/* SOCIAL ICONS (WA) */}
        <div className="flex gap-8 mb-16">
          <a
            href="https://wa.me/6281339529934"
            className="group flex flex-col items-center gap-4"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`w-20 h-20 border rounded-[24px] flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500/10 transition-all duration-500 shadow-2xl ${isDark ? 'bg-gray-900 border-white/5' : 'bg-gray-50 border-gray-200 shadow-sm'
              }`}>
              <span className="text-4xl opacity-40 group-hover:opacity-100 transition-opacity duration-500">💬</span>
            </div>
            <span className="text-[10px] uppercase font-black text-gray-600 group-hover:text-green-500 tracking-[0.3em] transition-colors">WhatsApp</span>
          </a>
        </div>

        <div className={`w-16 h-[1px] mb-8 transition-colors ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}></div>

        <p className={`text-[10px] tracking-[0.4em] font-black uppercase text-center transition-colors ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          © 2026 Pentol Mercon. All rights reserved. <br />
          <span className={`mt-2 block tracking-[0.2em] transition-colors ${isDark ? 'text-gray-800' : 'text-gray-300'}`}>Made with Afriza</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
