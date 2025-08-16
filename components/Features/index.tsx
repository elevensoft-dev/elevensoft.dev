"use client";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Feature = () => {
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
      {/* Features Section */}
      <section id="features" className="section-elegant bg-gradient-tech relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,138,41,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,193,7,0.03),transparent_50%)]"></div>
        
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
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="title-section text-center">
              Sua Segurança é um{" "}
              <span className="gradient-text-hero">Quebra-Cabeça Frágil</span>?
            </h2>
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              O caos de dezenas de ferramentas desconexas, senhas em planilhas, scripts manuais, VPNs lentas e a constante ansiedade de não saber quem tem acesso a quê.
            </p>
          </motion.div>

          {/* Features Grid - Improved Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuresData.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="card-modern h-full flex flex-col">
                  {/* Icon with enhanced styling */}
                  <div className="text-center mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-neutral-800/80 to-neutral-700/80 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-neutral-700/50 group-hover:border-orange-500/50 transition-all duration-300 mx-auto"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: '0 10px 30px rgba(255, 138, 41, 0.2)'
                      }}
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center">
                    <h3 className="title-feature text-center mb-4 group-hover:text-orange-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <motion.div
                    className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-orange-500/20">
              <span className="text-2xl mr-3">🔒</span>
              <span className="text-neutral-300">
                <strong className="text-orange-400 font-bold">Pronto para unificar sua segurança?</strong>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Feature;
