import React from 'react';

const OrderButton = ({ onOrder, loading }) => {
  return (
    <div className="mt-12 sticky bottom-6 z-30">
      <button
        onClick={onOrder}
        disabled={loading}
        className={`w-full py-5 rounded-[24px] font-anton text-2xl text-white tracking-widest transition-all duration-300 shadow-2xl overflow-hidden relative group ${loading
          ? 'bg-gray-400 opacity-70 cursor-not-allowed'
          : 'bg-gradient-to-r from-brand-red via-brand-orange to-brand-red bg-[length:200%_auto] animate-gradient shadow-red-500/50 hover:shadow-red-500/70 hover:scale-[1.02] active:scale-[0.98]'
          }`}
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          {loading ? (
            <>
              <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
              MEMPROSES...
            </>
          ) : (
            <>
              PESAN SEKARANG
            </>
          )}
        </span>

        {/* Shine effect */}
        {!loading && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
        )}
      </button>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .group-hover\\:animate-shine {
          animation: shine 1.5s infinite;
        }
      `}} />
    </div>
  );
};

export default OrderButton;
