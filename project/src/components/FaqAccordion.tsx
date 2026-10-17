import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { TourFaq, HotelFaq } from '@/data/hotels';

interface FaqAccordionProps {
  faqs: TourFaq[] | HotelFaq[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="bg-white rounded-xl shadow-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-4 text-right hover:bg-sand-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-gray-800 text-sm md:text-base">{faq.q}</span>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-primary-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-sand-100 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
