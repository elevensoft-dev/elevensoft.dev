import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies - Elevensoft",
  description: "Política de cookies da Elevensoft. Saiba como utilizamos cookies e tecnologias similares em nosso site.",
};

export default function CookiesPolicyPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 dark:bg-neutral-950 light:bg-neutral-50">
      <div className="mx-auto max-w-4xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="title-landing-hero">
            Política de{" "}
            <span className="gradient-text-hero">Cookies</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300 leading-relaxed">
            Transparência sobre como utilizamos cookies e tecnologias similares para melhorar sua experiência.
          </p>
          <p className="text-sm text-neutral-400 mt-4">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introdução */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              O que são Cookies?
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site. 
              Eles nos ajudam a entender como você interage com nosso conteúdo e melhorar sua experiência.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Como especialistas em Soberania Digital, acreditamos na transparência total sobre o uso de tecnologias 
              de rastreamento. Você tem controle sobre quais cookies aceita.
            </p>
          </section>

          {/* Tipos de Cookies */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Tipos de Cookies que Utilizamos
            </h2>
            
            <div className="space-y-8">
              {/* Cookies Essenciais */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="title-landing-subsection text-green-400">
                  🍪 Cookies Essenciais
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong>Necessários para o funcionamento básico do site.</strong> 
                  Não podem ser desabilitados sem afetar a funcionalidade.
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li><strong>Sessão:</strong> Mantém você logado durante a navegação</li>
                  <li><strong>Segurança:</strong> Protege contra ataques CSRF</li>
                  <li><strong>Preferências:</strong> Lembra suas configurações básicas</li>
                  <li><strong>Formulários:</strong> Mantém dados temporários durante preenchimento</li>
                </ul>
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm">
                    <strong>Status:</strong> Sempre ativos - Necessários para o funcionamento
                  </p>
                </div>
              </div>

              {/* Cookies de Analytics */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="title-landing-subsection text-blue-400">
                  📊 Cookies de Analytics
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong>Nos ajudam a entender como você usa nosso site.</strong> 
                  Dados anonimizados para melhorar nossos serviços.
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li><strong>Google Analytics:</strong> Páginas visitadas, tempo de permanência</li>
                  <li><strong>Heatmaps:</strong> Onde você clica e rola na página</li>
                  <li><strong>Conversões:</strong> Quais ações você realiza</li>
                  <li><strong>Performance:</strong> Velocidade de carregamento das páginas</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-400 text-sm">
                    <strong>Status:</strong> Opcional - Você pode desabilitar
                  </p>
                </div>
              </div>

              {/* Cookies de Marketing */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="title-landing-subsection text-orange-400">
                  🎯 Cookies de Marketing
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong>Personalizam conteúdo e anúncios.</strong> 
                  Utilizados apenas com seu consentimento explícito.
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li><strong>Remarketing:</strong> Mostra anúncios relevantes em outros sites</li>
                  <li><strong>Personalização:</strong> Adapta conteúdo às suas preferências</li>
                  <li><strong>Redes Sociais:</strong> Integração com Facebook, LinkedIn, etc.</li>
                  <li><strong>Email Marketing:</strong> Segmentação de campanhas</li>
                </ul>
                <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <p className="text-orange-400 text-sm">
                    <strong>Status:</strong> Opcional - Requer consentimento explícito
                  </p>
                </div>
              </div>

              {/* Cookies de Funcionalidade */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="title-landing-subsection text-purple-400">
                  ⚙️ Cookies de Funcionalidade
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong>Melhoram sua experiência de navegação.</strong> 
                  Lembram suas preferências e configurações.
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li><strong>Idioma:</strong> Lembra sua preferência de idioma</li>
                  <li><strong>Tema:</strong> Modo escuro/claro escolhido</li>
                  <li><strong>Layout:</strong> Configurações de exibição</li>
                  <li><strong>Chat:</strong> Estado do chat de suporte</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <p className="text-purple-400 text-sm">
                    <strong>Status:</strong> Opcional - Melhora sua experiência
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies Específicos */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Cookies Específicos Utilizados
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="text-left py-3 px-4 text-white font-semibold">Nome</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Propósito</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Duração</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Tipo</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-neutral-800">
                    <td className="py-3 px-4 text-neutral-300 font-mono">_ga</td>
                    <td className="py-3 px-4 text-neutral-300">Identifica usuários únicos (Google Analytics)</td>
                    <td className="py-3 px-4 text-neutral-300">2 anos</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Analytics</span></td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-3 px-4 text-neutral-300 font-mono">_ga_*</td>
                    <td className="py-3 px-4 text-neutral-300">Armazena estado da sessão (Google Analytics 4)</td>
                    <td className="py-3 px-4 text-neutral-300">2 anos</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Analytics</span></td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-3 px-4 text-neutral-300 font-mono">session_id</td>
                    <td className="py-3 px-4 text-neutral-300">Identifica sessão do usuário</td>
                    <td className="py-3 px-4 text-neutral-300">Sessão</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Essencial</span></td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-3 px-4 text-neutral-300 font-mono">csrf_token</td>
                    <td className="py-3 px-4 text-neutral-300">Proteção contra ataques CSRF</td>
                    <td className="py-3 px-4 text-neutral-300">Sessão</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Essencial</span></td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-3 px-4 text-neutral-300 font-mono">theme_preference</td>
                    <td className="py-3 px-4 text-neutral-300">Lembra preferência de tema (claro/escuro)</td>
                    <td className="py-3 px-4 text-neutral-300">1 ano</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Funcionalidade</span></td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="py-3 px-4 text-neutral-300 font-mono">cookie_consent</td>
                    <td className="py-3 px-4 text-neutral-300">Armazena suas preferências de cookies</td>
                    <td className="py-3 px-4 text-neutral-300">1 ano</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Essencial</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Controle de Cookies */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Como Controlar Cookies
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Configurações do Site
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Você pode gerenciar suas preferências de cookies através do banner 
                  que aparece na primeira visita ou através desta página.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Configurações Disponíveis:</h4>
                  <ul className="list-disc list-inside space-y-1 text-neutral-300 text-sm ml-4">
                    <li>Ativar/desativar cookies de analytics</li>
                    <li>Ativar/desativar cookies de marketing</li>
                    <li>Ativar/desativar cookies de funcionalidade</li>
                    <li>Visualizar cookies específicos utilizados</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Configurações do Navegador
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Você também pode controlar cookies diretamente no seu navegador:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Chrome</h4>
                    <p className="text-neutral-300 text-sm">
                      Configurações → Privacidade e segurança → Cookies e outros dados do site
                    </p>
                  </div>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Firefox</h4>
                    <p className="text-neutral-300 text-sm">
                      Opções → Privacidade e Segurança → Cookies e dados do site
                    </p>
                  </div>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Safari</h4>
                    <p className="text-neutral-300 text-sm">
                      Preferências → Privacidade → Gerenciar dados do site
                    </p>
                  </div>
                  <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Edge</h4>
                    <p className="text-neutral-300 text-sm">
                      Configurações → Cookies e permissões do site → Cookies e dados armazenados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies de Terceiros */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Cookies de Terceiros
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Utilizamos serviços de terceiros que podem definir seus próprios cookies:
            </p>
            
            <div className="space-y-6">
              <div className="border border-neutral-700 rounded-lg p-6">
                <h3 className="title-feature flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  Google Analytics
                </h3>
                <p className="text-neutral-300 text-sm mb-3">
                  Ferramenta de análise que nos ajuda a entender como você usa nosso site.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-white">Cookies utilizados:</strong>
                    <ul className="list-disc list-inside text-neutral-300 ml-4 mt-1">
                      <li>_ga, _ga_*</li>
                      <li>_gid</li>
                      <li>_gat</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Mais informações:</strong>
                    <p className="text-neutral-300 mt-1">
                      <a href="https://policies.google.com/privacy" target="_blank" className="text-orange-400 hover:text-orange-300">
                        Política de Privacidade do Google
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-700 rounded-lg p-6">
                <h3 className="title-feature flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  WhatsApp Business
                </h3>
                <p className="text-neutral-300 text-sm mb-3">
                  Widget de chat para atendimento direto via WhatsApp.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-white">Cookies utilizados:</strong>
                    <ul className="list-disc list-inside text-neutral-300 ml-4 mt-1">
                      <li>Cookies de sessão do WhatsApp</li>
                      <li>Cookies de preferências</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Mais informações:</strong>
                    <p className="text-neutral-300 mt-1">
                      <a href="https://www.whatsapp.com/privacy" target="_blank" className="text-orange-400 hover:text-orange-300">
                        Política de Privacidade do WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impacto da Desativação */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Impacto da Desativação de Cookies
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Cookies Essenciais
                </h3>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 text-sm">
                    <strong>⚠️ Não recomendado:</strong> Desativar cookies essenciais pode impedir 
                    o funcionamento correto do site, incluindo login, formulários e navegação.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Cookies Opcionais
                </h3>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <p className="text-yellow-400 text-sm">
                    <strong>ℹ️ Impacto limitado:</strong> Desativar cookies opcionais pode resultar em:
                  </p>
                  <ul className="list-disc list-inside text-yellow-400 text-sm ml-4 mt-2">
                    <li>Experiência menos personalizada</li>
                    <li>Anúncios menos relevantes</li>
                    <li>Dificuldade em medir melhorias do site</li>
                    <li>Necessidade de reconfigurar preferências a cada visita</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Atualizações */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Atualizações desta Política
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Podemos atualizar esta política de cookies periodicamente para refletir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
              <li>Mudanças em nossos serviços</li>
              <li>Novos cookies ou tecnologias utilizadas</li>
              <li>Alterações na legislação aplicável</li>
              <li>Melhorias em nossas práticas de privacidade</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Notificaremos sobre mudanças significativas através de aviso em nosso site 
              ou por email para usuários registrados.
            </p>
          </section>

          {/* Contato */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Dúvidas sobre Cookies?
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Se você tem dúvidas sobre nossa política de cookies ou deseja exercer 
              seus direitos relacionados ao uso de cookies:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="title-feature">Encarregado de Dados</h3>
                <p className="text-neutral-300 mb-2">João Silva - CEO</p>
                <p className="text-neutral-300 mb-2">Email: <a href="mailto:privacidade@elevensoft.dev" className="text-orange-400 hover:text-orange-300">privacidade@elevensoft.dev</a></p>
                <p className="text-neutral-300">WhatsApp: <a href="https://wa.me/message/X2DMDA457ASDN1" className="text-orange-400 hover:text-orange-300">+55 48 98816-8221</a></p>
              </div>
              
              <div>
                <h3 className="title-feature">Suporte Técnico</h3>
                <p className="text-neutral-300 mb-2">Email: <a href="mailto:suporte@elevensoft.dev" className="text-orange-400 hover:text-orange-300">suporte@elevensoft.dev</a></p>
                <p className="text-neutral-300 mb-2">Horário: Segunda a Sexta, 9h às 18h</p>
                <p className="text-neutral-300">Resposta em até 24 horas</p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h3 className="title-landing-subsection">
            Configure suas Preferências
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cookie-settings"
              className="btn-gradient rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
            >
              Gerenciar Cookies
            </a>
            <a
              href="/privacidade"
              className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-700 px-8 py-3 text-neutral-300 font-medium hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}