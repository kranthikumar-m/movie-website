import Image from 'next/image';
import { EditorialItem } from '@/lib/types';
import { Card } from '@/components/ui/card';

export function FeaturedArticleCard({ item }: { item: EditorialItem }) {
  return (
    <Card className="overflow-hidden">
      <Image src={item.image} alt={item.title} width={1200} height={700} className="h-48 w-full object-cover" />
      <div className="space-y-2 p-4">
        <p className="text-xs uppercase text-primary">{item.category}</p>
        <h3 className="line-clamp-2 font-semibold">{item.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{item.excerpt}</p>
      </div>
    </Card>
  );
}
