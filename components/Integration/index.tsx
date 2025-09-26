"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section className="section-elegant dark:bg-neutral-950 light:bg-neutral-50">
        <div className="container-elegant">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="title-section text-center">
              <span className="gradient-text-hero">Soluções</span>
            </h2>
            <p className="text-xl dark:text-neutral-300 light:text-neutral-700 max-w-3xl mx-auto leading-relaxed text-center">
              Software e serviço projetados para cada segmento
            </p>
          </div>

          <div className="relative z-50 mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-around gap-y-10">
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
                className="animate_top w-1/6"
              >
                <div className="inline-block rounded-xl dark:bg-neutral-800/50 light:bg-neutral-100/50 backdrop-blur-sm p-4.5 shadow-lg dark:border-neutral-700/50 light:border-neutral-300/50 border hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300">
                  <Image
                    width={50}
                    height={50}
                    src="./images/brand/brand-07.svg"
                    alt="Brand"
                  />
                </div>
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              ></motion.div>

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
                className="animate_top w-1/6"
              >
                <div className="inline-block rounded-xl dark:bg-neutral-800/50 light:bg-neutral-100/50 backdrop-blur-sm p-4.5 shadow-lg dark:border-neutral-700/50 light:border-neutral-300/50 border hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300">
                  <Image
                    width={50}
                    height={50}
                    src="./images/brand/brand-08.svg"
                    alt="Brand"
                  />
                </div>
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              >
                <div className="h-[11px] w-[11px] rounded-full bg-yellow-400 shadow-lg"></div>
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              >
                <div className="inline-block rounded-xl dark:bg-neutral-800/50 light:bg-neutral-100/50 backdrop-blur-sm p-4.5 shadow-lg dark:border-neutral-700/50 light:border-neutral-300/50 border hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300">
                  <Image
                    width={50}
                    height={50}
                    src="./images/brand/brand-09.svg"
                    alt="Brand"
                  />
                </div>
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              ></motion.div>

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
                className="animate_top w-1/6"
              >
                <div className="h-[15px] w-[15px] rounded-full bg-green-400 shadow-lg"></div>
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              >
                <div className="inline-block rounded-xl dark:bg-neutral-800/50 light:bg-neutral-100/50 backdrop-blur-sm p-4.5 shadow-lg dark:border-neutral-700/50 light:border-neutral-300/50 border hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300">
                  <Image
                    width={50}
                    height={50}
                    src="./images/brand/brand-10.svg"
                    alt="Brand"
                  />
                </div>
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              >
                <div className="h-[23px] w-[23px] rounded-full bg-orange-500 shadow-lg"></div>
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              >
                <div className="inline-block rounded-xl dark:bg-neutral-800/50 light:bg-neutral-100/50 backdrop-blur-sm p-4.5 shadow-lg dark:border-neutral-700/50 light:border-neutral-300/50 border hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300">
                  <Image
                    width={50}
                    height={50}
                    src="./images/brand/brand-11.svg"
                    alt="Brand"
                  />
                </div>
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              >
                <div className="h-[15px] w-[15px] rounded-full bg-blue-500 shadow-lg"></div>
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
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-1/6"
              >
                <div className="inline-block rounded-xl dark:bg-neutral-800/50 light:bg-neutral-100/50 backdrop-blur-sm p-4.5 shadow-lg dark:border-neutral-700/50 light:border-neutral-300/50 border hover:bg-orange-500/10 hover:border-orange-500/50 transition-all duration-300">
                  <Image
                    width={50}
                    height={50}
                    src="./images/brand/brand-12.svg"
                    alt="Brand"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
