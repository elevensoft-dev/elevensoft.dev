"use client";
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="section-elegant dark:bg-neutral-950 light:bg-neutral-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,138,41,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.02),transparent_50%)]"></div>
        
        {/* Subtle floating particles */}
        <motion.div
          className="absolute top-16 left-16 w-1 h-1 bg-orange-400 rounded-full opacity-30"
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-1 h-1 bg-yellow-400 rounded-full opacity-20"
          animate={{ y: [10, -10, 10], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-elegant relative z-10">
          <motion.div 
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 px-6 py-10 md:px-8 md:py-12 shadow-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            {/* Subtle background grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                transform: 'perspective(1000px) rotateX(60deg)',
              }}></div>
            </div>
            
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.h2 
                className="title-responsive-md text-black font-bold leading-tight"
                variants={itemVariants}
              >
                Transforme sua segurança hoje
              </motion.h2>
              
              <motion.p 
                className="mb-8 text-base text-black/90 md:text-lg leading-relaxed max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Agende uma demonstração personalizada e descubra como nossa plataforma pode unificar sua infraestrutura de segurança, 
                reduzindo riscos e aumentando a eficiência operacional.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
                variants={itemVariants}
              >
                <motion.a
                  href="https://wa.me/message/X2DMDA457ASDN1"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-orange-500 font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' }}
                >
                  <span className="flex items-center">
                    <span className="text-2xl mr-3">📅</span>
                    Agendar Demonstração
                    <motion.svg 
                      className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                </motion.a>
                
                <motion.a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105 group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <span className="text-2xl mr-3">💼</span>
                    Conhecer Investimento
                    <motion.svg 
                      className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </motion.svg>
                  </span>
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
              >
                <span className="text-lg mr-2">📈</span>
                <span className="text-black font-semibold text-sm">
                  <strong>ROI comprovado de 2.156%</strong> - Solução validada por empresas líderes
                </span>
              </motion.div>
            </div>
            
            {/* Simplified decorative elements */}
            <motion.div 
              className="absolute -top-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-2 -left-2 w-20 h-20 bg-white/10 rounded-full blur-xl"
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.1, 0.2] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
