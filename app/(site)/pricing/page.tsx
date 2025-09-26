"use client";
import { useState } from "react";
import { Metadata } from "next";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const products = [
    {
      name: "ESH",
      description: "Eleven Shell Hub - O Ponto Único de Controle",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Segurança total com controle granular",
        "Auditoria e conformidade em tempo real",
        "Visualização ao vivo de todas as sessões",
        "Replay de sessões para análise forense",
        "Alertas inteligentes para atividades suspeitas"
      ]
    },
    {
      name: "ESUT",
      description: "Eleven Shell Utility Tool - Execução Segura, Erro Zero",
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "Execução guiada e à prova de erros",
        "Políticas de segurança automatizadas",
        "Menu de comandos pré-aprovados",
        "Prevenção de comandos perigosos",
        "Logs detalhados de todas as operações"
      ]
    },
    {
      name: "KEYRING",
      description: "Gerenciador de Licenças Completo",
      monthlyPrice: 149,
      annualPrice: 1490,
      features: [
        "Criação e edição de licenças de software",
        "Features sob demanda com modelos JSON flexíveis",
        "Painel completo de status de licenças",
        "Adição e extensão de licenças existentes",
        "Gestão completa do ciclo de vida das licenças"
      ]
    },
    {
      name: "EL GUARDIAN",
      description: "Ofuscador de Códigos PHP",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Ofuscação completa de código PHP",
        "Proteção contra engenharia reversa",
        "Múltiplos algoritmos de ofuscação",
        "Preservação da funcionalidade original",
        "Interface intuitiva para configuração"
      ]
    }
  ];

  const suitePrice = isAnnual ? 3990 : 399;

  return (
    <main className="py-20 lg:py-25 xl:py-30 dark:bg-neutral-950 light:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="title-product-hero">
            A Oferta{" "}
            <span className="gradient-text-hero">Irrecusável</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300 leading-relaxed">
            Clareza e Valor. Transparência radical para produtos individuais e, mais importante, para os pacotes de batalha.
          </p>
        </div>

        {/* Toggle Preços */}
        <div className="text-center mb-16">
          <div className="inline-flex bg-neutral-800/50 backdrop-blur-sm rounded-xl p-1 border border-neutral-700/50">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                !isAnnual
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                isAnnual
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              Anual (2 meses grátis)
            </button>
          </div>
        </div>

        {/* Individual Products */}
        <div className="mb-20">
          <h2 className="title-product-section">
            Produtos Individuais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name} className="card-modern hover:shadow-[0_0_40px_rgba(255,138,41,0.1)] transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-sm text-neutral-300 mb-4 leading-relaxed">{product.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    R$ {isAnnual ? product.annualPrice : product.monthlyPrice}
                  </span>
                  <span className="text-neutral-300">
                    /{isAnnual ? "ano" : "mês"}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-neutral-300">
                      <span className="mr-2 text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={product.name === "ESH" ? "https://esh.elevensoft.dev/" : `/${product.name.toLowerCase()}`}
                  target={product.name === "ESH" ? "_blank" : "_self"}
                  rel={product.name === "ESH" ? "noopener noreferrer" : ""}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 px-4 py-2 text-white font-medium transition-all duration-300 hover:scale-105"
                >
                  Saiba Mais
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Sovereignty Suite */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-black text-center shadow-2xl">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <h2 className="title-product-section text-black">
                SUÍTE DE SOBERANIA
              </h2>
              <p className="text-xl mb-6">O Pacote Gorila - ESH + ESUT</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ {suitePrice}</span>
                <span className="text-xl">/{isAnnual ? "ano" : "mês"}</span>
              </div>
              <div className="bg-white/20 rounded-xl p-4 mb-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2">Bônus de Guerra:</h3>
                <p>Inclui <strong>50% de desconto</strong> na implantação do ESH e <strong>100% de cortesia</strong> na implantação do ESUT.</p>
              </div>
              <a
                href="https://wa.me/message/X2DMDA457ASDN1"
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-orange-500 font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Adquirir Suíte
              </a>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mb-20">
          <h2 className="title-product-section">
            Calculadora de ROI
          </h2>
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Quantas horas sua equipe gasta com auditorias por mês?
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-neutral-600 rounded-xl bg-neutral-800/50 text-white placeholder:text-neutral-400 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-200"
                  placeholder="Ex: 40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Qual o custo/hora médio da sua equipe técnica?
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-neutral-600 rounded-xl bg-neutral-800/50 text-white placeholder:text-neutral-400 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-200"
                  placeholder="Ex: 150"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50">
                <p className="text-lg text-neutral-300">
                  Com a Suíte Elevensoft, você pode economizar até{" "}
                  <strong className="text-orange-400">R$ X.XXX por ano</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="title-product-feature">
            Pronto para recuperar sua Soberania Digital?
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
              href="/o-jeito-elevensoft"
              className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-700 px-8 py-3 text-neutral-300 font-medium hover:bg-neutral-800/50 hover:border-neutral-600 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Ver Comparativo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 