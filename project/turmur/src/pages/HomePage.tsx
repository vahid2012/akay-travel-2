import { Link } from 'react-router-dom';
import { Plane, Hotel, Ticket, Car, ShieldCheck, MapPin, Star, Users } from 'lucide-react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import SectionTitle from '@/components/SectionTitle';
import TourCard from '@/components/TourCard';
import BlogCard from '@/components/BlogCard';
import FaqAccordion from '@/components/FaqAccordion';
import { site, waLink } from '@/data/site';
import { tours } from '@/data/tours';
import { seasonalTours } from '@/data/seasonal';
import { blogPosts } from '@/data/blog';

const homeFaqs = [
  { q: 'آیا آکای تراول مجوز رسمی دارد؟', a: 'بله، آکای تراول دارای مجوز رسمی از سازمان میراث فرهنگی، صنایع دستی و گردشگری است.' },
  { q: 'چگونه تور رزرو کنم؟', a: 'با تماس یا واتساپ به 09143403431 می‌توانید تور مورد نظر را رزرو کنید. تیم پشتیبانی پاسخگو است.' },
  { q: 'پروازها از کدام شهر انجام می‌شوند؟', a: 'پروازها معمولا از ارومیه یا تهران انجام می‌شوند. برای گروه‌ها پرواز چارتر نیز قابل تنظیم است.' },
  { q: 'آیا ویزا در تور شامل است؟', a: 'در اکثر تورها ویزا شامل قیمت است. برای جزئیات هر تور به صفحه مربوطه مراجعه کنید.' },
  { q: 'پشتیبانی در سفر چگونه است؟', a: 'تیم پشتیبانی آکای تراول ۲۴ ساعته همراه مسافران است و در تمام مراحل سفر کمک می‌کند.' },
];

const services = [
  { icon: Plane, title: 'تورهای خارجی', desc: '۱۱ مقصد در ۸ کشور', to: '/tours' },
  { icon: Hotel, title: 'رزرو هتل', desc: 'وان، استانبول، اربیل و...', to: '/hotels' },
  { icon: Ticket, title: 'بلیط هواپیما', desc: 'وان به استانبول و جهان', to: '/flights' },
  { icon: Car, title: 'تاکسی دربست', desc: 'ارومیه به فرودگاه وان', to: '/taxi/urmia-van-airport' },
];

const reasons = [
  { icon: ShieldCheck, title: 'مجوز رسمی', desc: 'دارای مجوز از سازمان میراث فرهنگی، صنایع دستی و گردشگری. سفر مطمئن و قانونی.' },
  { icon: MapPin, title: '۱۱+ مقصد', desc: 'تورهای متنوع به ۸ کشور جهان از ایروان تا دبی و روسیه با برنامه کامل.' },
  { icon: Star, title: 'تجربه حرفه‌ای', desc: 'سال‌ها تجربه در ارائه تورهای خارجی با راهنما فارسی و پشتیبانی کامل.' },
  { icon: Users, title: 'پشتیبانی ۲۴/۷', desc: 'تیم پشتیبانی در تمام مراحل سفر همراه شماست و پاسخگو است.' },
];

export default function HomePage() {
  const rootJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: site.fullName,
      telephone: site.phoneIntl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.location,
        addressCountry: 'IR',
      },
      areaServed: tours.map((t) => ({ '@type': 'City', name: t.city })),
      sameAs: site.sameAs,
      url: site.url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: site.fullName,
      telephone: site.phoneIntl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.location,
        addressCountry: 'IR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: homeFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <>
      <SeoHead
        title="آکای تراول | تورهای خارجی، رزرو هتل و بلیط | مجوز رسمی"
        description="آژانس گردشگری آکای تراول با مجوز رسمی؛ تور ایروان، وان، استانبول، دبی، روسیه و ۱۱ مقصد. رزرو هتل، بلیط هواپیما و تاکسی دربست. تماس: 09143403431"
        canonical={site.url}
        jsonLd={rootJsonLd}
      />

      <Hero
        title="تورهای خارجی با مجوز رسمی"
        subtitle="سفر با آکای تراول، مطمئن و حرفه‌ای — ۱۱ مقصد در ۸ کشور جهان"
        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
        primaryCta={{ label: 'مشاهده تورها', to: '/tours' }}
        secondaryCta={{ label: 'تماس و واتساپ', href: waLink('تورهای آکای تراول') }}
      />

      <TrustBar />

      {/* Tours Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <SectionTitle
          title="مقاصد محبوب"
          subtitle="۱۱ تور خارجی با راهنما فارسی و مجوز رسمی"
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/tours"
            className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            مشاهده همه تورها
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="چرا آکای تراول؟" subtitle="چهار دلیل برای سفر با ما" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-sand-50 hover:bg-primary-50 transition-colors">
                <div className="inline-flex w-14 h-14 rounded-xl bg-primary-700 items-center justify-center mb-4">
                  <r.icon className="text-accent-400" size={26} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{r.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <SectionTitle title="خدمات ما" subtitle="تور، هتل، بلیط و تاکسی دربست" center />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.to}
              className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-all text-center"
            >
              <div className="inline-flex w-14 h-14 rounded-xl bg-primary-50 items-center justify-center mb-3 group-hover:bg-primary-700 transition-colors">
                <s.icon className="text-primary-700 group-hover:text-accent-400 transition-colors" size={26} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{s.title}</h3>
              <p className="text-xs text-gray-500">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Seasonal Tours */}
      <section className="bg-primary-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="تورهای فصلی" subtitle="نوروز، کریسمس و هالووین" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalTours.map((s) => (
              <Link
                key={s.slug}
                to={`/tours/${s.slug}`}
                className="group relative h-56 rounded-2xl overflow-hidden block"
              >
                <img
                  src={s.heroImage}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 p-4">
                  <h3 className="font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-white/80 text-xs mb-2">{s.dateRange}</p>
                  <span className="text-accent-400 text-sm font-medium">مشاهده و رزرو →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <SectionTitle title="آخرین مقالات" subtitle="راهنمای سفر و نکات گردشگری" center />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-block border border-primary-700 text-primary-700 hover:bg-primary-50 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            مشاهده همه مقالات
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle title="سوالات متداول" center />
          <FaqAccordion faqs={homeFaqs} />
          <div className="text-center mt-6">
            <Link to="/faq" className="text-primary-700 font-medium text-sm hover:underline">
              مشاهده همه سوالات متداول
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
