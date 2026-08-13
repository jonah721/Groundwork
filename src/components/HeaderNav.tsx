import React, { useState, useEffect } from 'react';
import { CATEGORIES } from '../data/categories';
import { PROBLEM_HUBS } from '../data/hubs';
import { BUSINESS_TYPES } from '../data/businesses';
import { TOOLS } from '../data/tools';
import { 
  ChevronDown, 
  ChevronRight, 
  Compass, 
  Search, 
  X, 
  FileText, 
  Layers, 
  AlertCircle, 
  Briefcase, 
  Wrench 
} from 'lucide-react';

interface HeaderNavProps {
  currentRoute: { type: string; slug?: string };
  navigate: (type: string, slug?: string) => void;
}

interface PageHeading {
  id: string;
  text: string;
  level: number;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ currentRoute, navigate }) => {
  const [activeTopDropdown, setActiveTopDropdown] = useState<string | null>(null);
  const [indexDrawerOpen, setIndexDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageHeadings, setPageHeadings] = useState<PageHeading[]>([]);

  // Accordion state for Navigation Index Drawer (ALL collapsed by default)
  const [drawerAccordions, setDrawerAccordions] = useState({
    onThisPage: false,
    categories: false,
    problems: false,
    businesses: false,
    tools: false,
  });

  // Dynamically scan <main> for all titles (h1, h2, h3) on the active page
  useEffect(() => {
    const scanHeadings = () => {
      const mainEl = document.querySelector('main');
      if (!mainEl) return;

      const headings = mainEl.querySelectorAll('h1, h2, h3');
      const items: PageHeading[] = [];

      headings.forEach((heading, idx) => {
        // Skip headings inside nav/header/footer/drawers
        if (heading.closest('header') || heading.closest('footer') || heading.closest('aside')) return;

        let id = heading.id;
        if (!id) {
          id = `page-section-${idx}-${(heading.textContent || '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')}`;
          heading.id = id;
        }

        const text = heading.textContent?.trim();
        if (text && text.length > 0) {
          items.push({
            id,
            text,
            level: heading.tagName === 'H1' ? 1 : heading.tagName === 'H2' ? 2 : 3,
          });
        }
      });

      setPageHeadings(items);
    };

    // Scan after initial DOM mount & route updates
    const timer1 = setTimeout(scanHeadings, 120);
    const timer2 = setTimeout(scanHeadings, 450);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [currentRoute]);

  // ESC key to close drawer or dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTopDropdown = (name: string) => {
    setActiveTopDropdown(prev => (prev === name ? null : name));
  };

  const toggleDrawerAccordion = (key: keyof typeof drawerAccordions) => {
    setDrawerAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const closeAll = () => {
    setActiveTopDropdown(null);
    setIndexDrawerOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeAll();
    }
  };

  // Search filtering logic inside drawer
  const filteredTools = searchQuery.trim()
    ? TOOLS.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.categoryName.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const filteredCategories = searchQuery.trim()
    ? CATEGORIES.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const filteredProblems = searchQuery.trim()
    ? PROBLEM_HUBS.filter(p => p.hubLabel.toLowerCase().includes(searchQuery.toLowerCase()) || p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const filteredBusinesses = searchQuery.trim()
    ? BUSINESS_TYPES.filter(b => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <header className="bg-[var(--paper-raised)] border-b border-[var(--line-strong)] sticky top-0 z-40 shadow-xs">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <button
          onClick={() => {
            navigate('home');
            closeAll();
          }}
          className="flex items-center gap-2.5 shrink-0 text-left group"
        >
          <div className="w-8 h-8 rounded-[6px] bg-[var(--ink)] text-white font-serif-display text-[1.2rem] font-bold flex items-center justify-center group-hover:bg-[var(--moss-dark)] transition-colors">
            G
          </div>
          <div className="hidden sm:block text-left">
            <span className="font-display font-semibold text-[1.25rem] tracking-tight text-[var(--ink)] group-hover:text-[var(--moss-dark)] transition-colors block leading-none">
              Groundwork
            </span>
            <span className="font-mono-data text-[0.65rem] text-[var(--ink-faint)] uppercase tracking-widest mt-0.5 block">
              SOFTWARE GUIDES
            </span>
          </div>
        </button>

        {/* Desktop & Tablet Top Bar Items (Software Categories, Business Problems, Business Types) */}
        <nav className="hidden md:flex items-center gap-6 text-[0.88rem]">
          
          {/* 1. SOFTWARE CATEGORIES */}
          <div className="relative">
            <button
              onClick={() => toggleTopDropdown('categories')}
              className={`flex items-center gap-1.5 py-1.5 font-medium transition-colors ${
                currentRoute.type === 'category' ? 'text-[var(--moss-dark)] font-semibold' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
              }`}
            >
              <span>Software Categories</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {activeTopDropdown === 'categories' && (
              <div
                className="absolute top-full left-0 w-[250px] bg-[var(--paper-raised)] border border-[var(--line-strong)] rounded-[8px] shadow-xl py-2 mt-1 z-50 text-left"
                onMouseLeave={() => setActiveTopDropdown(null)}
              >
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      navigate('category', cat.slug);
                      closeAll();
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-[0.85rem] text-[var(--ink)] hover:bg-[var(--moss-tint)] hover:text-[var(--moss-dark)] font-medium transition-colors flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <span className="font-mono-data text-[0.68rem] text-[var(--ink-faint)]">{cat.tools.length}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2. BUSINESS PROBLEMS */}
          <div className="relative">
            <button
              onClick={() => toggleTopDropdown('hubs')}
              className={`flex items-center gap-1.5 py-1.5 font-medium transition-colors ${
                currentRoute.type === 'hub' ? 'text-[var(--moss-dark)] font-semibold' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
              }`}
            >
              <span>Business Problems</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {activeTopDropdown === 'hubs' && (
              <div
                className="absolute top-full left-0 w-[280px] bg-[var(--paper-raised)] border border-[var(--line-strong)] rounded-[8px] shadow-xl py-2 mt-1 z-50 text-left"
                onMouseLeave={() => setActiveTopDropdown(null)}
              >
                {PROBLEM_HUBS.map(hub => (
                  <button
                    key={hub.id}
                    onClick={() => {
                      navigate('hub', hub.slug);
                      closeAll();
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-[0.84rem] text-[var(--ink)] hover:bg-[var(--moss-tint)] hover:text-[var(--moss-dark)] transition-colors flex items-center gap-2.5"
                  >
                    <span className="font-mono-data text-[0.7rem] text-[var(--ink-faint)]">#{hub.num}</span>
                    <span className="truncate">{hub.hubLabel}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. BUSINESS TYPES */}
          <div className="relative">
            <button
              onClick={() => toggleTopDropdown('businesses')}
              className={`flex items-center gap-1.5 py-1.5 font-medium transition-colors ${
                currentRoute.type === 'business' ? 'text-[var(--moss-dark)] font-semibold' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
              }`}
            >
              <span>By Business Type</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {activeTopDropdown === 'businesses' && (
              <div
                className="absolute top-full left-0 w-[240px] bg-[var(--paper-raised)] border border-[var(--line-strong)] rounded-[8px] shadow-xl py-2 mt-1 z-50 text-left"
                onMouseLeave={() => setActiveTopDropdown(null)}
              >
                {BUSINESS_TYPES.map(biz => (
                  <button
                    key={biz.id}
                    onClick={() => {
                      navigate('business', biz.slug);
                      closeAll();
                    }}
                    className="w-full text-left px-3.5 py-1.5 text-[0.85rem] text-[var(--ink)] hover:bg-[var(--moss-tint)] hover:text-[var(--moss-dark)] font-medium transition-colors"
                  >
                    {biz.name}
                  </button>
                ))}
              </div>
            )}
          </div>

        </nav>

        {/* Navigation Index Trigger Button (Right side on Mobile, Tablet, & Desktop) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIndexDrawerOpen(true)}
            className="flex items-center gap-2 bg-[var(--moss-tint)] text-[var(--moss-dark)] border border-[#CBD8CC] hover:bg-[var(--moss)] hover:text-white px-3 py-1.5 rounded-[8px] font-mono-data text-[0.82rem] font-bold transition-all cursor-pointer shadow-xs"
            aria-label="Open Navigation Index"
            title="Open Site Navigation Index"
          >
            <Compass className="w-4 h-4" />
            <span>NAVIGATION INDEX</span>
            {pageHeadings.length > 0 && (
              <span className="px-1.5 py-0.2 bg-white/40 text-[var(--moss-dark)] rounded-full text-[0.68rem]">
                {pageHeadings.length}
              </span>
            )}
          </button>
        </div>

      </div>

      {/* Slide-Over Navigation Index Drawer (Pulls out from right) */}
      {indexDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity"
            onClick={() => setIndexDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-[340px] max-w-[88vw] bg-[var(--paper-raised)] h-full shadow-2xl flex flex-col z-10 text-left border-l border-[var(--line-strong)]">
            
            {/* Drawer Header */}
            <div className="p-4 border-b border-[var(--line)] flex items-center justify-between bg-[var(--paper)]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[var(--moss-tint)] text-[var(--moss-dark)] flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono-data text-[0.65rem] font-bold text-[var(--moss-dark)] uppercase tracking-wider block">
                    NAVIGATION INDEX
                  </span>
                  <h2 className="font-display font-semibold text-[0.98rem] text-[var(--ink)]">
                    Groundwork Directory
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setIndexDrawerOpen(false)}
                className="p-1.5 text-[var(--ink-soft)] hover:text-[var(--ink)] rounded-lg hover:bg-[var(--line)] transition-colors"
                title="Close Index"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Search Bar */}
            <div className="p-3 border-b border-[var(--line)] bg-[var(--paper-raised)]">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-faint)]" />
                <input
                  type="text"
                  placeholder="Search tools, categories, problems..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-7 py-1.5 text-[0.82rem] bg-[var(--paper)] border border-[var(--line)] rounded-[6px] text-[var(--ink)] placeholder-[var(--ink-faint)] focus:outline-none focus:border-[var(--moss)]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--ink-faint)] hover:text-[var(--ink)]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Drawer Content Area */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              
              {/* Filtered Search View */}
              {searchQuery.trim() ? (
                <div className="space-y-3">
                  <span className="font-mono-data text-[0.7rem] font-bold text-[var(--moss-dark)] uppercase tracking-wider block px-1">
                    SEARCH RESULTS ({filteredTools.length + filteredCategories.length + filteredProblems.length + filteredBusinesses.length})
                  </span>

                  {filteredTools.length > 0 && (
                    <div className="space-y-1">
                      <div className="text-[0.7rem] font-mono-data text-[var(--ink-faint)] uppercase px-1">Tools</div>
                      {filteredTools.map(t => (
                        <button
                          key={t.id}
                          onClick={() => {
                            navigate('review', t.slug);
                            closeAll();
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-[5px] text-[0.82rem] text-[var(--ink)] hover:bg-[var(--moss-tint)] hover:text-[var(--moss-dark)] font-medium flex items-center justify-between"
                        >
                          <span>{t.name}</span>
                          <span className="font-mono-data text-[0.68rem] text-[var(--ink-faint)]">{t.categoryName}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {filteredCategories.length > 0 && (
                    <div className="space-y-1 pt-1 border-t border-[var(--line)]">
                      <div className="text-[0.7rem] font-mono-data text-[var(--ink-faint)] uppercase px-1">Categories</div>
                      {filteredCategories.map(c => (
                        <button
                          key={c.id}
                          onClick={() => {
                            navigate('category', c.slug);
                            closeAll();
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-[5px] text-[0.82rem] text-[var(--ink)] hover:bg-[var(--moss-tint)] hover:text-[var(--moss-dark)] font-medium"
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {filteredProblems.length > 0 && (
                    <div className="space-y-1 pt-1 border-t border-[var(--line)]">
                      <div className="text-[0.7rem] font-mono-data text-[var(--ink-faint)] uppercase px-1">Problems</div>
                      {filteredProblems.map(p => (
                        <button
                          key={p.id}
                          onClick={() => {
                            navigate('hub', p.slug);
                            closeAll();
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-[5px] text-[0.82rem] text-[var(--ink)] hover:bg-[var(--moss-tint)] hover:text-[var(--moss-dark)]"
                        >
                          #{p.num}. {p.hubLabel}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {/* 1. ON THIS PAGE (COLLAPSED BY DEFAULT) */}
                  <div className="border border-[var(--line-strong)] rounded-[8px] overflow-hidden bg-[var(--paper)]">
                    <button
                      onClick={() => toggleDrawerAccordion('onThisPage')}
                      className="w-full p-2.5 text-left font-mono-data text-[0.72rem] font-bold uppercase tracking-wider text-[var(--moss-dark)] flex items-center justify-between bg-[var(--moss-tint)]/40 hover:bg-[var(--moss-tint)] transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        ON THIS PAGE ({pageHeadings.length})
                      </span>
                      {drawerAccordions.onThisPage ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </button>

                    {drawerAccordions.onThisPage && (
                      <div className="p-2 space-y-1 border-t border-[var(--line)]">
                        {pageHeadings.length === 0 ? (
                          <div className="px-2.5 py-1 text-[0.8rem] text-[var(--ink-faint)] font-mono-data">
                            No titles found on this page
                          </div>
                        ) : (
                          pageHeadings.map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => scrollToSection(item.id)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-[5px] text-[0.82rem] hover:text-[var(--moss-dark)] hover:bg-[var(--moss-tint)] flex items-center gap-2 transition-colors ${
                                item.level === 1
                                  ? 'font-bold text-[var(--ink)]'
                                  : item.level === 2
                                  ? 'pl-4 font-semibold text-[var(--ink)]'
                                  : 'pl-6 text-[var(--ink-soft)]'
                              }`}
                            >
                              <span className="text-[var(--moss-dark)] text-xs">→</span>
                              <span className="truncate">{item.text}</span>
                            </button>
                          ))
                        )}
                      </div>
                    )}
                  </div>

                  {/* 2. EVALUATED TOOLS (COLLAPSED BY DEFAULT) */}
                  <div className="border border-[var(--line)] rounded-[8px] overflow-hidden bg-[var(--paper)]">
                    <button
                      onClick={() => toggleDrawerAccordion('tools')}
                      className="w-full p-2.5 text-left font-mono-data text-[0.72rem] font-bold uppercase tracking-wider text-[var(--ink)] flex items-center justify-between hover:bg-[var(--line)]/50 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-[var(--moss-dark)]" />
                        EVALUATED TOOLS ({TOOLS.length})
                      </span>
                      {drawerAccordions.tools ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </button>

                    {drawerAccordions.tools && (
                      <div className="p-1.5 space-y-0.5 border-t border-[var(--line)] max-h-56 overflow-y-auto">
                        {TOOLS.map(t => (
                          <button
                            key={t.id}
                            onClick={() => {
                              navigate('review', t.slug);
                              closeAll();
                            }}
                            className="w-full text-left px-2.5 py-1 rounded-[5px] text-[0.78rem] text-[var(--ink-soft)] hover:bg-[var(--moss-tint)] hover:text-[var(--moss-dark)] flex items-center justify-between"
                          >
                            <span className="truncate">{t.name}</span>
                            <span className="font-mono-data text-[0.65rem] text-[var(--ink-faint)] truncate max-w-[80px]">{t.categoryName}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 3. SOFTWARE CATEGORIES (COLLAPSED BY DEFAULT) */}
                  <div className="border border-[var(--line)] rounded-[8px] overflow-hidden bg-[var(--paper)]">
                    <button
                      onClick={() => toggleDrawerAccordion('categories')}
                      className="w-full p-2.5 text-left font-mono-data text-[0.72rem] font-bold uppercase tracking-wider text-[var(--ink)] flex items-center justify-between hover:bg-[var(--line)]/50 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[var(--moss-dark)]" />
                        SOFTWARE CATEGORIES ({CATEGORIES.length})
                      </span>
                      {drawerAccordions.categories ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </button>

                    {drawerAccordions.categories && (
                      <div className="p-1.5 space-y-0.5 border-t border-[var(--line)]">
                        {CATEGORIES.map(cat => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              navigate('category', cat.slug);
                              closeAll();
                            }}
                            className="w-full text-left px-2.5 py-1.5 rounded-[5px] text-[0.82rem] text-[var(--ink)] hover:bg-[var(--moss-tint)] hover:text-[var(--moss-dark)] font-medium flex items-center justify-between"
                          >
                            <span>{cat.name}</span>
                            <span className="font-mono-data text-[0.68rem] text-[var(--ink-faint)]">{cat.tools.length}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 4. BUSINESS PROBLEMS (COLLAPSED BY DEFAULT) */}
                  <div className="border border-[var(--line)] rounded-[8px] overflow-hidden bg-[var(--paper)]">
                    <button
                      onClick={() => toggleDrawerAccordion('problems')}
                      className="w-full p-2.5 text-left font-mono-data text-[0.72rem] font-bold uppercase tracking-wider text-[var(--ink)] flex items-center justify-between hover:bg-[var(--line)]/50 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-[var(--moss-dark)]" />
                        BUSINESS PROBLEMS ({PROBLEM_HUBS.length})
                      </span>
                      {drawerAccordions.problems ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </button>

                    {drawerAccordions.problems && (
                      <div className="p-1.5 space-y-0.5 border-t border-[var(--line)]">
                        {PROBLEM_HUBS.map(hub => (
                          <button
                            key={hub.id}
                            onClick={() => {
                              navigate('hub', hub.slug);
                              closeAll();
                            }}
                            className="w-full text-left px-2.5 py-1.5 rounded-[5px] text-[0.82rem] text-[var(--ink)] hover:bg-[var(--moss-tint)] hover:text-[var(--moss-dark)] truncate"
                          >
                            #{hub.num}. {hub.hubLabel}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 5. BUSINESS TYPES (COLLAPSED BY DEFAULT) */}
                  <div className="border border-[var(--line)] rounded-[8px] overflow-hidden bg-[var(--paper)]">
                    <button
                      onClick={() => toggleDrawerAccordion('businesses')}
                      className="w-full p-2.5 text-left font-mono-data text-[0.72rem] font-bold uppercase tracking-wider text-[var(--ink)] flex items-center justify-between hover:bg-[var(--line)]/50 transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[var(--moss-dark)]" />
                        BUSINESS TYPES ({BUSINESS_TYPES.length})
                      </span>
                      {drawerAccordions.businesses ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </button>

                    {drawerAccordions.businesses && (
                      <div className="p-1.5 space-y-0.5 border-t border-[var(--line)]">
                        {BUSINESS_TYPES.map(biz => (
                          <button
                            key={biz.id}
                            onClick={() => {
                              navigate('business', biz.slug);
                              closeAll();
                            }}
                            className="w-full text-left px-2.5 py-1.5 rounded-[5px] text-[0.82rem] text-[var(--ink)] hover:bg-[var(--moss-tint)] hover:text-[var(--moss-dark)] font-medium"
                          >
                            {biz.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}

            </div>

            {/* Drawer Footer */}
            <div className="p-3 border-t border-[var(--line)] bg-[var(--paper)] text-[0.7rem] font-mono-data text-[var(--ink-faint)] text-center">
              Press <kbd className="px-1 py-0.5 bg-[var(--line)] rounded text-[var(--ink)] font-sans">ESC</kbd> to exit index
            </div>

          </div>
        </div>
      )}

    </header>
  );
};
