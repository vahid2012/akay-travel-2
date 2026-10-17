import { Link } from 'react-router-dom';
import { Plane, ArrowLeft } from 'lucide-react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionTitle from '@/components/SectionTitle';
import CtaBox from '@/components/CtaBox';
import { flights } from '@/data/services';
import { site } from '@/data/site';

export default function FlightsPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: flights.map((f, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: f.title,
        url: `${site.url}/flights/${f.slug}`,
      })),
    },
  ];

  return (
    <>
      <SeoHead
        title="بلیط هواپیما | وان به استانبول و سراسر جهان | آکای تراول"
        description="خرید بلیط هواپیما وان به استانبول و استانبول به سراسر جهان با بهترین قیمت و پشتیبانی فارسی ۲۴ ساعته."
        canonical={`${site.url}/flights`}
        jsonLd={jsonLd}
      />

      <Hero
        title="بلیط هواپیما"
        subtitle="وان به استانبول و استانبول به سراسر جهان"
        image="https://images.unsplash.com/photo-1436491865332-7a61a56cccb4?w=1200&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'بلیط هواپیما' }]} />

        <SectionTitle title="مسیرهای پروازی" subtitle="رزرو آنلاین با بهترین قیمت" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {flights.map((f) => (
            <Link
              key={f.slug}
              to={`/flights/${f.slug}`}
              className="group bg-white rounded-2xl shadow-card hover:shadow-soft transition-all p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Plane className="text-primary-700 group-hover:text-accent-500 transition-colors" size={24} />
                </div>
                <h3 className="font-bold text-gray-800 group-hover:text-primary-700">{f.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{f.intro}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary-700 font-semibold text-sm">از {f.priceFrom}</span>
                <span className="flex items-center gap-1 text-primary-700 text-sm font-medium">
                  مشاهده و رزرو
                  <ArrowLeft size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <CtaBox context="بلیط هواپیما" />
      </div>
    </>
  );
}
