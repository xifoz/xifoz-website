import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  initials,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'bg-xifoz-surface border border-xifoz-text/5 rounded-card p-6 md:p-8',
        className
      )}
    >
      <div className="mb-6">
        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-xifoz-blue/20">
          <path
            d="M0 24V14.4C0 9.867 0.8 6.267 2.4 3.6C4.133 0.8 7.067 0 11.2 0V6.4C9.6 6.4 8.467 6.867 7.8 7.8C7.133 8.733 6.8 10.2 6.8 12.2V14.4H12V24H0ZM20 24V14.4C20 9.867 20.8 6.267 22.4 3.6C24.133 0.8 27.067 0 31.2 0V6.4C29.6 6.4 28.467 6.867 27.8 7.8C27.133 8.733 26.8 10.2 26.8 12.2V14.4H32V24H20Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="text-base text-xifoz-text leading-relaxed mb-6">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-xifoz-dim flex items-center justify-center text-sm font-medium text-xifoz-text-secondary">
          {initials}
        </div>
        <div>
          <p className="text-sm font-medium text-xifoz-text">{author}</p>
          <p className="text-xs text-xifoz-text-secondary">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
