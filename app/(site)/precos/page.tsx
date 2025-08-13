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
      description: "Serviço de Inteligência",
      monthlyPrice: 149,
      annualPrice: 1490,
      features: [
        "Gestão centralizada de identidades",
        "Autenticação multifator integrada",
        "Controle de acesso baseado em roles",
        "Licenciamento e compliance",
        "Integração com sistemas existentes"
      ]
    },
    {
      name: "EL GUARDIAN",
      description: "Fundação Blindada",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Proteção do código fonte",
        "Auditoria de segurança contínua",
        "Prevenção de vulnerabilidades",
        "Compliance com padrões internacionais",
        "Transparência total de segurança"
      ]
    }
  ];

  const suitePrice = isAnnual ? 3990 : 399;

  return (
    <main className="py-20 lg:py-25 xl:py-30 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
            A Oferta{" "}
            <span className="text-orange-400">Irrecusável</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-300">
            Clareza e Valor. Transparência radical para produtos individuais e, mais importante, para os pacotes de batalha.
          </p>
        </div>

        {/* Toggle Preços */}
        <div className="text-center mb-16">
          <div className="inline-flex bg-neutral-800 rounded-lg p-1 border border-neutral-700">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md transition-colors ${
                !isAnnual
                  ? "bg-orange-400 text-black shadow-sm"
                  : "text-neutral-300"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md transition-colors ${
                isAnnual
                  ? "bg-orange-400 text-black shadow-sm"
                  : "text-neutral-300"
              }`}
            >
              Anual (2 meses grátis)
            </button>
          </div>
        </div>

        {/* Produtos Individuais */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">Produtos Individuais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-sm text-neutral-300 mb-4">{product.description}</p>
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
                  href={`/${product.name.toLowerCase()}`}
                  className="w-full inline-flex items-center justify-center rounded-md bg-orange-400 px-4 py-2 text-black font-medium hover:bg-orange-500 transition-colors"
                >
                  Saiba Mais
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Suíte de Soberania */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-8 text-black text-center">
            <h2 className="text-3xl font-bold mb-4">SUÍTE DE SOBERANIA</h2>
            <p className="text-xl mb-6">O Pacote Gorila - ESH + ESUT</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">R$ {suitePrice}</span>
              <span className="text-xl">/{isAnnual ? "ano" : "mês"}</span>
            </div>
            <div className="bg-white/20 rounded-lg p-4 mb-6">
              <h3 className="font-bold mb-2">Bônus de Guerra:</h3>
              <p>Inclui <strong>50% de desconto</strong> na implantação do ESH e <strong>100% de cortesia</strong> na implantação do ESUT.</p>
            </div>
            <a
              href="https://wa.me/message/X2DMDA457ASDN1"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-orange-500 font-medium hover:bg-gray-100 transition-colors"
            >
              Adquirir Suíte
            </a>
          </div>
        </div>

        {/* Calculadora de ROI */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12 text-white">Calculadora de ROI</h2>
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Quantas horas sua equipe gasta com auditorias por mês?
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-neutral-600 rounded-md bg-neutral-800 text-white"
                  placeholder="Ex: 40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Qual o custo/hora médio da sua equipe técnica?
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-neutral-600 rounded-md bg-neutral-800 text-white"
                  placeholder="Ex: 150"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-800">
                <p className="text-lg text-neutral-300">
                  Com a Suíte Elevensoft, você pode economizar até{" "}
                  <strong className="text-orange-400">R$ X.XXX por ano</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Pronto para recuperar sua Soberania Digital?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/X2DMDA457ASDN1"
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-orange-400 px-8 py-3 text-black font-medium hover:bg-orange-500 transition-colors"
            >
              Agendar Demonstração
            </a>
            <a
              href="/o-jeito-elevensoft"
              className="inline-flex items-center justify-center rounded-md border-2 border-orange-400 px-8 py-3 text-orange-400 font-medium hover:bg-orange-400 hover:text-black transition-colors"
            >
              Ver Comparativo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 