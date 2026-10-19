import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { site, waLink } from '@/data/site';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-primary-700 flex items-center justify-center">
                <ShieldCheck className="text-accent-400" size={22} />
              </div>
              <div>
                <p className="font-bold text-primary-800 text-lg leading-tight">{site.name}</p>
                <p className="text-[10px] text-gray-500 leading-tight">مجوز رسمی گردشگری</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {site.navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.to
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-700 hover:bg-sand-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${site.phone}`}
                className="hidden sm:inline-flex items-center gap-1 text-primary-700 font-semibold text-sm"
              >
                <Phone size={16} />
                {site.phone}
              </a>
              <a
                href={waLink('خدمات آکای تراول')}
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                <MessageCircle size={16} />
                <span className="hidden sm:inline">واتساپ</span>
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-sand-50"
                aria-label="منو"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <nav className="lg:hidden border-t border-sand-100 py-3">
              <div className="grid grid-cols-2 gap-1">
                {site.navigation.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.to
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-gray-600 hover:bg-sand-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-700 flex items-center justify-center">
                  <ShieldCheck className="text-accent-400" size={22} />
                </div>
                <p className="font-bold text-white text-lg">{site.name}</p>
              </div>
              <p className="text-sm text-gray-400 mb-3">{site.slogan}</p>
              <p className="text-xs text-gray-500 mb-4">{site.license}</p>
              <div className="flex flex-col gap-2 text-sm">
                <a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-white">
                  <Phone size={16} className="text-accent-400" />
                  {site.phone}
                </a>
                <a
                  href={waLink('خدمات آکای تراول')}
                  target="_blank"
                  rel="nofollow noopener"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <MessageCircle size={16} className="text-green-400" />
                  واتساپ
                </a>
              </div>
            </div>

            {/* Tours */}
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">تورهای محبوب</h4>
              <ul className="space-y-2">
                {site.footerLinks.tours.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-gray-400 hover:text-accent-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hotels */}
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">هتل‌ها</h4>
              <ul className="space-y-2">
                {site.footerLinks.hotels.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-gray-400 hover:text-accent-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">شرکت</h4>
              <ul className="space-y-2">
                {site.footerLinks.company.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-gray-400 hover:text-accent-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                {site.footerLinks.services.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-gray-400 hover:text-accent-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sister Sites */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <h4 className="font-bold text-white mb-3 text-sm">همکاران ما</h4>
            <div className="flex flex-wrap gap-3">
              {site.sisterSites.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener"
                  className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>© ۱۴۰۴ {site.fullName} — تمامی حقوق محفوظ است.</p>
            <p className="mt-1">{site.license}</p>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Buttons */}
      <div className="fixed bottom-4 left-4 right-4 z-40 flex gap-3 lg:hidden">
        <a
          href={`tel:${site.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-primary-700 text-white font-semibold py-3 rounded-xl shadow-lg"
        >
          <Phone size={18} />
          تماس
        </a>
        <a
          href={waLink('خدمات آکای تراول')}
          target="_blank"
          rel="nofollow noopener"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 rounded-xl shadow-lg"
        >
          <MessageCircle size={18} />
          واتساپ
        </a>
      </div>
    </div>
  );
}
