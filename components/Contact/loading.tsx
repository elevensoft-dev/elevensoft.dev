export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-96 w-96 items-center justify-center bg-amber-300">
      <span className="h-3 w-3 animate-spin rounded-full border-2 border-indigo-500"></span>
    </div>
  );
}
