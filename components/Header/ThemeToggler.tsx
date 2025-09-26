"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-full animate-pulse" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      aria-label="Alternar tema"
      onClick={toggleTheme}
      className="relative w-12 h-12 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-700/50 flex cursor-pointer items-center justify-center rounded-full text-white border border-neutral-700/50 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(255,138,41,0.3)] group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={`Alternar para modo ${theme === "dark" ? "claro" : "escuro"}`}
    >
      {/* Ícone do sol (modo escuro) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ 
          opacity: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : 180,
          scale: theme === "dark" ? 1 : 0.8
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-yellow-400"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </motion.div>

      {/* Ícone da lua (modo claro) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ 
          opacity: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : -180,
          scale: theme === "light" ? 1 : 0.8
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-400"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </motion.div>

      {/* Efeito de brilho no hover */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ 
          background: theme === "dark" 
            ? "radial-gradient(circle, rgba(255, 193, 7, 0.2), transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)"
        }}
      />

      {/* Indicador de estado */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-neutral-800"
        animate={{
          backgroundColor: theme === "dark" ? "#fbbf24" : "#3b82f6"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggler;
