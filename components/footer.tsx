export function Footer() {
  return (
    <footer className="mt-10 border-t border-border/60 py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} NeonReel. Built with TMDB data. Not affiliated with TMDB.
    </footer>
  );
}
