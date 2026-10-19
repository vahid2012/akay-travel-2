export interface SpecialOccasionDestination {
  name: string;
  slug: string;
  hasTour: boolean;
}

export interface SpecialOccasion {
  slug: string;
  title: string;
  description: string;
  image: string;
  destinations: SpecialOccasionDestination[];
}

export const specialOccasions: SpecialOccasion[] = [
  {
    slug: 'nowruz',
    title: 'عید نوروز',
    description: 'سفر نوروزی با تخفیف ویژه و رزرو زودتر. بهترین زمان برای سفر خانوادگی.',
    image: 'https://images.unsplash.com/photo-1543393716-375fdd4455ff?w=1200&q=80',
    destinations: [
      { name: 'ارمنستان', slug: 'yerevan', hasTour: true },
      { name: 'استانبول', slug: 'istanbul', hasTour: true },
      { name: 'باکو', slug: 'baku', hasTour: true },
      { name: 'ترابزون', slug: 'trabzon', hasTour: true },
      { name: 'باتومی', slug: 'batumi', hasTour: true },
      { name: 'وان', slug: 'van', hasTour: true },
      { name: 'آنکارا', slug: 'ankara', hasTour: false },
      { name: 'اربیل', slug: 'erbil', hasTour: true },
    ],
  },
  {
    slug: 'christmas',
    title: 'کریسمس',
    description: 'بازدید از بازارهای کریسمس و جشنواره‌های زمستانی در اروپا و قفقاز.',
    image: 'https://images.unsplash.com/photo-1481450119079-6f80c1c3c3b8?w=1200&q=80',
    destinations: [
      { name: 'ارمنستان', slug: 'yerevan', hasTour: true },
      { name: 'استانبول', slug: 'istanbul', hasTour: true },
      { name: 'باکو', slug: 'baku', hasTour: true },
      { name: 'ترابزون', slug: 'trabzon', hasTour: true },
      { name: 'باتومی', slug: 'batumi', hasTour: true },
      { name: 'وان', slug: 'van', hasTour: true },
      { name: 'آنکارا', slug: 'ankara', hasTour: false },
      { name: 'اربیل', slug: 'erbil', hasTour: true },
    ],
  },
  {
    slug: 'january',
    title: 'ژانویه',
    description: 'سفرهای زمستانی با قیمت مناسب و مقاصد کم‌جمعیت برای استراحت.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80',
    destinations: [
      { name: 'ارمنستان', slug: 'yerevan', hasTour: true },
      { name: 'استانبول', slug: 'istanbul', hasTour: true },
      { name: 'باکو', slug: 'baku', hasTour: true },
      { name: 'ترابزون', slug: 'trabzon', hasTour: true },
      { name: 'باتومی', slug: 'batumi', hasTour: true },
      { name: 'وان', slug: 'van', hasTour: true },
      { name: 'آنکارا', slug: 'ankara', hasTour: false },
      { name: 'اربیل', slug: 'erbil', hasTour: true },
    ],
  },
  {
    slug: 'halloween',
    title: 'هالووین',
    description: 'جشنواره‌های پاییزی و فستیوال‌های رنگارنگ در مقاصد محبوب.',
    image: 'https://images.unsplash.com/photo-1509595044225-2acd8c3fa2eb?w=1200&q=80',
    destinations: [
      { name: 'ارمنستان', slug: 'yerevan', hasTour: true },
      { name: 'استانبول', slug: 'istanbul', hasTour: true },
      { name: 'باکو', slug: 'baku', hasTour: true },
      { name: 'ترابزون', slug: 'trabzon', hasTour: true },
      { name: 'باتومی', slug: 'batumi', hasTour: true },
      { name: 'وان', slug: 'van', hasTour: true },
      { name: 'آنکارا', slug: 'ankara', hasTour: false },
      { name: 'اربیل', slug: 'erbil', hasTour: true },
    ],
  },
];
