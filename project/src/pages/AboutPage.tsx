import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionTitle from '@/components/SectionTitle';
import CtaBox from '@/components/CtaBox';
import { ShieldCheck, MapPin, Phone, Award, Users, Globe } from 'lucide-react';
import { site } from '@/data/site';

const stats = [
  { icon: Globe, value: '۱۱+', label: 'مقصد خارجی' },
  { icon: Users, value: '۵۰۰+', label: 'مسافر راضی' },
  { icon: Award, value: '۵+', label: 'سال تجربه' },
  { icon: ShieldCheck, value: 'رسمی', label: 'مجوز گردشگری' },
];

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `درباره ${site.name}`,
    description: site.description,
  };

  return (
    <>
      <SeoHead
        title="درباره آکای تراول | آژانس گردشگری مجاز | آکای تراول"
        description="آکای تراول آژانس گردشگری با مجوز رسمی در ارومیه؛ تورهای خارجی، رزرو هتل، بلیط هواپیما و تاکسی دربست با پشتیبانی فارسی."
        canonical={`${site.url}/about`}
        jsonLd={jsonLd}
      />

      <Hero
        title={`درباره ${site.name}`}
        subtitle={site.slogan}
        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'درباره ما' }]} />

        <div className="prose prose-sm max-w-none mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">آکای تراول، همراه شما در سفر</h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            آکای تراول، آژانس مسافرتی با مجوز رسمی از سازمان میراث فرهنگی، صنایع دستی و گردشگری، در شهر ارومیه فعالیت می‌کند. ما با سال‌ها تجربه در ارائه تورهای خارجی، رزرو هتل، بلیط هواپیما و تاکسی دربست، خدمتی مطمئن و حرفه‌ای به مسافران ایرانی ارائه می‌دهیم.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            هدف ما، سفر بدون دغدغه برای مسافران است. از ایروان نزدیک تا دبی لوکس و روسیه دور، تورهای آکای تراول با راهنما فارسی، هتل‌های منتخب و پشتیبانی ۲۴ ساعته همراه شماست. ما در تمام مراحل سفر، از رزرو تا بازگشت، کنار شما هستیم.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            آکای تراول با شبکه‌ای از همکاران تخصصی در مقاصد مختلف، بهترین قیمت و خدمات را به مسافران ارائه می‌دهد. اعتماد مسافران، مهم‌ترین سرمایه ماست.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-card p-6 text-center">
              <div className="inline-flex w-12 h-12 rounded-xl bg-primary-50 items-center justify-center mb-3">
                <s.icon className="text-primary-700" size={24} />
              </div>
              <p className="text-2xl font-bold text-primary-700">{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* License */}
        <div className="bg-white rounded-2xl shadow-card p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="text-primary-700" size={24} />
            <h2 className="font-bold text-gray-800 text-lg">مجوز رسمی</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">{site.license}</p>
          <a href="/license" className="text-primary-700 text-sm font-medium hover:underline">
            مشاهده مجوز →
          </a>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-card p-6 mb-8">
          <h2 className="font-bold text-gray-800 text-lg mb-4">تماس با ما</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Phone className="text-primary-700" size={20} />
              <div>
                <p className="text-xs text-gray-500">تلفن</p>
                <a href={`tel:${site.phone}`} className="text-sm font-semibold text-gray-800">{site.phone}</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary-700" size={20} />
              <div>
                <p className="text-xs text-gray-500">موقعیت</p>
                <p className="text-sm font-semibold text-gray-800">{site.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sister Sites */}
        <SectionTitle title="همکاران ما" subtitle="شبکه تخصصی آکای تراول" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {site.sisterSites.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener"
              className="bg-white rounded-xl shadow-card p-4 text-center hover:shadow-soft transition-all"
            >
              <p className="text-sm font-medium text-gray-700 hover:text-primary-700">{s.name}</p>
            </a>
          ))}
        </div>

        <CtaBox context="خدمات آکای تراول" />
      </div>
    </>
  );
}
