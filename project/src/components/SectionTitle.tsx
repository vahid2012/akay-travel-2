interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ title, subtitle, center }: SectionTitleProps) {
  return (
    <div className={`mb-8 ${center ? 'text-center' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm md:text-base">{subtitle}</p>}
      <div className={`h-1 w-20 bg-accent-500 rounded-full mt-3 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
