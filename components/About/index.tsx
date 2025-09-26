"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/Common/SectionHeader";

const About = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: "🛡️",
      title: "ESH - O Ponto Único de Controle",
      description: "O cérebro que centraliza, audita e comanda todo o acesso humano à infraestrutura crítica.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "⚡",
      title: "ESUT - Execução Segura, Erro Zero",
      description: "O executor que transforma políticas complexas em ações simples, guiadas e à prova de erros no terminal.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🔑",
      title: "KEYRING - Serviço de Inteligência",
      description: "O mestre das chaves que gerencia a identidade, a autenticação e o licenciamento de todo o ecossistema.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🛡️",
      title: "EL GUARDIAN - Fundação Blindada",
      description: "A prova filosófica do nosso compromisso. Nós não protegemos apenas o seu ambiente; nós blindamos o nosso próprio código.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section id="about" className="section-elegant dark:bg-neutral-950 light:bg-neutral-50 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(255,138,41,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(255,193,7,0.02),transparent_50%)]"></div>
        
        {/* Linhas decorativas */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-orange-500 to-transparent opacity-30"></div>

        <div className="container-elegant relative z-10">
          <motion.div 
            className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* <!-- About Content Start --> */}
            <motion.div className="lg:w-1/2" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <SectionHeader
                  title="Nós Construímos a Fortaleza"
                  subtitle="Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono."
                  variant="default"
                  className="text-left"
                />
              </motion.div>
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-6 group"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-neutral-800/80 to-neutral-700/80 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-neutral-700/50 group-hover:border-orange-500/50 transition-all duration-300 shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: '0 10px 30px rgba(255, 138, 41, 0.2)'
                      }}
                      style={{
                        background: `linear-gradient(135deg, rgba(38, 38, 38, 0.8) 0%, rgba(64, 64, 64, 0.8) 100%)`
                      }}
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </span>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-300 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-12"
                variants={itemVariants}
              >
                <motion.a
                  href="/plataforma"
                  className="btn-gradient inline-flex items-center group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    Ver Como Funciona
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
              </motion.div>
            </motion.div>
            {/* <!-- About Content End --> */}

            {/* <!-- About Image Start --> */}
            <motion.div 
              className="lg:w-1/2 mt-16 lg:mt-0" 
              variants={rightItemVariants}
            >
              <div className="relative">
                <motion.div 
                  className="relative z-10 mx-auto max-w-[500px] text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-modern p-8 relative overflow-hidden">
                    {/* Linha decorativa superior */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
                    
                    <motion.h3 
                      className="text-2xl font-bold mb-6 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Plataforma Unificada
                    </motion.h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { icon: "🛡️", name: "ESH", color: "from-blue-500 to-cyan-500" },
                        { icon: "⚡", name: "ESUT", color: "from-orange-500 to-red-500" },
                        { icon: "🔑", name: "KEYRING", color: "from-purple-500 to-pink-500" },
                        { icon: "🛡️", name: "EL GUARDIAN", color: "from-green-500 to-emerald-500" }
                      ].map((item, index) => (
                        <motion.div
                          key={item.name}
                          className="bg-neutral-800/60 backdrop-blur-xl rounded-xl p-4 border border-neutral-700/50 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
                          whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            boxShadow: '0 10px 30px rgba(255, 138, 41, 0.2)'
                          }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <div className="text-sm text-neutral-300 font-medium group-hover:text-orange-400 transition-colors duration-300">
                            {item.name}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="text-sm text-neutral-400 italic"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      Conectados por linhas sólidas e azuis, formando um escudo impenetrável
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Elementos decorativos flutuantes */}
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
            {/* <!-- About Image End --> */}
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
