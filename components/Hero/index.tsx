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
        {/* Background com gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900"></div>
        
        {/* Elementos de fundo decorativos */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,138,41,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.1),transparent_50%)]"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
            <div className="lg:w-1/2">
              <h4 className="mb-6 text-lg font-medium text-orange-400 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                🚨 A ERA DA SEGURANÇA FRAGMENTADA ACABOU
              </h4>
              <h1 className="mb-8 text-4xl font-bold lg:text-5xl xl:text-6xl">
                Recupere sua{" "}
                <span className="gradient-text">
                  Soberania Digital
                </span>
              </h1>
              <p className="mb-10 text-xl leading-relaxed text-neutral-300">
                A Elevensoft não vende produtos. Nós entregamos <strong className="text-orange-400">Soberania Digital</strong>. 
                Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono.
                Unifique seu controle, elimine riscos e blinde sua infraestrutura com a plataforma Elevensoft.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/plataforma"
                  className="btn-gradient rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.3)]"
                >
                  Descobrir a Plataforma
                </a>
                <a
                  href="/precos"
                  className="inline-flex items-center justify-center rounded-full border-2 border-neutral-700 px-8 py-4 text-neutral-300 font-semibold hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Preços
                </a>
              </div>

              <p className="mt-8 text-neutral-400">
                <strong className="text-yellow-400">ROI estimado de 2.156%</strong> - Pronto para abandonar o caos?
              </p>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="relative z-10 mx-auto max-w-lg text-center">
                  <div className="card-modern p-8">
                    <h3 className="text-2xl font-bold mb-6 text-white">Plataforma Unificada</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50 hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300">
                        <div className="text-3xl mb-2">🛡️</div>
                        <div className="text-sm text-neutral-300">ESH</div>
                      </div>
                      <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50 hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300">
                        <div className="text-3xl mb-2">⚡</div>
                        <div className="text-sm text-neutral-300">ESUT</div>
                      </div>
                      <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50 hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300">
                        <div className="text-3xl mb-2">🔑</div>
                        <div className="text-sm text-neutral-300">KEYRING</div>
                      </div>
                      <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50 hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300">
                        <div className="text-3xl mb-2">🛡️</div>
                        <div className="text-sm text-neutral-300">EL GUARDIAN</div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-neutral-400">
                      Conectados por linhas sólidas e azuis, formando um escudo impenetrável
                    </div>
                  </div>
                </div>
                
                {/* Elementos decorativos flutuantes */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
