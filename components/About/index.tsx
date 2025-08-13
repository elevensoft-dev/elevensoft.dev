"use client";

import SectionHeader from "@/components/Common/SectionHeader";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section id="about" className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-16">
            {/* <!-- About Content Start --> */}
            <div className="lg:w-1/2">
              <SectionHeader
                title="Nós Construímos a Fortaleza"
                subtitle="Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono."
                variant="success"
                className="text-left mb-10"
              />
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50 hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">ESH - O Ponto Único de Controle</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      O cérebro que centraliza, audita e comanda todo o acesso humano à infraestrutura crítica.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50 hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">ESUT - Execução Segura, Erro Zero</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      O executor que transforma políticas complexas em ações simples, guiadas e à prova de erros no terminal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50 hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300">
                    <span className="text-2xl">🔑</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">KEYRING - Serviço de Inteligência</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      O mestre das chaves que gerencia a identidade, a autenticação e o licenciamento de todo o ecossistema.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50 hover:bg-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">EL GUARDIAN - Fundação Blindada</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      A prova filosófica do nosso compromisso. Nós não protegemos apenas o seu ambiente; nós blindamos o nosso próprio código.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="/plataforma"
                  className="btn-gradient rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
                >
                  Ver Como Funciona
                </a>
              </div>
            </div>
            {/* <!-- About Content End --> */}

            {/* <!-- About Image Start --> */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="relative z-10 mx-auto max-w-[500px] text-center">
                  <div className="card-modern p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white">Plataforma Unificada</h3>
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
            {/* <!-- About Image End --> */}
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
