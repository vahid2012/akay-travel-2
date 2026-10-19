import SeoHead from '@/components/SeoHead';
import Hero from '@/components/Hero';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionTitle from '@/components/SectionTitle';
import BlogCard from '@/components/BlogCard';
import CtaBox from '@/components/CtaBox';
import { blogPosts } from '@/data/blog';
import { site } from '@/data/site';

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `وبلاگ ${site.name}`,
    description: 'راهنمای سفر و نکات گردشگری از آکای تراول',
    blogPost: blogPosts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.date,
      url: `${site.url}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <SeoHead
        title="وبلاگ آکای تراول | راهنمای سفر و گردشگری | آکای تراول"
        description="مقالات راهنمای سفر به ایروان، وان، استانبول، دبی، روسیه و اربیل. نکات سفر، ویزا و خرید از آکای تراول."
        canonical={`${site.url}/blog`}
        jsonLd={jsonLd}
      />

      <Hero
        title="وبلاگ آکای تراول"
        subtitle="راهنمای سفر و نکات گردشگری"
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'خانه', to: '/' }, { label: 'وبلاگ' }]} />

        <SectionTitle title="آخرین مقالات" subtitle="راهنمای سفر و نکات گردشگری" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <CtaBox context="مشاوره سفر" />
      </div>
    </>
  );
}
