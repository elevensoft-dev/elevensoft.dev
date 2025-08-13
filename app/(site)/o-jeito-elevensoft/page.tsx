import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Jeito Elevensoft - Comparativo",
  description: "Descubra por que a abordagem fragmentada é amadora e a soberania unificada da Elevensoft é o único caminho profissional.",
};

export default function TheElevensoftWayPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold lg:text-5xl xl:text-6xl">
            O{" "}
            <span className="gradient-text-primary">
              Massacre
            </span>{" "}
            da Concorrência
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-neutral-300 leading-relaxed">
            Onde humilhamos a concorrência – não apenas outras empresas, mas a própria <em>ideia</em> de uma abordagem fragmentada.
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
                    O Jeito Fragmentado
                    <br />
                    <span className="text-sm font-normal">(O Caos)</span>
                  </th>
                  <th className="p-4 text-center font-bold text-yellow-400 bg-yellow-900/20 backdrop-blur-sm">
                    O Jeito do Concorrente Gigante
                    <br />
                    <span className="text-sm font-normal">(O Lento)</span>
                  </th>
                  <th className="p-4 text-center font-bold text-green-400 bg-green-900/20 backdrop-blur-sm">
                    O Jeito Elevensoft
                    <br />
                    <span className="text-sm font-normal">(A Soberania)</span>
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
                      Enganosamente "grátis". Custo real em horas de setup, manutenção, falhas de segurança e multas.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Exorbitante. Dólar. Ciclos de venda de 6 meses. Custos ocultos de consultoria.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      <strong>Previsível e de Alto Valor.</strong> Preços em Reais. ROI claro de 2.156%.
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="p-4 font-semibold text-white bg-neutral-800/50 backdrop-blur-sm">
                    Visibilidade
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      <strong>Nula.</strong> Pontos cegos por toda parte.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Boa, mas complexa e difícil de configurar.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      <strong>Total e Granular.</strong> Controle em tempo real.
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="p-4 font-semibold text-white bg-neutral-800/50 backdrop-blur-sm">
                    Suporte
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Fóruns da comunidade e boa sorte.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Lento, impessoal, em outro fuso horário.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      <strong>Dedicado e Especializado.</strong> Direto com especialistas no Brasil.
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="p-4 font-semibold text-white bg-neutral-800/50 backdrop-blur-sm">
                    Tempo de Implementação
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      Sempre "quase pronto", nunca finalizado.
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm">
                      6-12 meses com consultores externos.
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
                      <strong>Negativo</strong> - Custos ocultos superam benefícios
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm text-yellow-400">
                      <strong>Baixo</strong> - Alto custo, baixo valor
                    </p>
                  </td>
                  <td className="p-4 text-center text-neutral-300">
                    <p className="text-sm text-green-400">
                      <strong>2.156%</strong> - Valor comprovado e mensurável
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Por que a Elevensoft é Superior */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Por que a Elevensoft é Superior?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🛡️</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Unificação Real</h3>
              <p className="text-neutral-300 leading-relaxed">
                Não apenas integração superficial, mas uma plataforma verdadeiramente unificada onde cada componente foi projetado para trabalhar em harmonia.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">🇧🇷</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Made in Brazil</h3>
              <p className="text-neutral-300 leading-relaxed">
                Desenvolvido no Brasil, para o Brasil. Suporte local, preços em Reais, e entendimento real das necessidades do mercado brasileiro.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 mb-4 border border-neutral-700/50">
                <div className="text-3xl mb-2">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Velocidade de Execução</h3>
              <p className="text-neutral-300 leading-relaxed">
                Implementação em 30-60 dias, não em 6-12 meses. Tempo é dinheiro, e nós economizamos ambos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Pronto para abandonar o caos da fragmentação?</h3>
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
            <strong className="text-yellow-400">ROI estimado de 2.156%</strong> - A era da segurança fragmentada acabou
          </p>
        </div>
      </div>
    </main>
  );
} 