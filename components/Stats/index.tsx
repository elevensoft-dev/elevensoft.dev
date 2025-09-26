"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: "🛡️",
      number: "99.9",
      suffix: "%",
      label: "Uptime Garantido"
    },
    {
      icon: "⚡",
      number: "2.156",
      suffix: "%",
      label: "ROI Estimado"
    },
    {
      icon: "🔒",
      number: "0",
      suffix: "",
      label: "Incidentes de Segurança"
    },
    {
      icon: "🚀",
      number: "24/7",
      suffix: "",
      label: "Suporte Prioritário"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="section-elegant dark:bg-neutral-950 light:bg-neutral-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,138,41,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,193,7,0.02),transparent_50%)]"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,138,41,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,138,41,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'perspective(1000px) rotateX(60deg)',
          }}></div>
        </div>

        <div className="container-elegant relative z-10">
          {/* Section title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="title-section text-center">
              Números que <span className="gradient-text-hero">Impressionam</span>
            </h2>
            <p className="text-xl dark:text-neutral-300 light:text-neutral-700 max-w-3xl mx-auto">
              A Elevensoft não apenas promete - nós entregamos resultados mensuráveis que transformam a segurança da sua empresa.
            </p>
          </motion.div>

          {/* Statistics grid */}
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
                <div className="dark:bg-neutral-900/60 light:bg-white/60 backdrop-blur-xl dark:border-neutral-800/50 light:border-neutral-200/50 border rounded-2xl p-8 transition-all duration-300 group-hover:border-orange-500/30 group-hover:bg-orange-500/5 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4 mx-auto w-20 h-20 dark:bg-gradient-to-br dark:from-neutral-800/80 dark:to-neutral-700/80 light:bg-gradient-to-br light:from-neutral-200/80 light:to-neutral-300/80 rounded-2xl flex items-center justify-center dark:border-neutral-700/50 light:border-neutral-300/50 border group-hover:border-orange-500/30 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 10px 30px rgba(255, 138, 41, 0.2)'
                    }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Number */}
                  <motion.div
                    className="text-4xl md:text-5xl font-bold dark:text-white light:text-neutral-900 mb-2 group-hover:text-orange-400 transition-colors duration-300"
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
                  <p className="dark:text-neutral-300 light:text-neutral-700 text-lg font-medium group-hover:text-orange-400 transition-colors duration-300">
                    {stat.label}
                  </p>

                  {/* Decorative line */}
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

          {/* Additional CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-8 py-4 rounded-2xl dark:bg-neutral-900/60 light:bg-white/60 backdrop-blur-xl dark:border-orange-500/20 light:border-orange-500/30 border">
              <span className="text-2xl mr-3">📊</span>
              <span className="dark:text-neutral-300 light:text-neutral-700">
                <strong className="text-orange-400 font-bold">Quer ver mais números?</strong> Agende uma demonstração personalizada.
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Stats; 