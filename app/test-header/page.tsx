"use client";

import Header from "../components/header";

export default function TestHeaderPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      
      <main className="pt-20 px-6">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Teste do Header Moderno
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Funcionalidades Testadas</h2>
            <ul className="text-neutral-300 space-y-2">
              <li>✅ Header com backdrop blur no scroll</li>
              <li>✅ Barra de progresso de scroll com efeito de brilho</li>
              <li>✅ Menu dropdown responsivo com animações</li>
              <li>✅ Menu mobile animado com indicadores</li>
              <li>✅ Efeitos de hover avançados (scale, translate, brilho)</li>
              <li>✅ Logo com efeito de brilho no hover</li>
              <li>✅ Indicador visual de página ativa</li>
              <li>✅ Linhas de progresso nos itens do menu</li>
              <li>✅ Efeitos de brilho nos botões CTA</li>
            </ul>
          </div>
          
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Como Testar</h2>
            <ol className="text-neutral-300 space-y-2 list-decimal list-inside">
              <li>Faça scroll para ver a barra de progresso e mudanças no header</li>
              <li>Teste os dropdowns no menu "Produtos" (desktop)</li>
              <li>Redimensione a tela para testar o menu mobile</li>
              <li>Hover nos itens do menu para ver os efeitos de escala e linha</li>
              <li>Clique no logo para ver o efeito de brilho</li>
              <li>Observe os indicadores de página ativa (pontos coloridos)</li>
              <li>Teste os efeitos de brilho nos botões CTA</li>
              <li>Veja as linhas de progresso nos itens do dropdown</li>
            </ol>
          </div>
        </div>
        
        {/* Conteúdo para scroll */}
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
      </main>
    </div>
  );
} 