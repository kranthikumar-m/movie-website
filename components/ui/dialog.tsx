'use client';

import type { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export const DialogRoot = Dialog.Root;
export const DialogTrigger = Dialog.Trigger;
export const DialogClose = Dialog.Close;

export function DialogContent({ children }: { children: ReactNode }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70" />
      <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-4">
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
