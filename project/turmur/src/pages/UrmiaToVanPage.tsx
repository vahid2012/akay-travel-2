import { Link } from 'react-router-dom';
import { Bus, Users, Clock, MapPin, Phone, MessageCircle, Check } from 'lucide-react';
import { useState } from 'react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionTitle from '@/components/SectionTitle';
import { site, waLink } from '@/data/site';

const services = [
  {
    icon: Users,
    title: 'ون VIP',
    desc: 'ون‌های لوکس برای ۸ تا ۱۴ نفر با صندلی‌های راحت، تهویه و راننده حرفه‌ای.',
    price: '۱٬۸۰۰٬۰۰۰ تومان',
  },
  {
    icon: Bus,
    title: 'اتوبوس',
    desc: 'اتوبوس‌های ۳۰ تا ۴۵ نفره برای گروه‌های بزرگ با قیمت اقتصادی.',
    price: '۸۰۰٬۰۰۰ تومان/نفر',
  },
];

const pricing = [
  { type: 'ون VIP (۸ نفر)', oneWay: '۱٬۸۰۰٬۰۰۰', roundTrip: '۳٬۲۰۰٬۰۰۰' },
  { type: 'ون VIP (۱۴ نفر)', oneWay: '۲٬۵۰۰٬۰۰۰', roundTrip: '۴٬۵۰۰٬۰۰۰' },
  { type: 'اتوبوس (۳۰ نفر)', oneWay: '۲۴٬۰۰۰٬۰۰۰', roundTrip: '۴۳٬۰۰۰٬۰۰۰' },
  { type: 'اتوبوس (۴۵ نفر)', oneWay: '۳۲٬۰۰۰٬۰۰۰', roundTrip: '۵۸٬۰۰۰٬۰۰۰' },
];

const features = ['راننده حرفه‌ای و مسلط به مسیر', 'ماشین‌های تمیز و بیمه‌شده', 'تصدی هتل در وان', 'انتقال از درب منزل', 'حمل بار و سوغاتی', 'پشتیبانی ۲۴ ساعته'];

export default function UrmiaToVanPage() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'ون VIP', date: '', people: '1' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'رزرو ون و اتوبوس ارومیه به وان',
    provider: { '@type': 'TravelAgency', name: site.fullName, telephone: site.phoneIntl },
    areaServed: { '@type': 'City', name: 'وان' },
  };

  return (
    <>
      <SeoHead
        title="رزرو ون و اتوبوس ارومیه به وان | آکای تراول"
        description="رزرو ون VIP و اتوبوس از ارومیه به وان با بهترین قیمت. ماشین‌های تمیز، راننده حرفه‌ای و پشتیبانی ۲۴ ساعته. تماس: 09143403431."
        canonical={`${site.url}/urmia-to-van`}
        jsonLd={jsonLd}
      />

      <Hero
        title="رزرو ون یا اتوبوس از ارومیه به وان"
        subtitle="انتقال راحت و امن با ماشین‌های VIP و اتوبوس — فاصله ۲۰۰ کیلومتر در ۳ ساعت"
        image="https://images.unsplash.com/photo-1570125909232-eb263c188507?w=1200&q=80"
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'ارومیه به وان' }]} />

        {/* Services */}
        <SectionTitle title="نوع سرویس" subtitle="انتخاب مناسب بر اساس تعداد مسافران" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <s.icon className="text-teal-600" size={26} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{s.title}</h3>
                  <p className="text-sm text-green-600 font-semibold">از {s.price}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing Table */}
        <SectionTitle title="جدول قیمت" subtitle="قیمت‌ها به تومان و برای یک طرفه / رفت و برگشت" />
        <div className="overflow-x-auto mb-12">
          <table className="w-full bg-white rounded-2xl shadow-card overflow-hidden">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="text-right p-4 text-sm font-semibold">نوع ماشین</th>
                <th className="text-right p-4 text-sm font-semibold">یک طرفه (تومان)</th>
                <th className="text-right p-4 text-sm font-semibold">رفت و برگشت (تومان)</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-4 text-sm font-medium text-gray-800">{row.type}</td>
                  <td className="p-4 text-sm text-gray-700">{row.oneWay}</td>
                  <td className="p-4 text-sm text-gray-700">{row.roundTrip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-card p-6 mb-12">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">امکانات سرویس</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <Check size={18} className="text-green-600 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Booking Form */}
        <SectionTitle title="فرم رزرو" subtitle="پس از ارسال، تیم ما با شما تماس می‌گیرد" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waLink(`رزرو ون/اتوبوس ارومیه به وان — نام: ${form.name}, تلفن: ${form.phone}, سرویس: ${form.service}, تاریخ: ${form.date}, تعداد: ${form.people}`), '_blank');
          }}
          className="bg-white rounded-2xl shadow-card p-6 mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">نام و نام خانوادگی</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="نام خود را وارد کنید"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">شماره تلفن</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="09xxxxxxxxx"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">نوع سرویس</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option>ون VIP</option>
                <option>اتوبوس</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">تعداد مسافران</label>
              <input
                type="number"
                min="1"
                required
                value={form.people}
                onChange={(e) => setForm({ ...form, people: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">تاریخ سفر</label>
              <input
                type="text"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="مثلاً: ۱۴۰۴/۰۸/۲۰"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            ارسال درخواست رزرو
          </button>
        </form>

        {/* Quick Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-teal-50 rounded-xl p-4 flex items-center gap-3">
            <Clock className="text-teal-600" size={24} />
            <div><p className="text-xs text-gray-500">مدت مسیر</p><p className="font-semibold text-gray-800 text-sm">حدود ۳ ساعت</p></div>
          </div>
          <div className="bg-teal-50 rounded-xl p-4 flex items-center gap-3">
            <MapPin className="text-teal-600" size={24} />
            <div><p className="text-xs text-gray-500">فاصله</p><p className="font-semibold text-gray-800 text-sm">۲۰۰ کیلومتر</p></div>
          </div>
          <div className="bg-teal-50 rounded-xl p-4 flex items-center gap-3">
            <Phone className="text-teal-600" size={24} />
            <div><p className="text-xs text-gray-500">تماس</p><p className="font-semibold text-gray-800 text-sm">{site.phone}</p></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl">
            <Phone size={18} /> تماس: {site.phone}
          </a>
          <a href={waLink('رزرو ون یا اتوبوس ارومیه به وان')} target="_blank" rel="nofollow noopener" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl">
            <MessageCircle size={18} /> واتساپ
          </a>
        </div>
      </div>
    </>
  );
}
