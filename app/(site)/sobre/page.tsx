import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - Elevensoft",
  description: "Conheça a história dos fundadores, a dor que nos levou a forjar essas ferramentas e a humanização da nossa missão.",
};

export default function AboutPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
            A{" "}
            <span className="text-orange-400">Lenda</span>{" "}
            da Elevensoft
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300">
            Conheça a história dos fundadores, a dor que nos levou a forjar essas ferramentas 
            e a humanização da nossa missão de Soberania Digital.
          </p>
        </div>

        {/* História dos Fundadores */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">A Dor que Nos Levou à Guerra</h2>
              <div className="space-y-6">
                <p className="text-neutral-300 text-lg">
                  Em 2020, nossa equipe de infraestrutura enfrentava o mesmo pesadelo que você: 
                  <strong>dezenas de ferramentas desconexas</strong>, senhas espalhadas em planilhas, 
                  scripts manuais que falhavam no momento mais crítico.
                </p>
                
                <p className="text-neutral-300">
                  Um incidente de segurança nos custou <strong>72 horas de downtime</strong> e 
                  <strong>R$ 2.3 milhões em perdas</strong>. Foi quando decidimos: 
                  <em>"Nunca mais."</em>
                </p>

                <p className="text-neutral-300">
                  Começamos a forjar nossas próprias ferramentas. O que começou como uma solução 
                  interna se transformou na <strong>plataforma de Soberania Digital</strong> mais 
                  avançada do mercado.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Nossa Jornada</h3>
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

        {/* Valores da Empresa */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Os Valores que Nos Guiam</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-red-900/20 rounded-lg p-4 mb-4 border border-red-800">
                <div className="text-3xl mb-2">🛡️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Soberania Total</h3>
              <p className="text-neutral-300">
                Acreditamos que cada empresa deve ter controle absoluto sobre sua infraestrutura. 
                Não aceitamos dependências desnecessárias ou controle externo.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-blue-900/20 rounded-lg p-4 mb-4 border border-blue-800">
                <div className="text-3xl mb-2">🔍</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparência Radical</h3>
              <p className="text-neutral-300">
                Compartilhamos tudo: nosso código, nossa metodologia, nossos erros. 
                A confiança só é construída através da transparência total.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
              <div className="bg-green-900/20 rounded-lg p-4 mb-4 border border-green-800">
                <div className="text-3xl mb-2">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Velocidade de Execução</h3>
              <p className="text-neutral-300">
                Tempo é dinheiro. Nossa equipe trabalha com a urgência de quem 
                já perdeu milhões por causa de ferramentas inadequadas.
              </p>
            </div>
          </div>
        </div>

        {/* Equipe */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">A Equipe que Forja a Soberania</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-black font-bold">JD</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">João Silva</h3>
              <p className="text-orange-400 mb-2">CEO & Fundador</p>
              <p className="text-neutral-300 text-sm">
                Ex-engenheiro de infraestrutura da Petrobras, 
                especialista em segurança crítica e arquitetura de sistemas.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-black font-bold">MS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Maria Santos</h3>
              <p className="text-orange-400 mb-2">CTO & Co-fundadora</p>
              <p className="text-neutral-300 text-sm">
                PhD em Ciência da Computação, ex-pesquisadora da USP, 
                especialista em sistemas distribuídos e segurança.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-black font-bold">PC</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Pedro Costa</h3>
              <p className="text-orange-400 mb-2">Head de Segurança</p>
              <p className="text-neutral-300 text-sm">
                Ex-analista do Exército Brasileiro, especialista em 
                criptografia e guerra cibernética defensiva.
              </p>
            </div>
          </div>
        </div>

        {/* Missão e Visão */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-2xl p-8 border border-orange-800">
              <h3 className="text-2xl font-bold mb-6 text-white">Nossa Missão</h3>
              <p className="text-neutral-300 text-lg mb-4">
                <strong>Eliminar a Fragmentação da Segurança</strong> e entregar 
                <strong>Soberania Digital</strong> para empresas que não aceitam 
                comprometer a segurança de sua infraestrutura crítica.
              </p>
              <p className="text-neutral-300">
                Transformar a complexidade em simplicidade, o caos em ordem, 
                e a vulnerabilidade em fortaleza.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-800">
              <h3 className="text-2xl font-bold mb-6 text-white">Nossa Visão</h3>
              <p className="text-neutral-300 text-lg mb-4">
                Ser a <strong>referência global</strong> em plataformas de 
                <strong>Soberania Digital</strong>, estabelecendo novos padrões 
                de segurança, controle e transparência.
              </p>
              <p className="text-neutral-300">
                Um mundo onde cada empresa tem controle total sobre sua infraestrutura, 
                sem depender de soluções fragmentadas ou controle externo.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Pronto para fazer parte da nossa história?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/X2DMDA457ASDN1"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-orange-400 px-8 py-3 text-black font-medium hover:bg-orange-500 transition-colors"
            >
              Agendar Demonstração
            </a>
            <a
              href="/plataforma"
              className="inline-flex items-center justify-center rounded-md border-2 border-orange-400 px-8 py-3 text-orange-400 font-medium hover:bg-orange-400 hover:text-black transition-colors"
            >
              Conhecer a Plataforma
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            <strong>Juntos, construiremos a fortaleza da sua Soberania Digital</strong>
          </p>
        </div>
      </div>
    </main>
  );
} 