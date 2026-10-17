import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  jsonLdId?: string;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[], baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.to ? `${baseUrl}${item.to}` : undefined,
    })),
  };
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="مسیر" className="flex flex-wrap items-center gap-1 text-sm text-gray-500 mb-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-1">
            {item.to && !isLast ? (
              <Link to={item.to} className="hover:text-primary-700 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-primary-700 font-medium' : ''}>{item.label}</span>
            )}
            {!isLast && <ChevronLeft size={14} className="text-gray-400" />}
          </span>
        );
      })}
    </nav>
  );
}
