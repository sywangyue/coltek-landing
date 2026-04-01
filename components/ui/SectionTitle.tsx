interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  withAccent?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
  withAccent = false,
  className = '',
}: SectionTitleProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`${isCenter ? 'text-center' : ''} ${className}`}
    >
      <div className={`flex items-start gap-3 ${isCenter ? 'justify-center' : ''}`}>
        {withAccent && !isCenter && (
          <div className="mt-1.5 w-1 h-8 rounded-full gradient-brand shrink-0" />
        )}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg text-foreground-muted ${
            isCenter ? '' : withAccent ? 'ml-4' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
