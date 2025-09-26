import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Segurança - Elevensoft",
  description: "Descubra a filosofia por trás do El Guardian e como nossa paranoia com segurança é a tranquilidade do nosso cliente.",
};

export default function SecurityPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 dark:bg-neutral-950 light:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold lg:text-5xl xl:text-6xl">
            A{" "}
            <span className="gradient-text-primary">
              Fundação Blindada
            </span>{" "}
            da Elevensoft
          </h1>
          <p className="mx-auto max-w-3xl text-xl dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
            Descubra a filosofia por trás do El Guardian e como nossa paranoia com segurança é a tranquilidade do nosso cliente.
            A soberania começa em casa.
          </p>
        </div>

        {/* Filosofia de Segurança */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Por que Blindamos Nossa Própria Fundação?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Compromisso Filosófico</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      Não podemos proteger o seu ambiente se não protegermos o nosso próprio código. 
                      A segurança começa na fundação, não na superfície.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Transparência Total</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      Auditamos continuamente nosso código, revelamos vulnerabilidades antes que sejam descobertas, 
                      e compartilhamos nossa metodologia de segurança.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Resposta Imediata</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      Qualquer ameaça detectada é neutralizada em tempo real. 
                      Nossa equipe de segurança trabalha 24/7 para manter sua infraestrutura protegida.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-modern">
              <h3 className="text-2xl font-bold mb-6 text-white">El Guardian em Ação</h3>
              <div className="space-y-4">
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Proteção de Código</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Auditoria Contínua</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Prevenção de Ameaças</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Compliance Internacional</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Padrões de Segurança */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Padrões Internacionais de Segurança</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🔒</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ISO 27001</h3>
              <p className="text-neutral-300 leading-relaxed">
                Sistema de Gestão de Segurança da Informação certificado, garantindo controles robustos 
                e processos documentados para proteção de dados.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🛡️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">OWASP Top 10</h3>
              <p className="text-neutral-300 leading-relaxed">
                Nossas aplicações seguem rigorosamente as diretrizes OWASP, 
                prevenindo as principais vulnerabilidades web conhecidas.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🔐</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GDPR Compliance</h3>
              <p className="text-neutral-300 leading-relaxed">
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
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                  <span className="text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Análise de Ameaças</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Identificamos e analisamos continuamente novas ameaças, 
                    mantendo nossa base de conhecimento sempre atualizada.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                  <span className="text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Implementação de Controles</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Aplicamos controles de segurança em múltiplas camadas, 
                    criando uma defesa em profundidade.
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
                  <h3 className="text-xl font-bold text-white mb-2">Monitoramento Contínuo</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Sistemas de monitoramento 24/7 detectam e respondem 
                    a qualquer atividade suspeita em tempo real.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                  <span className="text-2xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Melhoria Contínua</h3>
                  <p className="text-neutral-300 leading-relaxed">
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
              className="btn-gradient rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.3)]"
            >
              Agendar Demonstração
            </a>
            <a
              href="/el-guardian"
              className="rounded-full border-2 border-neutral-700 px-8 py-4 text-neutral-300 font-semibold hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Conhecer El Guardian
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            <strong className="text-yellow-400">Segurança não é um produto, é uma promessa</strong> - A Elevensoft mantém sua palavra
          </p>
        </div>
      </div>
    </main>
  );
} 