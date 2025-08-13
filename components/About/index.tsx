"use client";

import SectionHeader from "@/components/Common/SectionHeader";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section id="about" className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center border border-blue-800">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">ESH - O Ponto Único de Controle</h3>
                    <p className="text-neutral-300">
                      O cérebro que centraliza, audita e comanda todo o acesso humano à infraestrutura crítica.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-900/20 rounded-lg flex items-center justify-center border border-green-800">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">ESUT - Execução Segura, Erro Zero</h3>
                    <p className="text-neutral-300">
                      O executor que transforma políticas complexas em ações simples, guiadas e à prova de erros no terminal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center border border-purple-800">
                    <span className="text-2xl">🔑</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">KEYRING - Serviço de Inteligência</h3>
                    <p className="text-neutral-300">
                      O mestre das chaves que gerencia a identidade, a autenticação e o licenciamento de todo o ecossistema.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center border border-red-800">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">EL GUARDIAN - Fundação Blindada</h3>
                    <p className="text-neutral-300">
                      A prova filosófica do nosso compromisso. Nós não protegemos apenas o seu ambiente; nós blindamos o nosso próprio código.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="/plataforma"
                  className="inline-flex items-center justify-center rounded-md bg-orange-400 px-8 py-3 text-black font-medium hover:bg-orange-500 transition-colors"
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
                  <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700">
                    <h3 className="text-2xl font-bold mb-4 text-white">Plataforma Unificada</h3>
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
            {/* <!-- About Image End --> */}
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
