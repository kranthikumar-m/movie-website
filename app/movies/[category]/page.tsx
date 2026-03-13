import { notFound } from 'next/navigation';
import { Sidebar } from '@/components/sidebar';
import { TopNav } from '@/components/top-nav';
import { SectionHeader } from '@/components/section-header';
import { MovieCard } from '@/components/movie-card';
import { GenreFilter } from '@/components/genre-filter';
import { discoverMovies, getGenres, getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from '@/lib/services/tmdb';

const categoryMap = {
  latest: getPopularMovies,
  trending: getTrendingMovies,
  popular: getPopularMovies,
  upcoming: getUpcomingMovies,
  'top-rated': getTopRatedMovies,
  'in-theaters': getNowPlayingMovies
} as const;

export default async function CategoryPage({ params, searchParams }: { params: { category: string }; searchParams: { with_genres?: string } }) {
  const fetcher = categoryMap[params.category as keyof typeof categoryMap];
  if (!fetcher) return notFound();

  const [genresResponse, movies] = await Promise.all([
    getGenres().catch(() => ({ genres: [] })),
    searchParams.with_genres ? discoverMovies({ with_genres: searchParams.with_genres, sort_by: 'popularity.desc' }).catch(() => ({ results: [] })) : fetcher().catch(() => ({ results: [] }))
  ]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="w-full p-4 md:p-6">
        <TopNav />
        <SectionHeader title={params.category.replace('-', ' ').toUpperCase()} />
        <GenreFilter genres={genresResponse.genres} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {movies.results?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </main>
    </div>
  );
}
