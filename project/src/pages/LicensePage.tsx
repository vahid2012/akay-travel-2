import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaBox from '@/components/CtaBox';
import { ShieldCheck, FileCheck, Award } from 'lucide-react';
import { site } from '@/data/site';

export default function LicensePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: site.fullName,
    telephone: site.phoneIntl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location,
      addressCountry: 'IR',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: site.license,
    },
  };

  return (
    <>
      <SeoHead
        title="مجوز رسمی آکای تراول | سازمان میراث فرهنگی"
        description="آکای تراول دارای مجوز رسمی از سازمان میراث فرهنگی، صنایع دستی و گردشگری است. سفر مطمئن و قانونی با آژانس مجاز."
        canonical={`${site.url}/license`}
        jsonLd={jsonLd}
      />

      <Hero
        title="مجوز رسمی آکای تراول"
        subtitle="سازمان میراث فرهنگی، صنایع دستی و گردشگری"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'مجوز رسمی' }]} />

        <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center">
              <ShieldCheck className="text-primary-700" size={40} />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">مجوز رسمی گردشگری</h1>

          <p className="text-gray-600 leading-relaxed text-center mb-6">
            {site.fullName} دارای مجوز رسمی از سازمان میراث فرهنگی، صنایع دستی و گردشگری است. این مجوز نشان‌دهنده رسمی بودن و اعتبار آژانس است و تضمین می‌کند که سفر شما در چارچوب قوانین کشور انجام می‌شود.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-sand-50 rounded-xl">
              <FileCheck className="text-primary-700 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-gray-800 text-sm">مجوز فعالیت</p>
                <p className="text-sm text-gray-600 mt-1">{site.license}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-sand-50 rounded-xl">
              <Award className="text-primary-700 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-gray-800 text-sm">تعهد به کیفیت</p>
                <p className="text-sm text-gray-600 mt-1">
                  آکای تراول متعهد به رعایت استانداردهای سازمان میراث فرهنگی در ارائه خدمات گردشگری است.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-sand-50 rounded-xl">
              <ShieldCheck className="text-primary-700 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-gray-800 text-sm">حفظ حقوق مسافر</p>
                <p className="text-sm text-gray-600 mt-1">
                  با انتخاب آژانس مجاز، حقوق شما به‌عنوان مسافر تضمین می‌شود و در صورت بروز مشکل، مراجع قانونی پاسخگو هستند.
                </p>
              </div>
            </div>
          </div>
        </div>

        <CtaBox context="مشاوره سفر" />
      </div>
    </>
  );
}
