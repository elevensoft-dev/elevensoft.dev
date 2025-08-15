"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const footerSections = [
    {
      id: "plataforma",
      title: "Plataforma",
      icon: "🛡️",
      links: [
        { name: "Visão Estratégica", href: "/plataforma" },
        { name: "ESH - Controle Central", href: "https://esh.elevensoft.dev/", external: true },
        { name: "ESUT - Execução Segura", href: "/esut" },
        { name: "KEYRING - Inteligência", href: "/keyring" },
        { name: "EL GUARDIAN - Fundação", href: "/el-guardian" },
      ]
    },
    {
      id: "empresa",
      title: "Empresa",
      icon: "🏢",
      links: [
        { name: "Sobre Nós", href: "/sobre" },
        { name: "Segurança", href: "/seguranca" },
        { name: "O Jeito Elevensoft", href: "/o-jeito-elevensoft" },
        { name: "Preços", href: "/precos" },
        { name: "Blog", href: "/blog" },
      ]
    },
    {
      id: "suporte",
      title: "Suporte",
      icon: "🔧",
      links: [
        { name: "Documentação", href: "/docs" },
        { name: "Contato", href: "/contact" },
        { name: "WhatsApp", href: "https://wa.me/message/X2DMDA457ASDN1", external: true },
      ]
    },
    {
      id: "redes",
      title: "Redes Sociais",
      icon: "🌐",
      links: [
        { name: "LinkedIn", href: "https://www.linkedin.com/company/elevensoft", external: true },
        { name: "YouTube", href: "https://www.youtube.com/@elevensoft", external: true },
        { name: "Instagram", href: "https://www.instagram.com/elevensoft", external: true },
        { name: "Twitter", href: "https://twitter.com/elevensoft", external: true },
      ]
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

  const floatingVariants = {
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* <!-- ===== Footer Start ===== --> */}
      <footer className="bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950 relative overflow-hidden border-t border-neutral-800/50 w-screen-expanded">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,138,41,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,193,7,0.02),transparent_50%)]"></div>
        
        {/* Grid de fundo sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,138,41,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,138,41,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
            transform: 'perspective(1000px) rotateX(60deg)',
          }}></div>
        </div>

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

        <div className="container-wide relative z-10">
          <motion.div 
            className="py-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Seção principal do footer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
              {/* Coluna da marca */}
              <motion.div 
                className="lg:col-span-3 xl:col-span-3"
                variants={itemVariants}
              >
                <motion.div
                  className="mb-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/" className="inline-flex items-center gap-4 group">
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src="/images/logo/logo-light.png" 
                        alt="Logo Eleven, letra E" 
                        className="w-36 h-18 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,138,41,0.5)]" 
                      />
                      {/* Brilho sutil no logo */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                    
                    {/* Texto da marca */}
                    <div>
                      <div className="text-2xl font-bold gradient-text">ELEVENSOFT</div>
                      <div className="text-sm text-neutral-400 font-medium">Soberania Digital</div>
                    </div>
                  </Link>
                </motion.div>

                <motion.p 
                  className="mb-8 text-neutral-300 leading-relaxed text-lg max-w-2xl"
                  variants={itemVariants}
                >
                  A Elevensoft não vende produtos. Nós entregamos{" "}
                  <strong className="text-orange-400 font-semibold">Soberania Digital</strong>. 
                  Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono.
                </motion.p>

                <motion.div
                  className="inline-flex items-center px-8 py-4 rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-orange-500/20"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  style={{ boxShadow: '0 0 30px rgba(255, 138, 41, 0.2)' }}
                >
                  <span className="text-3xl mr-4">🚀</span>
                  <span className="text-neutral-300 text-lg">
                    <strong className="text-yellow-400 font-bold">ROI estimado de 2.156%</strong> - A era da segurança fragmentada acabou
                  </span>
                </motion.div>
              </motion.div>

                            {/* Colunas de links */}
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  className="lg:col-span-2 xl:col-span-1.5"
                  variants={itemVariants}
                  onHoverStart={() => setHoveredSection(section.id)}
                  onHoverEnd={() => setHoveredSection(null)}
                >
                  <motion.div
                    className="mb-8 flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-3xl">{section.icon}</span>
                    <h4 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {section.title}
                    </h4>
                  </motion.div>

                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + linkIndex * 0.05 }}
                      >
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center text-neutral-300 hover:text-orange-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-neutral-800/30"
                          >
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                            {link.name}
                            <motion.svg 
                              className="ml-3 w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-300" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </motion.svg>
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="group/link flex items-center text-neutral-300 hover:text-orange-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-neutral-800/30"
                          >
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                            {link.name}
                          </Link>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Coluna CTA */}
              <motion.div 
                className="lg:col-span-3 xl:col-span-3"
                variants={itemVariants}
              >
                <motion.div
                  className="bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-12 relative overflow-hidden text-center"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(255, 138, 41, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
                >
                  {/* Linha decorativa superior */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                  
                  <motion.h4 
                    className="mb-8 text-3xl font-semibold text-white flex items-center justify-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-5xl">🚀</span>
                    Pronto para a Soberania?
                  </motion.h4>

                  <motion.p 
                    className="mb-12 text-neutral-300 leading-relaxed text-xl max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Agende uma demonstração e descubra como transformar sua segurança fragmentada em uma fortaleza unificada.
                  </motion.p>

                  <motion.a
                    href="https://wa.me/message/X2DMDA457ASDN1"
                    target="_blank"
                    className="btn-gradient inline-flex items-center group text-xl px-12 py-6 mx-auto"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center">
                      <span className="text-4xl mr-4">💬</span>
                      Agendar Demonstração
                      <motion.svg 
                        className="ml-3 w-7 h-7 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                  </motion.a>

                  {/* Elementos decorativos */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-2xl"
                    animate="float"
                    variants={floatingVariants}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Linha separadora decorativa */}
            <motion.div 
              className="relative mb-16"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </motion.div>

            {/* Seção inferior */}
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between gap-8"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center gap-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-sm font-bold text-black">E</span>
                </motion.div>
                <p className="text-neutral-400 text-base">
                  © 2024 Elevensoft. Todos os direitos reservados.{" "}
                  <span className="text-orange-400 font-medium">Soberania Digital é nossa missão.</span>
                </p>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-8 text-base text-neutral-400"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/seguranca" 
                  className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Política de Segurança
                </Link>
                <Link 
                  href="/sobre" 
                  className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Termos de Uso
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Linha decorativa inferior */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        />
      </footer>
      {/* <!-- ===== Footer End ===== --> */}
    </>
  );
};

export default Footer;
