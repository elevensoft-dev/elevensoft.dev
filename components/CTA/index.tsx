"use client";
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
      <section className="section-elegant bg-neutral-950 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,138,41,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.02),transparent_50%)]"></div>
        
        {/* Partículas flutuantes */}
        <motion.div
          className="absolute top-20 left-20 w-1 h-1 bg-orange-400 rounded-full opacity-60"
          animate={{ y: [-20, 20, -20], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-40"
          animate={{ y: [20, -20, 20], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-elegant relative z-10">
          <motion.div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 px-8 py-16 md:px-12 md:py-20 shadow-2xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Elementos decorativos de fundo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            {/* Grid de fundo sutil */}
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
                className="title-responsive-lg text-black font-bold leading-tight"
                variants={itemVariants}
              >
                Pronto para abandonar o caos?
              </motion.h2>
              
              <motion.p 
                className="mb-10 text-lg text-black/90 md:text-xl leading-relaxed max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Agende uma demonstração e descubra como a plataforma Elevensoft pode transformar sua segurança fragmentada em uma fortaleza unificada.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
                variants={itemVariants}
              >
                <motion.a
                  href="https://wa.me/message/X2DMDA457ASDN1"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-orange-500 font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' }}
                >
                  <span className="flex items-center">
                    <span className="text-2xl mr-3">💬</span>
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
                  href="/precos"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-white px-8 py-4 text-white font-bold hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105 group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <span className="text-2xl mr-3">💰</span>
                    Ver Preços
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
                className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
              >
                <span className="text-2xl mr-3">🚀</span>
                <span className="text-black font-bold">
                  <strong>ROI estimado de 2.156%</strong> - A era da segurança fragmentada acabou
                </span>
              </motion.div>
            </div>
            
            {/* Elementos decorativos flutuantes */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/20 rounded-full blur-2xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Linhas decorativas */}
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-30"
              animate={{ height: [64, 96, 64] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent via-white to-transparent opacity-30"
              animate={{ height: [64, 96, 64] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
