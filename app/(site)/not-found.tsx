import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página Não Encontrada - Elevensoft",
  description: "A página que você está procurando não foi encontrada. Retorne à página inicial da Elevensoft.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,138,41,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.03),transparent_50%)]"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Ícone 404 */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30 backdrop-blur-sm">
            <span className="text-6xl font-bold gradient-text-hero">404</span>
          </div>
        </div>

        {/* Título */}
        <h1 className="title-landing-hero mb-6">
          Página{" "}
          <span className="gradient-text-hero">Não Encontrada</span>
        </h1>

        {/* Descrição */}
        <p className="text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl mx-auto">
          Ops! Parece que você se perdeu na jornada da Soberania Digital. 
          A página que você está procurando não existe ou foi movida.
        </p>

        {/* Mensagem adicional */}
        <div className="card-modern max-w-2xl mx-auto mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <div className="text-left">
              <h3 className="title-feature mb-3">
                O que você pode fazer agora?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm ml-4">
                <li>Verificar se o endereço foi digitado corretamente</li>
                <li>Usar o menu de navegação para encontrar o que procura</li>
                <li>Retornar à página inicial e explorar nossos produtos</li>
                <li>Entrar em contato conosco se precisar de ajuda</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links de navegação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/"
            className="group card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="title-feature mb-2">Página Inicial</h3>
              <p className="text-neutral-300 text-sm">
                Retorne ao início e explore nossa plataforma
              </p>
            </div>
          </Link>

          <Link
            href="/plataforma"
            className="group card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="title-feature mb-2">Plataforma</h3>
              <p className="text-neutral-300 text-sm">
                Conheça nossos produtos de Soberania Digital
              </p>
            </div>
          </Link>

          <Link
            href="/contact"
            className="group card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="title-feature mb-2">Contato</h3>
              <p className="text-neutral-300 text-sm">
                Fale conosco se precisar de ajuda
              </p>
            </div>
          </Link>
        </div>

        {/* CTA Principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-gradient rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
          >
            Voltar ao Início
          </Link>
          <a
            href="https://wa.me/message/X2DMDA457ASDN1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-700 px-8 py-3 text-neutral-300 font-medium hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Informações adicionais */}
        <div className="mt-16 text-center">
          <p className="text-sm text-neutral-400 mb-4">
            Se você acredita que chegou aqui por erro, por favor nos informe:
          </p>
          <a
            href="mailto:suporte@elevensoft.dev?subject=Erro 404 - Página não encontrada&body=Olá! Encontrei um erro 404 na página: [URL da página]"
            className="text-orange-400 hover:text-orange-300 text-sm underline"
          >
            suporte@elevensoft.dev
          </a>
        </div>
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-yellow-500/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-500/40 rounded-full animate-pulse delay-2000"></div>
    </main>
  );
}