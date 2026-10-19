import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Headphones, Tag, Car, XCircle, MapPin, Users, Phone, MessageCircle } from 'lucide-react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionTitle from '@/components/SectionTitle';
import FaqAccordion from '@/components/FaqAccordion';
import { getHotel } from '@/data/hotels';
import { site, waLink } from '@/data/site';

const topDestinations = [
  { name: 'وان', slug: 'van', icon: '🚌', desc: 'نزدیک‌ترین مقصد خارجی' },
  { name: 'اربیل', slug: 'erbil', icon: '🏰', desc: 'قلعه تاریخی UNESCO' },
  { name: 'استانبول', slug: 'istanbul', icon: '🕌', desc: 'شهر دو قاره' },
  { name: 'باکو', slug: 'baku', icon: '🌊', desc: 'ساحل دریای خزر' },
];

const whyChooseUs = [
  { icon: Headphones, title: 'پشتیبانی ۲۴/۷', desc: 'تیم پشتیبانی در تمام مراحل سفر همراه گروه است.' },
  { icon: Tag, title: 'بهترین قیمت', desc: 'تخفیف ویژه برای گروه‌های ۱۰ نفر به بالا.' },
  { icon: Car, title: 'انتقال VIP', desc: 'ون و اتوبوس اختصاصی برای انتقال گروه.' },
  { icon: XCircle, title: 'کنسلی آسان', desc: 'شرایط کنسلی منعطف برای گروه‌ها.' },
];

export default function GroupsPage() {
  const [form, setForm] = useState({ name: '', phone: '', destination: '', people: '', date: '' });

  const groupsHotel = getHotel('groups');
  const faqs = groupsHotel?.faqs ?? [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'رزرو هتل گروهی',
    provider: { '@type': 'TravelAgency', name: site.fullName, telephone: site.phoneIntl },
    areaServed: ['وان', 'استانبول', 'اربیل', 'باکو'],
  };

  return (
    <>
      <SeoHead
        title="رزرو هتل گروهی با تخفیف ویژه | آکای تراول"
        description="رزرو گروهی هتل در وان، استانبول، اربیل و باکو با تخفیف ویژه. پشتیبانی ۲۴/۷، انتقال VIP و کنسلی آسان. تماس: 09143403431."
        canonical={`${site.url}/hotels/groups`}
        jsonLd={jsonLd}
      />

      <Hero
        title="رزرو هتل گروهی با تخفیف ویژه"
        subtitle="برای گروه‌های ۱۰ نفر به بالا — همراه با انتقال VIP و گشت اختصاصی"
        image="https://images.unsplash.com/photo-1519677100203-a0e668c91639?w=1200&q=80"
      />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'هتل‌ها', to: '/hotels' }, { label: 'رزرو گروهی' }]} />

        {/* Welcome */}
        <div className="bg-white rounded-2xl shadow-card p-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">رزرو هتل گروهی با آکای تراول</h1>
          <p className="text-gray-600 leading-relaxed">
            برای گروه‌های بزرگ، خانواده‌ها و تورهای سازمانی، رزرو گروهی هتل بهترین انتخاب است. آکای تراول رزرو هتل گروهی در وان، استانبول، اربیل، باکو و سایر مقاصد را با تخفیف ویژه، انتقال VIP و پشتیبانی فارسی ارائه می‌دهد. برای گروه‌های ۱۰ نفر به بالا قیمت ویژه اعمال می‌شود.
          </p>
        </div>

        {/* Top Destinations */}
        <SectionTitle title="مقاصد برتر گروهی" subtitle="محبوب‌ترین مقاصد برای رزرو گروهی" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {topDestinations.map((d) => (
            <Link
              key={d.slug}
              to={`/hotels/${d.slug}`}
              className="group bg-white rounded-2xl shadow-card p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{d.icon}</div>
              <h3 className="font-bold text-gray-800 mb-1 group-hover:text-teal-600 transition-colors">{d.name}</h3>
              <p className="text-xs text-gray-500">{d.desc}</p>
            </Link>
          ))}
        </div>

        {/* Why Choose Us */}
        <SectionTitle title="چرا آکای تراول؟" subtitle="مزایای رزرو گروهی با ما" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-card p-6 text-center">
              <div className="inline-flex w-12 h-12 rounded-xl bg-teal-50 items-center justify-center mb-3">
                <item.icon className="text-teal-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Lead Gen Form */}
        <SectionTitle title="درخواست رزرو گروهی" subtitle="فرم را پر کنید تا تیم ما با شما تماس بگیرد" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(
              waLink(`رزرو گروهی — نام: ${form.name}, تلفن: ${form.phone}, مقصد: ${form.destination}, تعداد: ${form.people}, تاریخ: ${form.date}`),
              '_blank'
            );
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
              <label className="block text-sm font-medium text-gray-700 mb-1">مقصد</label>
              <select
                required
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">انتخاب کنید</option>
                <option>وان</option>
                <option>استانبول</option>
                <option>اربیل</option>
                <option>باکو</option>
                <option>تفلیس</option>
                <option>سایر</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">تعداد نفرات</label>
              <input
                type="number"
                min="1"
                required
                value={form.people}
                onChange={(e) => setForm({ ...form, people: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="مثلاً: ۱۵"
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
            ارسال درخواست
          </button>
        </form>

        {/* FAQ */}
        <SectionTitle title="سوالات متداول" />
        <FaqAccordion faqs={faqs} />

        {/* CTA */}
        <div className="bg-gradient-to-l from-teal-600 to-teal-700 rounded-2xl p-6 text-center mt-8">
          <p className="text-white font-semibold mb-4">برای مشاوره رایگان تماس بگیرید</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl">
              <Phone size={18} /> {site.phone}
            </a>
            <a href={waLink('رزرو هتل گروهی')} target="_blank" rel="nofollow noopener" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl">
              <MessageCircle size={18} /> واتساپ
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
