import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Jeito Elevensoft - Comparativo",
  description: "Descubra por que a abordagem fragmentada é amadora e a soberania unificada da Elevensoft é o único caminho profissional.",
};

export default function TheElevensoftWayPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 dark:bg-neutral-950 light:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold lg:text-5xl xl:text-6xl">
            A{" "}
            <span className="gradient-text-primary">
              Diferença
            </span>{" "}
            Elevensoft
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-neutral-300 leading-relaxed">
            Descubra por que nossa abordagem unificada supera significativamente as soluções fragmentadas 
            e as plataformas complexas da concorrência.
          </p>
        </div>

        {/* Tabela de Comparativo */}
        <div className="mb-20">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="p-4 text-left font-bold text-white bg-neutral-800/50 backdrop-blur-sm">
                    Comparativo
                  </th>
                  <th className="p-4 text-center font-bold text-red-400 bg-red-900/20 backdrop-blur-sm">
                    Soluções Fragmentadas
                    <br />
                    <span className="text-sm font-normal">(Múltiplas ferramentas)</span>
                  </th>
                  <th className="p-4 text-center font-bold text-yellow-400 bg-yellow-900/20 backdrop-blur-sm">
                    Plataformas Complexas
                    <br />
                    <span className="text-sm font-normal">(Soluções enterprise)</span>
                  </th>
                  <th className="p-4 text-center font-bold text-green-400 bg-green-900/20 backdrop-blur-sm">
                    Plataforma Elevensoft
                    <br />
                    <span className="text-sm font-normal">(Solução unificada)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-700">
                  <td className="p-4 font-semibold text-white bg-neutral-800/50 backdrop-blur-sm">
                    Componentes
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <ul className="space-y-1 text-sm">
                      <li>• VPN Genérica</li>
                      <li>• Open Source Bastion</li>
                      <li>• Planilha de Senhas</li>
                      <li>• Scripts Manuais</li>
                    </ul>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <ul className="space-y-1 text-sm">
                      <li>• Teleport / CyberArk</li>
                      <li>• Soluções Complexas</li>
                      <li>• Dependências Externas</li>
                    </ul>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <ul className="space-y-1 text-sm">
                      <li>• Plataforma Unificada</li>
                      <li>• ESH + ESUT + Keyring</li>
                      <li>• Integração Nativa</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="p-4 font-semibold text-white bg-neutral-800/50 backdrop-blur-sm">
                    Custo
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Aparentemente "gratuito", mas com custos ocultos em setup, manutenção e riscos de segurança.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Alto investimento inicial. Preços em dólar. Ciclos longos de implementação.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      <strong>Investimento transparente e justo.</strong> Preços em Reais. ROI comprovado de 2.156%.
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="p-4 font-semibold text-white bg-neutral-800/50 backdrop-blur-sm">
                    Visibilidade
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      <strong>Limitada.</strong> Múltiplas interfaces desconectadas.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Boa, mas requer configuração complexa e especializada.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      <strong>Visibilidade completa.</strong> Dashboard unificado em tempo real.
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="p-4 font-semibold text-white bg-neutral-800/50 backdrop-blur-sm">
                    Suporte
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Suporte comunitário limitado e documentação dispersa.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Suporte técnico, mas com fuso horário e idioma diferentes.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      <strong>Suporte especializado.</strong> Atendimento direto com especialistas brasileiros.
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="p-4 font-semibold text-white bg-neutral-800/50 backdrop-blur-sm">
                    Tempo de Implementação
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Implementação contínua e nunca completamente finalizada.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      6-12 meses com consultores especializados externos.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      <strong>30-60 dias</strong> com nossa equipe especializada.
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="p-4 font-semibold text-white bg-neutral-800/50 backdrop-blur-sm">
                    ROI
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm text-red-400">
                      <strong>Questionável</strong> - Custos ocultos podem superar benefícios
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm text-yellow-400">
                      <strong>Moderado</strong> - Alto investimento inicial, retorno a longo prazo
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm text-green-400">
                      <strong>2.156%</strong> - ROI comprovado e mensurável
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Por que a Elevensoft é Superior */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Nossas Vantagens Competitivas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🛡️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Arquitetura Unificada</h3>
              <p className="text-neutral-300 leading-relaxed">
                Plataforma verdadeiramente integrada onde cada componente foi projetado para trabalhar em perfeita harmonia, eliminando a fragmentação.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🇧🇷</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Desenvolvido no Brasil</h3>
              <p className="text-neutral-300 leading-relaxed">
                Solução desenvolvida especificamente para o mercado brasileiro, com suporte local, preços em Reais e compliance nacional.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Implementação Ágil</h3>
              <p className="text-neutral-300 leading-relaxed">
                Implementação em 30-60 dias com nossa equipe especializada, oferecendo retorno rápido sobre o investimento.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Pronto para unificar sua infraestrutura de segurança?</h3>
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
              Ver Investimento
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            <strong className="text-yellow-400">ROI comprovado de 2.156%</strong> - Solução validada por empresas líderes
          </p>
        </div>
      </div>
    </main>
  );
} 