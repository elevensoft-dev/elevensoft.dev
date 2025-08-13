"use client";

import Header from "../components/header";
import { useHeader } from "../hooks/use-header";

// Exemplo 1: Uso básico do header
export function BasicHeaderExample() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      <main className="pt-20 px-6">
        <h1 className="text-4xl font-bold text-white">Conteúdo da Página</h1>
      </main>
    </div>
  );
}

// Exemplo 2: Header com controle de estado personalizado
export function CustomHeaderExample() {
  const { isScrolled, scrollProgress } = useHeader();

  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      
      {/* Indicador personalizado de scroll */}
      {isScrolled && (
        <div className="fixed top-4 right-4 bg-neutral-900/90 backdrop-blur-sm border border-neutral-800/50 rounded-full px-4 py-2 text-white text-sm z-50">
          Scroll: {Math.round(scrollProgress)}%
        </div>
      )}
      
      <main className="pt-20 px-6">
        <h1 className="text-4xl font-bold text-white">Header Personalizado</h1>
        <p className="text-neutral-300 mt-4">
          Este exemplo mostra como usar o hook useHeader para criar funcionalidades personalizadas.
        </p>
      </main>
    </div>
  );
}

// Exemplo 3: Header com tema personalizado
export function ThemedHeaderExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-purple-950">
      <Header />
      <main className="pt-20 px-6">
        <h1 className="text-4xl font-bold text-white">Header com Tema Azul</h1>
        <p className="text-blue-200 mt-4">
          Para personalizar o tema, edite o arquivo header-config.ts
        </p>
      </main>
    </div>
  );
}

// Exemplo 4: Header com navegação personalizada
export function CustomNavigationExample() {
  const { closeMobileMenu } = useHeader();

  const handleCustomAction = () => {
    // Ação personalizada
    console.log('Ação personalizada executada');
    closeMobileMenu();
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      <main className="pt-20 px-6">
        <h1 className="text-4xl font-bold text-white">Navegação Personalizada</h1>
        <button
          onClick={handleCustomAction}
          className="mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
        >
          Ação Personalizada
        </button>
      </main>
    </div>
  );
}

// Exemplo 5: Header com múltiplas instâncias (não recomendado, mas possível)
export function MultipleHeadersExample() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header principal */}
      <Header />
      
      {/* Conteúdo principal */}
      <main className="pt-20 px-6">
        <h1 className="text-4xl font-bold text-white">Múltiplos Headers</h1>
        <p className="text-neutral-300 mt-4">
          Este exemplo mostra como usar múltiplas instâncias do header (não recomendado para produção).
        </p>
      </main>
      
      {/* Header secundário (exemplo de uso em modal ou sidebar) */}
      <div className="fixed bottom-0 left-0 w-full bg-neutral-900/95 backdrop-blur-xl border-t border-neutral-800/50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <span className="text-white">Header Secundário</span>
          <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors">
            Ação
          </button>
        </div>
      </div>
    </div>
  );
} 