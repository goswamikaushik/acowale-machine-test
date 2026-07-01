export interface FeedbackItem {
  id: string;
  customerName: string;
  customerEmail: string;
  category: 'Product' | 'Service' | 'Support' | 'Billing' | 'Other';
  rating: number;
  comment: string;
  createdAt: string;
}

export const mockFeedbackData: FeedbackItem[] = [
  {
    id: 'fb-1',
    customerName: 'Alice Johnson',
    customerEmail: 'alice.j@example.com',
    category: 'Product',
    rating: 5,
    comment:
      'The new visual dashboard is clean and loads extremely fast. Love the dark mode theme and general responsiveness!',
    createdAt: '2026-06-30'
  },
  {
    id: 'fb-2',
    customerName: 'Bob Smith',
    customerEmail: 'bob.smith@example.com',
    category: 'Billing',
    rating: 2,
    comment:
      'Double charged for my monthly subscription. Raised a support ticket, hopefully this gets resolved soon.',
    createdAt: '2026-06-29'
  },
  {
    id: 'fb-3',
    customerName: 'Charlie Davis',
    customerEmail: 'charlie.d@example.com',
    category: 'Support',
    rating: 4,
    comment:
      'Had an issue setting up our API key, but the support representative helped resolve it within 10 minutes. Excellent support.',
    createdAt: '2026-06-28'
  },
  {
    id: 'fb-4',
    customerName: 'Diana Prince',
    customerEmail: 'diana.prince@example.com',
    category: 'Service',
    rating: 5,
    comment:
      'Your customer success manager went above and beyond to onboard our sales team. Truly impressive onboarding experience.',
    createdAt: '2026-06-27'
  },
  {
    id: 'fb-5',
    customerName: 'Evan Wright',
    customerEmail: 'evan.w@example.com',
    category: 'Product',
    rating: 3,
    comment:
      'The web app layout works well on mobile, but would love to see a native app or offline mode support in the near future.',
    createdAt: '2026-06-26'
  },
  {
    id: 'fb-6',
    customerName: 'Fiona Gallagher',
    customerEmail: 'fiona.g@example.com',
    category: 'Other',
    rating: 4,
    comment:
      'Just wanted to say keep up the great work! Recommending your platform to my entire network of startup founders.',
    createdAt: '2026-06-25'
  },
  {
    id: 'fb-7',
    customerName: 'George Costanza',
    customerEmail: 'george.c@example.com',
    category: 'Billing',
    rating: 1,
    comment:
      'Refund process is far too slow and complicated. I want my money back for the unused trial period immediately.',
    createdAt: '2026-06-24'
  },
  {
    id: 'fb-8',
    customerName: 'Hannah Abbott',
    customerEmail: 'hannah.a@example.com',
    category: 'Product',
    rating: 5,
    comment:
      'The new keyboard shortcuts make navigating the interface so efficient. Incredible UX design work here!',
    createdAt: '2026-06-23'
  },
  {
    id: 'fb-9',
    customerName: 'Ian Malcolm',
    customerEmail: 'ian.m@example.com',
    category: 'Service',
    rating: 2,
    comment:
      'System went down for about 15 minutes during our peak hours yesterday. Need better service level guarantees.',
    createdAt: '2026-06-22'
  },
  {
    id: 'fb-10',
    customerName: 'Julia Roberts',
    customerEmail: 'julia.r@example.com',
    category: 'Support',
    rating: 5,
    comment:
      'Support team was incredibly helpful and resolved my query on the first try. Standard setting service.',
    createdAt: '2026-06-21'
  },
  {
    id: 'fb-11',
    customerName: 'Kevin Bacon',
    customerEmail: 'kevin.b@example.com',
    category: 'Billing',
    rating: 4,
    comment:
      'Appreciate the transparent pricing tiers. The automated invoicing module is very convenient for our finance team.',
    createdAt: '2026-06-20'
  },
  {
    id: 'fb-12',
    customerName: 'Laura Croft',
    customerEmail: 'laura.c@example.com',
    category: 'Product',
    rating: 4,
    comment:
      'Adding custom tagging to feedback has helped our product managers organize feature requests much more easily.',
    createdAt: '2026-06-19'
  },
  {
    id: 'fb-13',
    customerName: 'Michael Scott',
    customerEmail: 'michael.s@example.com',
    category: 'Other',
    rating: 5,
    comment:
      'World class product! As regional manager, I recommend this highly. Great design and very simple to understand.',
    createdAt: '2026-06-18'
  }
];
