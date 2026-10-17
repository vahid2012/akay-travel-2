import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, X, Sparkles, MapPin } from 'lucide-react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs, { buildBreadcrumbJsonLd } from '@/components/Breadcrumbs';
import QuickFactsTable from '@/components/QuickFactsTable';
import ItineraryList from '@/components/ItineraryList';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedLinks from '@/components/RelatedLinks';
import CtaBox from '@/components/CtaBox';
import TourCard from '@/components/TourCard';
import { getTour, tours } from '@/data/tours';
import { getHotel } from '@/data/hotels';
import { site, waLink } from '@/data/site';

export default function TourPage() {
  const { slug } = useParams<{ slug: string }>();
  const tour = slug ? getTour(slug) : undefined;

  if (!tour) return <Navigate to="/tours" replace />;

  const breadcrumbItems = [
    { label: 'خانه', to: '/' },
    { label: 'تورها', to: '/tours' },
    { label: tour.city },
  ];

  const relatedTourCards = tour.relatedTours
    .map((s) => getTour(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))
    .slice(0, 3);

  const relatedServiceLinks = tour.relatedServices.map((s) => {
    const parts = s.split('/');
    const label =
      s.includes('flights') ? `بلیط هواپیما ${parts[2]?.replace(/-/g, ' ')}` :
      s.includes('taxi') ? `تاکسی دربست ${parts[2]?.replace(/-/g, ' ')}` : s;
    return { label, to: s };
  });

  const hotelLinks = tour.relatedHotels.map((h) => {
    const hotel = getHotel(h);
    return { label: hotel ? hotel.title : `هتل ${h}`, to: `/hotels/${h}` };
  });

  const blogLinks = tour.relatedBlog.map((b) => ({
    label: 'مقاله مرتبط',
    to: `/blog/${b}`,
  }));

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: tour.title,
      description: tour.metaDescription,
      image: tour.heroImage,
      offers: {
        '@type': 'Offer',
        price: tour.priceFrom,
        priceCurrency: 'IRR',
        availability: 'https://schema.org/InStock',
      },
      provider: {
        '@type': 'TravelAgency',
        name: site.fullName,
        telephone: site.phoneIntl,
      },
      touristDestination: {
        '@type': 'TouristDestination',
        name: `${tour.city}، ${tour.country}`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: tour.faqs.map((f) => ({
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
        title={tour.metaTitle}
        description={tour.metaDescription}
        canonical={`${site.url}/tours/${tour.slug}`}
        ogImage={tour.heroImage}
        jsonLd={jsonLd}
      />

      <Hero title={tour.h1} subtitle={`${tour.city}، ${tour.country} — ${tour.duration}`} image={tour.heroImage} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{tour.h1}</h1>
            <p className="text-gray-600 leading-relaxed">{tour.intro}</p>
          </div>
          <div>
            <QuickFactsTable
              duration={tour.duration}
              bestTime={tour.bestTime}
              priceFrom={tour.priceFrom}
              documents={tour.documents}
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-2xl shadow-card p-6 mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg flex items-center gap-2">
            <Sparkles className="text-accent-500" size={22} />
            ویژگی‌های تور
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tour.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <Check size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Itinerary */}
        <div className="mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">برنامه سفر</h2>
          <ItineraryList items={tour.itinerary} />
        </div>

        {/* Includes/Excludes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-card p-6">
            <h2 className="font-bold text-gray-800 mb-4 text-lg text-primary-700">شامل قیمت</h2>
            <ul className="space-y-2">
              {tour.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-card p-6">
            <h2 className="font-bold text-gray-800 mb-4 text-lg text-red-600">شامل قیمت نیست</h2>
            <ul className="space-y-2">
              {tour.excludes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <X size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">سوالات متداول</h2>
          <FaqAccordion faqs={tour.faqs} />
        </div>

        {/* Related Services - تکمیل سفر */}
        <div className="mb-8">
          <RelatedLinks
            title="تکمیل سفر شما"
            items={[...hotelLinks, ...relatedServiceLinks]}
            external={tour.sisterSite ? [{ name: tour.sisterSite.name, url: tour.sisterSite.url, badge: 'همکار تخصصی' }] : undefined}
          />
        </div>

        {/* Related Tours */}
        {relatedTourCards.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-gray-800 mb-4 text-lg">تورهای مرتبط</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTourCards.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <CtaBox context={tour.title} />
      </div>
    </>
  );
}
