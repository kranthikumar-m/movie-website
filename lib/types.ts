export interface Genre { id: number; name: string }

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  release_date: string;
  genre_ids?: number[];
  genres?: Genre[];
  popularity?: number;
  original_language?: string;
  runtime?: number;
  tagline?: string;
  budget?: number;
  revenue?: number;
  status?: string;
  production_companies?: { id: number; name: string }[];
}

export interface CreditPerson {
  id: number;
  name: string;
  profile_path: string | null;
  character?: string;
  job?: string;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  created_at: string;
  author_details: { rating: number | null };
}

export interface MovieDetailsResponse extends Movie {
  credits: { cast: CreditPerson[]; crew: CreditPerson[] };
  videos: { results: Video[] };
  images: { backdrops: { file_path: string }[] };
  recommendations: { results: Movie[] };
  reviews: { results: Review[] };
  watch_providers?: { results: Record<string, { link: string; flatrate?: { provider_name: string }[] }> };
}

export interface PagedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface EditorialItem {
  id: string;
  category: 'news' | 'reviews' | 'interviews' | 'features' | 'videos' | 'photos';
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}
