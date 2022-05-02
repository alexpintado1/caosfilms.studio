interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ className = '', children }: SectionProps) => (
  <div className={`w-full px-6 relative ${className}`}>
    <div className="mx-auto max-w-7xl w-full">{children}</div>
  </div>
);

Section.displayName = 'Section';
