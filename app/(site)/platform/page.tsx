import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plataforma - Elevensoft",
  description: "Descubra como ESH, ESUT, Keyring e El Guardian se integram para formar um escudo impenetrável de Soberania Digital.",
};

export default function PlataformaPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 2xl:px-0">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl xl:text-6xl">
            A Visão Estratégica da{" "}
            <span className="text-orange-500">Soberania Digital</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-body-color dark:text-body-color-dark">
            Um ecossistema unificado, verticalizado e impenetrável que devolve o controle absoluto ao seu dono. 
            Por que montar um exército de mercenários desorganizados quando você pode ter as legiões unificadas e disciplinadas da Elevensoft?
          </p>
        </div>

        {/* Diagrama Interativo */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Plataforma Unificada Elevensoft</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 text-white rounded-lg p-6 mb-4">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h3 className="font-bold">EL GUARDIAN</h3>
                </div>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Fundação Blindada
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 text-white rounded-lg p-6 mb-4">
                  <div className="text-3xl mb-2">🔑</div>
                  <h3 className="font-bold">KEYRING</h3>
                </div>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Serviço de Inteligência
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 text-white rounded-lg p-6 mb-4">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h3 className="font-bold">ESH</h3>
                </div>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Ponto Único de Controle
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white rounded-lg p-6 mb-4">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-bold">ESUT</h3>
                </div>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Execução Segura
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Narrativa da Sinergia */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">A Jornada da Soberania Digital</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    Passo 1: BLINDE A FUNDAÇÃO com EL GUARDIAN
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    A prova filosófica do nosso compromisso. Nós não protegemos apenas o seu ambiente; 
                    nós blindamos o nosso próprio código, porque a soberania começa em casa.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    Passo 2: CONTROLE AS CHAVES DO REINO com KEYRING
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    O mestre das chaves que gerencia a identidade, a autenticação e o licenciamento de todo o ecossistema.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    Passo 3: DOMINE O ACESSO com ESH
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    O cérebro que centraliza, audita e comanda todo o acesso humano à infraestrutura crítica.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    Passo 4: EXECUTE COM PRECISÃO CIRÚRGICA com ESUT
                  </h3>
                  <p className="text-body-color dark:text-body-color-dark">
                    O executor que transforma políticas complexas em ações simples, guiadas e à prova de erros no terminal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-6">Pronto para recuperar sua Soberania Digital?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/X2DMDA457ASDN1"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-3 text-white font-medium hover:bg-orange-600 transition-colors"
            >
              Agendar Demonstração
            </a>
            <a
              href="/precos"
              className="inline-flex items-center justify-center rounded-md border-2 border-orange-500 px-8 py-3 text-orange-500 font-medium hover:bg-orange-500 hover:text-white transition-colors"
            >
              Ver Preços
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 