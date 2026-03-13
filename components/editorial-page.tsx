import editorial from '@/data/editorial.json';
import { Sidebar } from '@/components/sidebar';
import { TopNav } from '@/components/top-nav';
import { FeaturedArticleCard } from '@/components/featured-article-card';
import { SectionHeader } from '@/components/section-header';
import { EditorialItem } from '@/lib/types';

export function EditorialPage({ category }: { category: EditorialItem['category'] }) {
  const items = (editorial as EditorialItem[]).filter((item) => item.category === category);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="w-full p-4 md:p-6">
        <TopNav />
        <SectionHeader title={category.toUpperCase()} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => <FeaturedArticleCard key={item.id} item={item} />)}
        </div>
      </main>
    </div>
  );
}
