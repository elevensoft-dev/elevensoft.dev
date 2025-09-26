"use client";

import { useScrollProgress } from "@/app/hooks/useScrollProgress";

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-50">
      {/* Dark theme background */}
      <div className="dark:bg-neutral-900/30 light:bg-neutral-200/30 h-full">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-yellow-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};