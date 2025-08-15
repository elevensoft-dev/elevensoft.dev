"use client";
import React from "react";
import { motion } from "framer-motion";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "@/components/Common/SectionHeader";

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
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="section-elegant bg-gradient-tech relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,138,41,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,193,7,0.03),transparent_50%)]"></div>
        
        {/* Grid de fundo sutil */}
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
          {/* <!-- Section Title Start --> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <SectionHeader
              title="Sua Segurança é um Quebra-Cabeça Frágil?"
              subtitle="O caos de dezenas de ferramentas desconexas, senhas em planilhas, scripts manuais, VPNs lentas e a constante ansiedade de não saber quem tem acesso a quê."
              variant="danger"
              className="text-center"
            />
          </motion.div>
          {/* <!-- Section Title End --> */}

          {/* <!-- Features List Start --> */}
          <motion.div 
            className="features-grid"
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
                  transition: { duration: 0.3 }
                }}
              >
                <SingleFeature 
                  feature={feature} 
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
          {/* <!-- Features List End --> */}

          {/* CTA adicional */}
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
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
