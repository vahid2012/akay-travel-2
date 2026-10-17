import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs, { buildBreadcrumbJsonLd } from '@/components/Breadcrumbs';
import RelatedLinks from '@/components/RelatedLinks';
import CtaBox from '@/components/CtaBox';
import TourCard from '@/components/TourCard';
import HotelCard from '@/components/HotelCard';
import { getBlogPost } from '@/data/blog';
import { getTour } from '@/data/tours';
import { getHotel } from '@/data/hotels';
import { site } from '@/data/site';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const breadcrumbItems = [
    { label: 'خانه', to: '/' },
    { label: 'وبلاگ', to: '/blog' },
    { label: post.title },
  ];

  const relatedTourCards = post.relatedTours
    .map((s) => getTour(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))
    .slice(0, 2);

  const relatedHotelCards = post.relatedHotels
    .map((s) => getHotel(s))
    .filter((h): h is NonNullable<typeof h> => Boolean(h))
    .slice(0, 1);

  const relatedLinks = [
    ...post.relatedTours.map((t) => {
      const tour = getTour(t);
      return { label: tour?.title || 'تور', to: `/tours/${t}` };
    }),
    ...post.relatedHotels.map((h) => {
      const hotel = getHotel(h);
      return { label: hotel?.title || 'هتل', to: `/hotels/${h}` };
    }),
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.metaDescription,
      image: post.heroImage,
      datePublished: post.date,
      author: { '@type': 'Organization', name: site.fullName },
      publisher: { '@type': 'Organization', name: site.fullName },
    },
    buildBreadcrumbJsonLd(breadcrumbItems, site.url),
  ];

  return (
    <>
      <SeoHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`${site.url}/blog/${post.slug}`}
        ogImage={post.heroImage}
        jsonLd={jsonLd}
      />

      <Hero title={post.title} subtitle={post.excerpt} image={post.heroImage} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Calendar size={16} className="text-primary-600" />
          <span>{post.date}</span>
        </div>

        <article className="prose prose-sm max-w-none mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">{post.content}</p>
        </article>

        {/* Related Links */}
        <div className="mb-8">
          <RelatedLinks title="صفحات مرتبط" items={relatedLinks} />
        </div>

        {/* Related Tours */}
        {relatedTourCards.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-gray-800 mb-4 text-lg">تورهای مرتبط</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedTourCards.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        )}

        {/* Related Hotels */}
        {relatedHotelCards.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-gray-800 mb-4 text-lg">هتل‌های مرتبط</h2>
            <div className="grid grid-cols-1 gap-6">
              {relatedHotelCards.map((h) => (
                <HotelCard key={h.slug} hotel={h} />
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-700 font-medium text-sm hover:underline"
          >
            <ArrowLeft size={16} />
            بازگشت به وبلاگ
          </Link>
        </div>

        <CtaBox context={post.title} />
      </div>
    </>
  );
}
