import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return <span className={cn('rounded-full border border-border bg-black/40 px-3 py-1 text-xs text-foreground', className)}>{children}</span>;
}
