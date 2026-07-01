export interface FeedbackItem {
  id: string;
  name: string;
  email: string;
  category: 'Product' | 'Service' | 'Support' | 'Billing' | 'Other';
  rating: number;
  comment: string;
  date: string;
}

export const categories = ['Product', 'Service', 'Support', 'Billing', 'Other'] as const;

export const recentFeedback: FeedbackItem[] = [
  {
    id: 'fb-1',
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    category: 'Product',
    rating: 5,
    comment:
      'The new visual dashboard is clean and loads extremely fast. Love the dark mode theme and general responsiveness!',
    date: '2026-06-30'
  },
  {
    id: 'fb-2',
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    category: 'Billing',
    rating: 2,
    comment:
      'Double charged for my monthly subscription. Raised a support ticket, hopefully this gets resolved soon.',
    date: '2026-06-29'
  },
  {
    id: 'fb-3',
    name: 'Charlie Davis',
    email: 'charlie.d@example.com',
    category: 'Support',
    rating: 4,
    comment:
      'Had an issue setting up our API key, but the support representative helped resolve it within 10 minutes. Excellent support.',
    date: '2026-06-28'
  },
  {
    id: 'fb-4',
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    category: 'Service',
    rating: 5,
    comment:
      'Your customer success manager went above and beyond to onboard our sales team. Truly impressive onboarding experience.',
    date: '2026-06-27'
  },
  {
    id: 'fb-5',
    name: 'Evan Wright',
    email: 'evan.w@example.com',
    category: 'Product',
    rating: 3,
    comment:
      'The web app layout works well on mobile, but would love to see a native app or offline mode support in the near future.',
    date: '2026-06-26'
  },
  {
    id: 'fb-6',
    name: 'Fiona Gallagher',
    email: 'fiona.g@example.com',
    category: 'Other',
    rating: 4,
    comment:
      'Just wanted to say keep up the great work! Recommending your platform to my entire network of startup founders.',
    date: '2026-06-25'
  },
  {
    id: 'fb-7',
    name: 'George Costanza',
    email: 'george.c@example.com',
    category: 'Billing',
    rating: 1,
    comment:
      'Refund process is far too slow and complicated. I want my money back for the unused trial period immediately.',
    date: '2026-06-24'
  },
  {
    id: 'fb-8',
    name: 'Hannah Abbott',
    email: 'hannah.a@example.com',
    category: 'Product',
    rating: 5,
    comment:
      'The new keyboard shortcuts make navigating the interface so efficient. Incredible UX design work here!',
    date: '2026-06-23'
  },
  {
    id: 'fb-9',
    name: 'Ian Malcolm',
    email: 'ian.m@example.com',
    category: 'Service',
    rating: 2,
    comment:
      'System went down for about 15 minutes during our peak hours yesterday. Need better service level guarantees.',
    date: '2026-06-22'
  },
  {
    id: 'fb-10',
    name: 'Julia Roberts',
    email: 'julia.r@example.com',
    category: 'Support',
    rating: 5,
    comment:
      'Support team was incredibly helpful and resolved my query on the first try. Standard setting service.',
    date: '2026-06-21'
  },
  {
    id: 'fb-11',
    name: 'Kevin Bacon',
    email: 'kevin.b@example.com',
    category: 'Billing',
    rating: 4,
    comment:
      'Appreciate the transparent pricing tiers. The automated invoicing module is very convenient for our finance team.',
    date: '2026-06-20'
  },
  {
    id: 'fb-12',
    name: 'Laura Croft',
    email: 'laura.c@example.com',
    category: 'Product',
    rating: 4,
    comment:
      'Adding custom tagging to feedback has helped our product managers organize feature requests much more easily.',
    date: '2026-06-19'
  },
  {
    id: 'fb-13',
    name: 'Michael Scott',
    email: 'michael.s@example.com',
    category: 'Other',
    rating: 5,
    comment:
      'World class product! As regional manager, I recommend this highly. Great design and very simple to understand.',
    date: '2026-06-18'
  }
];

export const categoryBreakdown = [
  { name: 'Product', value: 4, percent: 31 },
  { name: 'Service', value: 2, percent: 15 },
  { name: 'Support', value: 2, percent: 15 },
  { name: 'Billing', value: 3, percent: 23 },
  { name: 'Other', value: 2, percent: 15 }
];

export const ratingDistribution = [
  { name: '1 Star', value: 1 },
  { name: '2 Stars', value: 2 },
  { name: '3 Stars', value: 1 },
  { name: '4 Stars', value: 4 },
  { name: '5 Stars', value: 5 }
];
