import Link from 'next/link';
import { Clapperboard, Film, Home, ImageIcon, Mic2, Star, Users, Video, Newspaper } from 'lucide-react';

const nav = [
  { href: '/', label: 'Feed', icon: Home },
  { href: '/movies/trending', label: 'Movies', icon: Film },
  { href: '/videos', label: 'Trailers', icon: Clapperboard },
  { href: '/reviews', label: 'Reviews', icon: Star },
  { href: '/movies/popular', label: 'Cast & Crew', icon: Users },
  { href: '/photos', label: 'Photos', icon: ImageIcon },
  { href: '/videos', label: 'Videos', icon: Video },
  { href: '/features', label: 'Music', icon: Mic2 },
  { href: '/about', label: 'About', icon: Newspaper }
];

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-24 shrink-0 flex-col border-r border-border/60 bg-black/70 p-3 lg:flex">
      <div className="mb-8 rounded-2xl border border-border px-2 py-4 text-center text-lg font-bold text-primary">NR</div>
      <nav className="space-y-2">
        {nav.map((item) => (
          <Link key={item.label} href={item.href} className="flex flex-col items-center gap-1 rounded-xl p-2 text-[11px] text-muted-foreground transition hover:bg-primary/20 hover:text-foreground">
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
