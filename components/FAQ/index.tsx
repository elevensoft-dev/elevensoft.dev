"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* FAQ Section */}
      <section className="section-elegant overflow-hidden bg-neutral-950">
        <div className="container-elegant relative z-10">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-2/5 lg:w-1/2"
            >
              <span className="font-medium uppercase text-orange-400">
                FAQ Elevensoft
              </span>
              <h2 className="title-section">
                Perguntas{" "}
                <span className="gradient-text-hero">
                  Frequentes
                </span>
              </h2>
              <p className="mb-8 text-neutral-300 leading-relaxed text-lg max-w-2xl">
                Tire suas dúvidas sobre a Plataforma Elevensoft e como ela pode transformar sua segurança digital.
              </p>

              <a
                href="https://wa.me/message/X2DMDA457ASDN1"
                target="_blank"
                className="group mt-7.5 inline-flex items-center gap-2.5 text-orange-400 hover:text-orange-300 transition-colors duration-200"
              >
                <span className="duration-300 group-hover:pr-2">Agendar Demonstração</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-3/5 lg:w-1/2"
            >
              <div className="card-modern">
                {faqData.map((faq, key) => (
                  <FAQItem
                    key={key}
                    faqData={{ ...faq, activeFaq, handleFaqToggle }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
