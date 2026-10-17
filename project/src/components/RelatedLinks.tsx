import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionTitle from './SectionTitle';

export interface RelatedLinkItem {
  label: string;
  to: string;
}

interface RelatedLinksProps {
  title: string;
  items: RelatedLinkItem[];
  external?: { name: string; url: string; badge?: string }[];
}

export default function RelatedLinks({ title, items, external }: RelatedLinksProps) {
  return (
    <div className="bg-primary-50 rounded-2xl p-6">
      <h3 className="font-bold text-gray-800 mb-4 text-lg">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="group flex items-center justify-between bg-white rounded-xl p-3 shadow-sm hover:shadow-card transition-all"
          >
            <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">{item.label}</span>
            <ArrowLeft size={16} className="text-primary-600" />
          </Link>
        ))}
        {external?.map((site, i) => (
          <a
            key={`ext-${i}`}
            href={site.url}
            target="_blank"
            rel="noopener"
            className="group flex items-center justify-between bg-accent-50 rounded-xl p-3 shadow-sm hover:shadow-card transition-all border border-accent-200"
          >
            <span className="text-sm font-medium text-gray-700 group-hover:text-accent-600">
              {site.name}
              {site.badge && (
                <span className="mr-2 inline-block bg-accent-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                  {site.badge}
                </span>
              )}
            </span>
            <ArrowLeft size={16} className="text-accent-500" />
          </a>
        ))}
      </div>
    </div>
  );
}
