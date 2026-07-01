'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Heart, Mail, Send, ShieldCheck, User } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { StarRating } from '@/components/common';
import { SITE_ROUTES } from '@/constants';
import { categories } from '@/lib/mock-data';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !category || !rating) {
      toast.error('Please complete all required fields.');
      return;
    }
    toast.success('Feedback submitted — thank you!');
    setName('');
    setEmail('');
    setCategory('');
    setRating(0);
    setComment('');
  };

  return (
    <div className="mx-auto max-w-3xl px-6 pt-10 pb-20">
      <Link
        href={SITE_ROUTES.HOME}
        className="border-border bg-card text-muted-foreground shadow-soft hover:text-foreground inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="mt-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Submit Feedback</h1>
        <p className="text-muted-foreground mt-3">
          Help us improve by sharing your valuable feedback.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="border-border/80 bg-card shadow-soft mt-10 rounded-3xl border p-6 sm:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Customer Name" required>
            <InputWrap icon={<User className="h-4 w-4" />}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="placeholder:text-muted-foreground/60 w-full bg-transparent text-sm outline-none"
              />
            </InputWrap>
          </Field>

          <Field label="Email Address" required>
            <InputWrap icon={<Mail className="h-4 w-4" />}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="placeholder:text-muted-foreground/60 w-full bg-transparent text-sm outline-none"
              />
            </InputWrap>
          </Field>

          <Field label="Category" required>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="peer border-input bg-background focus:border-brand-purple focus:ring-brand-purple/15 w-full appearance-none rounded-2xl border px-4 py-3.5 text-sm transition-all outline-none focus:ring-4"
              >
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <svg
                className="text-muted-foreground pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M5.5 7.5l4.5 4.5 4.5-4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </Field>

          <Field label="Rating" required>
            <div className="border-input bg-background flex h-13 items-center rounded-2xl border px-4">
              <StarRating value={rating} onChange={setRating} size={26} />
            </div>
            <div className="text-muted-foreground mt-1.5 text-xs">
              {rating ? `${rating} out of 5` : 'Select a rating'}
            </div>
          </Field>
        </div>

        <div className="mt-6">
          <Field label="Comment">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value.slice(0, 500))}
              placeholder="Share your feedback, suggestions, or comments..."
              rows={5}
              className="border-input bg-background placeholder:text-muted-foreground/60 focus:border-brand-purple focus:ring-brand-purple/15 w-full resize-none rounded-2xl border px-4 py-3.5 text-sm transition-all outline-none focus:ring-4"
            />
            <div className="text-muted-foreground mt-1.5 text-right text-xs">
              {comment.length}/500
            </div>
          </Field>
        </div>

        <button
          type="submit"
          className="bg-gradient-brand shadow-elegant hover:shadow-glow mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.99]"
        >
          Submit Feedback <Send className="h-4 w-4" />
        </button>

        <div className="text-muted-foreground mt-4 flex items-center justify-center gap-2 text-xs">
          <ShieldCheck className="h-3.5 w-3.5" />
          Thank you for helping us improve!
        </div>
      </form>

      <div className="text-muted-foreground mt-10 flex items-center justify-center gap-2 text-sm">
        <Heart className="fill-rose text-rose h-4 w-4" />
        Your feedback matters
        <ArrowRight className="h-4 w-4 opacity-0" />
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">
        {label}
        {required && <span className="text-brand-purple"> *</span>}
      </span>
      {children}
    </label>
  );
}

function InputWrap({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="group border-input bg-background focus-within:border-brand-purple focus-within:ring-brand-purple/15 flex items-center gap-2 rounded-2xl border px-4 py-3.5 transition-all focus-within:ring-4">
      <span className="text-muted-foreground group-focus-within:text-brand-purple transition-colors">
        {icon}
      </span>
      {children}
    </div>
  );
}
