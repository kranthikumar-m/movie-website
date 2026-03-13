import Image from 'next/image';
import { CreditPerson } from '@/lib/types';
import { imageUrl } from '@/lib/utils';

export function CastCarousel({ cast }: { cast: CreditPerson[] }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {cast.slice(0, 12).map((person) => (
        <div key={person.id} className="w-28 shrink-0">
          <Image src={imageUrl(person.profile_path)} alt={person.name} width={185} height={278} className="aspect-[2/3] rounded-xl object-cover" />
          <p className="mt-1 line-clamp-1 text-xs font-medium">{person.name}</p>
          <p className="line-clamp-1 text-[11px] text-muted-foreground">{person.character}</p>
        </div>
      ))}
    </div>
  );
}
