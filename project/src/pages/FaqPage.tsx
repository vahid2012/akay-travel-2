import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBox from '@/components/CtaBox';
import { site } from '@/data/site';

const faqs = [
  { q: 'آیا آکای تراول مجوز رسمی دارد؟', a: 'بله، آکای تراول دارای مجوز رسمی از سازمان میراث فرهنگی، صنایع دستی و گردشگری است.' },
  { q: 'چگونه تور رزرو کنم؟', a: 'با تماس یا واتساپ به 09143403431 می‌توانید تور مورد نظر را رزرو کنید. تیم پشتیبانی پاسخگو است.' },
  { q: 'پروازها از کدام شهر انجام می‌شوند؟', a: 'پروازها معمولا از ارومیه یا تهران انجام می‌شوند. برای گروه‌ها پرواز چارتر نیز قابل تنظیم است.' },
  { q: 'آیا ویزا در تور شامل است؟', a: 'در اکثر تورها ویزا شامل قیمت است. برای جزئیات هر تور به صفحه مربوطه مراجعه کنید.' },
  { q: 'پشتیبانی در سفر چگونه است؟', a: 'تیم پشتیبانی آکای تراول ۲۴ ساعته همراه مسافران است و در تمام مراحل سفر کمک می‌کند.' },
  { q: 'آیا امکان رزرو گروهی وجود دارد؟', a: 'بله، برای گروه‌های ۱۰ نفر به بالا تخفیف ویژه اعمال می‌شود. برای رزرو گروهی تماس بگیرید.' },
  { q: 'چگونه هتل رزرو کنم؟', a: 'با تماس یا واتساپ به آکای تراول، رزرو هتل در کمتر از ۱ ساعت انجام می‌شود.' },
  { q: 'آیا امکان استرداد بلیط وجود دارد؟', a: 'بله، بر اساس قوانین ایرلاین، استرداد با کسر جریمه ممکن است.' },
  { q: 'بهترین زمان سفر به کدام مقاصد است؟', a: 'برای هر مقصد زمان بهینه متفاوت است. در صفحه هر تور اطلاعات بهترین زمان سفر ذکر شده است.' },
  { q: 'چقدر پول همراه ببرم؟', a: 'برای خرج شخصی روزانه معمولا ۳۰ تا ۱۰۰ دلار کافی است. جزئیات در صفحه هر تور آمده است.' },
];

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SeoHead
        title="سوالات متداول | آکای تراول"
        description="پاسخ سوالات متداول درباره تورهای خارجی، رزرو هتل، بلیط هواپیما و تاکسی دربست آکای تراول."
        canonical={`${site.url}/faq`}
        jsonLd={jsonLd}
      />

      <Hero
        title="سوالات متداول"
        subtitle="پاسخ پرسش‌های رایج مسافران"
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'سوالات متداول' }]} />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">سوالات متداول</h1>

        <FaqAccordion faqs={faqs} />

        <div className="mt-8">
          <CtaBox context="سوالات بیشتر" />
        </div>
      </div>
    </>
  );
}
