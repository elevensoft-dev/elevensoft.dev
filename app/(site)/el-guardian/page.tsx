import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EL GUARDIAN - Elevensoft",
  description: "Fundação Blindada. A prova filosófica do nosso compromisso. Nós não protegemos apenas o seu ambiente; nós blindamos o nosso próprio código.",
};

export default function ElGuardianPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 dark:bg-neutral-950 light:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="title-product-hero">
            EL GUARDIAN -{" "}
            <span className="gradient-text-primary">Fundação Blindada</span>
          </h1>
          <h2 className="title-product-section">
            A Prova Filosófica do Nosso Compromisso
          </h2>
          <p className="mx-auto max-w-3xl text-lg dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
            Nós não protegemos apenas o seu ambiente; nós blindamos o nosso próprio código. 
            O EL GUARDIAN é a fundação que garante que nossa plataforma seja tão segura quanto prometemos.
          </p>
        </div>

        {/* What is EL Guardian */}
        <div className="mb-20">
          <h2 className="title-product-section">
            O que é o EL GUARDIAN?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                O <strong className="text-orange-400">EL GUARDIAN</strong> é o componente de segurança 
                que protege nossa própria plataforma. É a prova de que praticamos o que pregamos.
              </p>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Enquanto outras empresas vendem ferramentas de segurança sem se preocupar com a própria segurança, 
                nós blindamos cada linha de código, cada endpoint, cada funcionalidade.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                O EL GUARDIAN monitora, detecta e previne ataques contra nossa plataforma, 
                garantindo que você sempre tenha acesso aos seus sistemas.
              </p>
            </div>
            <div className="card-modern p-8">
              <h3 className="title-product-feature mb-6">
                Por que o EL GUARDIAN é Único?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">Proteção da Plataforma</div>
                    <div className="text-neutral-400 text-sm">Segurança de dentro para fora</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">Transparência Total</div>
                    <div className="text-neutral-400 text-sm">Código aberto e auditável</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">Monitoramento 24/7</div>
                    <div className="text-neutral-400 text-sm">Detecção em tempo real</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="title-product-section">
            Funcionalidades de Proteção Avançada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="title-product-feature">
                Proteção contra Ataques
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Detecção e prevenção de ataques DDoS, SQL injection, XSS e outras ameaças 
                contra nossa infraestrutura.
              </p>
            </div>
            <div className="card-modern">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="title-product-feature">
                Monitoramento Inteligente
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Análise comportamental e detecção de anomalias que identificam 
                ameaças antes que causem danos.
              </p>
            </div>
            <div className="card-modern">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="title-product-feature">
                Resposta Automática
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Ações automáticas de proteção que bloqueiam ameaças em tempo real, 
                sem intervenção manual.
              </p>
            </div>
            <div className="card-modern">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="title-product-feature">
                Relatórios de Segurança
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Dashboard completo com métricas de segurança, tentativas de ataque 
                e status de proteção em tempo real.
              </p>
            </div>
            <div className="card-modern">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="title-product-feature">
                Criptografia Avançada
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Todas as comunicações e dados são criptografados usando os padrões 
                mais avançados de segurança.
              </p>
            </div>
            <div className="card-modern">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="title-product-feature">
                Proteção Global
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Rede de proteção distribuída globalmente que garante 
                disponibilidade e segurança em qualquer região.
              </p>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-20">
          <h2 className="title-product-section">
            Por que o EL GUARDIAN é Fundamental?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="card-modern p-8">
              <h3 className="title-product-feature mb-6">
                A Hipocrisia da Segurança
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Muitas empresas vendem ferramentas de segurança enquanto suas próprias 
                plataformas são vulneráveis a ataques básicos.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Nós não fazemos isso. O EL GUARDIAN é nossa prova de que praticamos 
                o que pregamos sobre segurança.
              </p>
            </div>
            <div>
              <h3 className="title-product-feature mb-6">
                Confiança Total
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Quando você confia sua segurança à Elevensoft, você sabe que nossa 
                própria plataforma está protegida pelo mesmo nível de segurança.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Não há contradição entre o que vendemos e o que praticamos. 
                O EL GUARDIAN garante isso.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="title-product-feature">
            Pronto para confiar em uma empresa que protege sua própria plataforma?
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
              href="/security"
              className="rounded-full border-2 border-neutral-700 px-8 py-4 text-neutral-300 font-semibold hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Ver Segurança
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