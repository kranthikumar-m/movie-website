import Image from 'next/image';
import { Sidebar } from '@/components/sidebar';
import { TopNav } from '@/components/top-nav';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/section-header';
import { CastCarousel } from '@/components/cast-carousel';
import { PhotoGallery } from '@/components/photo-gallery';
import { ReviewCard } from '@/components/review-card';
import { MovieCard } from '@/components/movie-card';
import { TrailerModal } from '@/components/trailer-modal';
import { formatRuntime, imageUrl } from '@/lib/utils';
import { getMovieDetails } from '@/lib/services/tmdb';

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  const movie = await getMovieDetails(params.id);
  const trailer = movie.videos.results.find((v) => v.site === 'YouTube' && v.type === 'Trailer');

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="w-full">
        <TopNav />
        <section className="relative h-[50vh]">
          <Image src={imageUrl(movie.backdrop_path, 'original')} alt={movie.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/20" />
          <div className="absolute bottom-6 left-6 z-10 flex items-end gap-4">
            <Image src={imageUrl(movie.poster_path)} alt={movie.title} width={220} height={330} className="hidden rounded-xl md:block" />
            <div className="max-w-2xl space-y-3">
              <h1 className="text-3xl font-bold md:text-5xl">{movie.title}</h1>
              <p className="text-sm text-muted-foreground">{movie.tagline}</p>
              <div className="flex flex-wrap gap-2">{movie.genres?.map((genre) => <Badge key={genre.id}>{genre.name}</Badge>)}</div>
              <p className="text-sm">{movie.release_date} • {formatRuntime(movie.runtime)} • ⭐ {movie.vote_average.toFixed(1)} ({movie.vote_count.toLocaleString()} votes)</p>
              <div className="flex gap-2">
                <TrailerModal youtubeKey={trailer?.key} />
                <Button variant="secondary">View Providers</Button>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-8 p-4 md:p-6">
          <section>
            <SectionHeader title="Synopsis" />
            <p className="max-w-4xl text-muted-foreground">{movie.overview}</p>
          </section>

          <section>
            <SectionHeader title="Cast" />
            <CastCarousel cast={movie.credits.cast} />
          </section>

          <section>
            <SectionHeader title="Gallery" />
            <PhotoGallery photos={movie.images.backdrops} />
          </section>

          <section>
            <SectionHeader title="Reviews" />
            <div className="grid gap-4 md:grid-cols-2">
              {movie.reviews.results.slice(0, 4).map((review) => <ReviewCard key={review.id} review={review} />)}
            </div>
          </section>

          <section>
            <SectionHeader title="Recommended" />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {movie.recommendations.results.slice(0, 6).map((item) => <MovieCard key={item.id} movie={item} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
