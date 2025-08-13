"use client";

interface ScrollProgressProps {
  progress: number;
}

export const ScrollProgress = ({ progress }: ScrollProgressProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-neutral-900/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-500 ease-out relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        {/* Efeito de brilho na barra de progresso */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </div>
    </div>
  );
}; 