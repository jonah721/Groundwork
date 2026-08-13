import React from 'react';
import { BusinessType } from '../types';
import { ArrowRight } from 'lucide-react';

interface BusinessTileProps {
  business: BusinessType;
  onClick: (slug: string) => void;
  className?: string;
}

export const BusinessTile: React.FC<BusinessTileProps> = ({
  business,
  onClick,
  className = ''
}) => {
  return (
    <div
      onClick={() => onClick(business.slug)}
      className={`group p-5 bg-[var(--paper-raised)] hover:bg-white border border-[var(--line)] hover:border-[var(--moss)] rounded-[10px] cursor-pointer transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div>
        <h3 className="font-display font-semibold text-[1.15rem] text-[var(--ink)] group-hover:text-[var(--moss-dark)] mb-2 transition-colors">
          {business.name}
        </h3>
        <p className="text-[0.9rem] text-[var(--ink-soft)] leading-relaxed">
          {business.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--line)]/60 flex items-center justify-between text-[0.82rem] font-mono-data text-[var(--moss-dark)] font-semibold">
        <span>View Tool Recommendations</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
