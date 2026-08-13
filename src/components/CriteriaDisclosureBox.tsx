import React from 'react';
import { CategoryCriterion } from '../types';

interface CriteriaDisclosureBoxProps {
  criteria: CategoryCriterion[];
  className?: string;
}

export const CriteriaDisclosureBox: React.FC<CriteriaDisclosureBoxProps> = ({
  criteria,
  className = ''
}) => {
  return (
    <div className={`p-5 md:p-6 bg-[var(--moss-tint)] rounded-[10px] border border-[#CBD8CC] ${className}`}>
      <div className="font-mono-data text-[0.75rem] font-semibold tracking-wider uppercase text-[var(--moss-dark)] mb-3">
        HOW WE SCORE THIS CATEGORY
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-[0.92rem]">
        {criteria.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2 text-[var(--ink)]">
            <span className="text-[var(--moss)] font-bold text-[1.1rem] leading-none select-none">•</span>
            <div>
              <strong className="font-semibold text-[var(--ink)]">{item.name}</strong>
              <span className="text-[var(--ink-soft)]"> - {item.definition}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
