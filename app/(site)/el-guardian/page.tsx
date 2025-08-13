import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EL GUARDIAN - Elevensoft",
  description: "Fundação Blindada. A prova filosófica do nosso compromisso. Nós não protegemos apenas o seu ambiente; nós blindamos o nosso próprio código.",
};

export default function ElGuardianPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
            EL GUARDIAN
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-orange-400">
            Fundação Blindada
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300">
            A prova filosófica do nosso compromisso. Nós não protegemos apenas o seu ambiente; 
            nós blindamos o nosso próprio código, porque a soberania começa em casa.
          </p>
        </div>

        {/* Filosofia */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Por que Blindamos Nossa Própria Fundação?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center border border-red-800">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Compromisso Filosófico</h3>
                    <p className="text-neutral-300">
                      Não podemos proteger o seu ambiente se não protegermos o nosso próprio código. 
                      A segurança começa na fundação, não na superfície.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center border border-blue-800">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Transparência Total</h3>
                    <p className="text-neutral-300">
                      Auditamos continuamente nosso código, revelamos vulnerabilidades antes que sejam descobertas, 
                      e compartilhamos nossa metodologia de segurança.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-900/20 rounded-lg flex items-center justify-center border border-green-800">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Resposta Imediata</h3>
                    <p className="text-neutral-300">
                      Qualquer ameaça detectada é neutralizada em tempo real. 
                      Nossa equipe de segurança trabalha 24/7 para manter sua infraestrutura protegida.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700">
              <h3 className="text-2xl font-bold mb-6 text-white">El Guardian em Ação</h3>
              <div className="space-y-4">
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Proteção de Código</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Auditoria Contínua</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Prevenção de Ameaças</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Compliance Internacional</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Funcionalidades Principais */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Proteção de Nível Militar para seu Código</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-red-900/20 rounded-lg p-4 mb-4 border border-red-800">
                <div className="text-3xl mb-2">🔒</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proteção do Código Fonte</h3>
              <p className="text-neutral-300">
                Criptografia de nível militar para todo o código fonte. 
                Proteção contra vazamentos, espionagem industrial e ataques direcionados.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-blue-900/20 rounded-lg p-4 mb-4 border border-blue-800">
                <div className="text-3xl mb-2">🔍</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Auditoria de Segurança Contínua</h3>
              <p className="text-neutral-300">
                Análise automática 24/7 de vulnerabilidades, 
                dependências comprometidas e padrões de código inseguros.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-green-900/20 rounded-lg p-4 mb-4 border border-green-800">
                <div className="text-3xl mb-2">🚫</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Prevenção de Vulnerabilidades</h3>
              <p className="text-neutral-300">
                Bloqueio proativo de código perigoso antes da compilação. 
                Validação automática de padrões de segurança e boas práticas.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-purple-900/20 rounded-lg p-4 mb-4 border border-purple-800">
                <div className="text-3xl mb-2">📋</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Compliance com Padrões Internacionais</h3>
              <p className="text-neutral-300">
                Conformidade automática com ISO 27001, OWASP Top 10, 
                NIST Cybersecurity Framework e outras normas globais.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-orange-900/20 rounded-lg p-4 mb-4 border border-orange-800">
                <div className="text-3xl mb-2">👁️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparência Total de Segurança</h3>
              <p className="text-neutral-300">
                Relatórios detalhados de todas as verificações, 
                vulnerabilidades encontradas e ações tomadas para correção.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-indigo-900/20 rounded-lg p-4 mb-4 border border-indigo-800">
                <div className="text-3xl mb-2">🔄</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Integração com a Plataforma</h3>
              <p className="text-neutral-300">
                Funciona perfeitamente com ESH, ESUT e KEYRING, 
                criando um ecossistema de segurança impenetrável.
              </p>
            </div>
          </div>
        </div>

        {/* Padrões de Segurança */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Padrões Internacionais de Segurança</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-blue-900/20 rounded-lg p-4 mb-4 border border-blue-800">
                <div className="text-3xl mb-2">🔒</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ISO 27001</h3>
              <p className="text-neutral-300">
                Sistema de Gestão de Segurança da Informação certificado, garantindo controles robustos 
                e processos documentados para proteção de dados.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-green-900/20 rounded-lg p-4 mb-4 border border-green-800">
                <div className="text-3xl mb-2">🛡️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">OWASP Top 10</h3>
              <p className="text-neutral-300">
                Nossas aplicações seguem rigorosamente as diretrizes OWASP, 
                prevenindo as principais vulnerabilidades web conhecidas.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-purple-900/20 rounded-lg p-4 mb-4 border border-purple-800">
                <div className="text-3xl mb-2">🔐</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GDPR Compliance</h3>
              <p className="text-neutral-300">
                Total conformidade com regulamentações de proteção de dados, 
                garantindo privacidade e controle total sobre informações pessoais.
              </p>
            </div>
          </div>
        </div>

        {/* Processo de Segurança */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Nosso Processo de Segurança</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center border border-orange-800">
                  <span className="text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Análise de Ameaças</h3>
                  <p className="text-neutral-300">
                    Identificamos e analisamos continuamente novas ameaças, 
                    mantendo nossa base de conhecimento sempre atualizada.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center border border-orange-800">
                  <span className="text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Implementação de Controles</h3>
                  <p className="text-neutral-300">
                    Aplicamos controles de segurança em múltiplas camadas, 
                    criando uma defesa em profundidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center border border-orange-800">
                  <span className="text-2xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Monitoramento Contínuo</h3>
                  <p className="text-neutral-300">
                    Sistemas de monitoramento 24/7 detectam e respondem 
                    a qualquer atividade suspeita em tempo real.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center border border-orange-800">
                  <span className="text-2xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Melhoria Contínua</h3>
                  <p className="text-neutral-300">
                    Aprendemos com cada incidente, melhorando constantemente 
                    nossos processos e controles de segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Pronto para experimentar a segurança de nível militar?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/X2DMDA457ASDN1"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-orange-400 px-8 py-3 text-black font-medium hover:bg-orange-500 transition-colors"
            >
              Agendar Demonstração
            </a>
            <a
              href="/seguranca"
              className="inline-flex items-center justify-center rounded-md border-2 border-orange-400 px-8 py-3 text-orange-400 font-medium hover:bg-orange-400 hover:text-black transition-colors"
            >
              Ver Segurança
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            <strong>Segurança não é um produto, é uma promessa</strong> - A Elevensoft mantém sua palavra
          </p>
        </div>
      </div>
    </main>
  );
} 