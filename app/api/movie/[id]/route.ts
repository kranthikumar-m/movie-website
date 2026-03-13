import { NextResponse } from 'next/server';
import { getMovieDetails } from '@/lib/services/tmdb';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const movie = await getMovieDetails(params.id);
    return NextResponse.json(movie);
  } catch {
    return NextResponse.json({ message: 'Unable to fetch movie details' }, { status: 500 });
  }
}
