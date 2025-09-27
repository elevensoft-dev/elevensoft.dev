"use client";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ronaldo Sacco",
      position: "CEO",
      company: "SaperX",
      content: "O ESH revolucionou o gerenciamento de acessos na SaperX, simplificando processos, aumentando segurança e economizando horas semanais. Nossa equipe agora foca em inovação, impulsionando o crescimento e eficiência no atendimento a clientes.",
      avatar: "RS"
    },
    {
      id: 2,
      name: "Vitor Corrêa",
      position: "CTO",
      company: "ZR Media",
      content: "Estamos com o ESH há mais de um ano e, sinceramente, não dá pra imaginar voltar ao que era antes. Antes a gente tinha que confiar só na disciplina da equipe e torcer para não acontecer nenhum deslize dentro do alojamento. Hoje, o ESH garante que tudo está rodando do jeito certo, sem improviso e sem susto.",
      avatar: "VC"
    },
    {
      id: 3,
      name: "Larissa Souza",
      position: "CTO",
      company: "Trezze Solutions",
      content: "Antes a gente não tinha controle real do que rolava nos servidores, hoje conseguimos até assistir o replay das sessões. Isso trouxe uma segurança enorme e evitou ruídos dentro da equipe. Foi uma das poucas ferramentas que mostrou valor logo na primeira semana.",
      avatar: "LS"
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

  return (
    <section className="section-elegant dark:bg-neutral-950 light:bg-neutral-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,138,41,0.02),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,193,7,0.02),transparent_50%)]"></div>
      
      <div className="container-elegant relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="title-section">
            O que nossos{" "}
            <span className="gradient-text-hero">clientes</span>{" "}
            dizem
          </h2>
          <p className="text-xl dark:text-neutral-300 light:text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Empresas líderes já transformaram sua segurança com nossa plataforma. 
            Veja os resultados reais que estamos entregando.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-orange-400 text-sm">{testimonial.position} at {testimonial.company}</p>
                </div>
              </div>
              
              <blockquote className="text-neutral-300 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-orange-500/20">
            <span className="text-2xl mr-3">🚀</span>
            <span className="text-neutral-300">
              <strong className="text-orange-400 font-bold">Pronto para ser nosso próximo caso de sucesso?</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;