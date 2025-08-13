"use client";

import Header from "../components/header";

export default function DemoHeaderPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      
      {/* Conteúdo de demonstração */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Header Moderno e Sofisticado
            </h1>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Um header premium com efeitos visuais avançados, menu dropdown responsivo 
              e uma experiência de usuário excepcional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-[0_0_40px_rgba(255,138,41,0.4)] transition-all duration-300 hover:scale-105">
                Começar Agora
              </button>
              <button className="px-8 py-4 border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-800 transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
        </section>

        {/* Seções de conteúdo para testar scroll */}
        {Array.from({ length: 10 }, (_, i) => (
          <section key={i} className="container mx-auto px-6 py-16">
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Seção {i + 1}
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                Esta é uma seção de demonstração para testar o comportamento do header 
                durante o scroll. O header deve mudar de aparência e mostrar a barra 
                de progresso conforme você navega pela página.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl border border-neutral-800/50"></div>
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-neutral-800/50"></div>
                <div className="w-32 h-32 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl border border-neutral-800/50"></div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
} 