'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

interface SearchMovie { id: number; title: string; release_date: string }

export function SearchOverlay({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchMovie[]>([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) return setResults([]);
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = (await res.json()) as { results: SearchMovie[] };
      setResults(data.results || []);
    }, 350);
    return () => clearTimeout(timer);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 p-4" onClick={() => onOpenChange(false)}>
      <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-4" onClick={(e) => e.stopPropagation()}>
        <Input autoFocus placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <div className="mt-3 max-h-80 overflow-auto">
          {results.length === 0 ? <p className="text-sm text-muted-foreground">No results yet.</p> : null}
          {results.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`} onClick={() => onOpenChange(false)} className="block rounded-lg px-3 py-2 hover:bg-muted">
              <p>{movie.title}</p>
              <p className="text-xs text-muted-foreground">{movie.release_date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
