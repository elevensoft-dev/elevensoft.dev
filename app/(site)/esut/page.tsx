import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESUT - Eleven Shell Utility Tool - Elevensoft",
  description: "Execução Segura, Erro Zero. O executor que transforma políticas complexas em ações simples, guiadas e à prova de erros no terminal.",
};

export default function ESUTPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
            ESUT - Eleven Shell Utility Tool
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-orange-400">
            Execução Segura, Erro Zero
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300">
            O executor que transforma políticas complexas em ações simples, guiadas e à prova de erros no terminal. 
            Transforme comandos perigosos em operações seguras e eficientes.
          </p>
        </div>

        {/* Problema e Solução */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">O Problema: Execução Manual = Desastre Garantido</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center border border-red-800">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Comandos Perigosos</h3>
                    <p className="text-neutral-300">
                      Um simples `rm -rf /` pode destruir toda a infraestrutura. 
                      Sem controle, cada execução é uma roleta russa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center border border-red-800">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Tempo Perdido</h3>
                    <p className="text-neutral-300">
                      Horas gastas corrigindo erros, restaurando backups, 
                      e explicando para o CEO por que o sistema caiu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center border border-red-800">
                    <span className="text-2xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Sem Auditoria</h3>
                    <p className="text-neutral-300">
                      Ninguém sabe quem executou o quê, quando e por quê. 
                      Compliance é impossível sem rastreabilidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700">
              <h3 className="text-2xl font-bold mb-6 text-white">A Solução ESUT</h3>
              <div className="space-y-4">
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Execução Guiada</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Prevenção de Erros</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Auditoria Completa</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
                <div className="bg-neutral-700 rounded-lg p-4 border border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300">Políticas Automatizadas</span>
                    <span className="text-green-400">✓ ATIVO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Funcionalidades Principais */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Funcionalidades que Transformam o Terminal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-green-900/20 rounded-lg p-4 mb-4 border border-green-800">
                <div className="text-3xl mb-2">🛡️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Execução Guiada e à Prova de Erros</h3>
              <p className="text-neutral-300">
                Transforme comandos complexos em operações simples e seguras. 
                O ESUT guia o usuário através de cada passo, prevenindo erros catastróficos.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-blue-900/20 rounded-lg p-4 mb-4 border border-blue-800">
                <div className="text-3xl mb-2">⚙️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Políticas de Segurança Automatizadas</h3>
              <p className="text-neutral-300">
                Configure políticas que bloqueiam automaticamente comandos perigosos. 
                O ESUT aplica as regras antes mesmo da execução.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-purple-900/20 rounded-lg p-4 mb-4 border border-purple-800">
                <div className="text-3xl mb-2">📋</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Menu de Comandos Pré-aprovados</h3>
              <p className="text-neutral-300">
                Biblioteca de comandos seguros e testados. 
                Nenhuma operação manual, apenas seleções seguras e eficientes.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-orange-900/20 rounded-lg p-4 mb-4 border border-orange-800">
                <div className="text-3xl mb-2">🚫</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Prevenção de Comandos Perigosos</h3>
              <p className="text-neutral-300">
                Bloqueio inteligente de comandos que podem causar danos. 
                O ESUT analisa cada comando antes da execução.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-red-900/20 rounded-lg p-4 mb-4 border border-red-800">
                <div className="text-3xl mb-2">📊</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Logs Detalhados de Todas as Operações</h3>
              <p className="text-neutral-300">
                Auditoria completa de quem executou o quê, quando e por quê. 
                Compliance total e rastreabilidade absoluta.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-indigo-900/20 rounded-lg p-4 mb-4 border border-indigo-800">
                <div className="text-3xl mb-2">🔄</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Integração com ESH e KEYRING</h3>
              <p className="text-neutral-300">
                Funciona perfeitamente com o resto da plataforma Elevensoft. 
                Controle centralizado, autenticação segura, execução protegida.
              </p>
            </div>
          </div>
        </div>

        {/* Como Funciona */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Como o ESUT Transforma sua Operação</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center border border-orange-800">
                  <span className="text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Autenticação Segura</h3>
                  <p className="text-neutral-300">
                    O usuário se autentica através do KEYRING, recebendo permissões 
                    específicas para suas responsabilidades.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center border border-orange-800">
                  <span className="text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Acesso Controlado</h3>
                  <p className="text-neutral-300">
                    O ESH valida o acesso e direciona o usuário para o terminal 
                    com as permissões adequadas.
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
                  <h3 className="text-xl font-bold text-white mb-2">Execução Guiada</h3>
                  <p className="text-neutral-300">
                    O ESUT apresenta um menu de comandos pré-aprovados, 
                    guiando o usuário através de operações seguras.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-900/20 rounded-lg flex items-center justify-center border border-orange-800">
                  <span className="text-2xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Auditoria Completa</h3>
                  <p className="text-neutral-300">
                    Cada operação é registrada com detalhes completos, 
                    garantindo compliance e rastreabilidade total.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Pronto para eliminar erros e executar com precisão cirúrgica?</h3>
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
            <strong>Execução Segura, Erro Zero</strong> - Transforme seu terminal em uma arma de precisão
          </p>
        </div>
      </div>
    </main>
  );
} 