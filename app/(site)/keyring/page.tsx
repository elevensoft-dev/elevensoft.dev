import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KEYRING - Elevensoft",
  description: "Serviço de Inteligência. O mestre das chaves que gerencia a identidade, a autenticação e o licenciamento de todo o ecossistema.",
};

export default function KeyringPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold lg:text-5xl xl:text-6xl">
            KEYRING
          </h1>
          <h2 className="mb-6 text-2xl font-semibold gradient-text-primary">
            Serviço de Inteligência
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-neutral-300 leading-relaxed">
            O mestre das chaves que gerencia a identidade, a autenticação e o licenciamento de todo o ecossistema. 
            Controle total sobre quem acessa o quê, quando e como.
          </p>
        </div>

        {/* Problema e Solução */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">O Caos da Gestão de Identidades</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                    <span className="text-2xl">🔑</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Chaves Espalhadas</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      Senhas em planilhas, chaves SSH perdidas, credenciais compartilhadas. 
                      Cada acesso é um risco de segurança.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Controle de Acesso Desordenado</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      Funcionários com permissões incorretas, ex-colaboradores ainda com acesso, 
                      ninguém sabe quem pode fazer o quê.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Compliance Impossível</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      Auditorias que demoram semanas, relatórios incompletos, 
                      multas por não conformidade com regulamentações.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-modern">
              <h3 className="text-2xl font-bold mb-6 text-white">A Solução KEYRING</h3>
              <div className="space-y-4">
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
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
        </div>

        {/* Funcionalidades Principais */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Controle Total sobre Identidades e Acessos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🏢</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Gestão Centralizada de Identidades</h3>
              <p className="text-neutral-300 leading-relaxed">
                Single source of truth para todas as identidades. 
                Crie, modifique e remova usuários de um único painel central.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🔐</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Autenticação Multifator Integrada</h3>
              <p className="text-neutral-300 leading-relaxed">
                MFA nativo em todos os acessos. SMS, email, aplicativos autenticadores 
                e chaves de segurança física.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">👮‍♂️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Controle de Acesso Baseado em Roles</h3>
              <p className="text-neutral-300 leading-relaxed">
                Defina roles específicos para cada função. 
                Acesso granular e permissões precisas para cada responsabilidade.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">📜</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Licenciamento e Compliance</h3>
              <p className="text-neutral-300 leading-relaxed">
                Controle total sobre licenças de software, 
                relatórios de compliance e auditorias automatizadas.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🔗</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Integração com Sistemas Existentes</h3>
              <p className="text-neutral-300 leading-relaxed">
                Conecte-se com Active Directory, LDAP, SAML, OAuth. 
                Migração suave sem interrupção dos serviços.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">📊</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Relatórios e Analytics</h3>
              <p className="text-neutral-300 leading-relaxed">
                Dashboards em tempo real, relatórios de acesso, 
                análise de comportamento e alertas inteligentes.
              </p>
            </div>
          </div>
        </div>

        {/* Como Funciona */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Como o KEYRING Protege seu Ecossistema</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                  <span className="text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Registro de Identidade</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Criação de usuários com informações completas, 
                    incluindo foto, departamento e responsabilidades.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                  <span className="text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Configuração de Roles</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Definição de permissões específicas para cada função, 
                    garantindo acesso apenas ao necessário.
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
                  <h3 className="text-xl font-bold text-white mb-2">Autenticação Segura</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Processo de login com múltiplos fatores, 
                    validando a identidade antes de qualquer acesso.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-neutral-700/50">
                  <span className="text-2xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Controle de Acesso</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Validação de permissões em tempo real, 
                    garantindo que cada usuário acesse apenas o autorizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Pronto para controlar total e absolutamente seus acessos?</h3>
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
          <p className="mt-6 text-sm text-neutral-400">
            <strong className="text-yellow-400">Controle Total</strong> - Quem tem as chaves, tem o poder
          </p>
        </div>
      </div>
    </main>
  );
} 