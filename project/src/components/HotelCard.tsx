import { Link } from 'react-router-dom';
import { MapPin, Tag } from 'lucide-react';
import type { Hotel } from '@/data/hotels';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link
      to={`/hotels/${hotel.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={hotel.heroImage}
          alt={hotel.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          از {hotel.priceFrom}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
          <MapPin size={14} className="text-primary-600" />
          <span>{hotel.city}</span>
        </div>
        <h3 className="font-bold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors">
          {hotel.title}
        </h3>
        <span className="flex items-center gap-1 text-primary-700 font-medium text-xs">
          <Tag size={14} />
          مشاهده هتل
        </span>
      </div>
    </Link>
  );
}
