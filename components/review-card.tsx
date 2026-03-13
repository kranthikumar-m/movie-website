import { Review } from '@/lib/types';
import { Card } from '@/components/ui/card';

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="p-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <strong>{review.author}</strong>
        <span className="text-primary">{review.author_details.rating ?? '—'}/10</span>
      </div>
      <p className="line-clamp-4 text-sm text-muted-foreground">{review.content}</p>
    </Card>
  );
}
