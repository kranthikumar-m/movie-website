'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Movie, Genre } from '@/lib/types';
import { imageUrl } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function HeroCarousel({ movies, genres }: { movies: Movie[]; genres: Genre[] }) {
  const [index, setIndex] = useState(0);
  const slide = movies[index] ?? null;

  const genreMap = useMemo(() => new Map(genres.map((g) => [g.id, g.name])), [genres]);
  if (!slide) return null;

  const movieGenres = (slide.genre_ids || []).slice(0, 3).map((id) => genreMap.get(id)).filter(Boolean);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/70">
      <Image src={imageUrl(slide.backdrop_path, 'original')} alt={slide.title} width={1920} height={1080} className="h-[60vh] w-full object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/30" />
      <motion.div key={slide.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute inset-0 z-10 flex items-end p-6 md:p-10">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl font-bold md:text-5xl">{slide.title}</h1>
          <p className="line-clamp-3 text-sm text-slate-200 md:text-base">{slide.overview}</p>
          <div className="flex flex-wrap gap-2">{movieGenres.map((name) => <Badge key={name}>{name}</Badge>)}</div>
          <div className="flex gap-3">
            <Link href={`/movie/${slide.id}`}><Button variant="outline">Watch Trailer</Button></Link>
            <Link href={`/movie/${slide.id}`}><Button>View Details</Button></Link>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        {movies.slice(0, 5).map((movie, i) => (
          <button key={movie.id} onClick={() => setIndex(i)} className={`h-2 w-8 rounded-full ${index === i ? 'bg-primary' : 'bg-white/40'}`} />
        ))}
      </div>
    </section>
  );
}
