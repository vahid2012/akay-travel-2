import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionTitle from '@/components/SectionTitle';
import HotelCard from '@/components/HotelCard';
import CtaBox from '@/components/CtaBox';
import { hotels } from '@/data/hotels';
import { site } from '@/data/site';

export default function HotelsPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: hotels.map((h, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: h.title,
        url: `${site.url}/hotels/${h.slug}`,
      })),
    },
  ];

  return (
    <>
      <SeoHead
        title="رزرو هتل | وان، استانبول، اربیل، باکو | آکای تراول"
        description="رزرو آنلاین هتل در وان، ارومیه، استانبول، اربیل و باکو با بهترین قیمت و پشتیبانی فارسی ۲۴ ساعته. رزرو گروهی با تخفیف ویژه."
        canonical={`${site.url}/hotels`}
        jsonLd={jsonLd}
      />

      <Hero
        title="رزرو هتل با بهترین قیمت"
        subtitle="هتل‌های منتخب در مقاصد محبوب با پشتیبانی فارسی"
        image="https://images.unsplash.com/photo-1566073761258-7f860b6c7555?w=1200&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'هتل‌ها' }]} />

        <SectionTitle title="هتل‌های منتخب" subtitle="رزرو با قیمت مناسب و موقعیت عالی" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.slug} hotel={hotel} />
          ))}
        </div>

        <CtaBox context="رزرو هتل" />
      </div>
    </>
  );
}
