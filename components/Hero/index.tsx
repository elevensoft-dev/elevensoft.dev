"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section className="relative overflow-hidden py-32 lg:py-40 xl:py-48 min-h-screen flex items-center">
        {/* Background with galactic gradient */}
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 light:bg-gradient-to-br light:from-neutral-50 light:via-neutral-100 light:to-neutral-200"></div>
        
        {/* Decorative background elements with movement */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,138,41,0.08),transparent_50%)]"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.08),transparent_50%)]"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
          }}
        ></div>
        
        {/* Technological background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,138,41,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,138,41,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg)',
          }}></div>
        </div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full opacity-60"
          animate={{ y: [-20, 20, -20], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 bg-yellow-400 rounded-full opacity-40"
          animate={{ y: [20, -20, 20], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-50"
          animate={{ y: [-15, 15, -15], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-elegant relative z-10">
          <motion.div 
            className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="lg:w-1/2" variants={itemVariants}>
              {/* Highlight badge */}
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-black mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ boxShadow: '0 4px 20px rgba(255, 138, 41, 0.4)' }}
              >
                🚨 A ERA DA SEGURANÇA FRAGMENTADA ACABOU
              </motion.div>

              {/* Main title with typing effect */}
              <motion.h1 
                className="title-gradient-hero title-animate-fade"
                variants={itemVariants}
              >
                Recupere sua{" "}
                <span className="gradient-text-hero relative">
                  Soberania Digital
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              {/* Description with fade animation */}
              <motion.p 
                className="mb-10 text-xl leading-relaxed dark:text-neutral-300 light:text-neutral-700"
                variants={itemVariants}
              >
                A Elevensoft não vende produtos. Nós entregamos{" "}
                <strong className="text-orange-400 font-semibold">Soberania Digital</strong>. 
                Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono.
                Unifique seu controle, elimine riscos e blinde sua infraestrutura com a plataforma Elevensoft.
              </motion.p>

              {/* Buttons with animations */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                variants={itemVariants}
              >
                <motion.a
                  href="/plataforma"
                  className="btn-gradient group relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                    Descobrir a Plataforma
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
                  className="btn-secondary group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
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

              {/* Highlighted ROI */}
              <motion.div 
                className="inline-flex items-center px-6 py-3 rounded-2xl dark:bg-neutral-900/60 light:bg-white/60 backdrop-blur-xl dark:border-orange-500/20 light:border-orange-500/30 border"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                style={{ boxShadow: '0 0 30px rgba(255, 138, 41, 0.2)' }}
              >
                <span className="text-2xl mr-3">🚀</span>
                <span className="dark:text-neutral-300 light:text-neutral-700">
                  <strong className="text-yellow-400 font-bold">ROI estimado de 2.156%</strong> - Pronto para abandonar o caos?
                </span>
              </motion.div>
            </motion.div>

            {/* Right side with platform */}
            <motion.div 
              className="lg:w-1/2 mt-12 lg:mt-0" 
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div 
                  className="relative z-10 mx-auto max-w-lg text-center"
                  animate="float"
                  variants={floatingVariants}
                >
                  <div className="card-modern p-8 relative overflow-hidden">
                    {/* Top decorative line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
                    
                    <motion.h3 
                      className="title-card text-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      Plataforma Unificada
                    </motion.h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {[
                        { icon: "🛡️", name: "ESH", color: "from-blue-500 to-cyan-500" },
                        { icon: "⚡", name: "ESUT", color: "from-orange-500 to-red-500" },
                        { icon: "🔑", name: "KEYRING", color: "from-purple-500 to-pink-500" },
                        { icon: "🛡️", name: "EL GUARDIAN", color: "from-green-500 to-emerald-500" }
                      ].map((item, index) => (
                        <motion.div
                          key={item.name}
                          className="dark:bg-neutral-800/60 light:bg-white/60 backdrop-blur-xl rounded-xl p-4 dark:border-neutral-700/50 light:border-neutral-300/50 border hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
                          whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            boxShadow: '0 10px 30px rgba(255, 138, 41, 0.2)'
                          }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <div className="text-sm dark:text-neutral-300 light:text-neutral-700 font-medium group-hover:text-orange-400 transition-colors duration-300">
                            {item.name}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="text-sm text-neutral-400 italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      Conectados por linhas sólidas e azuis, formando um escudo impenetrável
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Floating decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-orange-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
