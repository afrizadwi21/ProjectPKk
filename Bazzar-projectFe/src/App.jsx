import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandingSection from './components/BrandingSection';
import ProductSection from './components/ProductSection';
import OrderForm from './components/OrderForm';
import ToastNotif from './components/ToastNotif';
import Footer from './components/Footer';
import FloatingOrderSummary from './components/FloatingOrderSummary';

function App() {
  // Theme State
  const [isDark, setIsDark] = useState(true);

  // Global State
  const [qty, setQty] = useState(1);
  const [orderType, setOrderType] = useState('now');
  const [payMethod, setPayMethod] = useState(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    kelas: '',
    jurusan: ''
  });
  const [toast, setToast] = useState({ show: false, msg: '' });
  const [loading, setLoading] = useState(false);

  // Refs for scrolling
  const orderRef = useRef(null);

  const scrollToOrder = () => {
    orderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Toggle Theme
  const toggleTheme = () => setIsDark(!isDark);

  // Toast Auto-hide
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, msg: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const PRICE = 7000;

  const formatRupiah = (num) => 
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);

  const handleOrder = () => {
    if (!payMethod || !form.name || !form.phone || !form.kelas || !form.jurusan || !qty || qty < 1) {
      setToast({ show: true, msg: '⚠️ Mohon lengkapi semua data dulu ya!' });
      return;
    }

    setLoading(true);

    const tipe = orderType === 'now' ? 'Order Sekarang' : 'Pre-Order';
    const totalAmount = qty * PRICE;

    let msg = `Haii kak! Ada orderan baru nih

*ORDER MERCON LAVA*
--------------------------

Hai kak, berikut detail pesanan saya ya!

Nama     : ${form.name}
No. HP   : ${form.phone}
Kelas    : ${form.kelas}
Jurusan  : ${form.jurusan}

*DETAIL ORDER:*
--------------------------
Jumlah   : ${qty} porsi
Harga    : ${qty} × Rp 7.000
Total    : *${formatRupiah(totalAmount)}*
Tipe     : ${tipe}
Bayar    : ${payMethod === 'qris' ? 'QRIS' : 'Tunai / Cash'}
--------------------------

`;

    if (payMethod === 'qris') {
      msg += `*Bukti pembayaran QRIS sudah saya transfer ya kak,*
mohon dicek dan dikonfirmasi

Makasih banyak kak, gasken pedas-pedasannya!`;
    } else {
      msg += `*Saya siap bayar cash saat pesanan diterima ya kak!*

Makasih banyak kak, gasken pedas-pedasannya!`;
    }

    const encoded = encodeURIComponent(msg);
    
    setTimeout(() => {
      window.open(`https://wa.me/6281339529934?text=${encoded}`, '_blank');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={`${isDark ? 'dark bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen pb-safe selection:bg-brand-red selection:text-white transition-colors duration-500`}>
      <Navbar scrollToOrder={scrollToOrder} isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <HeroSection scrollToOrder={scrollToOrder} isDark={isDark} />
        <BrandingSection isDark={isDark} />
        <ProductSection scrollToOrder={scrollToOrder} isDark={isDark} />
        <OrderForm 
          orderRef={orderRef}
          isDark={isDark}
          qty={qty}
          setQty={setQty}
          orderType={orderType}
          setOrderType={setOrderType}
          payMethod={payMethod}
          setPayMethod={setPayMethod}
          form={form}
          setForm={setForm}
          onOrder={handleOrder}
          loading={loading}
        />
      </main>

      <Footer isDark={isDark} />
      
      {/* Floating Order Summary for Mobile */}
      <FloatingOrderSummary 
        qty={qty} 
        price={PRICE} 
        onOrder={handleOrder} 
        loading={loading}
        isDark={isDark}
      />

      <ToastNotif toast={toast} />
    </div>
  );
}

export default App;
