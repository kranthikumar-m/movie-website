import { Sidebar } from '@/components/sidebar';
import { TopNav } from '@/components/top-nav';
import { HeroCarousel } from '@/components/home/hero-carousel';
import { SectionHeader } from '@/components/section-header';
import { MovieCard } from '@/components/movie-card';
import { FeaturedArticleCard } from '@/components/featured-article-card';
import { ErrorState } from '@/components/error-state';
import { Footer } from '@/components/footer';
import editorial from '@/data/editorial.json';
import { safeMovieBundle } from '@/lib/services/tmdb';

export default async function HomePage() {
  const { trending, popular, topRated, upcoming, genres, error } = await safeMovieBundle();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="w-full">
        <TopNav />
        <div className="space-y-8 p-4 md:p-6">
          {error ? <ErrorState message={`${error}. Add TMDB key to view live data.`} /> : null}
          <HeroCarousel movies={trending.results.slice(0, 5)} genres={genres} />

          <section>
            <SectionHeader title="Trending Movies" href="/movies/trending" />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {trending.results.slice(0, 12).map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
          </section>

          <section>
            <SectionHeader title="Top Rated" href="/movies/top-rated" />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {topRated.results.slice(0, 12).map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
          </section>

          <section>
            <SectionHeader title="Latest Coverage" href="/news" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {editorial.map((item) => <FeaturedArticleCard key={item.id} item={item} />)}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeader title="Upcoming" href="/movies/upcoming" />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {upcoming.results.slice(0, 6).map((movie) => <MovieCard key={movie.id} movie={movie} />)}
              </div>
            </div>
            <div>
              <SectionHeader title="Popular Right Now" href="/movies/popular" />
              <div className="space-y-3 rounded-2xl border border-border/70 bg-card/40 p-4">
                {popular.results.slice(0, 6).map((movie, index) => (
                  <div key={movie.id} className="flex items-center justify-between border-b border-border/60 pb-2 text-sm last:border-none">
                    <span>{index + 1}. {movie.title}</span>
                    <span className="text-primary">{movie.vote_average.toFixed(1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
