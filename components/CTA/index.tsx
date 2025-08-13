"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-10 md:px-12 md:py-15 shadow-2xl">
            {/* Elementos decorativos de fundo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <h2 className="mb-5 text-3xl font-bold text-black md:text-4xl lg:text-5xl xl:text-6xl">
                Pronto para abandonar o caos?
              </h2>
              <p className="mb-8 text-lg text-black/90 md:text-xl leading-relaxed">
                Agende uma demonstração e descubra como a plataforma Elevensoft pode transformar sua segurança fragmentada em uma fortaleza unificada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/message/X2DMDA457ASDN1"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-orange-500 font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Agendar Demonstração
                </a>
                <a
                  href="/precos"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-3 text-white font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105"
                >
                  Ver Preços
                </a>
              </div>
              <p className="mt-6 text-sm text-black/80">
                <strong>ROI estimado de 2.156%</strong> - A era da segurança fragmentada acabou
              </p>
            </div>
            
            {/* Elementos decorativos flutuantes */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
