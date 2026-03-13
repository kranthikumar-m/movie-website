import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <article className={cn('rounded-2xl border border-border/70 bg-card/70 backdrop-blur', className)}>{children}</article>;
}
