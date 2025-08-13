import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KEYRING - Elevensoft",
  description: "Serviço de Inteligência. O mestre das chaves que gerencia a identidade, a autenticação e o licenciamento de todo o ecossistema.",
};

export default function KeyringPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
            KEYRING
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-orange-400">
            Serviço de Inteligência
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center border border-red-800">
                    <span className="text-2xl">🔑</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Chaves Espalhadas</h3>
                    <p className="text-neutral-300">
                      Senhas em planilhas, chaves SSH perdidas, credenciais compartilhadas. 
                      Cada acesso é um risco de segurança.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center border border-red-800">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Controle de Acesso Desordenado</h3>
                    <p className="text-neutral-300">
                      Funcionários com permissões incorretas, ex-colaboradores ainda com acesso, 
                      ninguém sabe quem pode fazer o quê.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center border border-red-800">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Compliance Impossível</h3>
                    <p className="text-neutral-300">
                      Auditorias que demoram semanas, relatórios incompletos, 
                      multas por não conformidade com regulamentações.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700">
              <h3 className="text-2xl font-bold mb-6 text-white">A Solução KEYRING</h3>
              <div className="space-y-4">
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Gestão Centralizada</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Autenticação Multifator</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Controle de Acesso</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
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
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-blue-900/20 rounded-lg p-4 mb-4 border border-blue-800">
                <div className="text-3xl mb-2">🏢</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Gestão Centralizada de Identidades</h3>
              <p className="text-neutral-300">
                Single source of truth para todas as identidades. 
                Crie, modifique e remova usuários de um único painel central.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-green-900/20 rounded-lg p-4 mb-4 border border-green-800">
                <div className="text-3xl mb-2">🔐</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Autenticação Multifator Integrada</h3>
              <p className="text-neutral-300">
                MFA nativo em todos os acessos. SMS, email, aplicativos autenticadores 
                e chaves de segurança física.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-purple-900/20 rounded-lg p-4 mb-4 border border-purple-800">
                <div className="text-3xl mb-2">👮‍♂️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Controle de Acesso Baseado em Roles</h3>
              <p className="text-neutral-300">
                Defina roles específicos para cada função. 
                Acesso granular e permissões precisas para cada responsabilidade.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-orange-900/20 rounded-lg p-4 mb-4 border border-orange-800">
                <div className="text-3xl mb-2">📜</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Licenciamento e Compliance</h3>
              <p className="text-neutral-300">
                Controle total sobre licenças de software, 
                relatórios de compliance e auditorias automatizadas.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-red-900/20 rounded-lg p-4 mb-4 border border-red-800">
                <div className="text-3xl mb-2">🔗</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Integração com Sistemas Existentes</h3>
              <p className="text-neutral-300">
                Conecte-se com Active Directory, LDAP, SAML, OAuth. 
                Migração suave sem interrupção dos serviços.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-indigo-900/20 rounded-lg p-4 mb-4 border border-indigo-800">
                <div className="text-3xl mb-2">📊</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Relatórios e Analytics</h3>
              <p className="text-neutral-300">
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
                <div className="flex-shrink-0 w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center border border-orange-800">
                  <span className="text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Registro de Identidade</h3>
                  <p className="text-neutral-300">
                    Criação de usuários com informações completas, 
                    incluindo foto, departamento e responsabilidades.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center border border-orange-800">
                  <span className="text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Configuração de Roles</h3>
                  <p className="text-neutral-300">
                    Definição de permissões específicas para cada função, 
                    garantindo acesso apenas ao necessário.
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
                  <h3 className="text-xl font-bold text-white mb-2">Autenticação Segura</h3>
                  <p className="text-neutral-300">
                    Processo de login com múltiplos fatores, 
                    validando a identidade antes de qualquer acesso.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center border border-orange-800">
                  <span className="text-2xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Controle de Acesso</h3>
                  <p className="text-neutral-300">
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
              className="inline-flex items-center justify-center rounded-md bg-orange-400 px-8 py-3 text-black font-medium hover:bg-orange-500 transition-colors"
            >
              Agendar Demonstração
            </a>
            <a
              href="/precos"
              className="inline-flex items-center justify-center rounded-md border-2 border-orange-400 px-8 py-3 text-orange-400 font-medium hover:bg-orange-400 hover:text-black transition-colors"
            >
              Ver Preços
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            <strong>Controle Total</strong> - Quem tem as chaves, tem o poder
          </p>
        </div>
      </div>
    </main>
  );
} 