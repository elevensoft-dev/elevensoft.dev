"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  // Current year for dynamic copyright
  const currentYear = new Date().getFullYear();

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
        { name: "Carreiras", href: "/carreiras" },
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
      <footer className="dark:bg-gradient-to-br dark:from-neutral-950 dark:via-neutral-900/50 dark:to-neutral-950 light:bg-gradient-to-br light:from-neutral-50 light:via-neutral-100/50 light:to-neutral-50 relative overflow-hidden dark:border-t-neutral-800/50 light:border-t-neutral-200/50 border-t w-screen-expanded">
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
            className="py-20 lg:py-24 xl:py-28"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Seção principal do footer */}
            <div className="mb-16 lg:mb-20">
              {/* Seção da marca centralizada */}
              <motion.div 
                className="text-center mb-16 lg:mb-20"
                variants={itemVariants}
              >
                {/* Logo centralizado */}
                <motion.div
                  className="mb-8 lg:mb-10 flex justify-center"
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
                  </Link>
                </motion.div>

                {/* Mensagem centralizada */}
                <motion.p 
                  className="mb-8 lg:mb-10 dark:text-neutral-300 light:text-neutral-700 leading-relaxed text-lg lg:text-xl max-w-4xl mx-auto"
                  variants={itemVariants}
                >
                  A Elevensoft não vende produtos. Nós entregamos{" "}
                  <strong className="text-orange-400 font-semibold">Soberania Digital</strong>. 
                  Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono.
                </motion.p>

                {/* Card ROI centralizado */}
                <motion.div
                  className="inline-flex items-center px-8 py-4 rounded-2xl dark:bg-neutral-900/60 light:bg-white/60 backdrop-blur-xl dark:border-orange-500/20 light:border-orange-500/30 border"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  style={{ boxShadow: '0 0 30px rgba(255, 138, 41, 0.2)' }}
                >
                  <span className="text-3xl mr-4">🚀</span>
                  <span className="dark:text-neutral-300 light:text-neutral-700 text-lg">
                    <strong className="text-yellow-400 font-bold">ROI estimado de 2.156%</strong> - A era da segurança fragmentada acabou
                  </span>
                </motion.div>
              </motion.div>

              {/* Seção dos links organizados em colunas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-20">
                {footerSections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    className="text-center md:text-left"
                    variants={itemVariants}
                    onHoverStart={() => setHoveredSection(section.id)}
                    onHoverEnd={() => setHoveredSection(null)}
                  >
                    <motion.div
                      className="mb-6 lg:mb-8 flex items-center gap-3 md:justify-center lg:justify-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-3xl">{section.icon}</span>
                      <h4 className="text-xl font-semibold dark:text-white light:text-neutral-900 group-hover:text-orange-400 transition-colors duration-300">
                        {section.title}
                      </h4>
                    </motion.div>

                    <ul className="space-y-3 lg:space-y-4">
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
                              className="group/link flex items-center dark:text-neutral-300 light:text-neutral-700 hover:text-orange-400 transition-all duration-300 py-2.5 lg:py-3 px-3 lg:px-4 rounded-lg hover:bg-orange-500/10 md:justify-center lg:justify-start"
                            >
                              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 lg:mr-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                              {link.name}
                              <motion.svg 
                                className="ml-2 lg:ml-3 w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-300" 
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
                              className="group/link flex items-center dark:text-neutral-300 light:text-neutral-700 hover:text-orange-400 transition-all duration-300 py-2.5 lg:py-3 px-3 lg:px-4 rounded-lg hover:bg-orange-500/10 md:justify-center lg:justify-start"
                            >
                              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 lg:mr-4 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                              {link.name}
                            </Link>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Seção CTA centralizada */}
            <motion.div 
              className="mb-16 lg:mb-20"
              variants={itemVariants}
            >
              <motion.div
                className="dark:bg-neutral-900/60 light:bg-white/60 backdrop-blur-xl dark:border-neutral-800/50 light:border-neutral-200/50 border rounded-3xl p-12 lg:p-16 xl:p-20 relative overflow-hidden text-center max-w-6xl mx-auto"
                whileHover={{ 
                  scale: 1.01,
                  borderColor: 'rgba(255, 138, 41, 0.3)'
                }}
                transition={{ duration: 0.3 }}
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
              >
                {/* Linha decorativa superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                
                <motion.h4 
                  className="mb-8 lg:mb-10 text-3xl lg:text-4xl xl:text-5xl font-semibold dark:text-white light:text-neutral-900 flex items-center justify-center gap-4 lg:gap-6"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-5xl lg:text-6xl xl:text-7xl">🚀</span>
                  Pronto para a Soberania?
                </motion.h4>

                <motion.p 
                  className="mb-12 lg:mb-16 dark:text-neutral-300 light:text-neutral-700 leading-relaxed text-xl lg:text-2xl max-w-4xl mx-auto"
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
                  className="btn-gradient inline-flex items-center group text-xl lg:text-2xl px-16 lg:px-20 py-6 lg:py-8 mx-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <span className="text-5xl lg:text-6xl mr-4 lg:mr-6">💬</span>
                    Agendar Demonstração
                    <motion.svg 
                      className="ml-4 lg:ml-6 w-8 lg:w-10 h-8 lg:h-10 transition-transform duration-300 group-hover:translate-x-1" 
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

            {/* Linha separadora decorativa */}
            <motion.div 
              className="relative mb-12 lg:mb-16"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-px dark:bg-gradient-to-r dark:from-transparent dark:via-neutral-700 dark:to-transparent light:bg-gradient-to-r light:from-transparent light:via-neutral-300 light:to-transparent"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
            </motion.div>

            {/* Seção inferior */}
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center gap-4 lg:gap-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-8 lg:w-10 h-8 lg:h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-xs lg:text-sm font-bold text-black">E</span>
                </motion.div>
                <p className="dark:text-neutral-400 light:text-neutral-600 text-sm lg:text-base">
                  © {currentYear} Elevensoft. Todos os direitos reservados.{" "}
                  <span className="text-orange-400 font-medium">Soberania Digital é nossa missão.</span>
                </p>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base dark:text-neutral-400 light:text-neutral-600"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/privacidade" 
                  className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Política de Privacidade
                </Link>
                <Link 
                  href="/termos" 
                  className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Termos de Uso
                </Link>
                <Link 
                  href="/cookies" 
                  className="hover:text-orange-400 transition-colors duration-300 flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Política de Cookies
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
