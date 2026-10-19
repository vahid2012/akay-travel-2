import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionTitle from '@/components/SectionTitle';
import TourCard from '@/components/TourCard';
import CtaBox from '@/components/CtaBox';
import { tours } from '@/data/tours';
import { seasonalTours } from '@/data/seasonal';
import { Link } from 'react-router-dom';
import { site } from '@/data/site';

export default function ToursPage() {
  const seasonalSlugs = new Set(seasonalTours.map((s) => s.slug));
  const cityTours = tours.filter((t) => !seasonalSlugs.has(t.slug));

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: cityTours.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: t.title,
        url: `${site.url}/tours/${t.slug}`,
      })),
    },
  ];

  return (
    <>
      <SeoHead
        title="تورهای خارجی | ۱۱ مقصد در ۸ کشور | آکای تراول"
        description="تورهای خارجی آکای تراول؛ ایروان، وان، استانبول، دبی، روسیه، ترابزون، باتومی، تفلیس، باکو، اربیل و عمان با راهنما فارسی."
        canonical={`${site.url}/tours`}
        jsonLd={jsonLd}
      />

      <Hero
        title="تورهای خارجی آکای تراول"
        subtitle="۱۱ مقصد در ۸ کشور جهان با مجوز رسمی و راهنما فارسی"
        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'تورها' }]} />

        <SectionTitle title="تورهای شهری" subtitle="تورهای کامل با پرواز، هتل و گشت" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {cityTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        <SectionTitle title="تورهای فصلی" subtitle="نوروز، کریسمس و هالووین" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {seasonalTours.map((s) => (
            <TourCard
              key={s.slug}
              tour={{
                slug: s.slug,
                city: s.title,
                country: '',
                title: s.title,
                h1: s.h1,
                metaTitle: s.metaTitle,
                metaDescription: s.metaDescription,
                heroImage: s.heroImage,
                intro: s.intro,
                highlights: [],
                itinerary: [],
                includes: [],
                excludes: [],
                faqs: [],
                relatedHotels: [],
                relatedServices: [],
                relatedTours: s.relatedTours,
                relatedBlog: s.relatedBlog,
                priceFrom: '',
                duration: s.dateRange,
                bestTime: '',
                documents: '',
              }}
            />
          ))}
        </div>

        <CtaBox context="تورهای خارجی آکای تراول" />
      </div>
    </>
  );
}
