import * as React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  value: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
  size?: number;
}

export function StarRating({ value, onChange, readOnly = false, size = 20 }: StarRatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center gap-1.5 py-0.5">
      {stars.map((star) => {
        const isFilled = hoverValue !== null ? star <= hoverValue : star <= value;
        return (
          <button
            key={star}
            type="button"
            disabled={readOnly}
            onClick={() => onChange?.(star)}
            onMouseEnter={() => !readOnly && setHoverValue(star)}
            onMouseLeave={() => !readOnly && setHoverValue(null)}
            className={`rounded-sm transition-all duration-150 outline-none ${
              !readOnly
                ? 'focus-visible:ring-brand-purple/60 cursor-pointer hover:scale-115 focus-visible:ring-2'
                : 'cursor-default'
            }`}
            style={{ width: size, height: size }}
          >
            <Star
              size={size}
              className={`transition-all duration-150 ${
                isFilled ? 'fill-amber text-amber' : 'text-muted-foreground/30 fill-transparent'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
