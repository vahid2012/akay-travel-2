import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBox from '@/components/CtaBox';
import { Phone, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import { site, waLink } from '@/data/site';

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `تماس با ${site.name}`,
    description: `تماس با ${site.fullName} در ${site.location}.`,
  };

  return (
    <>
      <SeoHead
        title="تماس با آکای تراول | ارومیه | آکای تراول"
        description="تماس با آکای تراول در ارومیه؛ تلفن 09143403431 و واتساپ. مشاوره رایگان تور، هتل، بلیط و تاکسی دربست."
        canonical={`${site.url}/contact`}
        jsonLd={jsonLd}
      />

      <Hero
        title="تماس با آکای تراول"
        subtitle="مشاوره رایگان و رزرو سریع"
        image="https://images.unsplash.com/photo-1486496146582-9ffcd0b2c6b9?w=1200&q=80"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'تماس با ما' }]} />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">تماس با ما</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          تیم پشتیبانی آکای تراول آماده پاسخ به سوالات شما و رزرو خدمات است. با تماس یا واتساپ در ارتباط باشید.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-4 bg-white rounded-2xl shadow-card p-6 hover:shadow-soft transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <Phone className="text-primary-700" size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">تلفن تماس</p>
              <p className="font-bold text-gray-800">{site.phone}</p>
            </div>
          </a>

          <a
            href={waLink('مشاوره سفر')}
            target="_blank"
            rel="nofollow noopener"
            className="flex items-center gap-4 bg-white rounded-2xl shadow-card p-6 hover:shadow-soft transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">واتساپ</p>
              <p className="font-bold text-gray-800">پیام دهید</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-white rounded-2xl shadow-card p-6">
            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary-700" size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">موقعیت</p>
              <p className="font-bold text-gray-800">{site.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-2xl shadow-card p-6">
            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <Clock className="text-primary-700" size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">ساعات کاری</p>
              <p className="font-bold text-gray-800">۲۴ ساعته</p>
            </div>
          </div>
        </div>

        <CtaBox context="مشاوره و رزرو" />
      </div>
    </>
  );
}
