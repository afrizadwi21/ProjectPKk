import React, { useState } from 'react';
import { QrCode, Banknote, X, ZoomIn, Download } from 'lucide-react';
import qrisImg from '../assets/qris.jpeg';

const PaymentSelector = ({ payMethod, setPayMethod, isDark }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrisImg;
    link.download = 'QRIS-Mercon-Lava.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mb-10">
      <h3 className={`font-anton text-2xl mb-6 flex items-center gap-3 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <span className="text-brand-red">04.</span> Metode Pembayaran
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          onClick={() => setPayMethod('qris')}
          className={`rounded-3xl p-6 text-center cursor-pointer transition-all duration-300 border-2 flex flex-col items-center gap-3 ${payMethod === 'qris'
            ? 'bg-gradient-to-br from-brand-red to-brand-orange text-white border-transparent scale-105 shadow-xl shadow-red-500/40'
            : (isDark ? 'bg-gray-900/50 border-white/5 text-gray-500' : 'bg-white border-gray-100 text-gray-500 hover:border-brand-red/20')
            }`}
        >
          <div className={`${payMethod === 'qris' ? 'text-yellow-300' : 'text-brand-red'}`}>
            <QrCode size={36} strokeWidth={2.5} />
          </div>
          <div>
            <div className={`font-anton text-lg leading-tight transition-colors ${payMethod === 'qris' ? 'text-white' : (isDark ? 'text-gray-400' : 'text-gray-700')}`}>QRIS</div>
            <div className="text-[10px] uppercase font-black tracking-widest opacity-60">Scan & Transfer</div>
          </div>
        </div>

        <div
          onClick={() => setPayMethod('cash')}
          className={`rounded-3xl p-6 text-center cursor-pointer transition-all duration-300 border-2 flex flex-col items-center gap-3 ${payMethod === 'cash'
            ? 'bg-gradient-to-br from-brand-red to-brand-orange text-white border-transparent scale-105 shadow-xl shadow-red-500/40'
            : (isDark ? 'bg-gray-900/50 border-white/5 text-gray-500' : 'bg-white border-gray-100 text-gray-500 hover:border-brand-red/20')
            }`}
        >
          <div className={`${payMethod === 'cash' ? 'text-yellow-300' : 'text-brand-red'}`}>
            <Banknote size={36} strokeWidth={2.5} />
          </div>
          <div>
            <div className={`font-anton text-lg leading-tight transition-colors ${payMethod === 'cash' ? 'text-white' : (isDark ? 'text-gray-400' : 'text-gray-700')}`}>TUNAI</div>
            <div className="text-[10px] uppercase font-black tracking-widest opacity-60">Bayar di Tempat</div>
          </div>
        </div>
      </div>

      {payMethod === 'qris' && (
        <div className={`rounded-3xl p-8 text-center border-2 border-dashed animate-fadeIn transition-colors ${isDark ? 'bg-gray-950/50 border-white/10' : 'bg-gray-50 border-gray-200'
          }`}>
          <div className="relative group w-44 mx-auto mb-4">
            <div
              onClick={() => setIsZoomed(true)}
              className="w-44 h-44 bg-white rounded-2xl border-4 border-brand-red flex items-center justify-center shadow-xl relative overflow-hidden cursor-zoom-in"
            >
              <img src={qrisImg} alt="QRIS Mercon Lava" className="w-full h-full object-contain" />
              <div className="absolute inset-0 bg-brand-red/5 group-hover:bg-brand-red/0 transition-colors pointer-events-none"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                <ZoomIn className="text-white" size={32} />
              </div>
            </div>
            
            <button 
               onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
               }}
               className="absolute -right-4 -bottom-4 bg-brand-red text-white p-3 rounded-2xl shadow-xl hover:scale-110 active:scale-90 transition-all z-10"
               title="Simpan QR"
            >
               <Download size={20} />
            </button>
          </div>

          <p className={`text-sm font-bold transition-colors ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            Scan QR di atas, lalu kirimkan <span className="text-brand-red underline decoration-2">Bukti Transfer</span> ke WhatsApp kami
          </p>
        </div>
      )}

      {payMethod === 'cash' && (
        <div className={`border rounded-3xl p-5 text-center animate-fadeIn transition-colors ${isDark ? 'bg-green-950/20 border-green-900/30 text-green-400' : 'bg-green-50 border-green-200 text-green-700'
          }`}>
          <div className="flex gap-3 items-center justify-center font-bold">
            <span className="text-2xl">💵</span>
            <p>Sediakan uang pas saat pesanan kamu datang ya!</p>
          </div>
        </div>
      )}

      {/* QRIS Modal Popup */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setIsZoomed(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

          <div
            className="relative bg-white p-4 rounded-[40px] shadow-2xl max-w-sm w-full animate-scaleUp overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-black z-10"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6 pt-4">
              <h4 className="font-anton text-2xl text-gray-900">Scan QRIS</h4>
              <p className="text-xs font-black uppercase tracking-widest text-brand-red opacity-60">Mercon Lava Official</p>
            </div>

            <div className="aspect-square bg-white rounded-3xl border-8 border-gray-50 flex items-center justify-center shadow-inner mb-6 relative group">
              <img src={qrisImg} alt="QRIS Mercon Lava Full" className="w-full h-full object-contain p-2" />
              <button 
                onClick={handleDownload}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-brand-red p-4 rounded-2xl shadow-xl hover:bg-brand-red hover:text-white transition-all active:scale-95 flex items-center gap-2 font-bold text-xs"
              >
                <Download size={18} />
                SIMPAN QR
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100">
              <div className="bg-brand-red/10 p-3 rounded-xl text-brand-red">
                <QrCode size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">Transfer Berhasil?</div>
                <div className="text-[10px] text-gray-500 font-medium">Klik tombol pesan sekarang untuk kirim bukti</div>
              </div>
            </div>

            <button
              onClick={() => setIsZoomed(false)}
              className="w-full mt-6 bg-brand-red text-white font-anton py-4 rounded-2xl shadow-lg shadow-red-500/30 hover:bg-brand-red/90 transition-all active:scale-95"
            >
              TUTUP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSelector;
