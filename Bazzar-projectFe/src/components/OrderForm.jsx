import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import QuantitySelector from './QuantitySelector';
import OrderTypeToggle from './OrderTypeToggle';
import CustomerFields from './CustomerFields';
import PaymentSelector from './PaymentSelector';
import OrderButton from './OrderButton';

const OrderForm = ({
  qty, setQty,
  orderType, setOrderType,
  payMethod, setPayMethod,
  form, setForm,
  onOrder, loading,
  orderRef,
  isDark
}) => {
  const { revealClass } = useScrollReveal();

  // Calculate Progress
  const calculateProgress = () => {
    let score = 0;
    if (qty >= 1) score += 25;
    if (orderType) score += 25;
    if (form.name && form.phone && form.kelas && form.jurusan) score += 25;
    if (payMethod) score += 25;
    return score;
  };

  const progress = calculateProgress();

  return (
    <section
      id="order"
      ref={orderRef}
      className={`py-32 px-6 transition-all duration-1000 ${revealClass} ${isDark ? 'bg-gray-950' : 'bg-gray-50'
        }`}
    >
      <div className="max-w-md mx-auto">
        {/* Progress Bar */}
        <div className="mb-16 sticky top-24 z-30">
          <div className="flex justify-between items-end mb-3">
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Lengkapi Orderan
            </span>
            <span className="font-anton text-brand-red text-xl">{progress}%</span>
          </div>
          <div className={`h-2 w-full rounded-full overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-200'}`}>
            <div
              className="h-full bg-gradient-to-r from-brand-red to-brand-orange transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(232,35,10,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="text-center mb-20 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-red/10 blur-[80px] rounded-full pointer-events-none"></div>
          <h2 className={`font-anton text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] transition-colors relative z-10 ${isDark ? 'text-white' : 'text-gray-900'
            }`}>
            SIAP UNTUK <br /> <span className="text-brand-red">MELEDAK?</span>
          </h2>
          <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.5em] mt-6">Order Details</p>
        </div>

        <div className="space-y-4">
          <div className={`p-1 rounded-[45px] transition-all duration-500 ${isDark ? 'bg-gray-900/20' : 'bg-white shadow-sm'}`}>
            <QuantitySelector qty={qty} setQty={setQty} isDark={isDark} />
            <OrderTypeToggle orderType={orderType} setOrderType={setOrderType} isDark={isDark} />
            <CustomerFields form={form} setForm={setForm} isDark={isDark} />
            <PaymentSelector payMethod={payMethod} setPayMethod={setPayMethod} isDark={isDark} />
          </div>

          <div className="pt-10">
            <OrderButton onOrder={onOrder} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
