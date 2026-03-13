'use client';

import { ErrorState } from '@/components/error-state';

export default function Error({ error }: { error: Error }) {
  return <div className="p-6"><ErrorState message={error.message} /></div>;
}
