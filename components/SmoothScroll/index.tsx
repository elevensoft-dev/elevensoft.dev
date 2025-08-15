"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const SmoothScroll = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Barra de progresso do scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Indicadores de seção */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {[
            { id: "hero", label: "Início", icon: "🏠" },
            { id: "stats", label: "Estatísticas", icon: "📊" },
            { id: "features", label: "Recursos", icon: "⚡" },
            { id: "about", label: "Sobre", icon: "🛡️" },
            { id: "cta", label: "Ação", icon: "🚀" },
          ].map((section) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              className="group relative flex items-center space-x-3 text-neutral-400 hover:text-orange-400 transition-colors duration-300"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-2 h-2 bg-neutral-600 rounded-full group-hover:bg-orange-500 transition-colors duration-300"
                whileHover={{ scale: 1.5 }}
              />
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {section.label}
              </span>
              <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {section.icon}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SmoothScroll; 