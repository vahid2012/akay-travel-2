import { Phone, MessageCircle } from 'lucide-react';
import { site, waLink } from '@/data/site';

interface CtaBoxProps {
  context: string;
}

export default function CtaBox({ context }: CtaBoxProps) {
  return (
    <div className="bg-gradient-to-l from-primary-700 to-primary-800 rounded-2xl p-6 md:p-8 text-center">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">سوال دارید؟ تماس بگیرید</h3>
      <p className="text-white/80 text-sm mb-6">
        تیم پشتیبانی آکای تراول آماده پاسخ به سوالات شما درباره {context} است.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href={`tel:${site.phone}`}
          className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-6 py-3 rounded-xl hover:bg-sand-50 transition-colors"
        >
          <Phone size={18} />
          تماس: {site.phone}
        </a>
        <a
          href={waLink(context)}
          target="_blank"
          rel="nofollow noopener"
          className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
        >
          <MessageCircle size={18} />
          واتساپ
        </a>
      </div>
    </div>
  );
}
