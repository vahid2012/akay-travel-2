import { Clock, Calendar, CreditCard, FileText } from 'lucide-react';

interface QuickFactsTableProps {
  duration: string;
  bestTime: string;
  priceFrom: string;
  documents: string;
}

export default function QuickFactsTable({ duration, bestTime, priceFrom, documents }: QuickFactsTableProps) {
  const facts = [
    { icon: Clock, label: 'مدت سفر', value: duration },
    { icon: Calendar, label: 'بهترین زمان', value: bestTime },
    { icon: CreditCard, label: 'قیمت از', value: priceFrom },
    { icon: FileText, label: 'مدارک لازم', value: documents },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-card p-6">
      <h2 className="font-bold text-gray-800 mb-4 text-lg">اطلاعات سریع</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {facts.map((fact, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-sand-50 rounded-xl">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
              <fact.icon className="text-primary-700" size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">{fact.label}</p>
              <p className="text-sm font-semibold text-gray-800">{fact.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
