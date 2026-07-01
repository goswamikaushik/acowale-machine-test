'use client';

import Link from 'next/link';
import {
  ArrowDown,
  ArrowLeft,
  MessageSquare,
  Search,
  Star,
  ThumbsDown,
  ThumbsUp,
  Users
} from 'lucide-react';
import { useState } from 'react';
import { CategoryBadge, StarRating } from '@/components/common';
import { SITE_ROUTES } from '@/constants';
import { categories, recentFeedback } from '@/lib/mock-data';
import StatCard from './state-card';
import Panel from './panel';

export default function Dashboard() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<string>('All');

  const rows = recentFeedback.filter((r) => {
    const matchesQ =
      !query || (r.name + r.comment + r.email).toLowerCase().includes(query.toLowerCase());
    const matchesCat = filter === 'All' || r.category === filter;
    return matchesQ && matchesCat;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 pt-10 pb-20">
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href={SITE_ROUTES.HOME}
          className="border-border bg-card text-muted-foreground shadow-soft hover:text-foreground inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Analytics Dashboard</h1>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Monitor customer feedback insights and analytics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search feedback…"
              className="border-input bg-card focus:border-brand-purple focus:ring-brand-purple/15 w-44 rounded-full border py-2 pr-3 pl-9 text-sm transition-all outline-none focus:ring-4 sm:w-56"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border-input bg-card focus:border-brand-purple focus:ring-brand-purple/15 rounded-full border px-3 py-2 text-sm outline-none focus:ring-4"
          >
            <option value="All">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={<Users className="text-brand-blue h-5 w-5" />}
          iconBg="bg-brand-blue/10"
          label="Total Feedback"
          value="1,248"
          trend="+12.5%"
          positive
        />
        <StatCard
          icon={<Star className="fill-amber text-amber h-5 w-5" />}
          iconBg="bg-[color:var(--amber)]/10"
          label="Average Rating"
          value="4.2"
          suffix="/ 5"
          trend="+0.3"
          positive
        />
        <StatCard
          icon={<ThumbsUp className="text-emerald h-5 w-5" />}
          iconBg="bg-[color:var(--emerald)]/10"
          label="Positive Feedback"
          value="85%"
          trend="+8.2%"
          positive
        />
        <StatCard
          icon={<ThumbsDown className="text-rose h-5 w-5" />}
          iconBg="bg-[color:var(--rose)]/10"
          label="Negative Feedback"
          value="15%"
          trend="-3.1%"
          positive
        />
      </div>

      <div className="mt-8">
        <Panel
          title="Recent Feedback"
          icon={<MessageSquare className="text-muted-foreground h-4 w-4" />}
        >
          <div className="-mx-2 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-muted-foreground text-left text-xs tracking-wide uppercase">
                  <th className="px-3 py-2 font-medium">Customer</th>
                  <th className="px-3 py-2 font-medium">Category</th>
                  <th className="px-3 py-2 font-medium">Rating</th>
                  <th className="px-3 py-2 font-medium">Comment</th>
                  <th className="px-3 py-2 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.id}
                    className="group border-border/70 hover:bg-accent/40 border-t transition-colors"
                  >
                    <td className="px-3 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-brand shadow-soft flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white">
                          {r.name
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')}
                        </div>
                        <div className="leading-tight">
                          <div className="font-medium">{r.name}</div>
                          <div className="text-muted-foreground text-xs">{r.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3.5">
                      <CategoryBadge category={r.category} />
                    </td>
                    <td className="px-3 py-3.5">
                      <StarRating value={r.rating} readOnly size={14} />
                    </td>
                    <td className="text-muted-foreground max-w-xs truncate px-3 py-3.5">
                      {r.comment}
                    </td>
                    <td className="text-muted-foreground px-3 py-3.5 whitespace-nowrap">
                      {r.date}
                    </td>
                  </tr>
                ))}
                {!rows.length && (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-muted-foreground px-3 py-16 text-center text-sm"
                    >
                      No feedback matches your filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="border-border bg-card text-muted-foreground shadow-soft hover:text-foreground inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors">
              Load More <ArrowDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </Panel>
      </div>
    </div>
  );
}
