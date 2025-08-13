"use client";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative overflow-hidden py-32 lg:py-40 xl:py-48">
        {/* Background */}
        <div className="absolute inset-0 bg-neutral-950"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
            <div className="lg:w-1/2">
              <h4 className="mb-6 text-lg font-medium text-orange-400">
                🚨 A ERA DA SEGURANÇA FRAGMENTADA ACABOU
              </h4>
              <h1 className="mb-8 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
                Recupere sua{" "}
                <span className="text-orange-400">
                  Soberania Digital
                </span>
              </h1>
              <p className="mb-10 text-xl leading-relaxed text-neutral-300">
                A Elevensoft não vende produtos. Nós entregamos <strong>Soberania Digital</strong>. 
                Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono.
                Unifique seu controle, elimine riscos e blinde sua infraestrutura com a plataforma Elevensoft.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/plataforma"
                  className="inline-flex items-center justify-center rounded-full bg-orange-400 px-8 py-4 text-black font-semibold transition-transform hover:scale-105"
                >
                  Descobrir a Plataforma
                </a>
                <a
                  href="/precos"
                  className="inline-flex items-center justify-center rounded-full border-2 border-orange-400 px-8 py-4 text-orange-400 font-semibold hover:bg-orange-400 hover:text-black transition-colors"
                >
                  Ver Preços
                </a>
              </div>

              <p className="mt-8 text-neutral-400">
                <strong>ROI estimado de 2.156%</strong> - Pronto para abandonar o caos?
              </p>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="relative z-10 mx-auto max-w-lg text-center">
                  <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700">
                    <h3 className="text-2xl font-bold mb-6 text-white">Plataforma Unificada</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                        <div className="text-3xl mb-2">🛡️</div>
                        <div className="text-sm text-neutral-300">ESH</div>
                      </div>
                      <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                        <div className="text-3xl mb-2">⚡</div>
                        <div className="text-sm text-neutral-300">ESUT</div>
                      </div>
                      <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                        <div className="text-3xl mb-2">🔑</div>
                        <div className="text-sm text-neutral-300">KEYRING</div>
                      </div>
                      <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                        <div className="text-3xl mb-2">🛡️</div>
                        <div className="text-sm text-neutral-300">EL GUARDIAN</div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-neutral-400">
                      Conectados por linhas sólidas e azuis, formando um escudo impenetrável
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
