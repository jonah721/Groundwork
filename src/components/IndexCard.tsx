import React from 'react';
import { ProblemHub } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface IndexCardProps {
  hub: ProblemHub;
  onClick: (slug: string) => void;
  className?: string;
}

export const IndexCard: React.FC<IndexCardProps> = ({ hub, onClick, className = '' }) => {
  return (
    <div
      onClick={() => onClick(hub.slug)}
      className={`group flex items-center justify-between p-4 bg-[var(--paper-raised)] hover:bg-[var(--moss-tint)]/60 border border-[var(--line)] hover:border-[var(--moss)] rounded-[10px] cursor-pointer transition-all duration-200 ${className}`}
    >
      <div className="flex items-center gap-3.5">
        <span className="font-mono-data text-[0.82rem] font-semibold text-[var(--ink-faint)] group-hover:text-[var(--moss-dark)] transition-colors">
          {hub.num}
        </span>
        <span className="font-semibold text-[0.98rem] text-[var(--ink)] group-hover:text-[var(--moss-dark)] transition-colors">
          {hub.hubLabel}
        </span>
      </div>

      <div className="w-7 h-7 rounded-full bg-[var(--paper)] group-hover:bg-[var(--moss)] flex items-center justify-center text-[var(--ink-soft)] group-hover:text-white transition-all">
        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </div>
  );
};
