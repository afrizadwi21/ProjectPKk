import React from 'react';

const OrderTypeToggle = ({ orderType, setOrderType, isDark }) => {
  return (
    <div className="mb-10">
      <h3 className={`font-anton text-2xl mb-6 flex items-center gap-3 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <span className="text-brand-red">02.</span> Tipe Order ⚡
      </h3>

      <div className={`p-1.5 rounded-[28px] flex gap-1 transition-all duration-500 ${isDark ? 'bg-gray-950/50 border border-white/5' : 'bg-gray-100 border border-gray-200 shadow-inner'
        }`}>
        <button
          onClick={() => setOrderType('now')}
          className={`flex-1 py-4 rounded-[22px] font-anton text-xs tracking-widest transition-all duration-500 ${orderType === 'now'
              ? 'bg-brand-red text-white shadow-xl shadow-red-500/30'
              : (isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600')
            }`}
        >
          ORDER SEKARANG
        </button>
        <button
          onClick={() => setOrderType('preorder')}
          className={`flex-1 py-4 rounded-[22px] font-anton text-xs tracking-widest transition-all duration-500 ${orderType === 'preorder'
              ? 'bg-brand-red text-white shadow-xl shadow-red-500/30'
              : (isDark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600')
            }`}
        >
          PRE-ORDER
        </button>
      </div>

      {orderType === 'preorder' && (
        <div className={`mt-4 rounded-2xl p-4 animate-fadeIn transition-all border-l-4 border-brand-red ${isDark ? 'bg-brand-red/5 text-gray-400' : 'bg-brand-red/5 text-gray-600'
          }`}>
          <div className="flex gap-3 items-center text-xs font-bold uppercase tracking-wider">
            <span className="animate-pulse"></span>
            <p>Admin akan mengonfirmasi jadwal produksi terbaru.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTypeToggle;
