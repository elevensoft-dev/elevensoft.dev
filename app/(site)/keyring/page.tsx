import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KEYRING - Gerenciador de Licenças | Gestão Completa de Licenças de Software - Elevensoft",
  description: "KEYRING é o gerenciador de licenças completo que permite criar, editar e gerenciar licenças de software com features JSON flexíveis. Controle total do ciclo de vida das licenças em uma única plataforma.",
  keywords: "KEYRING, gerenciador de licenças, licenças de software, gestão de licenças, features JSON, ciclo de vida de licenças, painel de licenças, extensão de licenças, soberania digital, segurança de infraestrutura",
  authors: [{ name: "Elevensoft" }],
  creator: "Elevensoft",
  publisher: "Elevensoft",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://elevensoft.dev/keyring",
    title: "KEYRING - Gerenciador de Licenças | Gestão Completa de Licenças de Software",
    description: "Crie, edite e gerencie licenças de software com total flexibilidade usando modelos JSON. Controle completo do ciclo de vida das licenças em uma única plataforma integrada.",
    siteName: "Elevensoft",
    images: [
      {
        url: "https://elevensoft.dev/images/features/bg_3.png",
        width: 1200,
        height: 630,
        alt: "KEYRING - Gerenciador de Licenças - Gestão Completa de Licenças",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elevensoft",
    creator: "@elevensoft",
    title: "KEYRING - Gerenciador de Licenças | Gestão Completa de Licenças de Software",
    description: "Centralize, controle e gerencie todas as identidades, autenticações e licenciamentos em uma única plataforma integrada.",
    images: ["https://elevensoft.dev/images/features/bg_3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elevensoft.dev/keyring",
  },
};

export default function KeyringPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 dark:bg-neutral-950 light:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="title-product-hero">
            Gestão de Identidades e{" "}
            <span className="gradient-text-primary">Acessos</span>
          </h1>
          <h2 className="title-product-section">
            O Mestre das Chaves do Reino Digital
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300 leading-relaxed">
            Centralize, controle e gerencie todas as identidades, autenticações e licenciamentos 
            em uma única plataforma. O KEYRING é o serviço de inteligência que protege seu ecossistema.
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-20">
          <h2 className="title-product-section">
            O Caos da Gestão de Identidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-modern text-center">
              <div className="text-4xl mb-4">🔑</div>
              <h3 className="title-product-feature">
                Chaves Espalhadas
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Senhas em planilhas, chaves SSH perdidas, credenciais compartilhadas. 
                Cada acesso é um risco de segurança.
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="title-product-feature">
                Controle de Acesso Desordenado
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Funcionários com permissões incorretas, ex-colaboradores ainda com acesso, 
                ninguém sabe quem pode fazer o quê.
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="title-product-feature">
                Compliance Impossível
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Auditorias que demoram semanas, relatórios incompletos, 
                multas por não conformidade com regulamentações.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-20">
          <h2 className="title-product-section">
            A Solução KEYRING
          </h2>
          <p className="text-center text-lg text-neutral-300 mb-12 max-w-3xl mx-auto">
            O KEYRING centraliza e gerencia todas as identidades, autenticações e licenciamentos 
            em uma única plataforma integrada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Gestão Centralizada</span>
                  <span className="text-green-400">✓ ATIVO</span>
                </div>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Autenticação Multifator</span>
                  <span className="text-green-400">✓ ATIVO</span>
                </div>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Controle de Acesso</span>
                  <span className="text-green-400">✓ ATIVO</span>
                </div>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Licenciamento</span>
                  <span className="text-green-400">✓ ATIVO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="title-product-section">
            Gestão Completa de Licenças de Software
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🏢</div>
              </div>
              <h3 className="title-product-feature">
                Criação e Edição de Licenças
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Crie e edite licenças de software com total flexibilidade. 
                Defina períodos de validade, recursos e restrições de uso.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🔐</div>
              </div>
              <h3 className="title-product-feature">
                Autenticação Multifator Integrada
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                MFA nativo em todos os acessos. SMS, email, aplicativos autenticadores 
                e chaves de segurança física.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">👮‍♂️</div>
              </div>
              <h3 className="title-product-feature">
                Controle de Acesso Baseado em Roles
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Defina roles específicos para cada função. 
                Acesso granular e permissões precisas para cada responsabilidade.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">📜</div>
              </div>
              <h3 className="title-product-feature">
                Licenciamento e Compliance
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Controle total sobre licenças de software, 
                relatórios de compliance e auditorias automatizadas.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🔗</div>
              </div>
              <h3 className="title-product-feature">
                Integração com Sistemas Existentes
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Conecte-se com Active Directory, LDAP, SAML, OAuth. 
                Migração suave sem interrupção dos serviços.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">📊</div>
              </div>
              <h3 className="title-product-feature">
                Relatórios e Analytics
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Dashboards em tempo real, relatórios de acesso, 
                análise de comportamento e alertas inteligentes.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <h2 className="title-product-section">
            Como o KEYRING Protege seu Ecossistema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-modern text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="title-product-feature">
                Registro de Identidade
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Criação de usuários com informações completas, 
                incluindo foto, departamento e responsabilidades.
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="title-product-feature">
                Configuração de Roles
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Definição de permissões específicas para cada função, 
                garantindo acesso apenas ao necessário.
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="text-4xl mb-4">🔑</div>
              <h3 className="title-product-feature">
                Autenticação Segura
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Processo de login com múltiplos fatores, 
                validando a identidade antes de qualquer acesso.
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="text-4xl mb-4">👮‍♂️</div>
              <h3 className="title-product-feature">
                Controle de Acesso
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Validação de permissões em tempo real, 
                garantindo que cada usuário acesse apenas o autorizado.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="title-product-feature">
            Pronto para controlar total e absolutamente seus acessos?
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
              href="/pricing"
              className="rounded-full border-2 border-neutral-700 px-8 py-4 text-neutral-300 font-semibold hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Ver Preços
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            <strong className="text-yellow-400">Controle Total</strong> - Quem tem as chaves, tem o poder
          </p>
        </div>
      </div>
    </main>
  );
} 