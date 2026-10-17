import { useParams, Navigate } from 'react-router-dom';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs, { buildBreadcrumbJsonLd } from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import RelatedLinks from '@/components/RelatedLinks';
import CtaBox from '@/components/CtaBox';
import { getTaxi } from '@/data/services';
import { site } from '@/data/site';

export default function TaxiPage() {
  const { slug } = useParams<{ slug: string }>();
  const taxi = slug ? getTaxi(slug) : undefined;

  if (!taxi) return <Navigate to="/" replace />;

  const breadcrumbItems = [
    { label: 'خانه', to: '/' },
    { label: 'تاکسی دربست' },
    { label: taxi.title },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: taxi.title,
      description: taxi.metaDescription,
      step: taxi.steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.title,
        text: s.desc,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: taxi.faqs.map((f) => ({
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
        title={taxi.metaTitle}
        description={taxi.metaDescription}
        canonical={`${site.url}/taxi/${taxi.slug}`}
        jsonLd={jsonLd}
      />

      <Hero
        title={taxi.h1}
        subtitle={`از ${taxi.priceFrom}`}
        image="https://images.unsplash.com/photo-1449965408869-eaa3f7a3c7c4?w=1200&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{taxi.h1}</h1>
            <p className="text-gray-600 leading-relaxed">{taxi.intro}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-card p-6 text-center">
            <p className="text-sm text-gray-500 mb-2">قیمت از</p>
            <p className="text-2xl font-bold text-primary-700 mb-4">{taxi.priceFrom}</p>
            <a
              href={`tel:${site.phone}`}
              className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors w-full"
            >
              رزرو تاکسی
            </a>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">مراحل رزرو</h2>
          <div className="space-y-4">
            {taxi.steps.map((step, i) => (
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
          <FaqAccordion faqs={taxi.faqs} />
        </div>

        {/* Related */}
        <div className="mb-8">
          <RelatedLinks title="صفحات مرتبط" items={taxi.relatedLinks} />
        </div>

        <CtaBox context={taxi.title} />
      </div>
    </>
  );
}
