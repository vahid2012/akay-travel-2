import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import type { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={post.heroImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
          <Calendar size={14} className="text-primary-600" />
          <span>{post.date}</span>
        </div>
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-2">{post.excerpt}</p>
        <span className="flex items-center gap-1 text-primary-700 font-medium text-xs">
          ادامه مطلب
          <ArrowLeft size={14} />
        </span>
      </div>
    </Link>
  );
}
