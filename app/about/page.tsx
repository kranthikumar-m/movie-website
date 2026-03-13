import { Sidebar } from '@/components/sidebar';
import { TopNav } from '@/components/top-nav';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="w-full p-4 md:p-6">
        <TopNav />
        <h1 className="mb-4 text-3xl font-bold">About NeonReel</h1>
        <p className="max-w-2xl text-muted-foreground">NeonReel is an original entertainment portal concept for discovering films, trailers, cast and editorial stories.</p>
      </main>
    </div>
  );
}
