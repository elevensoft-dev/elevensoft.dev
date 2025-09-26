import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - Elevensoft",
  description: "Política de privacidade da Elevensoft. Saiba como protegemos e tratamos seus dados pessoais.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-4xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="title-landing-hero">
            Política de{" "}
            <span className="gradient-text-hero">Privacidade</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300 leading-relaxed">
            Transparência radical sobre como coletamos, usamos e protegemos seus dados pessoais.
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
              Nossa Filosofia de Privacidade
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Na Elevensoft, a privacidade não é apenas uma obrigação legal - é um princípio fundamental. 
              Como especialistas em Soberania Digital, entendemos que seus dados são sua propriedade, 
              e você deve ter controle total sobre eles.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Esta política explica como coletamos, usamos, armazenamos e protegemos suas informações 
              quando você utiliza nossos serviços ou visita nosso site.
            </p>
          </section>

          {/* Informações Coletadas */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Quais Informações Coletamos
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Informações Fornecidas Diretamente
                </h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Nome completo e dados de contato (email, telefone)</li>
                  <li>Informações da empresa (nome, cargo, setor)</li>
                  <li>Mensagens e comunicações através de nossos canais</li>
                  <li>Dados de demonstrações e consultas técnicas</li>
                </ul>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Informações Coletadas Automaticamente
                </h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Endereço IP e localização geográfica aproximada</li>
                  <li>Informações do navegador e dispositivo</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Como Usamos */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Como Utilizamos Suas Informações
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="title-feature">Serviços e Suporte</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Fornecer demonstrações personalizadas</li>
                  <li>Responder a consultas técnicas</li>
                  <li>Processar solicitações de suporte</li>
                  <li>Melhorar nossos produtos</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="title-feature">Comunicação</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Enviar informações sobre produtos</li>
                  <li>Notificar sobre atualizações</li>
                  <li>Compartilhar conteúdo relevante</li>
                  <li>Convidar para eventos e webinars</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compartilhamento */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Compartilhamento de Informações
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              <strong className="text-orange-400">Nunca vendemos seus dados pessoais.</strong> 
              Compartilhamos informações apenas nas seguintes situações:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
              <li><strong>Prestadores de serviços:</strong> Empresas que nos ajudam a operar (hosting, analytics)</li>
              <li><strong>Obrigações legais:</strong> Quando exigido por lei ou autoridades competentes</li>
              <li><strong>Proteção de direitos:</strong> Para proteger nossos direitos legais ou propriedade</li>
              <li><strong>Consentimento:</strong> Quando você autoriza explicitamente</li>
            </ul>
          </section>

          {/* Segurança */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Segurança dos Dados
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Implementamos medidas de segurança robustas para proteger suas informações:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="title-feature">Proteção Técnica</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Criptografia SSL/TLS em todas as comunicações</li>
                  <li>Armazenamento seguro em servidores certificados</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares e seguros</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="title-feature">Controles Administrativos</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Acesso restrito aos dados pessoais</li>
                  <li>Treinamento em privacidade para a equipe</li>
                  <li>Políticas internas de segurança</li>
                  <li>Auditorias regulares de conformidade</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seus Direitos */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Seus Direitos
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Você tem controle total sobre seus dados pessoais:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-white">Acesso</h4>
                    <p className="text-neutral-300 text-sm">Solicitar cópia dos seus dados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-white">Correção</h4>
                    <p className="text-neutral-300 text-sm">Corrigir informações incorretas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-white">Exclusão</h4>
                    <p className="text-neutral-300 text-sm">Solicitar remoção dos dados</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-white">Portabilidade</h4>
                    <p className="text-neutral-300 text-sm">Transferir dados para outro serviço</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-white">Oposição</h4>
                    <p className="text-neutral-300 text-sm">Opor-se ao processamento</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-white">Limitação</h4>
                    <p className="text-neutral-300 text-sm">Restringir uso dos dados</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Cookies e Tecnologias Similares
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Utilizamos cookies para melhorar sua experiência e analisar o uso do site:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="title-feature">Cookies Essenciais</h3>
                <p className="text-neutral-300 text-sm ml-4">
                  Necessários para o funcionamento básico do site (sessão, segurança)
                </p>
              </div>
              <div>
                <h3 className="title-feature">Cookies de Analytics</h3>
                <p className="text-neutral-300 text-sm ml-4">
                  Google Analytics para entender como você usa nosso site
                </p>
              </div>
              <div>
                <h3 className="title-feature">Cookies de Marketing</h3>
                <p className="text-neutral-300 text-sm ml-4">
                  Para personalizar conteúdo e anúncios (com seu consentimento)
                </p>
              </div>
            </div>
          </section>

          {/* Retenção */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Retenção de Dados
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Mantemos seus dados apenas pelo tempo necessário:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
              <li><strong>Dados de contato:</strong> Até 3 anos após último contato</li>
              <li><strong>Dados de demonstração:</strong> Até 2 anos após a sessão</li>
              <li><strong>Dados de suporte:</strong> Até 5 anos para fins legais</li>
              <li><strong>Dados de marketing:</strong> Até você solicitar remoção</li>
            </ul>
          </section>

          {/* Contato */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Entre em Contato
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="title-feature">Encarregado de Dados</h3>
                <p className="text-neutral-300 mb-2">João Silva - CEO</p>
                <p className="text-neutral-300 mb-2">Email: <a href="mailto:privacidade@elevensoft.dev" className="text-orange-400 hover:text-orange-300">privacidade@elevensoft.dev</a></p>
                <p className="text-neutral-300">WhatsApp: <a href="https://wa.me/message/X2DMDA457ASDN1" className="text-orange-400 hover:text-orange-300">+55 48 98816-8221</a></p>
              </div>
              
              <div>
                <h3 className="title-feature">Autoridade de Proteção</h3>
                <p className="text-neutral-300 mb-2">ANPD - Autoridade Nacional de Proteção de Dados</p>
                <p className="text-neutral-300 mb-2">Site: <a href="https://www.gov.br/anpd" target="_blank" className="text-orange-400 hover:text-orange-300">www.gov.br/anpd</a></p>
                <p className="text-neutral-300">Você pode apresentar reclamação se não estiver satisfeito</p>
              </div>
            </div>
          </section>

          {/* Alterações */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Alterações nesta Política
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças 
              significativas através do email ou aviso em nosso site. A data da última 
              atualização está sempre indicada no topo desta página.
            </p>
          </section>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h3 className="title-landing-subsection">
            Dúvidas sobre Privacidade?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacidade@elevensoft.dev"
              className="btn-gradient rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
            >
              Falar com Encarregado
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