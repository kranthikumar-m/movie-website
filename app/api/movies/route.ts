import { NextRequest, NextResponse } from 'next/server';
import { discoverMovies } from '@/lib/services/tmdb';

export async function GET(req: NextRequest) {
  const params = Object.fromEntries(req.nextUrl.searchParams.entries());
  try {
    const data = await discoverMovies(params);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ results: [] }, { status: 500 });
  }
}
