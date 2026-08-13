import React from 'react';
import { Check, X } from 'lucide-react';

interface ProsConsBlockProps {
  pros: string[];
  cons: string[];
  className?: string;
}

export const ProsConsBlock: React.FC<ProsConsBlockProps> = ({
  pros,
  cons,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {/* Pros Column */}
      <div className="p-5 bg-[var(--moss-tint)]/50 rounded-[10px] border border-[#CBD8CC]">
        <h4 className="font-mono-data text-[0.8rem] font-bold tracking-wider uppercase text-[var(--moss-dark)] mb-3 flex items-center gap-1.5">
          <Check className="w-4 h-4 text-[var(--moss)] stroke-[3]" />
          PROS & STRENGTHS
        </h4>
        <ul className="space-y-2 text-[0.92rem]">
          {pros.map((pro, idx) => (
            <li key={idx} className="flex items-start gap-2 text-[var(--ink)]">
              <span className="text-[var(--moss)] font-bold shrink-0 mt-0.5">•</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons Column */}
      <div className="p-5 bg-[#FDF2F0] rounded-[10px] border border-[#F2C9C2]">
        <h4 className="font-mono-data text-[0.8rem] font-bold tracking-wider uppercase text-[var(--danger)] mb-3 flex items-center gap-1.5">
          <X className="w-4 h-4 text-[var(--danger)] stroke-[3]" />
          CONS & LIMITATIONS
        </h4>
        <ul className="space-y-2 text-[0.92rem]">
          {cons.map((con, idx) => (
            <li key={idx} className="flex items-start gap-2 text-[var(--ink)]">
              <span className="text-[var(--danger)] font-bold shrink-0 mt-0.5">•</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
