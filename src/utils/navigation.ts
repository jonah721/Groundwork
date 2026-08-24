export const getHref = (type: string, slug?: string): string => {
  if (type === 'category' && slug) return `/category/${slug}`;
  if (type === 'review' && slug) return `/review/${slug}`;
  if (type === 'business' && slug) return `/business/${slug}`;
  if (type === 'hub' && slug) return `/hub/${slug}`;
  if (type === 'about') return `/about`;
  return `/`;
};
