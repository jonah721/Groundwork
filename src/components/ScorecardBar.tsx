import React from 'react';
import { ScorecardSegment } from '../types';

interface ScorecardBarProps {
  scorecard: ScorecardSegment[];
  showLabels?: boolean;
  className?: string;
}

export const ScorecardBar: React.FC<ScorecardBarProps> = ({
  scorecard,
  showLabels = false,
  className = ''
}) => {
  const passedCount = scorecard.filter(s => s.passed).length;
  const totalCount = scorecard.length;

  return (
    <div className={`inline-flex flex-col gap-1.5 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-[3px]">
          {scorecard.map((segment, idx) => {
            let bgClass = 'bg-[var(--line)]';
            if (segment.passed) {
              bgClass = segment.isStandout ? 'bg-[var(--ochre)]' : 'bg-[var(--moss)]';
            }
            return (
              <div
                key={idx}
                title={`${segment.label}: ${segment.passed ? 'Meets bar' : 'Needs improvement'} ${segment.detail ? `(${segment.detail})` : ''}`}
                className={`w-[14px] h-[8px] rounded-[2px] transition-colors ${bgClass}`}
              />
            );
          })}
        </div>
        <span className="font-mono-data text-[0.78rem] text-[var(--ink-soft)] font-medium">
          {passedCount}/{totalCount}
        </span>
      </div>

      {showLabels && (
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-1 text-[0.78rem]">
          {scorecard.map((segment, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${segment.passed ? (segment.isStandout ? 'bg-[var(--ochre)]' : 'bg-[var(--moss)]') : 'bg-[var(--line-strong)]'}`} />
              <span className={`font-mono-data ${segment.passed ? 'text-[var(--ink)] font-medium' : 'text-[var(--ink-faint)]'}`}>
                {segment.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
