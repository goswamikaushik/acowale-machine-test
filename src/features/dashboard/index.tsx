'use client';

import Link from 'next/link';
import { ArrowLeft, MessageSquare, Search, Users } from 'lucide-react';
import { useState } from 'react';
import { CategoryBadge, StarRating } from '@/components/common';
import { ChartPieDonut } from './category-distribution';
import { categories, SITE_ROUTES } from '@/constants';
import { useGetFeedbacksQuery } from '@/redux/feedback-api';
import StatCard from './state-card';
import Panel from './panel';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function Dashboard() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<string>('All');
  const { data, isLoading } = useGetFeedbacksQuery();

  if (isLoading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="border-brand-purple h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
      </div>
    );
  }

  if (!data) return null;

  // Filter and format feedbacks for the table
  const rows = data
    .map((r) => ({
      id: r.id,
      name: r.name,
      email: r.email,
      rating: r.rating,
      category: r.category || 'Other',
      comment: r.comment || 'No comment',
      date: new Date(r.created_at).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    }))
    .filter((r) => {
      const matchesQ =
        !query || (r.name + r.comment + r.email).toLowerCase().includes(query.toLowerCase());
      const matchesCat = filter === 'All' || r.category === filter;
      return matchesQ && matchesCat;
    });

  return (
    <div className="mx-auto max-w-7xl px-6 pt-10 pb-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <Link
            href={SITE_ROUTES.HOME}
            className="border-border bg-card text-muted-foreground shadow-soft hover:text-foreground inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="text-left">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Analytics Dashboard</h1>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Monitor customer feedback insights and analytics
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-auto">
          <StatCard
            icon={<Users className="text-brand-blue h-5 w-5" />}
            iconBg="bg-brand-blue/10"
            label="Total Feedback"
            value={data.length.toLocaleString()}
          />
        </div>
        <div className="flex w-full flex-col gap-2 min-[480px]:flex-row min-[480px]:items-center md:w-auto">
          <div className="relative w-full min-[480px]:w-56">
            <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search feedback…"
              className="border-input bg-card focus:border-brand-purple focus:ring-brand-purple/15 w-full rounded-full border py-2 pr-3 pl-9 text-sm transition-all outline-none focus:ring-4"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border-input bg-card focus:border-brand-purple focus:ring-brand-purple/15 w-full rounded-full border px-3 py-2 text-sm outline-none focus:ring-4 min-[480px]:w-auto"
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

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3">
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
                      <td className="text-muted-foreground max-w-[150px] px-3 py-3.5">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="block max-w-full cursor-help truncate text-left">
                              {r.comment}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs break-words">
                            {r.comment}
                          </TooltipContent>
                        </Tooltip>
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
          </Panel>
        </div>
        <div className="lg:col-span-1">
          <ChartPieDonut data={data} />
        </div>
      </div>
    </div>
  );
}
