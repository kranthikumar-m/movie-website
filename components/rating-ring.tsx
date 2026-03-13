import { scoreToPercent } from '@/lib/utils';

export function RatingRing({ score }: { score: number }) {
  const percent = scoreToPercent(score);
  return (
    <div className="relative grid h-12 w-12 place-items-center rounded-full bg-[conic-gradient(theme(colors.primary)_var(--p),theme(colors.muted.DEFAULT)_0)]" style={{ ['--p' as string]: `${percent}%` }}>
      <div className="grid h-9 w-9 place-items-center rounded-full bg-background text-xs font-semibold">{Math.round(score * 10) / 10}</div>
    </div>
  );
}
