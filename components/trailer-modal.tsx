'use client';

import { DialogClose, DialogContent, DialogRoot, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function TrailerModal({ youtubeKey }: { youtubeKey?: string }) {
  if (!youtubeKey) return null;
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="outline">Watch Trailer</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <iframe title="Trailer" src={`https://www.youtube.com/embed/${youtubeKey}`} className="h-full w-full" allowFullScreen />
        </div>
        <div className="mt-3 flex justify-end">
          <DialogClose asChild><Button variant="secondary">Close</Button></DialogClose>
        </div>
      </DialogContent>
    </DialogRoot>
  );
}
