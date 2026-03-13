import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const imageUrl = (path: string | null, size: 'w500' | 'original' = 'w500') =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : 'https://via.placeholder.com/500x750/111827/94a3b8?text=No+Image';

export const formatRuntime = (minutes?: number) => {
  if (!minutes) return 'N/A';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
};

export const scoreToPercent = (score: number) => Math.round(score * 10);
