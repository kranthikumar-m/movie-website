'use client';

import Link from 'next/link';
import { Search, UserRound } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SearchOverlay } from '@/components/search-overlay';
import { useState } from 'react';

const tabs = ['All', 'News', 'Features', 'Trailers', 'Reviews', 'Interviews', 'Videos', 'Photos'];

export function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 space-y-4 border-b border-border/60 bg-background/70 p-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <button onClick={() => setOpen(true)} className="relative w-full">
          <Input readOnly value="Start typing to search movies" className="cursor-pointer pl-10" />
          <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </button>
        <button className="rounded-full border border-border p-2"><UserRound className="h-5 w-5" /></button>
      </div>
      <div className="flex gap-4 overflow-x-auto text-sm">
        {tabs.map((tab) => (
          <Link key={tab} href={tab === 'All' ? '/' : `/${tab.toLowerCase()}`} className="whitespace-nowrap text-muted-foreground transition hover:text-primary">
            {tab}
          </Link>
        ))}
      </div>
      <SearchOverlay open={open} onOpenChange={setOpen} />
    </header>
  );
}
