import { PagedResponse, Movie, Genre, MovieDetailsResponse } from '@/lib/types';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = process.env.TMDB_API_READ_TOKEN;

const defaultHeaders: HeadersInit = TOKEN
  ? { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' }
  : {};

async function tmdbFetch<T>(path: string, params = new URLSearchParams()): Promise<T> {
  if (!TOKEN) throw new Error('TMDB_API_READ_TOKEN is missing');
  params.set('language', 'en-US');
  const res = await fetch(`${BASE_URL}${path}?${params.toString()}`, {
    headers: defaultHeaders,
    next: { revalidate: 1800 }
  });

  if (!res.ok) throw new Error(`TMDB request failed (${res.status})`);
  return res.json() as Promise<T>;
}

export const getGenres = () => tmdbFetch<{ genres: Genre[] }>('/genre/movie/list');
export const getTrendingMovies = () => tmdbFetch<PagedResponse<Movie>>('/trending/movie/week');
export const getPopularMovies = (page = 1) => tmdbFetch<PagedResponse<Movie>>('/movie/popular', new URLSearchParams({ page: String(page) }));
export const getUpcomingMovies = () => tmdbFetch<PagedResponse<Movie>>('/movie/upcoming');
export const getTopRatedMovies = () => tmdbFetch<PagedResponse<Movie>>('/movie/top_rated');
export const getNowPlayingMovies = () => tmdbFetch<PagedResponse<Movie>>('/movie/now_playing');
export const getLatestMovie = () => tmdbFetch<Movie>('/movie/latest');

export const discoverMovies = (query: Record<string, string | number | undefined>) => {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== '') params.set(key, String(value));
  });
  return tmdbFetch<PagedResponse<Movie>>('/discover/movie', params);
};

export const searchMovies = (query: string, page = 1) =>
  tmdbFetch<PagedResponse<Movie>>('/search/movie', new URLSearchParams({ query, page: String(page), include_adult: 'false' }));

export const getMovieDetails = (id: string) =>
  tmdbFetch<MovieDetailsResponse>(`/movie/${id}`, new URLSearchParams({ append_to_response: 'credits,videos,images,recommendations,reviews,watch/providers' }));

export async function safeMovieBundle() {
  try {
    const [trending, popular, topRated, upcoming, nowPlaying, genres] = await Promise.all([
      getTrendingMovies(),
      getPopularMovies(),
      getTopRatedMovies(),
      getUpcomingMovies(),
      getNowPlayingMovies(),
      getGenres()
    ]);
    return { trending, popular, topRated, upcoming, nowPlaying, genres: genres.genres, error: null as string | null };
  } catch (error) {
    return {
      trending: { results: [] } as PagedResponse<Movie>,
      popular: { results: [] } as PagedResponse<Movie>,
      topRated: { results: [] } as PagedResponse<Movie>,
      upcoming: { results: [] } as PagedResponse<Movie>,
      nowPlaying: { results: [] } as PagedResponse<Movie>,
      genres: [] as Genre[],
      error: error instanceof Error ? error.message : 'Failed to fetch movies'
    };
  }
}
