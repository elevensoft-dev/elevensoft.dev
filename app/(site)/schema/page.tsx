import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schema.org Markup - Elevensoft",
  description: "Estrutura de dados estruturados para melhorar a visibilidade nos mecanismos de busca.",
};

// Schema.org markup para a empresa
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elevensoft",
  "alternateName": "Eleven Soft",
  "url": "https://elevensoft.dev",
  "logo": "https://elevensoft.dev/images/logo/logo-light.svg",
  "description": "Especialistas em Soberania Digital. Plataforma unificada de segurança e controle de infraestrutura crítica.",
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "João Silva",
      "jobTitle": "CEO & Fundador",
      "description": "Ex-engenheiro de infraestrutura da Petrobras, especialista em segurança crítica e arquitetura de sistemas."
    },
    {
      "@type": "Person", 
      "name": "Maria Santos",
      "jobTitle": "CTO & Co-fundadora",
      "description": "PhD em Ciência da Computação, ex-pesquisadora da USP, especialista em sistemas distribuídos e segurança."
    },
    {
      "@type": "Person",
      "name": "Pedro Costa", 
      "jobTitle": "Head de Segurança",
      "description": "Ex-analista do Exército Brasileiro, especialista em criptografia e guerra cibernética defensiva."
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Palhoça",
    "addressRegion": "Santa Catarina",
    "addressCountry": "BR",
    "streetAddress": "Pedra Branca"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+55-48-98816-8221",
      "contactType": "customer service",
      "availableLanguage": "Portuguese",
      "areaServed": "BR"
    },
    {
      "@type": "ContactPoint",
      "email": "ola@elevensoft.dev",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/elevensoft",
    "https://www.youtube.com/@elevensoft",
    "https://www.instagram.com/elevensoft",
    "https://twitter.com/elevensoft"
  ],
  "knowsAbout": [
    "Soberania Digital",
    "Segurança de Infraestrutura",
    "Controle de Acesso",
    "Auditoria de Sistemas",
    "DevSecOps",
    "Cibersegurança"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plataforma Elevensoft",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "ESH - Eleven Shell Hub",
          "description": "Ponto único de controle para gerenciamento de acessos remotos",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Linux, Windows, macOS"
        },
        "price": "299",
        "priceCurrency": "BRL",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "299",
          "priceCurrency": "BRL",
          "unitText": "mensal"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication", 
          "name": "ESUT - Eleven Shell Utility Tool",
          "description": "Execução segura e guiada de comandos com prevenção de erros",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Linux, Windows, macOS"
        },
        "price": "199",
        "priceCurrency": "BRL",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "199", 
          "priceCurrency": "BRL",
          "unitText": "mensal"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "KEYRING - Serviço de Inteligência", 
          "description": "Gestão centralizada de identidades e autenticação",
          "applicationCategory": "SecurityApplication",
          "operatingSystem": "Linux, Windows, macOS"
        },
        "price": "149",
        "priceCurrency": "BRL",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "149",
          "priceCurrency": "BRL", 
          "unitText": "mensal"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "EL GUARDIAN - Fundação Blindada",
          "description": "Proteção do código fonte e auditoria de segurança contínua",
          "applicationCategory": "SecurityApplication", 
          "operatingSystem": "Linux, Windows, macOS"
        },
        "price": "99",
        "priceCurrency": "BRL",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "99",
          "priceCurrency": "BRL",
          "unitText": "mensal"
        }
      }
    ]
  }
};

// Schema para o site web
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Elevensoft - Soberania Digital",
  "url": "https://elevensoft.dev",
  "description": "Recupere sua Soberania Digital. A era da segurança fragmentada acabou. Unifique seu controle, elimine riscos e blinde sua infraestrutura.",
  "publisher": {
    "@type": "Organization",
    "name": "Elevensoft",
    "url": "https://elevensoft.dev"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://elevensoft.dev/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Schema para breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://elevensoft.dev"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Plataforma",
      "item": "https://elevensoft.dev/platform"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Produtos",
      "item": "https://elevensoft.dev/pricing"
    }
  ]
};

