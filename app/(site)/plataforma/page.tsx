import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plataforma - Elevensoft",
  description: "Descubra como ESH, ESUT, Keyring e El Guardian se integram para formar um escudo impenetrável de Soberania Digital.",
};

export default function PlatformPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 dark:bg-neutral-950 light:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="title-product-hero">
            A Visão Estratégica da{" "}
            <span className="gradient-text-primary">
              Soberania Digital
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-neutral-300 leading-relaxed">
            Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono. 
            Por que montar um exército de mercenários desorganizados quando você pode ter as legiões unificadas e disciplinadas da Elevensoft?
          </p>
        </div>

        {/* Interactive Diagram */}
        <div className="mb-20">
          <div className="card-modern">
            <h2 className="title-product-section">
              Plataforma Unificada Elevensoft
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 mb-4 shadow-lg">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h3 className="font-bold">EL GUARDIAN</h3>
                </div>
                <p className="text-sm text-neutral-300">
                  Fundação Blindada
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 mb-4 shadow-lg">
                  <div className="text-3xl mb-2">🔑</div>
                  <h3 className="font-bold">KEYRING</h3>
                </div>
                <p className="text-sm text-neutral-300">
                  Serviço de Inteligência
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 mb-4 shadow-lg">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h3 className="font-bold">ESH</h3>
                </div>
                <p className="text-sm text-neutral-300">
                  Ponto Único de Controle
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 mb-4 shadow-lg">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-bold">ESUT</h3>
                </div>
                <p className="text-sm text-neutral-300">
                  Execução Segura
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Synergy Narrative */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="title-product-section">
              A Jornada da Soberania Digital
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                  <span className="text-2xl">1</span>
                </div>
                <div>
                  <h3 className="title-product-feature">
                    Passo 1: BLINDE A FUNDAÇÃO com EL GUARDIAN
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    A prova filosófica do nosso compromisso. Nós não protegemos apenas o seu ambiente; 
                    nós blindamos o nosso próprio código, porque a soberania começa em casa.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                  <span className="text-2xl">2</span>
                </div>
                <div>
                  <h3 className="title-product-feature">
                    Passo 2: CONTROLE AS CHAVES DO REINO com KEYRING
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    O mestre das chaves que gerencia a identidade, a autenticação e o licenciamento de todo o ecossistema.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                  <span className="text-2xl">3</span>
                </div>
                <div>
                  <h3 className="title-product-feature">
                    Passo 3: CENTRALIZE O CONTROLE com ESH
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    O cérebro que centraliza, audita e comanda todo o acesso humano à infraestrutura crítica.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                  <span className="text-2xl">4</span>
                </div>
                <div>
                  <h3 className="title-product-feature">
                    Passo 4: EXECUTE COM PRECISÃO com ESUT
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    O executor que transforma políticas complexas em ações simples, guiadas e à prova de erros no terminal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="title-product-feature">
            Pronto para recuperar sua Soberania Digital?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/X2DMDA457ASDN1"
              target="_blank"
              className="btn-gradient rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.3)]"
            >
              Agendar Demonstração
            </a>
            <a
              href="/precos"
              className="rounded-full border-2 border-neutral-700 px-8 py-4 text-neutral-300 font-semibold hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Ver Preços
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 