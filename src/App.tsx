import React, { useState, useEffect } from 'react';
import { CATEGORIES } from './data/categories';
import { TOOLS } from './data/tools';
import { PROBLEM_HUBS } from './data/hubs';
import { BUSINESS_TYPES } from './data/businesses';

import { DisclosureBanner } from './components/DisclosureBanner';
import { HeaderNav } from './components/HeaderNav';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ReviewPage } from './pages/ReviewPage';
import { BusinessPage } from './pages/BusinessPage';
import { ProblemHubPage } from './pages/ProblemHubPage';
import { AboutPage } from './pages/AboutPage';
import { Analytics } from '@vercel/analytics/react';

export interface RouteState {
  type: 'home' | 'category' | 'review' | 'business' | 'hub' | 'about';
  slug?: string;
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => {
    // Parse initial location hash if present
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('/category/')) {
      return { type: 'category', slug: hash.replace('/category/', '') };
    } else if (hash.startsWith('/review/')) {
      return { type: 'review', slug: hash.replace('/review/', '') };
    } else if (hash.startsWith('/business/')) {
      return { type: 'business', slug: hash.replace('/business/', '') };
    } else if (hash.startsWith('/hub/')) {
      return { type: 'hub', slug: hash.replace('/hub/', '') };
    } else if (hash.startsWith('/about')) {
      return { type: 'about' };
    }
    return { type: 'home' };
  });

  const navigate = (type: string, slug?: string) => {
    const newRoute = { type: type as RouteState['type'], slug };
    setRoute(newRoute);

    // Update location hash for clean deep-linking
    let hashStr = '';
    if (type === 'category' && slug) hashStr = `/category/${slug}`;
    else if (type === 'review' && slug) hashStr = `/review/${slug}`;
    else if (type === 'business' && slug) hashStr = `/business/${slug}`;
    else if (type === 'hub' && slug) hashStr = `/hub/${slug}`;
    else if (type === 'about') hashStr = `/about`;

    window.location.hash = hashStr;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('/category/')) {
        setRoute({ type: 'category', slug: hash.replace('/category/', '') });
      } else if (hash.startsWith('/review/')) {
        setRoute({ type: 'review', slug: hash.replace('/review/', '') });
      } else if (hash.startsWith('/business/')) {
        setRoute({ type: 'business', slug: hash.replace('/business/', '') });
      } else if (hash.startsWith('/hub/')) {
        setRoute({ type: 'hub', slug: hash.replace('/hub/', '') });
      } else if (hash.startsWith('/about')) {
        setRoute({ type: 'about' });
      } else if (!hash || hash === '/') {
        setRoute({ type: 'home' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render view depending on route state
  const renderMainContent = () => {
    if (route.type === 'category' && route.slug) {
      const category = CATEGORIES.find(c => c.slug === route.slug) || CATEGORIES[0];
      return <CategoryPage category={category} navigate={navigate} />;
    }

    if (route.type === 'review' && route.slug) {
      const tool = TOOLS.find(t => t.slug === route.slug) || TOOLS[0];
      return <ReviewPage tool={tool} navigate={navigate} />;
    }

    if (route.type === 'business' && route.slug) {
      const business = BUSINESS_TYPES.find(b => b.slug === route.slug) || BUSINESS_TYPES[0];
      return <BusinessPage business={business} navigate={navigate} />;
    }

    if (route.type === 'hub' && route.slug) {
      const hub = PROBLEM_HUBS.find(h => h.slug === route.slug) || PROBLEM_HUBS[0];
      return <ProblemHubPage hub={hub} navigate={navigate} />;
    }

    if (route.type === 'about') {
      return <AboutPage navigate={navigate} />;
    }

    return <HomePage navigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)]">
      {/* Site-wide Disclosure Banner */}
      <DisclosureBanner onAboutClick={() => navigate('about')} />

      {/* Primary Navigation */}
      <HeaderNav currentRoute={route} navigate={navigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderMainContent()}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