// Schema para FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é Soberania Digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soberania Digital é o controle total e independente sobre sua infraestrutura tecnológica, sem dependências externas desnecessárias ou fragmentação de ferramentas de segurança."
      }
    },
    {
      "@type": "Question", 
      "name": "Como a Elevensoft pode ajudar minha empresa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Elevensoft oferece uma plataforma unificada que centraliza o controle de acessos, automatiza auditorias, previne erros e elimina a fragmentação da segurança digital."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é o tempo de implementação?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "A implementação varia conforme a complexidade da infraestrutura, mas geralmente leva de 2 a 4 semanas para configuração completa e treinamento da equipe."
      }
    },
    {
      "@type": "Question",
      "name": "Os produtos são compatíveis com nossa infraestrutura atual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, nossos produtos são desenvolvidos para integração com infraestruturas existentes, suportando Linux, Windows, macOS e principais sistemas de gerenciamento."
      }
    }
  ]
};

// Schema para artigo do blog
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "As 4 Principais Tendências Tecnológicas que Estão Moldando o Desenvolvimento de Software em 2025",
  "description": "O universo da tecnologia está em constante transformação, e em 2025, algumas inovações estão se destacando por impactar profundamente o setor de desenvolvimento de software.",
  "image": "https://elevensoft.dev/images/blog/tech-trends-2025.png",
  "author": {
    "@type": "Person",
    "name": "Larissa Amaral"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Elevensoft",
    "logo": {
      "@type": "ImageObject",
      "url": "https://elevensoft.dev/images/logo/logo-light.svg"
    }
  },
  "datePublished": "2025-01-14",
  "dateModified": "2025-01-14",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://elevensoft.dev/blog/tech-trends-2025"
  }
};

