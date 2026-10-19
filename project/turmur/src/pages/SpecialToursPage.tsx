import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionTitle from '@/components/SectionTitle';
import { specialOccasions } from '@/data/specialTours';
import { site } from '@/data/site';

export default function SpecialToursPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: specialOccasions.map((o, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: o.title,
      url: `${site.url}/special-tours`,
    })),
  };

  return (
    <>
      <SeoHead
        title="تورهای ویژه | نوروز، کریسمس، ژانویه، هالووین | آکای تراول"
        description="تورهای ویژه آکای تراول برای مناسبت‌های نوروز، کریسمس، ژانویه و هالووین. مقاصد ارمنستان، استانبول، باکو، ترابزون، باتومی، وان، آنکارا و اربیل."
        canonical={`${site.url}/special-tours`}
        jsonLd={jsonLd}
      />

      <Hero
        title="تورهای ویژه"
        subtitle="سفرهای مناسبتی با تخفیف ویژه و مقاصد متنوع"
        image="https://images.unsplash.com/photo-1530023367847-a683933884b9?w=1200&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'تورهای ویژه' }]} />

        {specialOccasions.map((occasion) => (
          <div key={occasion.slug} className="mb-12">
            <SectionTitle title={occasion.title} subtitle={occasion.description} />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {occasion.destinations.map((dest) => {
                const link = dest.hasTour ? `/tours/${dest.slug}` : '/contact';
                return (
                  <Link
                    key={dest.slug}
                    to={link}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-32 sm:h-36 overflow-hidden">
                      <img
                        src={occasion.image}
                        alt={`${dest.name} در ${occasion.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 right-0 left-0 p-3">
                      <p className="font-bold text-white text-sm">{dest.name}</p>
                      <span className="flex items-center gap-1 text-teal-300 text-xs mt-1">
                        {dest.hasTour ? 'مشاهده تور' : 'استعلام قیمت'}
                        <ArrowLeft size={12} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        <div className="bg-teal-600 rounded-2xl p-6 text-center">
          <p className="text-white font-semibold mb-2">برای رزرو زودتر با تخفیف ویژه تماس بگیرید</p>
          <Link to="/contact" className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
            تماس و مشاوره
          </Link>
        </div>
      </div>
    </>
  );
}
