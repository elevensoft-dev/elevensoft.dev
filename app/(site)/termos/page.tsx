import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso - Elevensoft",
  description: "Termos de uso dos serviços da Elevensoft. Conheça as condições para utilização de nossa plataforma.",
};

export default function TermsOfUsePage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-4xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="title-landing-hero">
            Termos de{" "}
            <span className="gradient-text-hero">Uso</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300 leading-relaxed">
            Condições claras e transparentes para utilização dos serviços Elevensoft.
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
              Aceitação dos Termos
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Ao acessar e utilizar os serviços da Elevensoft, você concorda em cumprir 
              estes Termos de Uso. Se não concordar com qualquer parte destes termos, 
              não deve utilizar nossos serviços.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Estes termos se aplicam a todos os usuários de nossa plataforma, incluindo 
              visitantes do site, clientes e parceiros.
            </p>
          </section>

          {/* Definições */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Definições
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="title-feature">"Elevensoft" ou "Nós"</h3>
                <p className="text-neutral-300 text-sm ml-4">
                  Refere-se à empresa Elevensoft, especializada em soluções de Soberania Digital.
                </p>
              </div>
              <div>
                <h3 className="title-feature">"Usuário" ou "Você"</h3>
                <p className="text-neutral-300 text-sm ml-4">
                  Qualquer pessoa que acesse ou utilize nossos serviços.
                </p>
              </div>
              <div>
                <h3 className="title-feature">"Serviços"</h3>
                <p className="text-neutral-300 text-sm ml-4">
                  Inclui nosso site, plataforma ESH, ESUT, KEYRING, EL GUARDIAN e demais produtos.
                </p>
              </div>
              <div>
                <h3 className="title-feature">"Conteúdo"</h3>
                <p className="text-neutral-300 text-sm ml-4">
                  Textos, imagens, vídeos, software e outros materiais disponibilizados.
                </p>
              </div>
            </div>
          </section>

          {/* Uso dos Serviços */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Uso dos Serviços
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Uso Permitido
                </h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Acessar informações sobre nossos produtos e serviços</li>
                  <li>Solicitar demonstrações e consultas técnicas</li>
                  <li>Utilizar nossos produtos conforme licenciado</li>
                  <li>Participar de programas de suporte e treinamento</li>
                </ul>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Uso Proibido
                </h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Violar leis ou regulamentos aplicáveis</li>
                  <li>Interferir no funcionamento dos serviços</li>
                  <li>Tentar acessar sistemas não autorizados</li>
                  <li>Distribuir malware ou código malicioso</li>
                  <li>Usar os serviços para atividades ilegais</li>
                  <li>Copiar ou distribuir nosso conteúdo sem autorização</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contas e Segurança */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Contas e Segurança
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Responsabilidades do Usuário
                </h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Manter informações de conta atualizadas e precisas</li>
                  <li>Proteger credenciais de acesso (senhas, tokens)</li>
                  <li>Notificar imediatamente sobre uso não autorizado</li>
                  <li>Ser responsável por todas as atividades em sua conta</li>
                </ul>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Nossas Responsabilidades
                </h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Implementar medidas de segurança adequadas</li>
                  <li>Monitorar atividades suspeitas</li>
                  <li>Notificar sobre incidentes de segurança</li>
                  <li>Fornecer suporte técnico conforme acordado</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Propriedade Intelectual */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Propriedade Intelectual
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Nossa Propriedade
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Todos os direitos sobre nossos produtos, marcas, logos e conteúdo 
                  pertencem à Elevensoft ou nossos licenciadores.
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Software ESH, ESUT, KEYRING e EL GUARDIAN</li>
                  <li>Documentação técnica e manuais</li>
                  <li>Marca Elevensoft e logos</li>
                  <li>Conteúdo do site e materiais de marketing</li>
                </ul>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Licença de Uso
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Concedemos uma licença limitada, não exclusiva e não transferível 
                  para usar nossos serviços conforme estes termos.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Esta licença não inclui o direito de modificar, distribuir ou 
                  criar trabalhos derivados sem autorização expressa.
                </p>
              </div>
            </div>
          </section>

          {/* Pagamentos e Faturamento */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Pagamentos e Faturamento
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Preços e Cobrança
                </h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Preços são definidos conforme tabela vigente</li>
                  <li>Cobrança mensal ou anual conforme plano escolhido</li>
                  <li>Pagamentos devem ser efetuados antecipadamente</li>
                  <li>Taxas de implementação podem ser aplicadas</li>
                </ul>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Reembolsos
                </h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Reembolsos são avaliados caso a caso</li>
                  <li>Período de 30 dias para solicitação</li>
                  <li>Reembolso proporcional ao tempo não utilizado</li>
                  <li>Taxas de implementação não são reembolsáveis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitação de Responsabilidade */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Limitação de Responsabilidade
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Limitações Gerais
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Nossos serviços são fornecidos "como estão". Não garantimos que 
                  estarão sempre disponíveis ou livres de erros.
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Não somos responsáveis por perdas indiretas ou consequenciais</li>
                  <li>Nossa responsabilidade é limitada ao valor pago pelos serviços</li>
                  <li>Não garantimos resultados específicos</li>
                  <li>Usuário assume riscos de uso dos serviços</li>
                </ul>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Exceções
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  Estas limitações não se aplicam a danos causados por negligência 
                  grosseira ou violação intencional de nossos deveres legais.
                </p>
              </div>
            </div>
          </section>

          {/* Suspensão e Encerramento */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Suspensão e Encerramento
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Suspensão por Violação
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Podemos suspender ou encerrar sua conta se você violar estes termos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Uso não autorizado dos serviços</li>
                  <li>Não pagamento de taxas devidas</li>
                  <li>Atividades que comprometam a segurança</li>
                  <li>Violação de propriedade intelectual</li>
                </ul>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Encerramento pelo Usuário
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Você pode encerrar sua conta a qualquer momento:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Com 30 dias de antecedência</li>
                  <li>Pagamento de taxas pendentes</li>
                  <li>Exportação de dados conforme solicitado</li>
                  <li>Retorno de materiais licenciados</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Modificações */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Modificações dos Termos
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Podemos modificar estes termos periodicamente. Notificaremos sobre 
              mudanças significativas através de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
              <li>Email para usuários registrados</li>
              <li>Aviso em nosso site</li>
              <li>Notificação através dos serviços</li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              O uso continuado dos serviços após modificações constitui aceitação 
              dos novos termos.
            </p>
          </section>

          {/* Lei Aplicável */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Lei Aplicável e Jurisdição
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa 
              será resolvida nos tribunais competentes de Santa Catarina.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Antes de buscar recursos judiciais, as partes devem tentar resolver 
              disputas através de negociação direta ou mediação.
            </p>
          </section>

          {/* Contato */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Contato
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Para questões sobre estes termos ou nossos serviços:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="title-feature">Suporte Técnico</h3>
                <p className="text-neutral-300 mb-2">Email: <a href="mailto:suporte@elevensoft.dev" className="text-orange-400 hover:text-orange-300">suporte@elevensoft.dev</a></p>
                <p className="text-neutral-300">WhatsApp: <a href="https://wa.me/message/X2DMDA457ASDN1" className="text-orange-400 hover:text-orange-300">+55 48 98816-8221</a></p>
              </div>
              
              <div>
                <h3 className="title-feature">Questões Legais</h3>
                <p className="text-neutral-300 mb-2">Email: <a href="mailto:legal@elevensoft.dev" className="text-orange-400 hover:text-orange-300">legal@elevensoft.dev</a></p>
                <p className="text-neutral-300">Endereço: Pedra Branca, Palhoça - SC</p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h3 className="title-landing-subsection">
            Dúvidas sobre os Termos?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@elevensoft.dev"
              className="btn-gradient rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
            >
              Falar com Legal
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-700 px-8 py-3 text-neutral-300 font-medium hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Contato Geral
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}