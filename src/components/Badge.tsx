import React from 'react';
import { BadgeType } from '../types';

interface BadgeProps {
  badge: BadgeType;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ badge, className = '' }) => {
  const normalized = badge.toUpperCase();

  let styleClasses = 'bg-[var(--moss)] text-white';

  if (normalized === 'OUR PICK') {
    styleClasses = 'bg-[var(--ochre)] text-white';
  } else if (normalized === 'RUNNER-UP') {
    styleClasses = 'border border-[var(--line-strong)] text-[var(--ink-soft)] bg-transparent';
  } else if (normalized === 'BEST FOR BEGINNERS' || normalized === 'BEST VALUE') {
    styleClasses = 'bg-[var(--moss)] text-white';
  } else {
    // Custom superlative
    styleClasses = 'bg-[var(--moss-dark)] text-white';
  }

  return (
    <span
      className={`inline-block font-mono-data text-[0.72rem] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full whitespace-nowrap ${styleClasses} ${className}`}
    >
      {badge}
    </span>
  );
};
