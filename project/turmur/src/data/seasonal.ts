export interface SeasonalTour {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  urgency: string;
  dateRange: string;
  relatedTours: string[];
  relatedBlog: string[];
}

export const seasonalTours: SeasonalTour[] = [
  {
    slug: 'nowruz',
    title: 'تور نوروز ۱۴۰۵',
    h1: 'تور نوروز ۱۴۰۵ با مقاصد خارجی و داخلی',
    metaTitle: 'تور نوروز ۱۴۰۵ | مقاصد خارجی و داخلی | آکای تراول',
    metaDescription:
      'تور نوروز ۱۴۰۵ با آکای تراول؛ ایروان، وان، استانبول، دبی و تفلیس. رزرو زودتر با تخفیف ویژه نوروزی. تماس: 09143403431.',
    heroImage:
      'https://images.unsplash.com/photo-1543393716-375fdd4455ff?w=1200&q=80',
    intro:
      'نوروز، زمان سفر و دیدار است. آکای تراول تورهای نوروز ۱۴۰۵ را به مقاصد محبوب خارجی مانند ایروان، وان، استانبول، دبی و تفلیس ارائه می‌دهد. با رزرو زودتر از تخفیف ویژه نوروزی بهره‌مند شوید و سفر مطمئنی را با مجوز رسمی آکای تراول تجربه کنید.',
    urgency: 'ظرفیت نوروز محدود است! رزرو زودتر با تخفیف ویژه.',
    dateRange: 'اسفند ۱۴۰۴ تا فروردین ۱۴۰۵',
    relatedTours: ['yerevan', 'van', 'istanbul', 'dubai', 'tbilisi', 'batumi'],
    relatedBlog: ['nowruz-travel-tips'],
  },
  {
    slug: 'christmas-newyear',
    title: 'تور کریسمس و سال نو میلادی',
    h1: 'تور کریسمس و سال نو میلادی با مقاصد اروپایی',
    metaTitle: 'تور کریسمس و سال نو میلادی | آکای تراول',
    metaDescription:
      'تور کریسمس و سال نو میلادی با آکای تراول؛ استانبول، مسکو و سن‌پترزبورگ. بازدید از بازارهای کریسمس و جشنواره‌های زمستانی.',
    heroImage:
      'https://images.unsplash.com/photo-1481450119079-6f80c1c3c3b8?w=1200&q=80',
    intro:
      'کریسمس و سال نو میلادی، زمان جشن و بازدید از بازارهای زمستانی است. آکای تراول تورهای کریسمس را به مقاصدی مانند استانبول، مسکو و سن‌پترزبورگ ارائه می‌دهد. در این تورها از بازارهای کریسمس، جشنواره‌های زمستانی و تماشای برف لذت می‌برید.',
    urgency: 'رزرو تا اواخر آذر با تخفیف ویژه کریسمس.',
    dateRange: 'دسامبر تا اوایل ژانویه',
    relatedTours: ['istanbul', 'russia', 'dubai', 'tbilisi'],
    relatedBlog: ['christmas-markets-guide'],
  },
  {
    slug: 'halloween',
    title: 'تور هالووین',
    h1: 'تور هالووین با جشنواره‌های پاییزی',
    metaTitle: 'تور هالووین | جشنواره‌های پاییزی | آکای تراول',
    metaDescription:
      'تور هالووین با آکای تراول؛ استانبول و تفلیس با جشنواره‌های پاییزی. قیمت مناسب و پشتیبانی فارسی ۲۴ ساعته.',
    heroImage:
      'https://images.unsplash.com/photo-1509595044225-2acd8c3fa2eb?w=1200&q=80',
    intro:
      'هالووین، جشن پاییزی با ریشه‌های سلتی، در بسیاری از شهرها با جشنواره‌ها و فستیوال‌های رنگارنگ برگزار می‌شود. آکای تراول تور هالووین را به مقاصدی مانند استانبول و تفلیس ارائه می‌دهد. در این تورها از جشنواره‌های پاییزی، خیابان‌های تزیین شده و فستیوال‌های محلی لذت می‌برید.',
    urgency: 'رزرو تا اواخر مهر با تخفیف ویژه هالووین.',
    dateRange: 'اواخر اکتبر',
    relatedTours: ['istanbul', 'tbilisi', 'batumi', 'van'],
    relatedBlog: ['halloween-festivals-guide'],
  },
];

export function getSeasonalTour(slug: string): SeasonalTour | undefined {
  return seasonalTours.find((s) => s.slug === slug);
}