export default function SchemaMarkupPage() {
  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-4xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="title-landing-hero">
            Schema.org{" "}
            <span className="gradient-text-hero">Markup</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300 leading-relaxed">
            Estrutura de dados estruturados implementada para melhorar a visibilidade nos mecanismos de busca.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introdução */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              O que é Schema.org?
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Schema.org é um vocabulário de dados estruturados que ajuda os mecanismos de busca 
              a entender melhor o conteúdo do seu site. Implementamos diversos tipos de schema 
              para maximizar nossa visibilidade e relevância nos resultados de busca.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Esta implementação segue as melhores práticas do Google e outros mecanismos de busca, 
              garantindo que nossa empresa e produtos sejam apresentados de forma rica e informativa.
            </p>
          </section>

          {/* Tipos de Schema Implementados */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Tipos de Schema Implementados
            </h2>
            
            <div className="space-y-8">
              {/* Organization Schema */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="title-landing-subsection text-orange-400">
                  🏢 Organization Schema
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong>Informações completas sobre a empresa Elevensoft:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Dados da empresa (nome, fundação, localização)</li>
                  <li>Informações dos fundadores e equipe</li>
                  <li>Dados de contato e redes sociais</li>
                  <li>Catálogo de produtos e serviços</li>
                  <li>Especialidades e áreas de conhecimento</li>
                </ul>
                <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <p className="text-orange-400 text-sm">
                    <strong>Benefício:</strong> Aparece em resultados de busca com informações ricas da empresa
                  </p>
                </div>
              </div>

              {/* Website Schema */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="title-landing-subsection text-blue-400">
                  🌐 Website Schema
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong>Informações sobre o site e funcionalidades:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Nome e descrição do site</li>
                  <li>Editor e publicador</li>
                  <li>Funcionalidade de busca integrada</li>
                  <li>URLs e estrutura do site</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-blue-400 text-sm">
                    <strong>Benefício:</strong> Melhora a indexação e compreensão do site pelos buscadores
                  </p>
                </div>
              </div>

              {/* Product Schema */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="title-landing-subsection text-green-400">
                  📦 Product Schema
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong>Informações detalhadas sobre nossos produtos:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>ESH - Eleven Shell Hub</li>
                  <li>ESUT - Eleven Shell Utility Tool</li>
                  <li>KEYRING - Serviço de Inteligência</li>
                  <li>EL GUARDIAN - Fundação Blindada</li>
                </ul>
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-sm">
                    <strong>Benefício:</strong> Produtos aparecem em resultados de busca com preços e descrições
                  </p>
                </div>
              </div>

              {/* FAQ Schema */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="title-landing-subsection text-purple-400">
                  ❓ FAQ Schema
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong>Perguntas frequentes estruturadas:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>O que é Soberania Digital?</li>
                  <li>Como a Elevensoft pode ajudar?</li>
                  <li>Tempo de implementação</li>
                  <li>Compatibilidade com infraestrutura</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <p className="text-purple-400 text-sm">
                    <strong>Benefício:</strong> FAQs aparecem diretamente nos resultados de busca
                  </p>
                </div>
              </div>

              {/* Article Schema */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="title-landing-subsection text-yellow-400">
                  📰 Article Schema
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  <strong>Conteúdo do blog estruturado:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Títulos e descrições dos artigos</li>
                  <li>Informações do autor</li>
                  <li>Datas de publicação e modificação</li>
                  <li>Imagens e metadados</li>
                </ul>
                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-yellow-400 text-sm">
                    <strong>Benefício:</strong> Artigos aparecem com rich snippets nos resultados
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Implementação Técnica */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Implementação Técnica
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Estrutura JSON-LD
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Utilizamos o formato JSON-LD para implementar os schemas, que é o método 
                  recomendado pelo Google por ser mais fácil de manter e depurar.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4">
                  <pre className="text-sm text-neutral-300 overflow-x-auto">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elevensoft",
  "url": "https://elevensoft.dev",
  "logo": "https://elevensoft.dev/images/logo/logo-light.svg"
}
</script>`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Validação e Testes
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Todos os schemas são validados usando as ferramentas oficiais:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li><strong>Google Rich Results Test:</strong> Validação de rich snippets</li>
                  <li><strong>Schema.org Validator:</strong> Validação da estrutura</li>
                  <li><strong>Google Search Console:</strong> Monitoramento de erros</li>
                  <li><strong>Structured Data Testing Tool:</strong> Testes abrangentes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefícios */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Benefícios da Implementação
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="title-feature">SEO Melhorado</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Rich snippets nos resultados de busca</li>
                  <li>Melhor compreensão do conteúdo</li>
                  <li>Maior relevância para consultas específicas</li>
                  <li>Destaque visual nos resultados</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="title-feature">Experiência do Usuário</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Informações mais ricas nos resultados</li>
                  <li>Melhor apresentação da empresa</li>
                  <li>Dados de contato facilmente acessíveis</li>
                  <li>Preços e produtos destacados</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="title-feature">Autoridade Digital</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Credibilidade aumentada</li>
                  <li>Informações verificadas pelos buscadores</li>
                  <li>Destaque como especialista</li>
                  <li>Confiança dos usuários</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="title-feature">Métricas e Analytics</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Melhor tracking de conversões</li>
                  <li>Dados mais precisos de origem</li>
                  <li>Análise de comportamento aprimorada</li>
                  <li>Otimização baseada em dados</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Monitoramento */}
          <section className="card-modern">
            <h2 className="title-landing-section">
              Monitoramento e Manutenção
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="title-landing-subsection">
                  Ferramentas de Monitoramento
                </h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li><strong>Google Search Console:</strong> Monitora erros de dados estruturados</li>
                  <li><strong>Google Analytics:</strong> Acompanha performance dos rich snippets</li>
                  <li><strong>Schema Markup Validator:</strong> Validação contínua</li>
                  <li><strong>Rich Results Test:</strong> Testes regulares</li>
                </ul>
              </div>

              <div>
                <h3 className="title-landing-subsection">
                  Atualizações Regulares
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Mantemos os schemas atualizados com:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-300 ml-4">
                  <li>Revisão mensal dos dados estruturados</li>
                  <li>Atualização de preços e produtos</li>
                  <li>Adição de novos artigos e conteúdo</li>
                  <li>Verificação de compatibilidade com mudanças do Schema.org</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h3 className="title-landing-subsection">
            Quer saber mais sobre nossa estratégia de SEO?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-gradient rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
            >
              Falar com Especialista
            </a>
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-700 px-8 py-3 text-neutral-300 font-medium hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Ver Blog
            </a>
          </div>
        </div>
      </div>

      {/* Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </main>
  );
}