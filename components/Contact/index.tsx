"use client";
import { postData } from "@/app/utils/post-data";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Subject {
  name: string;
  email: string;
  subject: string;
  phone: string;
  description: string;
}

const subjectSchema = z.object({
  name: z.string().min(3, { message: "Mínimo 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  subject: z.string().min(5, { message: "Mínimo 5 caracteres" }),
  phone: z.string().min(8, { message: "Mínimo 8 caracteres" }),
  description: z.string().min(5, { message: "Mínimo 20 caracteres" }),
});

type SubjectSchema = z.infer<typeof subjectSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors,
      isSubmitSuccessful,
      isLoading,
      isSubmitting,
      isValidating,
      validatingFields
    },
  } = useForm<SubjectSchema>({
    resolver: zodResolver(subjectSchema),
  });

  const onSubmit = handleSubmit((data) => postData(data, "/api/emails"));

  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="section-elegant bg-neutral-950 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,138,41,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.03),transparent_50%)]"></div>
        
        <div className="container-elegant relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                📧 Entre em Contato
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                Vamos Conversar sobre{" "}
                <span className="gradient-text">Soberania Digital</span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                Agende uma demonstração personalizada e descubra como a Plataforma Elevensoft pode transformar sua segurança digital.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
            {/* Formulário Principal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-7 xl:col-span-8"
            >
              <div className="bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                {/* Linha decorativa superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                
                {/* Elementos decorativos de fundo */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-3xl">✉️</span>
                  Envie sua Mensagem
                </h3>

                {!isSubmitting && !isLoading && !isSubmitSuccessful && (
                  <form onSubmit={onSubmit} className="space-y-6">
                    {/* Nome e Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          placeholder="Digite seu nome completo"
                          className={`w-full px-4 py-4 bg-neutral-800/50 border-2 rounded-xl text-white placeholder:text-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                            errors.name ? 'border-red-500' : 'border-neutral-700 hover:border-neutral-600'
                          }`}
                          {...register("name")}
                        />
                        {errors.name?.message && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-6 left-0 text-sm text-red-400 flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                            {errors.name?.message}
                          </motion.p>
                        )}
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          className={`w-full px-4 py-4 bg-neutral-800/50 border-2 rounded-xl text-white placeholder:text-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                            errors.email ? 'border-red-500' : 'border-neutral-700 hover:border-neutral-600'
                          }`}
                          {...register("email")}
                        />
                        {errors.email?.message && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-6 left-0 text-sm text-red-400 flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                            {errors.email?.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Assunto e Telefone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Assunto *
                        </label>
                        <input
                          type="text"
                          placeholder="Qual é o assunto?"
                          className={`w-full px-4 py-4 bg-neutral-800/50 border-2 rounded-xl text-white placeholder:text-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                            errors.subject ? 'border-red-500' : 'border-neutral-700 hover:border-neutral-600'
                          }`}
                          {...register("subject")}
                        />
                        {errors.subject?.message && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-6 left-0 text-sm text-red-400 flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                            {errors.subject?.message}
                          </motion.p>
                        )}
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Telefone *
                        </label>
                        <input
                          type="tel"
                          placeholder="(48) 99999-9999"
                          className={`w-full px-4 py-4 bg-neutral-800/50 border-2 rounded-xl text-white placeholder:text-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                            errors.phone ? 'border-red-500' : 'border-neutral-700 hover:border-neutral-600'
                          }`}
                          {...register("phone")}
                        />
                        {errors.phone?.message && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-6 left-0 text-sm text-red-400 flex items-center gap-2"
                          >
                            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                            {errors.phone?.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Mensagem */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        placeholder="Conte-nos sobre sua necessidade de segurança digital..."
                        rows={5}
                        className={`w-full px-4 py-4 bg-neutral-800/50 border-2 rounded-xl text-white placeholder:text-neutral-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 resize-none ${
                          errors.description ? 'border-red-500' : 'border-neutral-700 hover:border-neutral-600'
                        }`}
                        {...register("description")}
                      ></textarea>
                      {errors.description?.message && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-6 left-0 text-sm text-red-400 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                          {errors.description?.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Checkbox e Botão */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-4">
                      <div className="flex items-start gap-3">
                        <input
                          id="terms-checkbox"
                          type="checkbox"
                          className="peer sr-only"
                          required
                        />
                        <label 
                          htmlFor="terms-checkbox"
                          className="flex items-start gap-3 cursor-pointer group"
                        >
                          <span className="flex-shrink-0 w-5 h-5 border-2 border-neutral-600 rounded transition-all duration-300 peer-checked:bg-orange-500 peer-checked:border-orange-500 group-hover:border-orange-400 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-sm text-neutral-300 leading-relaxed">
                            Concordo com os{" "}
                            <a href="/termos" className="text-orange-400 hover:text-orange-300 underline">
                              termos de uso
                            </a>{" "}
                            e{" "}
                            <a href="/privacidade" className="text-orange-400 hover:text-orange-300 underline">
                              política de privacidade
                            </a>
                          </span>
                        </label>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,138,41,0.4)] flex items-center gap-3"
                      >
                        <span>Enviar Mensagem</span>
                        <motion.svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </motion.svg>
                      </motion.button>
                    </div>
                  </form>
                )}

                {/* Estados de Loading e Sucesso */}
                {(isSubmitting || isLoading) && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-16"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-neutral-700 border-t-orange-500 rounded-full mb-6"
                    />
                    <p className="text-xl text-white font-medium">Enviando sua mensagem...</p>
                    <p className="text-neutral-400">Aguarde um momento</p>
                  </motion.div>
                )}

                {isSubmitSuccessful && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6"
                    >
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Mensagem Enviada!</h3>
                    <p className="text-neutral-300 max-w-md">
                      Obrigado pelo contato! Nossa equipe entrará em contato em até 24 horas.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-5 xl:col-span-4"
            >
              <div className="bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden h-full">
                {/* Linha decorativa superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                
                {/* Elementos decorativos de fundo */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  Encontre a Gente
                </h3>

                <div className="space-y-8">
                  {/* Localização */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                          Nossa Localização
                        </h4>
                        <p className="text-neutral-300 leading-relaxed">
                          Pedra Branca, Palhoça - Santa Catarina
                        </p>
                        <p className="text-sm text-neutral-400 mt-1">
                          Centro de inovação e tecnologia
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                          Email
                        </h4>
                        <a 
                          href="mailto:ola@elevensoft.dev?subject=Interessado na Plataforma Elevensoft&body=Olá! Gostaria de saber mais sobre como a Elevensoft pode ajudar minha empresa com segurança digital." 
                          className="text-orange-400 hover:text-orange-300 transition-colors duration-300 text-lg font-medium break-all"
                        >
                          ola@elevensoft.dev
                        </a>
                        <p className="text-sm text-neutral-400 mt-1">
                          Resposta em até 24 horas
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Telefone */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">📱</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                          WhatsApp
                        </h4>
                        <a 
                          href="https://wa.me/message/X2DMDA457ASDN1" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 transition-colors duration-300 text-lg font-medium flex items-center gap-2"
                        >
                          +55 48 98816-8221
                          <span className="text-sm">→</span>
                        </a>
                        <p className="text-sm text-neutral-400 mt-1">
                          Atendimento direto via WhatsApp
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Adicional */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-6 border-t border-neutral-800/50"
                  >
                    <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-6 text-center">
                      <h5 className="text-lg font-semibold text-white mb-3">
                        🚀 Pronto para a Soberania Digital?
                      </h5>
                      <p className="text-neutral-300 mb-4 text-sm">
                        Agende uma demonstração personalizada e descubra como transformar sua segurança.
                      </p>
                      <a
                        href="https://wa.me/message/X2DMDA457ASDN1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(255,138,41,0.4)] transition-all duration-300"
                      >
                        <span>Agendar Demo</span>
                        <span className="text-lg">→</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
