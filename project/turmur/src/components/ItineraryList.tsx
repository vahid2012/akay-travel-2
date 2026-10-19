import type { TourItinerary } from '@/data/tours';

interface ItineraryListProps {
  items: TourItinerary[];
}

export default function ItineraryList({ items }: ItineraryListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.day} className="flex gap-4 bg-white rounded-2xl shadow-card p-5">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-700 text-white font-bold flex items-center justify-center">
            {item.day}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 mb-1">روز {item.day}: {item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
