import Link from 'next/link';

export function SectionHeader({ title, href }: { title: string; href?: string }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {href ? <Link href={href} className="text-sm text-primary">See all</Link> : null}
    </div>
  );
}
