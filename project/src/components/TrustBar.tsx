import { ShieldCheck, Globe, Headphones, Lock } from 'lucide-react';

const items = [
  { icon: ShieldCheck, title: 'مجوز رسمی', desc: 'سازمان میراث فرهنگی' },
  { icon: Globe, title: '۱۱+ مقصد', desc: 'در ۸ کشور جهان' },
  { icon: Headphones, title: 'پشتیبانی ۲۴/۷', desc: 'همراه مسافر' },
  { icon: Lock, title: 'پرداخت امن', desc: 'تضمین سفر' },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-sand-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                <item.icon className="text-primary-700" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
