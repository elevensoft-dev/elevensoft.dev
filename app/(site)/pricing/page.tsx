"use client";
import { useState } from "react";
import { Metadata } from "next";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [auditHours, setAuditHours] = useState<number>(0);
  const [hourlyCost, setHourlyCost] = useState<number>(0);

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

  // ROI Calculator Logic
  const calculateROI = () => {
    if (auditHours <= 0 || hourlyCost <= 0) return 0;
    
    // Custo atual anual de auditorias manuais
    const currentAnnualCost = auditHours * hourlyCost * 12;
    
    // Custo da suíte Elevensoft (anual)
    const suiteAnnualCost = isAnnual ? 3990 : 399 * 12;
    
    // Economia estimada (assumindo 70% de redução no tempo de auditoria)
    const timeReduction = 0.7;
    
    // Novo tempo de auditoria (30% do original)
    const newAuditHours = auditHours * (1 - timeReduction);
    
    // Novo custo anual (tempo reduzido + custo da suíte)
    const newAnnualCost = (newAuditHours * hourlyCost * 12) + suiteAnnualCost;
    
    // ROI em reais
    const annualSavings = currentAnnualCost - newAnnualCost;
    
    return Math.max(0, annualSavings);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <main className="py-20 lg:py-25 xl:py-30 dark:bg-neutral-950 light:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="title-product-hero">
            Investimento{" "}
            <span className="gradient-text-hero">Transparente</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
            Preços claros e justos para cada produto individual, com pacotes integrados que oferecem 
            máxima economia e eficiência para sua infraestrutura de segurança.
          </p>
        </div>

        {/* Toggle Preços */}
        <div className="text-center mb-16">
          <div className="inline-flex dark:bg-neutral-800/50 light:bg-neutral-200/50 backdrop-blur-sm rounded-xl p-1 dark:border-neutral-700/50 light:border-neutral-300/50 border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                !isAnnual
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg"
                  : "dark:text-neutral-300 light:text-neutral-700 hover:dark:text-white hover:light:text-neutral-900"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                isAnnual
                  ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg"
                  : "dark:text-neutral-300 light:text-neutral-700 hover:dark:text-white hover:light:text-neutral-900"
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
                <h3 className="text-xl font-bold dark:text-white light:text-neutral-900 mb-2">{product.name}</h3>
                <p className="text-sm dark:text-neutral-300 light:text-neutral-700 mb-4 leading-relaxed">{product.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold dark:text-white light:text-neutral-900">
                    R$ {isAnnual ? product.annualPrice : product.monthlyPrice}
                  </span>
                  <span className="dark:text-neutral-300 light:text-neutral-700">
                    /{isAnnual ? "ano" : "mês"}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm dark:text-neutral-300 light:text-neutral-700">
                      <span className="mr-2 text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={product.name === "ESH" ? "https://esh.elevensoft.dev/" : `/${product.name.toLowerCase()}`}
                  target={product.name === "ESH" ? "_blank" : "_self"}
                  rel={product.name === "ESH" ? "noopener noreferrer" : ""}
                  className="w-full inline-flex items-center justify-center rounded-xl dark:bg-neutral-800/50 light:bg-neutral-200/50 dark:hover:bg-neutral-700/50 light:hover:bg-neutral-300/50 px-4 py-2 dark:text-white light:text-neutral-900 font-medium transition-all duration-300 hover:scale-105"
                >
                  Saiba Mais
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Sovereignty Suite */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-black text-center shadow-2xl relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-black text-center mb-2">
                SUÍTE INTEGRADA
              </h2>
              <p className="text-xl mb-6 text-black/90 font-medium">Solução Completa - ESH + ESUT</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-black">R$ {suitePrice}</span>
                <span className="text-xl text-black/80 font-semibold">/{isAnnual ? "ano" : "mês"}</span>
              </div>
              <div className="bg-white/30 rounded-xl p-4 mb-6 backdrop-blur-sm border border-white/20">
                <h3 className="font-black mb-2 text-black">Benefícios Exclusivos:</h3>
                <p className="text-black/90 font-medium">Inclui <strong className="font-black">50% de desconto</strong> na implementação do ESH e <strong className="font-black">implementação gratuita</strong> do ESUT.</p>
              </div>
              <a
                href="https://wa.me/message/X2DMDA457ASDN1"
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-orange-600 font-black hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white/50"
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
                <label className="block text-sm font-medium dark:text-white light:text-neutral-900 mb-2">
                  Quantas horas sua equipe gasta com auditorias por mês?
                </label>
                <input
                  type="number"
                  value={auditHours || ''}
                  onChange={(e) => setAuditHours(Number(e.target.value))}
                  className="w-full px-3 py-2 dark:border-neutral-600 light:border-neutral-400 rounded-xl dark:bg-neutral-800/50 light:bg-neutral-100/50 dark:text-white light:text-neutral-900 dark:placeholder:text-neutral-400 light:placeholder:text-neutral-500 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-200"
                  placeholder="Ex: 40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-white light:text-neutral-900 mb-2">
                  Qual o custo/hora médio da sua equipe técnica?
                </label>
                <input
                  type="number"
                  value={hourlyCost || ''}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full px-3 py-2 dark:border-neutral-600 light:border-neutral-400 rounded-xl dark:bg-neutral-800/50 light:bg-neutral-100/50 dark:text-white light:text-neutral-900 dark:placeholder:text-neutral-400 light:placeholder:text-neutral-500 focus:border-orange-500 focus:ring-orange-500/20 transition-all duration-200"
                  placeholder="Ex: 150"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="dark:bg-neutral-800/50 light:bg-neutral-200/50 backdrop-blur-sm rounded-xl p-4 dark:border-neutral-700/50 light:border-neutral-300/50 border">
                {auditHours > 0 && hourlyCost > 0 ? (
                  <div>
                    <p className="text-lg dark:text-neutral-300 light:text-neutral-700 mb-2">
                      Com a Suíte Elevensoft, você pode economizar até{" "}
                      <strong className="text-orange-400">{formatCurrency(calculateROI())} por ano</strong>.
                    </p>
                    <div className="text-sm dark:text-neutral-400 light:text-neutral-600">
                      <p>• Custo atual anual: {formatCurrency(auditHours * hourlyCost * 12)}</p>
                      <p>• Tempo reduzido: {Math.round(auditHours * 0.3)}h/mês (70% menos)</p>
                      <p>• Custo com Elevensoft: {formatCurrency(isAnnual ? 3990 : 399 * 12)}</p>
                      <p>• Novo custo total: {formatCurrency((auditHours * 0.3 * hourlyCost * 12) + (isAnnual ? 3990 : 399 * 12))}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-lg dark:text-neutral-300 light:text-neutral-700">
                    Preencha os campos acima para calcular sua economia anual
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="title-product-feature">
            Pronto para transformar sua infraestrutura de segurança?
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
              className="inline-flex items-center justify-center rounded-xl border-2 dark:border-neutral-700 light:border-neutral-300 px-8 py-3 dark:text-neutral-300 light:text-neutral-700 font-medium dark:hover:bg-neutral-800/50 light:hover:bg-neutral-200/50 dark:hover:border-neutral-600 light:hover:border-neutral-400 dark:hover:text-white light:hover:text-neutral-900 transition-all duration-300 backdrop-blur-sm"
            >
              Ver Comparativo
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 