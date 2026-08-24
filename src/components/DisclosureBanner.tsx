import React from 'react';
import { Info } from 'lucide-react';

interface DisclosureBannerProps {
  onAboutClick?: () => void;
}

export const DisclosureBanner: React.FC<DisclosureBannerProps> = ({ onAboutClick }) => {
  return (
    <div className="bg-[var(--moss-tint)] border-b border-[#CBD8CC] py-2 px-4 text-center text-[0.82rem] text-[var(--ink-soft)] font-medium">
      <div className="max-w-[1120px] mx-auto flex items-center justify-center gap-1.5 flex-wrap">
        <Info className="w-3.5 h-3.5 text-[var(--moss-dark)] shrink-0" />
        <span>
          Groundwork is reader-supported. We evaluate software independently with zero paid placements or sponsored scores.
        </span>
        <a
          href="/about"
          className="text-[var(--moss-dark)] hover:text-[var(--moss)] underline font-mono-data text-[0.78rem] ml-1"
        >
          How we test & score →
        </a>
      </div>
    </div>
  );
};
