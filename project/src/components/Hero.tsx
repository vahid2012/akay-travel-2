import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({ title, subtitle, image, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">{title}</h1>
        {subtitle && <p className="text-white/90 text-base md:text-lg mb-6">{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-3 justify-center">
            {primaryCta && (
              <Link
                to={primaryCta.to}
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                {primaryCta.label}
                <ArrowLeft size={18} />
              </Link>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-primary-700 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
