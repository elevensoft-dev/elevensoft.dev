"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Stat {
  number: string;
  label: string;
  icon: string;
  suffix?: string;
}

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats: Stat[] = [
    {
      number: "2,156",
      label: "ROI Estimado (%)",
      icon: "🚀",
      suffix: "%"
    },
    {
      number: "99.9",
      label: "Uptime Garantido",
      icon: "⚡",
      suffix: "%"
    },
    {
      number: "0",
      label: "Vulnerabilidades",
      icon: "🛡️",
      suffix: ""
    },
    {
      number: "24/7",
      label: "Monitoramento",
      icon: "🔒",
      suffix: ""
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,138,41,0.03),transparent_70%)]"></div>
      
      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,138,41,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,138,41,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: 'perspective(1000px) rotateX(60deg)',
        }}></div>
      </div>

      <div className="container-elegant relative z-10">
        {/* Título da seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Números que <span className="gradient-text">Impressionam</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            A Elevensoft não apenas promete - nós entregamos resultados mensuráveis que transformam a segurança da sua empresa.
          </p>
        </motion.div>

        {/* Grid de estatísticas */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8 transition-all duration-300 group-hover:border-orange-500/30 group-hover:bg-neutral-800/60 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                {/* Ícone */}
                <motion.div
                  className="text-5xl mb-4 mx-auto w-20 h-20 bg-gradient-to-br from-neutral-800/80 to-neutral-700/80 rounded-2xl flex items-center justify-center border border-neutral-700/50 group-hover:border-orange-500/30 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 10px 30px rgba(255, 138, 41, 0.2)'
                  }}
                >
                  {stat.icon}
                </motion.div>

                {/* Número */}
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
                >
                  {stat.number}
                  {stat.suffix && (
                    <span className="text-2xl text-orange-400 ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </motion.div>

                {/* Label */}
                <p className="text-neutral-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Linha decorativa */}
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA adicional */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-orange-500/20">
            <span className="text-2xl mr-3">📊</span>
            <span className="text-neutral-300">
              <strong className="text-orange-400 font-bold">Quer ver mais números?</strong> Agende uma demonstração personalizada.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats; 