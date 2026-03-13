export function ErrorState({ message }: { message: string }) {
  return <div className="rounded-2xl border border-red-500/30 bg-red-900/10 p-4 text-sm text-red-200">{message}</div>;
}
