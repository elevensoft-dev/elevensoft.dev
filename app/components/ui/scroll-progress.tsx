"use client";

import { useScrollProgress } from "@/app/hooks/useScrollProgress";

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-neutral-900/30 z-50">
      <div
        className="h-full bg-gradient-to-r from-orange-500 to-yellow-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};