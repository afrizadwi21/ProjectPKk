import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const FloatingOrderSummary = ({ qty, price, onOrder, loading, isDark }) => {
  const total = qty * price;

  const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden animate-fadeIn">
      <div className={`rounded-[32px] p-4 flex items-center justify-between shadow-2xl transition-all duration-500 border ${isDark
          ? 'bg-gray-900/90 border-white/10 backdrop-blur-xl'
          : 'bg-white/90 border-gray-200 backdrop-blur-xl'
        }`}>
        <div className="flex items-center gap-4 ml-2">
          <div className="bg-brand-red p-3 rounded-2xl text-white shadow-lg shadow-red-500/40">
            <ShoppingBag size={20} />
          </div>
          <div>
            <div className={`text-[10px] uppercase font-black tracking-widest opacity-50 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {qty} Porsi
            </div>
            <div className={`font-anton text-xl leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {formatRupiah(total)}
            </div>
          </div>
        </div>

        <button
          onClick={onOrder}
          disabled={loading}
          className={`flex items-center gap-2 py-4 px-8 rounded-2xl font-anton text-sm tracking-widest transition-all active:scale-95 ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-brand-red text-white hover:bg-brand-red/90 shadow-lg shadow-red-500/30'
            }`}
        >
          {loading ? 'WAIT...' : 'PESAN'}
          {!loading && <ChevronRight size={18} />}
        </button>
      </div>
    </div>
  );
};

export default FloatingOrderSummary;
