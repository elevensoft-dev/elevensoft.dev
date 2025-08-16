import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESUT - Eleven Shell Utility Tool - Elevensoft",
  description: "Execução Segura, Erro Zero. O executor que transforma políticas complexas em ações simples, guiadas e à prova de erros no terminal.",
};

export default function ESUTPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="title-product-hero">
            Execução Segura,{" "}
            <span className="gradient-text-primary">Erro Zero</span>
          </h1>
          <h2 className="title-product-section">
            O Terminal que Executa com Precisão Cirúrgica
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300 leading-relaxed">
            Transforme seu terminal em uma ferramenta de execução guiada, à prova de erros e com auditoria completa. 
            O ESUT é o executor que transforma políticas complexas em ações simples e seguras.
          </p>
        </div>

        {/* Problem Section */}
        <div className="mb-20">
          <h2 className="title-product-section">
            O Problema: Execução Manual = Desastre Garantido
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-modern text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="title-product-feature">
                Comandos Perigosos
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Um simples `rm -rf /` pode destruir toda a infraestrutura. 
                Sem controle, cada execução é uma roleta russa.
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="title-product-feature">
                Tempo Perdido
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Horas gastas corrigindo erros, restaurando backups, 
                e explicando para o CEO por que o sistema caiu.
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="title-product-feature">
                Sem Auditoria
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Ninguém sabe quem executou o quê, quando e por quê. 
                Compliance é impossível sem rastreabilidade.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-20">
          <h2 className="title-product-section">
            A Solução ESUT
          </h2>
          <p className="text-center text-lg text-neutral-300 mb-12 max-w-3xl mx-auto">
            O ESUT transforma seu terminal em uma ferramenta de execução guiada, à prova de erros e com auditoria completa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Execução Guiada</span>
                  <span className="text-green-400">✓ ATIVO</span>
                </div>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Prevenção de Erros</span>
                  <span className="text-green-400">✓ ATIVO</span>
                </div>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Auditoria Completa</span>
                  <span className="text-green-400">✓ ATIVO</span>
                </div>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Políticas Automatizadas</span>
                  <span className="text-green-400">✓ ATIVO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="title-product-section">
            Funcionalidades que Transformam o Terminal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🎯</div>
              </div>
              <h3 className="title-product-feature">
                Execução Guiada e à Prova de Erros
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Transforme comandos complexos em operações simples e seguras. 
                O ESUT guia o usuário através de cada passo, prevenindo erros catastróficos.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">⚙️</div>
              </div>
              <h3 className="title-product-feature">
                Políticas de Segurança Automatizadas
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Configure políticas que bloqueiam automaticamente comandos perigosos. 
                O ESUT aplica as regras antes mesmo da execução.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">📋</div>
              </div>
              <h3 className="title-product-feature">
                Menu de Comandos Pré-aprovados
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Biblioteca de comandos seguros e testados. 
                Nenhuma operação manual, apenas seleções seguras e eficientes.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🚫</div>
              </div>
              <h3 className="title-product-feature">
                Prevenção de Comandos Perigosos
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Bloqueio inteligente de comandos que podem causar danos. 
                O ESUT analisa cada comando antes da execução.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">📊</div>
              </div>
              <h3 className="title-product-feature">
                Logs Detalhados de Todas as Operações
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Auditoria completa de quem executou o quê, quando e por quê. 
                Compliance total e rastreabilidade absoluta.
              </p>
            </div>

            <div className="card-modern">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🔄</div>
              </div>
              <h3 className="title-product-feature">
                Integração com ESH e KEYRING
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Funciona perfeitamente com o resto da plataforma Elevensoft. 
                Controle centralizado, autenticação segura, execução protegida.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <h2 className="title-product-section">
            Como o ESUT Transforma sua Operação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-modern text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="title-product-feature">
                Autenticação Segura
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                O usuário se autentica através do KEYRING, recebendo permissões 
                específicas para suas responsabilidades.
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="title-product-feature">
                Acesso Controlado
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                O ESH valida o acesso e direciona o usuário para o terminal 
                com as permissões adequadas.
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="title-product-feature">
                Execução Guiada
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                O ESUT apresenta um menu de comandos pré-aprovados, 
                guiando o usuário através de operações seguras.
              </p>
            </div>

            <div className="card-modern text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="title-product-feature">
                Auditoria Completa
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Cada operação é registrada com detalhes completos, 
                garantindo compliance e rastreabilidade total.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="title-product-feature">
            Pronto para eliminar erros e executar com precisão cirúrgica?
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
          <p className="mt-6 text-sm text-neutral-400">
            <strong className="text-yellow-400">Execução Segura, Erro Zero</strong> - Transforme seu terminal em uma arma de precisão
          </p>
        </div>
      </div>
    </main>
  );
} 