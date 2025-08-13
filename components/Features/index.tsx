"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "@/components/Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30 bg-neutral-900/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            title="Sua Segurança é um Quebra-Cabeça Frágil?"
            subtitle="O caos de dezenas de ferramentas desconexas, senhas em planilhas, scripts manuais, VPNs lentas e a constante ansiedade de não saber quem tem acesso a quê."
            variant="danger"
            className="mb-16"
          />
          {/* <!-- Section Title End --> */}

          {/* <!-- Features List Start --> */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          {/* <!-- Features List End --> */}
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
