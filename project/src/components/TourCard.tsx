import { Link } from 'react-router-dom';
import { Clock, MapPin, Tag } from 'lucide-react';
import type { Tour } from '@/data/tours';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Link
      to={`/tours/${tour.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={tour.heroImage}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          از {tour.priceFrom}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
          <MapPin size={14} className="text-primary-600" />
          <span>{tour.city}، {tour.country}</span>
        </div>
        <h3 className="font-bold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors">
          {tour.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-primary-600" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1 text-primary-700 font-medium">
            <Tag size={14} />
            مشاهده تور
          </span>
        </div>
      </div>
    </Link>
  );
}
