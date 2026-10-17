import { Link } from 'react-router-dom';
import SeoHead from '@/components/SeoHead';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="صفحه یافت نشد | آکای تراول"
        description="صفحه مورد نظر یافت نشد. به صفحه اصلی آکای تراول بازگردید."
      />
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-6xl font-bold text-primary-700 mb-4">۴۰۴</p>
          <h1 className="text-xl font-bold text-gray-800 mb-2">صفحه یافت نشد</h1>
          <p className="text-gray-500 mb-6">صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Home size={18} />
            بازگشت به خانه
          </Link>
        </div>
      </div>
    </>
  );
}
