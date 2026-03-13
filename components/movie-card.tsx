import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/lib/types';
import { imageUrl } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { RatingRing } from '@/components/rating-ring';

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <Card className="overflow-hidden transition hover:-translate-y-1 hover:border-primary/60">
        <Image src={imageUrl(movie.poster_path)} alt={movie.title} width={500} height={750} className="aspect-[2/3] w-full object-cover" />
        <div className="space-y-2 p-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-1 text-sm font-semibold">{movie.title}</h3>
            <RatingRing score={movie.vote_average || 0} />
          </div>
          <p className="text-xs text-muted-foreground">{movie.release_date || 'TBA'}</p>
        </div>
      </Card>
    </Link>
  );
}
