import { ProblemHub } from '../types';

export const PROBLEM_HUBS: ProblemHub[] = [
  {
    id: 'losing-leads',
    slug: 'losing-leads',
    num: '01',
    hubLabel: "I'm losing leads / can't track customers",
    title: "How to Stop Losing Leads and Get Control of Your Sales Pipeline",
    description: "Inquiries land in email inboxes, notes get lost on sticky notes, and follow-ups fall through the cracks. Here is how to organize every prospect into a visual pipeline.",
    categorySlug: 'crm',
    categoryName: 'CRM Software',
    quickWins: [
      'Set up a visual kanban pipeline with clear stages: Inquiry, Contacted, Proposal Sent, Won/Lost.',
      'Configure auto-reminders for any lead that sits untouched for more than 48 hours.',
      'Connect your website contact form to automatically create a lead record instant instant email notification.'
    ],
    recommendedToolSlugs: ['pipedrive', 'hubspot-crm', 'zoho-crm', 'zapier']
  },
  {
    id: 'not-found-online',
    slug: 'not-found-online',
    num: '02',
    hubLabel: "No one finds me online",
    title: "Fixing Low Website Traffic & Building Organic Search Authority",
    description: "You built a website, but search engine traffic is nonexistent. Here is how to build high-performance web pages that rank for high-intent keywords.",
    categorySlug: 'get-found-online',
    categoryName: 'Get Found Online',
    quickWins: [
      'Claim your free Google Business Profile and verify name, address, and website link.',
      'Check your site for technical SEO errors using Ahrefs Webmaster Tools.',
      'Build or upgrade your site on a fast, modern builder like Squarespace or Webflow.'
    ],
    recommendedToolSlugs: ['squarespace', 'webflow', 'ahrefs-webmaster-tools', 'google-business-profile']
  },
  {
    id: 'marketing-overload',
    slug: 'marketing-overload',
    num: '03',
    hubLabel: "I can't keep up with marketing",
    title: "Automating Email & SMS Campaigns So Sales Happen on Autopilot",
    description: "Trying to manually post on social media and email customers every week is exhausting. Set up automated customer journeys that work while you sleep.",
    categorySlug: 'email-marketing',
    categoryName: 'Email & SMS Marketing',
    quickWins: [
      'Build an automated 3-part Welcome Series for all new email subscribers.',
      'Trigger an automated Abandoned Cart SMS or email 1 hour after a visitor leaves checkout.',
      'Segment your list into active buyers versus inactive leads to keep email deliverability high.'
    ],
    recommendedToolSlugs: ['klaviyo', 'mailchimp', 'activecampaign', 'zapier']
  },
  {
    id: 'no-repeat-customers',
    slug: 'no-repeat-customers',
    num: '04',
    hubLabel: "Customers don't come back",
    title: "Increasing Repeat Purchase Rates & Customer Lifetime Value",
    description: "Relying purely on cold buyer acquisition is expensive and unsustainable. Turn one-off buyers into loyal, repeat brand advocates.",
    categorySlug: 'loyalty',
    categoryName: 'Loyalty & Retention',
    quickWins: [
      'Launch a customer rewards program offering points for orders, social shares, and birthdays.',
      'Set up a automated re-order reminder email timed to your product’s average replenishment cycle.',
      'Offer exclusive VIP perks or early product drops to your top 10% highest-spending customers.'
    ],
    recommendedToolSlugs: ['appcues', 'circle', 'honeybook', 'smile-io', 'klaviyo'],
    categoryBranches: [
      {
        label: 'Buying a physical product or re-ordering',
        categoryName: 'Loyalty & Rewards',
        categorySlug: 'loyalty',
        description: 'For e-commerce and local retail - points, rewards, and repeat order perks.'
      },
      {
        label: 'Hiring you for a project or retainer',
        categoryName: 'Client Retention & Relationship',
        categorySlug: 'client-retention',
        description: 'For professional services and freelancers - proposals, contracts, and follow-up.'
      },
      {
        label: 'Using your software or digital product',
        categoryName: 'Onboarding & Community',
        categorySlug: 'onboarding-community',
        description: 'For SaaS and web apps - in-app product walkthroughs and member community hubs.'
      }
    ]
  },
  {
    id: 'no-visibility',
    slug: 'no-visibility',
    num: '05',
    hubLabel: "I don't know if what I'm doing is working",
    title: "Gaining True Visibility Into Which Channels Actually Drive Revenue",
    description: "You are spending time and money across ads, SEO, and social media, but cannot pinpoint which channel produces paying customers.",
    categorySlug: 'analytics',
    categoryName: 'Analytics',
    quickWins: [
      'Install Google Analytics (GA4) to establish a free baseline for traffic acquisition.',
      'Add Microsoft Clarity to watch session recordings and heatmaps on low-converting pages.',
      'Review monthly channel attribution reports to double down on high-performing sources and cut waste.'
    ],
    recommendedToolSlugs: ['google-analytics', 'microsoft-clarity', 'plausible', 'ahrefs']
  },
  {
    id: 'too-much-admin',
    slug: 'too-much-admin',
    num: '06',
    hubLabel: "I'm drowning in admin/ops",
    title: "Eliminating Manual Busywork and Building Streamlined Operations",
    description: "Copy-pasting data between spreadsheets, shipping label forms, and email inboxes steals time from serving clients and growing your business.",
    categorySlug: 'ops',
    categoryName: 'Ops & Productivity',
    quickWins: [
      'Connect Zapier to automatically move lead submissions from forms to your CRM and team chat.',
      'Use ShipStation to batch print shipping labels across all your sales channels in one queue.',
      'Set up Asana project boards for shared visibility on deadlines and task ownership.'
    ],
    recommendedToolSlugs: ['zapier', 'shipstation', 'asana', 'quickbooks-online', 'ordoro'],
    categoryBranches: [
      {
        label: 'General admin & workflow automation',
        categoryName: 'Ops & Productivity',
        categorySlug: 'ops',
        description: 'For connecting your tools, task management, and automating repetitive data entry.'
      },
      {
        label: 'Physical order shipping & inventory',
        categoryName: 'Inventory & Shipping',
        categorySlug: 'inventory-shipping',
        description: 'For e-commerce stores batching shipping labels, syncing stock across channels, or 3PL fulfillment.'
      }
    ]
  },
  {
    id: 'cant-manage-bookings',
    slug: 'cant-manage-bookings',
    num: '07',
    hubLabel: "I can't manage bookings or appointments",
    title: "Eliminating Phone Tag and Streamlining Appointment & Reservation Scheduling",
    description: "Going back and forth over email or phone trying to find a meeting time or table wastes hours every week. Put your availability on autopilot with direct online scheduling.",
    categorySlug: 'scheduling-booking',
    categoryName: 'Scheduling & Booking',
    quickWins: [
      'Set up a central calendar integration (Google, Outlook, or POS) to auto-block busy times.',
      'Create dedicated booking links or widgets for specific session lengths or dining time slots.',
      'Enable automated SMS or email reminders 24 hours before scheduled appointments or reservations to cut no-shows.'
    ],
    recommendedToolSlugs: ['calendly', 'opentable', 'toast-tables', 'acuity-scheduling', 'square-appointments', 'resy'],
    categoryBranches: [
      {
        label: 'Client calls & professional appointments',
        categoryName: 'Scheduling & Booking',
        categorySlug: 'scheduling-booking',
        description: 'For consultants, freelancers, and service providers booking 1:1 time.'
      },
      {
        label: 'Restaurant tables & dining reservations',
        categoryName: 'Reservations & Table Management',
        categorySlug: 'reservation-management',
        description: 'For restaurants, cafes, and hospitality venues managing tables, walk-ins, and floor pacing.'
      }
    ]
  }
];
