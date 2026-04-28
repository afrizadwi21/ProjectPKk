import React, { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

const ToastNotif = ({ toast }) => {
  return (
    <div
      className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 transform ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
    >
      <div className="bg-brand-dark text-white px-8 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-3 border border-white/10 backdrop-blur-xl">
        <span className="text-yellow-400">
          <AlertCircle size={20} />
        </span>
        <p className="font-bold text-sm whitespace-nowrap">{toast.msg}</p>
      </div>
    </div>
  );
};

export default ToastNotif;
