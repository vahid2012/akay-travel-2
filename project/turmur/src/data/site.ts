export const site = {
  name: 'آکای تراول',
  fullName: 'آژانس مسافرتی آکای تراول',
  license: 'دارای مجوز رسمی از سازمان میراث فرهنگی، صنایع دستی و گردشگری',
  phone: '09143403431',
  phoneIntl: '+989143403431',
  whatsapp: 'https://wa.me/989143403431',
  location: 'ارومیه',
  slogan: 'سفر با آکای تراول، مطمئن و حرفه‌ای',
  url: 'https://akaytravel.ir',
  email: 'info@akaytravel.ir',
  description:
    'آژانس گردشگری آکای تراول با مجوز رسمی؛ تور ایروان، وان، استانبول، دبی، روسیه و ۱۱ مقصد. رزرو هتل، بلیط هواپیما و تاکسی دربست.',
  sameAs: [
    'https://instagram.com/akaytravel',
    'https://t.me/akaytravel',
    'https://balad.ir/akaytravel',
    'https://neshan.org/akaytravel',
  ],
  sisterSites: [
    { name: 'تورویزا', url: 'https://tourviza.ir' },
    { name: 'آکای تراول', url: 'https://akaytravel.ir' },
    { name: 'روما سفر', url: 'https://romasafar.ir' },
    { name: 'اس‌پی‌بی تور', url: 'https://spbtour.ir' },
    { name: 'تور ایروان', url: 'https://yerevantours.ir' },
    { name: 'ایرانچارتر', url: 'https://istanbulservice.ir' },
    { name: 'هتل اربیل', url: 'https://hotelerbil.ir' },
    { name: 'هتل تورال', url: 'https://hoteltural.ir' },
    { name: 'هتل ارومیه', url: 'https://hotelurmia.ir' },
  ],
  navigation: [
    { label: 'خانه', to: '/' },
    { label: 'تورها', to: '/tours' },
    { label: 'هتل‌ها', to: '/hotels' },
    { label: 'بلیط هواپیما', to: '/flights' },
    { label: 'ارومیه به وان', to: '/urmia-to-van' },
    { label: 'تاکسی دربست', to: '/taxi/urmia-van-airport' },
    { label: 'تورهای ویژه', to: '/special-tours' },
    { label: 'درباره ما', to: '/about' },
    { label: 'مجوز', to: '/license' },
    { label: 'وبلاگ', to: '/blog' },
    { label: 'سوالات متداول', to: '/faq' },
    { label: 'تماس', to: '/contact' },
  ],
  footerLinks: {
    tours: [
      { label: 'تور ایروان', to: '/tours/yerevan' },
      { label: 'تور وان', to: '/tours/van' },
      { label: 'تور استانبول', to: '/tours/istanbul' },
      { label: 'تور دبی', to: '/tours/dubai' },
      { label: 'تور روسیه', to: '/tours/russia' },
      { label: 'تور ترابزون', to: '/tours/trabzon' },
    ],
    hotels: [
      { label: 'هتل وان', to: '/hotels/van' },
      { label: 'هتل ارومیه', to: '/hotels/urmia' },
      { label: 'هتل استانبول', to: '/hotels/istanbul' },
      { label: 'هتل اربیل', to: '/hotels/erbil' },
      { label: 'هتل باکو', to: '/hotels/baku' },
      { label: 'رزرو گروهی', to: '/hotels/groups' },
    ],
    services: [
      { label: 'بلیط وان به استانبول', to: '/flights/van-istanbul' },
      { label: 'بلیط استانبول به سراسر جهان', to: '/flights/istanbul-worldwide' },
      { label: 'تاکسی ارومیه به فرودگاه وان', to: '/taxi/urmia-van-airport' },
      { label: 'ون و اتوبوس ارومیه به وان', to: '/urmia-to-van' },
      { label: 'استانبول به سراسر جهان', to: '/istanbul-to-worldwide' },
    ],
    company: [
      { label: 'درباره ما', to: '/about' },
      { label: 'مجوز رسمی', to: '/license' },
      { label: 'وبلاگ', to: '/blog' },
      { label: 'سوالات متداول', to: '/faq' },
      { label: 'تماس با ما', to: '/contact' },
    ],
  },
};

export const sisterSitesByRoute: Record<string, { name: string; url: string } | undefined> = {
  '/tours/yerevan': { name: 'تور ایروان', url: 'https://yerevantours.ir' },
  '/tours/istanbul': { name: 'خدمات استانبول', url: 'https://istanbulservice.ir' },
  '/tours/van': { name: 'هتل تورال', url: 'https://hoteltural.ir' },
  '/hotels/erbil': { name: 'هتل اربیل', url: 'https://hotelerbil.ir' },
  '/hotels/van': { name: 'هتل تورال', url: 'https://hoteltural.ir' },
  '/hotels/urmia': { name: 'هتل ارومیه', url: 'https://hotelurmia.ir' },
};

export function waLink(context: string): string {
  return `${site.whatsapp}?text=${encodeURIComponent(`سلام، درباره ${context} سوال دارم`)}`;
}
