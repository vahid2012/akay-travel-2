import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, AlertCircle } from 'lucide-react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs, { buildBreadcrumbJsonLd } from '@/components/Breadcrumbs';
import SectionTitle from '@/components/SectionTitle';
import TourCard from '@/components/TourCard';
import CtaBox from '@/components/CtaBox';
import { getSeasonalTour } from '@/data/seasonal';
import { getTour } from '@/data/tours';
import { site } from '@/data/site';

export default function SeasonalPage() {
  const { slug } = useParams<{ slug: string }>();
  const seasonal = slug ? getSeasonalTour(slug) : undefined;

  if (!seasonal) return <Navigate to="/tours" replace />;

  const breadcrumbItems = [
    { label: 'خانه', to: '/' },
    { label: 'تورها', to: '/tours' },
    { label: seasonal.title },
  ];

  const relatedTourCards = seasonal.relatedTours
    .map((s) => getTour(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: seasonal.title,
      description: seasonal.metaDescription,
      image: seasonal.heroImage,
      provider: {
        '@type': 'TravelAgency',
        name: site.fullName,
        telephone: site.phoneIntl,
      },
    },
    buildBreadcrumbJsonLd(breadcrumbItems, site.url),
  ];

  return (
    <>
      <SeoHead
        title={seasonal.metaTitle}
        description={seasonal.metaDescription}
        canonical={`${site.url}/tours/${seasonal.slug}`}
        ogImage={seasonal.heroImage}
        jsonLd={jsonLd}
      />

      <Hero title={seasonal.h1} subtitle={seasonal.dateRange} image={seasonal.heroImage} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Urgency banner */}
        <div className="bg-accent-50 border border-accent-200 rounded-2xl p-4 mb-6 flex items-center gap-3">
          <AlertCircle className="text-accent-600 flex-shrink-0" size={22} />
          <p className="text-sm font-medium text-accent-700">{seasonal.urgency}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{seasonal.h1}</h1>
            <p className="text-gray-600 leading-relaxed">{seasonal.intro}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-card p-6">
            <div className="flex items-center gap-2 text-primary-700 mb-3">
              <Calendar size={20} />
              <span className="font-semibold">زمان برگزاری</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{seasonal.dateRange}</p>
            <Link
              to="/contact"
              className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors w-full text-center"
            >
              رزرو زودتر با تخفیف
            </Link>
          </div>
        </div>

        <SectionTitle title="تورهای مرتبط" subtitle="مقاصد پیشنهادی برای این فصل" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {relatedTourCards.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>

        <CtaBox context={seasonal.title} />
      </div>
    </>
  );
}
