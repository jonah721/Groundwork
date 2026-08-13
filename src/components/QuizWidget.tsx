import React, { useState } from 'react';
import { QUIZ_MATRIX } from '../data/quiz';
import { TOOLS } from '../data/tools';
import { ScorecardBar } from './ScorecardBar';
import { Badge } from './Badge';
import { ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';

interface QuizWidgetProps {
  onSelectTool: (toolSlug: string) => void;
  onSelectCategory?: (categorySlug: string) => void;
  className?: string;
}

const BUSINESS_TYPE_OPTIONS = [
  { id: 'local-service', label: 'Local service' },
  { id: 'restaurant', label: 'Restaurant / hospitality' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'b2b-saas', label: 'B2B SaaS' },
  { id: 'professional-services', label: 'Professional services' },
  { id: 'freelancer', label: 'Freelancer / solo' }
];

const BOTTLENECK_OPTIONS = [
  { id: 'losing-leads', label: 'Losing leads' },
  { id: 'not-found-online', label: 'No one finds me online' },
  { id: 'marketing-overload', label: 'Marketing overload' },
  { id: 'no-repeat-customers', label: "Customers don't come back" },
  { id: 'no-visibility', label: "Don't know what's working" },
  { id: 'too-much-admin', label: 'Drowning in admin' },
  { id: 'cant-manage-bookings', label: "Can't manage bookings" }
];

export const QuizWidget: React.FC<QuizWidgetProps> = ({
  onSelectTool,
  onSelectCategory,
  className = ''
}) => {
  const [selectedType, setSelectedType] = useState<string>('local-service');
  const [selectedBottleneck, setSelectedBottleneck] = useState<string>('losing-leads');

  const match = QUIZ_MATRIX.find(
    q => q.businessType === selectedType && q.bottleneck === selectedBottleneck
  ) || QUIZ_MATRIX[0];

  const recommendedTool = TOOLS.find(t => t.slug === match.recommendedToolSlug) || TOOLS[0];

  const selectedTypeLabel = BUSINESS_TYPE_OPTIONS.find(b => b.id === selectedType)?.label || selectedType;
  const selectedBottleneckLabel = BOTTLENECK_OPTIONS.find(b => b.id === selectedBottleneck)?.label || selectedBottleneck;

  return (
    <div className={`p-6 md:p-7 bg-[var(--paper-raised)] border border-[var(--line-strong)] rounded-[10px] shadow-xs ${className}`}>
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--line)]">
        <div>
          <span className="font-mono-data text-[0.72rem] font-bold text-[var(--moss-dark)] uppercase tracking-wider block">
            INTERACTIVE FINDER
          </span>
          <h3 className="font-display font-semibold text-[1.25rem] text-[var(--ink)]">
            Find Your Recommended Tool
          </h3>
        </div>
        <button
          onClick={() => {
            setSelectedType('local-service');
            setSelectedBottleneck('losing-leads');
          }}
          className="text-[0.78rem] font-mono-data text-[var(--ink-faint)] hover:text-[var(--ink)] flex items-center gap-1 transition-colors"
          title="Reset selections"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      <div className="space-y-5 mb-6">
        {/* Step 1: Business Type */}
        <div>
          <label className="block text-[0.82rem] font-mono-data uppercase tracking-wide text-[var(--ink-soft)] font-semibold mb-2">
            1. What type of business do you run?
          </label>
          <div className="flex flex-wrap gap-2">
            {BUSINESS_TYPE_OPTIONS.map(item => (
              <button
                key={item.id}
                onClick={() => setSelectedType(item.id)}
                className={`text-[0.85rem] px-3 py-1.5 rounded-[6px] font-medium transition-all ${
                  selectedType === item.id
                    ? 'bg-[var(--moss)] text-white font-semibold shadow-2xs'
                    : 'bg-[var(--paper)] text-[var(--ink-soft)] hover:bg-[var(--line)] border border-[var(--line)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Bottleneck */}
        <div>
          <label className="block text-[0.82rem] font-mono-data uppercase tracking-wide text-[var(--ink-soft)] font-semibold mb-2">
            2. What is your primary bottleneck right now?
          </label>
          <div className="flex flex-wrap gap-2">
            {BOTTLENECK_OPTIONS.map(item => (
              <button
                key={item.id}
                onClick={() => setSelectedBottleneck(item.id)}
                className={`text-[0.85rem] px-3 py-1.5 rounded-[6px] font-medium transition-all ${
                  selectedBottleneck === item.id
                    ? 'bg-[var(--moss-dark)] text-white font-semibold shadow-2xs'
                    : 'bg-[var(--paper)] text-[var(--ink-soft)] hover:bg-[var(--line)] border border-[var(--line)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendation Result Box */}
      <div className="p-5 bg-[var(--ochre-tint)]/70 rounded-[8px] border border-[#E6D4B5] transition-all space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--ochre)]" />
            <span className="font-mono-data text-[0.75rem] font-bold uppercase tracking-wider text-[var(--ink)]">
              RECOMMENDED MATCH
            </span>
          </div>
          {recommendedTool.badge && <Badge badge={recommendedTool.badge} />}
        </div>

        {/* Result Copy Pattern */}
        {match.isMismatch ? (
          <p className="text-[0.92rem] text-[var(--ink)] leading-relaxed">
            {match.reasoning}
          </p>
        ) : (
          <p className="text-[0.92rem] text-[var(--ink)] leading-relaxed">
            For a <strong className="font-semibold text-[var(--moss-dark)]">{selectedTypeLabel.toLowerCase()}</strong> business dealing with <strong className="font-semibold text-[var(--moss-dark)]">{selectedBottleneckLabel.toLowerCase()}</strong>, start here: <strong className="font-semibold text-[var(--ink)]">{recommendedTool.name}</strong> - {match.reasoning}
          </p>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-[#DEC9A6] flex-wrap gap-3">
          <ScorecardBar scorecard={recommendedTool.scorecard} />
          <div className="flex items-center gap-4">
            <button
              onClick={() => onSelectTool(recommendedTool.slug)}
              className="text-[0.82rem] font-mono-data font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)] underline underline-offset-4"
            >
              Review detail
            </button>
            <button
              onClick={() => {
                if (onSelectCategory) {
                  onSelectCategory(match.categorySlug);
                } else {
                  onSelectTool(recommendedTool.slug);
                }
              }}
              className="inline-flex items-center gap-1.5 text-[0.82rem] font-mono-data font-semibold text-[var(--moss-dark)] hover:text-[var(--moss)] underline underline-offset-4"
            >
              See full comparison
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

