import { Link } from 'react-router-dom';
import { Plane, Clock, Tag, ArrowLeft } from 'lucide-react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionTitle from '@/components/SectionTitle';
import CtaBox from '@/components/CtaBox';
import { istanbulDestinations } from '@/data/istanbulDestinations';
import { site } from '@/data/site';

export default function IstanbulWorldwidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: istanbulDestinations.map((d, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `بلیط استانبول به ${d.cityFa}`,
      url: `${site.url}/istanbul-to/${d.slug}`,
    })),
  };

  return (
    <>
      <SeoHead
        title="بلیط استانبول به سراسر جهان | ۱۰ مقصد اروپا و جهان | آکای تراول"
        description="بلیط هواپیما از استانبول به لندن، پاریس، دبی، فرانکفورت، آمستردام، رم، نیویورک، تورنتو، توکیو و مسکو با بهترین قیمت."
        canonical={`${site.url}/istanbul-to-worldwide`}
        jsonLd={jsonLd}
      />

      <Hero
        title="بلیط استانبول به سراسر جهان"
        subtitle="۱۰ مقصد محبوب در اروپا، آمریکا و آسیا با بهترین قیمت"
        image="https://images.unsplash.com/photo-1436491865332-7a61a56cccb4?w=1200&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'استانبول به جهان' }]} />

        <SectionTitle title="مقاصد پروازی" subtitle="از استانبول به ۱۰ شهر مهم جهان" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {istanbulDestinations.map((dest) => (
            <Link
              key={dest.slug}
              to={`/istanbul-to/${dest.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`بلیط استانبول به ${dest.cityFa}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  از {dest.priceFrom}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-teal-600 transition-colors">
                  استانبول به {dest.cityFa}
                </h3>
                <p className="text-xs text-gray-400 mb-2">{dest.cityEn}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-teal-600" />
                    {dest.flightTime}
                  </span>
                  <span className="flex items-center gap-1 text-teal-600 font-medium">
                    مشاهده و رزرو
                    <ArrowLeft size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <CtaBox context="بلیط استانبول به سراسر جهان" />
      </div>
    </>
  );
}
