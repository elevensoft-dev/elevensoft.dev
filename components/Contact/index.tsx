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
      <section id="support" className="px-6 md:px-8 2xl:px-0 py-20 lg:py-25 xl:py-30 bg-neutral-950">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            {!isSubmitting &&
              !isLoading &&
              !isSubmitSuccessful &&
              validatingFields && (
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top w-full rounded-xl bg-neutral-900/50 backdrop-blur-sm p-7.5 shadow-2xl border border-neutral-800/50 dark:bg-neutral-900/50 md:w-3/5 lg:w-3/4 xl:p-15"
                >
                  <h2 className="mb-15 text-3xl font-semibold text-white xl:text-sectiontitle2">
                    Envia uma mensagem
                  </h2>

                  <form onSubmit={onSubmit}>
                    <div className="relative mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                      <input
                        type="text"
                        placeholder="Nome completo"
                        className="w-full border-b border-neutral-700 bg-transparent pb-3.5 text-white placeholder:text-neutral-400 focus:border-orange-500 focus:placeholder:text-neutral-300 focus-visible:outline-none lg:w-1/2"
                        {...register("name")}
                      />
                      {errors.name?.message && (
                        <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                          {errors.name?.message}
                        </p>
                      )}

                      <input
                        type="email"
                        placeholder="Endereço de email"
                        className="w-full border-b border-neutral-700 bg-transparent pb-3.5 text-white placeholder:text-neutral-400 focus:border-orange-500 focus:placeholder:text-neutral-300 focus-visible:outline-none lg:w-1/2"
                        {...register("email")}
                      />
                      {errors.email?.message && (
                        <p className="absolute -bottom-5 right-0 text-xs text-red-400">
                          {errors.email?.message}
                        </p>
                      )}
                    </div>

                    <div className="relative mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                      <input
                        type="text"
                        placeholder="Assunto"
                        className="w-full border-b border-neutral-700 bg-transparent pb-3.5 text-white placeholder:text-neutral-400 focus:border-orange-500 focus:placeholder:text-neutral-300 focus-visible:outline-none lg:w-1/2"
                        {...register("subject")}
                      />
                      {errors.subject?.message && (
                        <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                          {errors.subject?.message}
                        </p>
                      )}

                      <Controller
                        name="phone"
                        control={control}
                        render={(field) => (
                          <input
                            type="text"
                            placeholder="Número do celular"
                            className="w-full border-b border-neutral-700 bg-transparent pb-3.5 text-white placeholder:text-neutral-400 focus:border-orange-500 focus:placeholder:text-neutral-300 focus-visible:outline-none lg:w-1/2"
                            {...register("phone")}
                          />
                        )}
                      />
                      {errors.phone?.message && (
                        <p className="absolute -bottom-5 right-0 text-xs text-red-400">
                          {errors.phone?.message}
                        </p>
                      )}
                    </div>

                    <div className="relative mb-11.5 flex">
                      <textarea
                        placeholder="Mensagem"
                        rows={4}
                        className="w-full border-b border-neutral-700 bg-transparent text-white placeholder:text-neutral-400 focus:border-orange-500 focus:placeholder:text-neutral-300 focus-visible:outline-none"
                        {...register("description")}
                      ></textarea>
                      {errors.description?.message && (
                        <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                          {errors.description?.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 xl:justify-between ">
                      <div className="mb-4 flex md:mb-0">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          className="peer sr-only"
                        />
                        <span className="group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded border-neutral-600 bg-neutral-700 text-orange-400 peer-checked:bg-orange-500">
                          <svg
                            className="opacity-0 peer-checked:group-[]:opacity-100"
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <label
                          htmlFor="default-checkbox"
                          className="flex max-w-[425px] cursor-pointer select-none pl-5 text-neutral-300"
                        >
                          Concordo com termos de "Formulário" e consente com o
                          uso de cookies no navegador.
                        </label>
                      </div>

                      <button
                        type="submit"
                        aria-label="send message"
                        className="btn-gradient rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
                      >
                        <span>Enviar mensagem</span>
                        <svg
                          className="fill-black"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            {(isSubmitting || isLoading) && (
              <div className="flex min-h-[620px] w-full animate-pulse items-center justify-center rounded-xl bg-neutral-800/50 backdrop-blur-sm">
                <span className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-600 border-t-orange-500"></span>
              </div>
            )}
            {isSubmitSuccessful && (
              <div className="min-h-[620px] w-full card-modern flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold text-white mb-2">Tudo certo!</h1>
                <p className="text-base text-neutral-300">
                  Sua mensagem foi enviada ao time comercial!
                </p>
              </div>
            )}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-white xl:text-sectiontitle2">
                Encontre a gente
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-white">
                  Nossa localização
                </h3>
                <p className="text-neutral-300">Pedra Branca, Palhoça - Santa Catarina</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-white">
                  Endereço de email
                </h3>
                <p className="text-neutral-300">
                  <a href="mailto:ola@elevensoft.dev?subject=Interessado em construir projeto&body=Olá, sou o [Nome do Cliente]. Gostaria de conversar sobre minha proposta." className="hover:text-orange-400 transition-colors duration-200">
                    ola@elevensoft.dev
                  </a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-white">
                  Telefone
                </h4>
                <p className="text-neutral-300">
                  <a href="tel:+5548988168221" target="_blank" className="hover:text-orange-400 transition-colors duration-200">
                    +55 48 98816-8221
                  </a>
                </p>
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
