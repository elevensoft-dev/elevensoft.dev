import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - Elevensoft",
  description: "Conheça a história dos fundadores, a dor que nos levou a forjar essas ferramentas e a humanização da nossa missão.",
};

export default function AboutPage() {
  return (
    <main className="py-12 sm:py-16 lg:py-20 xl:py-24 dark:bg-neutral-950 light:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="title-landing-hero">
            A{" "}
            <span className="gradient-text-hero">História</span>{" "}
            da Elevensoft
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-neutral-300 leading-relaxed">
            Conheça nossa jornada, os desafios que nos levaram a desenvolver essas soluções 
            e nossa visão para o futuro da segurança empresarial no Brasil.
          </p>
        </div>

        {/* Founders History */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div>
              <h2 className="title-landing-section">
                Nossa Jornada de Inovação
              </h2>
              <div className="space-y-6">
                <p className="text-neutral-300 text-lg leading-relaxed">
                  Em 2020, nossa equipe de infraestrutura identificou uma lacuna crítica no mercado brasileiro: 
                  <strong className="text-orange-400">a fragmentação de soluções de segurança</strong> que obrigava empresas 
                  a gerenciar múltiplas ferramentas desconexas e custosas.
                </p>
                
                <p className="text-neutral-300 leading-relaxed">
                  Após anos de experiência em infraestrutura crítica, percebemos que as soluções existentes 
                  não atendiam às necessidades específicas do mercado brasileiro, especialmente em termos de 
                  <strong className="text-orange-400">compliance, suporte local e custos em reais</strong>.
                </p>

                <p className="text-neutral-300 leading-relaxed">
                  Decidimos criar uma solução unificada que integrasse controle de acesso, auditoria em tempo real 
                  e gestão de identidades em uma <strong className="text-orange-400">plataforma desenvolvida especificamente 
                  para empresas brasileiras</strong>.
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
                    <div className="text-neutral-400 text-sm">Identificação da oportunidade</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">2021</div>
                    <div className="text-neutral-400 text-sm">Desenvolvimento da plataforma</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">2022</div>
                    <div className="text-neutral-400 text-sm">Primeiros clientes piloto</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div>
                    <div className="text-white font-semibold">2024</div>
                    <div className="text-neutral-400 text-sm">Plataforma consolidada</div>
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
            Nossa Equipe de Especialistas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-modern text-center hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                🚀
              </div>
              <h3 className="title-feature">
                Willian de Souza
              </h3>
              <p className="text-orange-400 mb-2">CEO & Co-fundador</p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Especialista em infraestrutura crítica e arquitetura de sistemas, 
                com mais de 10 anos de experiência em segurança empresarial.
              </p>
            </div>

            <div className="card-modern text-center hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                💻
              </div>
              <h3 className="title-feature">
                Gilson Camargo
              </h3>
              <p className="text-orange-400 mb-2">CTO & Co-fundador</p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Especialista em desenvolvimento de software e sistemas distribuídos, 
                com foco em soluções de segurança e integração.
              </p>
            </div>

            <div className="card-modern text-center hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                🛡️
              </div>
              <h3 className="title-feature">
                João Küster
              </h3>
              <p className="text-orange-400 mb-2">Co-fundador</p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Especialista em segurança da informação e compliance, 
                com expertise em auditoria e gestão de riscos.
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