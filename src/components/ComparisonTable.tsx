import React from 'react';
import { SoftwareTool } from '../types';
import { ScorecardBar } from './ScorecardBar';
import { Badge } from './Badge';
import { ArrowRight } from 'lucide-react';
import { getHref } from '../utils/navigation';

interface ComparisonTableProps {
  tools: SoftwareTool[];
  onSelectTool?: (toolSlug: string) => void;
  className?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  tools,
  onSelectTool,
  className = ''
}) => {
  return (
    <div className={`w-full overflow-x-auto rounded-[10px] border border-[var(--line)] bg-[var(--paper-raised)] shadow-xs ${className}`}>
      <table className="w-full text-left border-collapse min-w-[840px]">
        <thead>
          <tr className="bg-[var(--paper)] border-b border-[var(--line)] text-[0.78rem] font-mono-data uppercase tracking-wider text-[var(--ink-soft)] sticky top-0 z-10">
            <th className="py-3.5 px-4 font-semibold w-[220px]">Tool Name & Score</th>
            <th className="py-3.5 px-4 font-semibold w-[180px]">Best For</th>
            <th className="py-3.5 px-4 font-semibold w-[130px]">Starting Price</th>
            <th className="py-3.5 px-4 font-semibold w-[110px]">Setup Time</th>
            <th className="py-3.5 px-4 font-semibold w-[200px]">Standout Feature</th>
            <th className="py-3.5 px-4 font-semibold w-[160px] text-right">Our Verdict</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--line)] text-[0.92rem]">
          {tools.map((tool) => {
            const isOurPick = tool.badge?.toUpperCase() === 'OUR PICK';
            const rowBgClass = isOurPick ? 'bg-[var(--ochre-tint)]/60' : 'hover:bg-[var(--paper)]/50 transition-colors';

            return (
              <tr key={tool.id} className={rowBgClass}>
                {/* Tool Name & Score */}
                <td className="py-4 px-4 align-top">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <a
                        href={getHref('review', tool.slug)}
                        onClick={(e) => {
                          if (onSelectTool) {
                            e.preventDefault();
                            onSelectTool(tool.slug);
                          }
                        }}
                        className="font-display font-semibold text-[1.1rem] text-[var(--ink)] hover:text-[var(--moss-dark)] text-left underline decoration-dotted underline-offset-4 decoration-[var(--line-strong)] hover:decoration-[var(--moss-dark)]"
                      >
                        {tool.name}
                      </a>
                      {tool.badge && <Badge badge={tool.badge} />}
                    </div>
                    <ScorecardBar scorecard={tool.scorecard} />
                  </div>
                </td>

                {/* Best For */}
                <td className="py-4 px-4 align-top text-[var(--ink-soft)] font-medium">
                  {tool.bestFor}
                </td>

                {/* Starting Price */}
                <td className="py-4 px-4 align-top">
                  <span className="font-mono-data text-[0.88rem] font-semibold text-[var(--ink)]">
                    {tool.startingPrice}
                  </span>
                </td>

                {/* Setup Time */}
                <td className="py-4 px-4 align-top font-mono-data text-[0.85rem] text-[var(--ink-soft)]">
                  {tool.setupTime}
                </td>

                {/* Standout Feature */}
                <td className="py-4 px-4 align-top text-[var(--ink-soft)] text-[0.88rem]">
                  {tool.standoutFeature}
                </td>

                {/* Our Verdict & Link */}
                <td className="py-4 px-4 align-top text-right">
                  <a
                    href={getHref('review', tool.slug)}
                    onClick={(e) => {
                      if (onSelectTool) {
                        e.preventDefault();
                        onSelectTool(tool.slug);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 font-mono-data text-[0.8rem] font-semibold text-[var(--moss-dark)] hover:text-[var(--moss)] bg-white/80 hover:bg-white border border-[var(--line-strong)] hover:border-[var(--moss)] px-3 py-1.5 rounded-[6px] transition-all"
                  >
                    Read Review
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
