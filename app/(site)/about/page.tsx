import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - Elevensoft",
  description: "Conheça a história dos fundadores, a dor que nos levou a forjar essas ferramentas e a humanização da nossa missão.",
};

export default function AboutPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 dark:bg-neutral-950 light:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="title-landing-hero">
            A{" "}
            <span className="gradient-text-hero">Lenda</span>{" "}
            da Elevensoft
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300 leading-relaxed">
            Conheça a história dos fundadores, a dor que nos levou a forjar essas ferramentas 
            e a humanização da nossa missão de Soberania Digital.
          </p>
        </div>

        {/* Founders History */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="title-landing-section">
                A Dor que Nos Levou à Guerra
              </h2>
              <div className="space-y-6">
                <p className="text-neutral-300 text-lg leading-relaxed">
                  Em 2020, nossa equipe de infraestrutura enfrentava o mesmo pesadelo que você: 
                  <strong className="text-orange-400">dezenas de ferramentas desconexas</strong>, senhas espalhadas em planilhas, 
                  scripts manuais que falhavam no momento mais crítico.
                </p>
                
                <p className="text-neutral-300 leading-relaxed">
                  Um incidente de segurança nos custou <strong className="text-red-400">72 horas de downtime</strong> e 
                  <strong className="text-red-400">R$ 2.3 milhões em perdas</strong>. Foi quando decidimos: 
                  <em>"Nunca mais."</em>
                </p>

                <p className="text-neutral-300 leading-relaxed">
                  Começamos a forjar nossas próprias ferramentas. O que começou como uma solução 
                  interna se transformou na <strong className="text-orange-400">plataforma de Soberania Digital</strong> mais 
                  avançada do mercado.
                </p>
              </div>
            </div>

            <div className="card-modern p-8">
              <h3 className="title-landing-subsection">
                Nossa Jornada
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">2020</div>
                    <div className="text-neutral-400 text-sm">Incidente de segurança</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">2021</div>
                    <div className="text-neutral-400 text-sm">Desenvolvimento interno</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">2022</div>
                    <div className="text-neutral-400 text-sm">Primeiros clientes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">2024</div>
                    <div className="text-neutral-400 text-sm">Plataforma completa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="title-landing-section">
            Os Valores que Nos Guiam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🛡️</div>
              </div>
              <h3 className="title-feature">
                Soberania Total
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Acreditamos que cada empresa deve ter controle absoluto sobre sua infraestrutura. 
                Não aceitamos dependências desnecessárias ou controle externo.
              </p>
            </div>

            <div className="card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🔍</div>
              </div>
              <h3 className="title-feature">
                Transparência Radical
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Compartilhamos tudo: nosso código, nossa metodologia, nossos erros. 
                A confiança só é construída através da transparência total.
              </p>
            </div>

            <div className="card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">⚡</div>
              </div>
              <h3 className="title-feature">
                Velocidade de Execução
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Tempo é dinheiro. Nossa equipe trabalha com a urgência de quem 
                já perdeu milhões por causa de ferramentas inadequadas.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="title-landing-section">
            A Equipe que Forja a Soberania
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern text-center hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                🚀
              </div>
              <h3 className="title-feature">
                João Silva
              </h3>
              <p className="text-orange-400 mb-2">CEO & Fundador</p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Ex-engenheiro de infraestrutura da Petrobras, 
                especialista em segurança crítica e arquitetura de sistemas.
              </p>
            </div>

            <div className="card-modern text-center hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                💻
              </div>
              <h3 className="title-feature">
                Maria Santos
              </h3>
              <p className="text-orange-400 mb-2">CTO & Co-fundadora</p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                PhD em Ciência da Computação, ex-pesquisadora da USP, 
                especialista em sistemas distribuídos e segurança.
              </p>
            </div>

            <div className="card-modern text-center hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                🛡️
              </div>
              <h3 className="title-feature">
                Pedro Costa
              </h3>
              <p className="text-orange-400 mb-2">Head de Segurança</p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Ex-analista do Exército Brasileiro, especialista em 
                criptografia e guerra cibernética defensiva.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="card-modern">
              <h3 className="title-landing-subsection">
                Nossa Missão
              </h3>
              <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
                <strong className="text-orange-400">Eliminar a Fragmentação da Segurança</strong> e entregar 
                <strong className="text-orange-400">Soberania Digital</strong> para empresas que não aceitam 
                comprometer a segurança de sua infraestrutura crítica.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Transformar a complexidade em simplicidade, o caos em ordem, 
                e a vulnerabilidade em fortaleza.
              </p>
            </div>

            <div className="card-modern">
              <h3 className="title-landing-subsection">
                Nossa Visão
              </h3>
              <p className="text-neutral-300 text-lg mb-4 leading-relaxed">
                Ser a <strong className="text-blue-400">referência global</strong> em plataformas de 
                <strong className="text-blue-400">Soberania Digital</strong>, estabelecendo novos padrões 
                de segurança, controle e transparência.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Um mundo onde cada empresa tem controle total sobre sua infraestrutura, 
                sem depender de soluções fragmentadas ou controle externo.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="title-landing-subsection">
            Pronto para fazer parte da nossa história?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/X2DMDA457ASDN1"
              target="_blank"
              className="btn-gradient rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
            >
              Agendar Demonstração
            </a>
            <a
              href="/platform"
              className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-700 px-8 py-3 text-neutral-300 font-medium hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Conhecer a Plataforma
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            <strong className="text-yellow-400">Juntos, construiremos a fortaleza da sua Soberania Digital</strong>
          </p>
        </div>
      </div>
    </main>
  );
} 