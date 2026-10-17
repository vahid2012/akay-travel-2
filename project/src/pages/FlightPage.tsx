import { useParams, Navigate } from 'react-router-dom';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs, { buildBreadcrumbJsonLd } from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedLinks from '@/components/RelatedLinks';
import CtaBox from '@/components/CtaBox';
import { flights, getFlight } from '@/data/services';
import { site } from '@/data/site';

export default function FlightPage() {
  const { slug } = useParams<{ slug: string }>();
  const flight = slug ? getFlight(slug) : undefined;

  if (!flight) return <Navigate to="/flights" replace />;

  const breadcrumbItems = [
    { label: 'خانه', to: '/' },
    { label: 'بلیط هواپیما', to: '/flights' },
    { label: flight.title },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: flight.title,
      description: flight.metaDescription,
      offers: {
        '@type': 'Offer',
        price: flight.priceFrom,
        priceCurrency: 'IRR',
      },
      provider: {
        '@type': 'TravelAgency',
        name: site.fullName,
        telephone: site.phoneIntl,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: flight.faqs.map((f) => ({
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
        title={flight.metaTitle}
        description={flight.metaDescription}
        canonical={`${site.url}/flights/${flight.slug}`}
        jsonLd={jsonLd}
      />

      <Hero
        title={flight.h1}
        subtitle={`از ${flight.priceFrom}`}
        image="https://images.unsplash.com/photo-1436491865332-7a61a56cccb4?w=1200&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{flight.h1}</h1>
            <p className="text-gray-600 leading-relaxed">{flight.intro}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-card p-6 text-center">
            <p className="text-sm text-gray-500 mb-2">قیمت از</p>
            <p className="text-2xl font-bold text-primary-700 mb-4">{flight.priceFrom}</p>
            <a
              href={`tel:${site.phone}`}
              className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors w-full"
            >
              رزرو بلیط
            </a>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">مراحل رزرو</h2>
          <div className="space-y-4">
            {flight.steps.map((step, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-2xl shadow-card p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-700 text-white font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">سوالات متداول</h2>
          <FaqAccordion faqs={flight.faqs} />
        </div>

        {/* Related */}
        <div className="mb-8">
          <RelatedLinks title="صفحات مرتبط" items={flight.relatedLinks} />
        </div>

        <CtaBox context={flight.title} />
      </div>
    </>
  );
}
