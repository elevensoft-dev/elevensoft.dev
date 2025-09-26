import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carreiras - Elevensoft",
  description: "Junte-se à equipe da Elevensoft e faça parte da revolução da Soberania Digital. Vagas abertas para profissionais apaixonados por tecnologia e segurança.",
  keywords: "carreiras, vagas, emprego, tecnologia, segurança, desenvolvimento, Elevensoft",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://elevensoft.dev/carreiras",
    title: "Carreiras - Elevensoft",
    description: "Junte-se à equipe da Elevensoft e faça parte da revolução da Soberania Digital.",
    siteName: "Elevensoft",
    images: [
      {
        url: "https://elevensoft.dev/images/logo/logo-light.svg",
        width: 1200,
        height: 630,
        alt: "Carreiras Elevensoft",
      },
    ],
  },
};

export default function CareersPage() {
  const currentYear = new Date().getFullYear();

  const openPositions = [
    {
      id: 1,
      title: "Desenvolvedor Full Stack Senior",
      department: "Desenvolvimento",
      location: "Remoto / Palhoça-SC",
      type: "CLT",
      level: "Senior",
      description: "Desenvolva soluções de Soberania Digital que transformam a segurança de infraestruturas críticas.",
      requirements: [
        "5+ anos de experiência em desenvolvimento full stack",
        "Domínio em React, Node.js, TypeScript",
        "Experiência com sistemas de segurança",
        "Conhecimento em DevOps e infraestrutura",
        "Inglês intermediário"
      ],
      benefits: [
        "Salário competitivo + participação nos lucros",
        "Plano de saúde e odontológico",
        "Vale refeição/alimentação",
        "Home office com equipamentos fornecidos",
        "Ambiente de inovação e aprendizado contínuo"
      ]
    },
    {
      id: 2,
      title: "Especialista em Segurança Cibernética",
      department: "Segurança",
      location: "Remoto / Palhoça-SC",
      type: "CLT",
      level: "Pleno/Senior",
      description: "Projete e implemente soluções de segurança que protegem infraestruturas críticas contra ameaças digitais.",
      requirements: [
        "3+ anos de experiência em cibersegurança",
        "Certificações em segurança (CISSP, CISM, CEH)",
        "Conhecimento em análise de vulnerabilidades",
        "Experiência com ferramentas de segurança",
        "Conhecimento em compliance e auditoria"
      ],
      benefits: [
        "Salário competitivo + bônus por performance",
        "Plano de saúde premium",
        "Vale refeição/alimentação",
        "Certificações pagas pela empresa",
        "Participação em conferências internacionais"
      ]
    },
    {
      id: 3,
      title: "Arquiteto de Soluções",
      department: "Arquitetura",
      location: "Remoto / Palhoça-SC",
      type: "CLT",
      level: "Senior",
      description: "Desenhe arquiteturas robustas e escaláveis para nossa plataforma de Soberania Digital.",
      requirements: [
        "7+ anos de experiência em arquitetura de software",
        "Conhecimento em microserviços e cloud",
        "Experiência com sistemas distribuídos",
        "Conhecimento em DevOps e CI/CD",
        "Liderança técnica e mentoria"
      ],
      benefits: [
        "Salário competitivo + equity",
        "Plano de saúde familiar",
        "Vale refeição/alimentação",
        "Equipamentos de última geração",
        "Flexibilidade total de horários"
      ]
    },
    {
      id: 4,
      title: "Especialista em DevOps/SRE",
      department: "Infraestrutura",
      location: "Remoto / Palhoça-SC",
      type: "CLT",
      level: "Pleno/Senior",
      description: "Garanta a disponibilidade e performance de nossa plataforma através de práticas DevOps avançadas.",
      requirements: [
        "4+ anos de experiência em DevOps/SRE",
        "Conhecimento em Kubernetes, Docker",
        "Experiência com AWS/Azure/GCP",
        "Conhecimento em monitoramento e observabilidade",
        "Scripting em Python/Bash"
      ],
      benefits: [
        "Salário competitivo + participação nos lucros",
        "Plano de saúde e odontológico",
        "Vale refeição/alimentação",
        "Certificações cloud pagas",
        "Ambiente de alta tecnologia"
      ]
    }
  ];

  const companyValues = [
    {
      icon: "🚀",
      title: "Inovação Constante",
      description: "Sempre buscamos novas formas de resolver problemas complexos de segurança digital."
    },
    {
      icon: "🤝",
      title: "Colaboração",
      description: "Acreditamos que os melhores resultados vêm do trabalho em equipe e da troca de conhecimentos."
    },
    {
      icon: "🎯",
      title: "Excelência",
      description: "Nosso compromisso é entregar soluções de qualidade excepcional para nossos clientes."
    },
    {
      icon: "🌱",
      title: "Crescimento",
      description: "Investimos no desenvolvimento pessoal e profissional de cada membro da equipe."
    }
  ];

  const perks = [
    {
      category: "Remuneração",
      items: [
        "Salários competitivos no mercado",
        "Participação nos lucros",
        "Bônus por performance",
        "Equity para posições estratégicas"
      ]
    },
    {
      category: "Benefícios",
      items: [
        "Plano de saúde e odontológico",
        "Vale refeição/alimentação",
        "Vale transporte/mobilidade",
        "Seguro de vida"
      ]
    },
    {
      category: "Desenvolvimento",
      items: [
        "Certificações pagas pela empresa",
        "Cursos e treinamentos",
        "Conferências e eventos",
        "Mentoria interna"
      ]
    },
    {
      category: "Ambiente",
      items: [
        "Home office flexível",
        "Equipamentos de última geração",
        "Ambiente colaborativo",
        "Horários flexíveis"
      ]
    }
  ];

  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="title-landing-hero">
            Carreiras na{" "}
            <span className="gradient-text-hero">Elevensoft</span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-neutral-300 leading-relaxed">
            Faça parte da revolução da Soberania Digital. Junte-se a uma equipe apaixonada por 
            tecnologia, segurança e inovação.
          </p>
        </div>

        {/* Por que trabalhar conosco */}
        <section className="mb-20">
          <h2 className="title-landing-section">
            Por que trabalhar na Elevensoft?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="card-modern text-center hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="title-feature mb-3">{value.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefícios */}
        <section className="mb-20">
          <h2 className="title-landing-section">
            Benefícios e Vantagens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="card-modern">
                <h3 className="title-feature mb-4">{perk.category}</h3>
                <ul className="space-y-3">
                  {perk.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-neutral-300 text-sm">
                      <span className="text-orange-400 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Vagas Abertas */}
        <section className="mb-20">
          <h2 className="title-landing-section">
            Vagas Abertas
          </h2>
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className="card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="title-feature">{position.title}</h3>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                        {position.level}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-4">
                      <span className="flex items-center gap-2">
                        <span className="text-orange-400">📍</span>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="text-orange-400">🏢</span>
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-neutral-300 leading-relaxed mb-6">
                      {position.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Requisitos:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-neutral-300 text-sm">
                              <span className="text-orange-400 mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-3">Benefícios:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2 text-neutral-300 text-sm">
                              <span className="text-green-400 mt-1">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 lg:w-48">
                    <a
                      href={`mailto:carreiras@elevensoft.dev?subject=Candidatura - ${position.title}&body=Olá! Tenho interesse na vaga de ${position.title}. Segue meu currículo em anexo.`}
                      className="btn-gradient rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)] text-center"
                    >
                      Candidatar-se
                    </a>
                    <a
                      href="https://wa.me/message/X2DMDA457ASDN1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-700 px-6 py-3 text-neutral-300 font-medium hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm text-center"
                    >
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Processo Seletivo */}
        <section className="mb-20">
          <h2 className="title-landing-section">
            Nosso Processo Seletivo
          </h2>
          <div className="card-modern">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">1</span>
                </div>
                <h3 className="title-feature mb-2">Aplicação</h3>
                <p className="text-neutral-300 text-sm">
                  Envie seu currículo e carta de apresentação
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">2</span>
                </div>
                <h3 className="title-feature mb-2">Triagem</h3>
                <p className="text-neutral-300 text-sm">
                  Análise inicial do perfil e experiência
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">3</span>
                </div>
                <h3 className="title-feature mb-2">Entrevista</h3>
                <p className="text-neutral-300 text-sm">
                  Conversa técnica e cultural com a equipe
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">4</span>
                </div>
                <h3 className="title-feature mb-2">Decisão</h3>
                <p className="text-neutral-300 text-sm">
                  Retorno em até 5 dias úteis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <h2 className="title-landing-section">
            Não encontrou a vaga ideal?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Estamos sempre em busca de talentos excepcionais. 
            Envie seu currículo mesmo que não haja uma vaga específica aberta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:carreiras@elevensoft.dev?subject=Candidatura Espontânea&body=Olá! Tenho interesse em trabalhar na Elevensoft. Segue meu currículo em anexo. Aguardo contato!"
              className="btn-gradient rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.2)]"
            >
              Enviar Currículo
            </a>
            <a
              href="https://wa.me/message/X2DMDA457ASDN1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-700 px-8 py-3 text-neutral-300 font-medium hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Falar no WhatsApp
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl max-w-2xl mx-auto">
            <h3 className="title-feature mb-3">
              📧 carreiras@elevensoft.dev
            </h3>
            <p className="text-neutral-300 text-sm">
              Envie seu currículo para este email e entraremos em contato assim que 
              surgir uma oportunidade que combine com seu perfil.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}