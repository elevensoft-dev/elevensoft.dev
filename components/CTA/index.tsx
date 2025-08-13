"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-400 to-red-500 px-8 py-10 md:px-12 md:py-15">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <h2 className="mb-5 text-3xl font-bold text-black md:text-4xl lg:text-5xl xl:text-6xl">
                Pronto para abandonar o caos?
              </h2>
              <p className="mb-8 text-lg text-black/90 md:text-xl">
                Agende uma demonstração e descubra como a plataforma Elevensoft pode transformar sua segurança fragmentada em uma fortaleza unificada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/message/X2DMDA457ASDN1"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-orange-500 font-medium hover:bg-gray-100 transition-colors"
                >
                  Agendar Demonstração
                </a>
                <a
                  href="/precos"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-3 text-white font-medium hover:bg-white hover:text-orange-500 transition-colors"
                >
                  Ver Preços
                </a>
              </div>
              <p className="mt-6 text-sm text-black/80">
                <strong>ROI estimado de 2.156%</strong> - A era da segurança fragmentada acabou
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
