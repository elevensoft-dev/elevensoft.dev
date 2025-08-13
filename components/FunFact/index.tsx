"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-6 py-20 md:px-8 lg:py-22.5 2xl:px-0 bg-neutral-950">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-2xl bg-gradient-to-t from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm py-22.5 border border-neutral-800/50 shadow-2xl xl:py-27.5">
          {/* Elementos decorativos de fundo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,138,41,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.1),transparent_50%)]"></div>

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
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-white xl:text-sectiontitle3">
              Confiado por Empresas Globais
            </h2>
            <p className="mx-auto lg:w-11/12 text-neutral-300 leading-relaxed">
              Nossa plataforma de Soberania Digital está sendo utilizada por empresas ao redor do mundo, 
              transformando a segurança fragmentada em fortalezas unificadas.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-white xl:text-sectiontitle3">
                2.156%
              </h3>
              <p className="text-lg lg:text-para2 text-neutral-300">ROI Médio dos Clientes</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-white xl:text-sectiontitle3">
                99.9%
              </h3>
              <p className="text-lg lg:text-para2 text-neutral-300">Uptime Garantido</p>
            </motion.div>
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-white xl:text-sectiontitle3">
                0
              </h3>
              <p className="text-lg lg:text-para2 text-neutral-300">Incidentes de Segurança</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
