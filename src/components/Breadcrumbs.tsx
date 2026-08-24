import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { getHref } from '../utils/navigation';

interface BreadcrumbItem {
  label: string;
  type?: string;
  slug?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  navigate: (type: string, slug?: string) => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, navigate, className = '' }) => {
  return (
    <nav className={`flex items-center gap-1.5 font-mono-data text-[0.78rem] text-[var(--ink-faint)] ${className}`}>
      <a
        href={getHref('home')}
        onClick={(e) => { e.preventDefault(); navigate('home'); }}
        className="hover:text-[var(--ink)] flex items-center gap-1 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        Home
      </a>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-[var(--line-strong)]" />
            {isLast || !item.type ? (
              <span className="text-[var(--ink)] font-semibold truncate max-w-[200px] md:max-w-[300px]">
                {item.label}
              </span>
            ) : (
              <a
                href={getHref(item.type!, item.slug)}
                onClick={(e) => { e.preventDefault(); navigate(item.type!, item.slug); }}
                className="hover:text-[var(--moss-dark)] transition-colors truncate max-w-[180px]"
              >
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
