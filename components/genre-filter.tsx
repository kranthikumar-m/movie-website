'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Genre } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

export function GenreFilter({ genres }: { genres: Genre[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const selected = params.get('with_genres');

  return (
    <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
      <button onClick={() => router.push('?')}><Badge className={!selected ? 'border-primary text-primary' : ''}>All</Badge></button>
      {genres.slice(0, 15).map((genre) => (
        <button key={genre.id} onClick={() => router.push(`?with_genres=${genre.id}`)}>
          <Badge className={selected === String(genre.id) ? 'border-primary text-primary' : ''}>{genre.name}</Badge>
        </button>
      ))}
    </div>
  );
}
