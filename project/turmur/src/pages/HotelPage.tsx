import { useParams, Navigate } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs, { buildBreadcrumbJsonLd } from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedLinks from '@/components/RelatedLinks';
import CtaBox from '@/components/CtaBox';
import HotelCard from '@/components/HotelCard';
import { getHotel, hotels } from '@/data/hotels';
import { getTour } from '@/data/tours';
import { site } from '@/data/site';

export default function HotelPage() {
  const { slug } = useParams<{ slug: string }>();
  const hotel = slug ? getHotel(slug) : undefined;

  if (!hotel) return <Navigate to="/hotels" replace />;

  const breadcrumbItems = [
    { label: 'خانه', to: '/' },
    { label: 'هتل‌ها', to: '/hotels' },
    { label: hotel.city },
  ];

  const relatedTourCards = hotel.relatedTours
    .map((s) => getTour(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))
    .slice(0, 2);

  const relatedHotelCards = hotel.relatedHotels
    .map((s) => getHotel(s))
    .filter((h): h is NonNullable<typeof h> => Boolean(h))
    .slice(0, 2);

  const cityServiceLinks = [
    { label: `تور ${hotel.city}`, to: `/tours/${hotel.city === 'رزرو گروهی' ? 'van' : hotel.relatedTours[0] || 'van'}` },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Hotel',
      name: hotel.title,
      description: hotel.metaDescription,
      image: hotel.heroImage,
      priceRange: hotel.priceFrom,
      address: {
        '@type': 'PostalAddress',
        addressLocality: hotel.city,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.5',
        reviewCount: '120',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: hotel.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    buildBreadcrumbJsonLd(breadcrumbItems, site.url),
  ];

  return (
    <>
      <SeoHead
        title={hotel.metaTitle}
        description={hotel.metaDescription}
        canonical={`${site.url}/hotels/${hotel.slug}`}
        ogImage={hotel.heroImage}
        jsonLd={jsonLd}
      />

      <Hero title={hotel.h1} subtitle={hotel.city} image={hotel.heroImage} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{hotel.h1}</h1>
            <p className="text-gray-600 leading-relaxed">{hotel.intro}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-card p-6 text-center">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="text-accent-500 fill-accent-500" />
              ))}
            </div>
            <p className="text-sm text-gray-500 mb-3">امتیاز مسافران</p>
            <p className="text-2xl font-bold text-primary-700 mb-4">{hotel.priceFrom}</p>
            <a
              href={`tel:${site.phone}`}
              className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors w-full"
            >
              رزرو کنید
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-card p-6 mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">امکانات هتل</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hotel.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <Check size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">سوالات متداول</h2>
          <FaqAccordion faqs={hotel.faqs} />
        </div>

        {/* Related Links */}
        <div className="mb-8">
          <RelatedLinks
            title="خدمات مرتبط"
            items={cityServiceLinks}
            external={hotel.sisterSite ? [{ name: hotel.sisterSite.name, url: hotel.sisterSite.url, badge: 'همکار تخصصی' }] : undefined}
          />
        </div>

        {/* Related Hotels */}
        {relatedHotelCards.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-gray-800 mb-4 text-lg">هتل‌های دیگر</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedHotelCards.map((h) => (
                <HotelCard key={h.slug} hotel={h} />
              ))}
            </div>
          </div>
        )}

        <CtaBox context={hotel.title} />
      </div>
    </>
  );
}
