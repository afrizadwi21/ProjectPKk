import React from 'react';

const QuantitySelector = ({ qty, setQty, isDark }) => {
  const handleMinus = () => setQty(prev => Math.max(1, prev - 1));
  const handlePlus = () => setQty(prev => prev + 1);

  const handleInput = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1) {
      setQty(val);
    } else if (e.target.value === '') {
      setQty('');
    }
  };

  const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);

  const price = 7000;
  const total = (qty || 0) * price;

  return (
    <div className="mb-12">
      <h3 className={`font-anton text-2xl mb-6 flex items-center gap-3 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <span className="text-brand-red">01.</span> Jumlah Porsi
      </h3>

      <div className="flex items-center justify-center gap-4 mb-8">
        <button
          onClick={handleMinus}
          disabled={qty <= 1}
          className={`w-14 h-14 rounded-2xl font-bold text-2xl flex items-center justify-center transition-all shadow-lg ${qty <= 1
            ? (isDark ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed')
            : 'bg-gradient-to-br from-brand-red to-brand-orange text-white hover:brightness-110 active:scale-95'
            }`}
        >
          −
        </button>

        <input
          type="number"
          min="1"
          value={qty}
          onChange={handleInput}
          className={`w-24 h-14 text-center text-3xl font-anton rounded-2xl border-2 transition-all shadow-inner ${isDark
            ? 'bg-gray-950/50 border-brand-red/30 text-white focus:border-brand-red'
            : 'bg-white border-gray-200 text-gray-900 focus:border-brand-red'
            }`}
        />

        <button
          onClick={handlePlus}
          className="w-14 h-14 rounded-2xl font-bold text-2xl bg-gradient-to-br from-brand-red to-brand-orange text-white flex items-center justify-center hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-red-600/20"
        >
          +
        </button>
      </div>

      <div key={qty} className="bg-gradient-to-r from-brand-red to-brand-orange rounded-3xl p-6 text-center text-white shadow-2xl animate-fadeIn relative overflow-hidden group">
        <div className="text-4xl font-anton tracking-tight drop-shadow-lg">
          Total: {formatRupiah(total)}
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
