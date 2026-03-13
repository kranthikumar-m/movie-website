#!/usr/bin/env bash
set -euo pipefail

APP_DIR=${APP_DIR:-/var/www/neonreel}
PORT=${PORT:-3000}

mkdir -p "$APP_DIR"
rsync -a --delete ./ "$APP_DIR" --exclude .git --exclude node_modules --exclude .next

cd "$APP_DIR"
if [ ! -f .env.local ]; then
  echo "Missing $APP_DIR/.env.local"
  exit 1
fi

npm install
npm run build
npm run start -- -p "$PORT"
