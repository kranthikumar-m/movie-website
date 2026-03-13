# NeonReel — Movie News & Discovery Website

A production-ready **Next.js 14 App Router** project for a premium, dark-themed movie discovery portal powered by **TMDB**.

## Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui-style component primitives
- Framer Motion
- TMDB server-side integration via service layer + API routes

## Features
- Cinematic homepage with hero carousel, side nav, top nav, and editorial modules
- Listing pages: latest, trending, popular, upcoming, top-rated, in-theaters
- Movie detail page: trailer, cast, gallery, reviews, recommendations
- Debounced instant search (`/api/search`)
- Editorial seed sections: news, reviews, interviews, features, videos, photos
- Healthcheck endpoint for ops: `/api/health`

## Project Structure
```txt
app/
  api/
  movie/[id]/
  movies/[category]/
  news/ reviews/ interviews/ features/ videos/ photos/
components/
  home/
  ui/
lib/
  services/tmdb.ts
  types.ts
  utils.ts
deploy/
  nginx/
  systemd/
scripts/
  deploy.sh
```

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create env file:
   ```bash
   cp .env.example .env.local
   ```
3. Set `TMDB_API_READ_TOKEN` in `.env.local`.
4. Start dev server:
   ```bash
   npm run dev
   ```

## Environment Variables
- `TMDB_API_READ_TOKEN` (required): TMDB v4 read token.
- `OMDB_API_KEY` (optional): future enrichment.

## Production Deployment

### Option A — Docker (recommended)
```bash
docker build -t neonreel:latest .
docker run -d --name neonreel \
  -p 3000:3000 \
  --env-file .env.local \
  neonreel:latest
curl http://127.0.0.1:3000/api/health
```

### Option B — Ubuntu + systemd + Nginx
1. Copy app to `/var/www/neonreel`.
2. Place `deploy/systemd/neonreel.service` into `/etc/systemd/system/`.
3. Place `deploy/nginx/neonreel.conf` into `/etc/nginx/sites-available/` and enable it.
4. Install dependencies and build:
   ```bash
   cd /var/www/neonreel
   npm install
   npm run build
   ```
5. Start service:
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl enable --now neonreel
   sudo nginx -t && sudo systemctl reload nginx
   ```

### Quick deploy helper
```bash
./scripts/deploy.sh
```

## Verification Checklist
```bash
npm run build
npm run start -- -p 3000
curl http://127.0.0.1:3000/api/health
```

## Disclaimer
This project uses TMDB APIs but is not endorsed or certified by TMDB.
