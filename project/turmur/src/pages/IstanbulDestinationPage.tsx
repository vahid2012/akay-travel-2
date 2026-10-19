import { useParams, Navigate, Link } from 'react-router-dom';
import { Clock, Tag, Plane, Phone, MessageCircle } from 'lucide-react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs, { buildBreadcrumbJsonLd } from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';
import { getIstanbulDestination, istanbulDestinations } from '@/data/istanbulDestinations';
import { site, waLink } from '@/data/site';

export default function IstanbulDestinationPage() {
  const { city } = useParams<{ city: string }>();
  const dest = city ? getIstanbulDestination(city) : undefined;

  if (!dest) return <Navigate to="/istanbul-to-worldwide" replace />;

  const breadcrumbItems = [
    { label: 'خانه', to: '/' },
    { label: 'استانبول به جهان', to: '/istanbul-to-worldwide' },
    { label: dest.cityFa },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `بلیط استانبول به ${dest.cityFa}`,
      description: `بلیط هواپیما از استانبول به ${dest.cityFa} (${dest.cityEn}) با بهترین قیمت.`,
      offers: {
        '@type': 'Offer',
        price: dest.priceFrom,
        priceCurrency: 'IRR',
        availability: 'https://schema.org/InStock',
      },
      provider: { '@type': 'TravelAgency', name: site.fullName, telephone: site.phoneIntl },
    },
    buildBreadcrumbJsonLd(breadcrumbItems, site.url),
  ];

  const otherDestinations = istanbulDestinations.filter((d) => d.slug !== dest.slug).slice(0, 5);
  const relatedLinks = otherDestinations.map((d) => ({
    label: `استانبول به ${d.cityFa}`,
    to: `/istanbul-to/${d.slug}`,
  }));

  return (
    <>
      <SeoHead
        title={`بلیط استانبول به ${dest.cityFa} | قیمت و رزرو | آکای تراول`}
        description={`خرید بلیط هواپیما استانبول به ${dest.cityFa} (${dest.cityEn}) با بهترین قیمت. پرواز مستقیم و با توقف. رزرو آنلاین و پشتیبانی فارسی.`}
        canonical={`${site.url}/istanbul-to/${dest.slug}`}
        ogImage={dest.image}
        jsonLd={jsonLd}
      />

      <Hero
        title={`بلیط استانبول به ${dest.cityFa}`}
        subtitle={`${dest.cityEn} — مدت پرواز: ${dest.flightTime}`}
        image={dest.image}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* SEO Content */}
        <article className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">بلیط استانبول به {dest.cityFa}</h1>
          <p className="text-gray-600 leading-relaxed mb-4">{dest.seoPara1}</p>
          <p className="text-gray-600 leading-relaxed">{dest.seoPara2}</p>
        </article>

        {/* Flight Info */}
        <div className="bg-white rounded-2xl shadow-card p-6 mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">اطلاعات پرواز</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-teal-50 rounded-xl p-4 flex items-center gap-3">
              <Tag className="text-teal-600" size={24} />
              <div>
                <p className="text-xs text-gray-500">قیمت از</p>
                <p className="font-semibold text-gray-800 text-sm">{dest.priceFrom}</p>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 flex items-center gap-3">
              <Clock className="text-teal-600" size={24} />
              <div>
                <p className="text-xs text-gray-500">مدت پرواز</p>
                <p className="font-semibold text-gray-800 text-sm">{dest.flightTime}</p>
              </div>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 flex items-center gap-3">
              <Plane className="text-teal-600" size={24} />
              <div>
                <p className="text-xs text-gray-500">مبدا</p>
                <p className="font-semibold text-gray-800 text-sm">استانبول</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="bg-gradient-to-l from-teal-600 to-teal-700 rounded-2xl p-6 md:p-8 text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-2">رزرو بلیط استانبول به {dest.cityFa}</h3>
          <p className="text-white/80 text-sm mb-6">همین حالا تماس بگیرید یا واتساپ بفرستید تا بلیط شما صادر شود.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl">
              <Phone size={18} /> تماس: {site.phone}
            </a>
            <a
              href={waLink(`بلیط استانبول به ${dest.cityFa}`)}
              target="_blank"
              rel="nofollow noopener"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl"
            >
              <MessageCircle size={18} /> واتساپ
            </a>
          </div>
        </div>

        {/* Related Destinations */}
        <RelatedLinks title="مقاصد دیگر از استانبول" items={relatedLinks} />

        <div className="mt-8">
          <Link to="/istanbul-to-worldwide" className="text-teal-600 font-medium text-sm hover:underline">
            ← مشاهده همه مقاصد استانبول
          </Link>
        </div>
      </div>
    </>
  );
}
