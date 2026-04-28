import React from 'react';
import { User, Phone, School, BookOpen } from 'lucide-react';

const CustomerFields = ({ form, setForm, isDark }) => {
  const fields = [
    { id: 'name', label: 'Nama Lengkap', icon: <User size={18} />, placeholder: 'Nama Anda' },
    { id: 'phone', label: 'Nomor WhatsApp', icon: <Phone size={18} />, placeholder: '0812...' },
    { id: 'kelas', label: 'Kelas', icon: <School size={18} />, placeholder: 'X / XI / XII' },
    { id: 'jurusan', label: 'Jurusan', icon: <BookOpen size={18} />, placeholder: 'RPL A / TKJ B' },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="mb-12">
      <h3 className={`font-anton text-2xl mb-6 flex items-center gap-3 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <span className="text-brand-red">03.</span> Data Pemesan
      </h3>

      <div className={`rounded-[40px] p-8 border backdrop-blur-sm transition-colors ${isDark ? 'bg-gray-900/30 border-white/5 space-y-6' : 'bg-white border-gray-100 space-y-6 shadow-sm'
        }`}>
        {fields.map((field) => (
          <div key={field.id} className="relative group">
            <label className={`text-[10px] font-black uppercase tracking-[0.3em] ml-2 mb-2 block transition-colors ${isDark ? 'text-gray-500' : 'text-gray-400'
              }`}>
              {field.label}
            </label>
            <div className="relative">
              <span className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${isDark ? 'text-gray-600 group-focus-within:text-brand-red' : 'text-gray-400 group-focus-within:text-brand-red'
                }`}>
                {field.icon}
              </span>
              <input
                id={field.id}
                type="text"
                placeholder={field.placeholder}
                value={form[field.id]}
                onChange={handleChange}
                className={`w-full pl-14 pr-6 py-5 rounded-[24px] border outline-none transition-all duration-500 font-poppins text-base ${isDark
                  ? 'bg-gray-950/50 border-white/5 text-gray-200 placeholder:text-gray-700 focus:border-brand-red/50'
                  : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-300 focus:border-brand-red/30'
                  }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFields;
