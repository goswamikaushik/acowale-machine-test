'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Heart, Mail, Send, ShieldCheck, User } from 'lucide-react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { useAddFeedbackMutation } from '@/redux/feedback-api';
import { StarRating } from '@/components/common';
import { categories, SITE_ROUTES } from '@/constants';
import { cn } from '@/lib/utils';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const feedbackSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.email('Please enter a valid email address'),
  category: z.enum(categories, {
    message: 'Please select a valid category'
  }),
  rating: z
    .number({ message: 'Rating is required' })
    .min(1, 'Rating must be at least 1 star')
    .max(5),
  comment: z.string().max(500, 'Comment cannot exceed 500 characters')
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export default function FeedbackForm() {
  const [addFeedback, { isLoading }] = useAddFeedbackMutation();

  const { handleSubmit, reset, control } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      email: '',
      category: undefined,
      rating: 0,
      comment: ''
    }
  });

  const watchRating = useWatch({ control, name: 'rating' });
  const watchComment = useWatch({ control, name: 'comment' }) || '';

  const onSubmit = async (data: FeedbackFormValues) => {
    try {
      await addFeedback(data).unwrap();
      toast.success('Feedback submitted. Thank you!');
      reset();
    } catch (err) {
      console.error('Failed to submit feedback', err);
      toast.error('Failed to submit feedback');
    }
  };

  return (
    <div className="mx-auto w-auto px-6 pt-10 pb-20 md:w-3xl">
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
        onSubmit={handleSubmit(onSubmit)}
        className="border-border/80 bg-card shadow-soft mt-10 rounded-3xl border p-6 sm:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Customer Name</FieldLabel>
                <InputGroup className="border-input h-13 rounded-2xl">
                  <InputGroupAddon align="inline-start">
                    <User className="text-muted-foreground size-4" />
                  </InputGroupAddon>
                  <InputGroupInput
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="h-auto py-0"
                  />
                </InputGroup>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
                <InputGroup className="border-input h-13 rounded-2xl">
                  <InputGroupAddon align="inline-start">
                    <Mail className="text-muted-foreground size-4" />
                  </InputGroupAddon>
                  <InputGroupInput
                    {...field}
                    id={field.name}
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    className="h-auto py-0"
                  />
                </InputGroup>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="category"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-category">Category</FieldLabel>
                <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="form-category"
                    aria-invalid={fieldState.invalid}
                    className="border-input w-full rounded-2xl px-4 py-6"
                  >
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="bg-popover border-border rounded-2xl border"
                  >
                    {categories.map((c) => (
                      <SelectItem key={c} value={c} className="rounded-xl">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="rating"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Rating</FieldLabel>
                <div
                  className={cn(
                    'border-input bg-background flex h-13 items-center rounded-2xl border px-4 transition-all',
                    fieldState.invalid && 'border-destructive ring-destructive/15 ring-4'
                  )}
                >
                  <StarRating value={field.value} onChange={field.onChange} size={26} />
                </div>
                <FieldDescription>
                  {watchRating ? `${watchRating} out of 5` : 'Select a rating'}
                </FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <div className="mt-6">
          <Controller
            name="comment"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Comment</FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  maxLength={500}
                  placeholder="Share your feedback, suggestions, or comments..."
                  aria-invalid={fieldState.invalid}
                  className="border-input min-h-32 rounded-2xl px-4 py-3.5"
                />
                <div className="mt-1.5 flex items-center justify-between">
                  <div className="text-xs">
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </div>
                  <div className="text-muted-foreground text-xs">{watchComment.length}/500</div>
                </div>
              </Field>
            )}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-gradient-brand shadow-elegant hover:shadow-glow mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? 'Submitting...' : 'Submit Feedback'} <Send className="h-4 w-4" />
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
