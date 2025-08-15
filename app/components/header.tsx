"use client";

import { useHeader } from "../hooks/use-header";
import { ScrollProgress } from "./ui/scroll-progress";
import { menuData } from "../data/menu";
import { MenuItem } from "../types/header";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const {
    isScrolled,
    isMobileMenuOpen,
    activeDropdown,
    scrollProgress,
    currentPath,
    toggleDropdown,
    closeDropdowns,
    toggleMobileMenu,
    closeMobileMenu,
  } = useHeader();

  const pathname = usePathname();

  // Renderizar item do menu com dropdown
  const renderDropdownItem = (item: MenuItem) => (
    <div key={item.id} className="relative group" data-dropdown>
      <button
        onClick={() => toggleDropdown(item.id.toString())}
        className="relative flex items-center gap-2 px-4 py-2 text-neutral-300 hover:text-white transition-all duration-300 hover:scale-105 group-hover:from-orange-500 group-hover:to-yellow-500"
      >
        {item.title}
        {/* Indicador de página ativa para dropdowns */}
        {item.submenu?.some(subItem => 
          subItem.path && currentPath === subItem.path
        ) && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
        )}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            activeDropdown === item.id.toString() ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 mt-2 w-64 bg-neutral-900/95 backdrop-blur-xl border border-neutral-800/50 rounded-2xl shadow-2xl transition-all duration-300 ${
          activeDropdown === item.id.toString()
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="p-2">
                                  {item.submenu?.map((subItem: MenuItem) => (
              <a
                key={subItem.id}
                href={subItem.title === "ESH" ? "https://esh.elevensoft.dev/" : subItem.path}
                target={subItem.title === "ESH" ? "_blank" : "_self"}
                rel={subItem.title === "ESH" ? "noopener noreferrer" : ""}
                className="group relative block px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-yellow-500/10 rounded-xl transition-all duration-200 hover:translate-x-1 overflow-hidden"
              >
                <span className="relative z-10">{subItem.title}</span>
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Linha de progresso no hover */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
        </div>
      </div>
    </div>
  );

  // Render simple menu item
  const renderMenuItem = (item: MenuItem) => (
    <Link
      key={item.id}
      href={item.path || '#'}
      className={`relative px-4 py-2 text-neutral-300 hover:text-white transition-all duration-300 hover:scale-105 group ${
        currentPath === item.path ? 'text-white' : ''
      }`}
    >
      {item.title}
      {/* Indicador de página ativa */}
      {currentPath === item.path && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
      )}
      {/* Efeito de hover com linha */}
      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  );

  // Renderizar item do menu mobile
  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.submenu) {
      return (
        <div key={item.id} className="mb-6">
          <div className="text-white font-semibold mb-3 text-lg">{item.title}</div>
          <div className="ml-4 space-y-3">
            {item.submenu.map((subItem: MenuItem) => (
              <a
                key={subItem.id}
                href={subItem.title === "ESH" ? "https://esh.elevensoft.dev/" : subItem.path}
                target={subItem.title === "ESH" ? "_blank" : "_self"}
                rel={subItem.title === "ESH" ? "noopener noreferrer" : ""}
                className={`block transition-all duration-200 py-2 relative ${
                  subItem.path && currentPath === subItem.path 
                    ? 'text-white' 
                    : 'text-neutral-300 hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                {subItem.title}
                {/* Indicador de página ativa no mobile */}
                {subItem.path && currentPath === subItem.path && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-r-full" />
                )}
              </a>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <Link
          key={item.id}
          href={item.path || '#'}
          className={`block transition-all duration-200 py-3 text-lg relative ${
            currentPath === item.path 
              ? 'text-white' 
              : 'text-neutral-300 hover:text-white'
          }`}
          onClick={closeMobileMenu}
        >
          {item.title}
          {/* Indicador de página ativa no mobile */}
          {currentPath === item.path && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-r-full" />
          )}
        </Link>
      );
    }
  };

  return (
    <>
      {/* Barra de Progresso */}
      <ScrollProgress progress={scrollProgress} />

      {/* Header Principal */}
      <header
        className={`z-40 sticky top-0 w-full transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-xl border-neutral-800/50 shadow-2xl'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          {/* Logo com efeito de brilho */}
          <Link href="/" className="group relative">
            <div className="relative overflow-hidden rounded-xl p-2">
              <img
                src="/images/logo/logo-light.png"
                alt="Logo Eleven, letra E"
                className="w-32 h-16 transition-all duration-300 group-hover:scale-110"
              />
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm" />
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-2 text-neutral-300 text-sm">
            {menuData?.map((item) =>
              item.submenu ? renderDropdownItem(item) : renderMenuItem(item)
            )}
          </nav>

                  {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/precos"
            className="relative group px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.4)] hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Começar</span>
            {/* Efeito de brilho no botão */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Efeito de brilho que se move */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </Link>
        </div>

          {/* Botão Menu Mobile */}
          <button
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {/* Linha superior */}
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'rotate-45 translate-y-1.5'
                  : 'group-hover:bg-orange-400'
              }`}
            />
            {/* Linha do meio */}
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
                isMobileMenuOpen
                  ? 'opacity-0'
                  : 'group-hover:bg-orange-400'
              }`}
            />
            {/* Linha inferior */}
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
                isMobileMenuOpen
                  ? '-rotate-45 -translate-y-1.5'
                  : 'group-hover:bg-orange-400'
              }`}
            />
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="bg-neutral-950/95 backdrop-blur-xl border-t border-neutral-800/50">
            <div className="container mx-auto px-6 py-8">
              {/* Menu Items */}
              <div className="mb-8">
                {menuData?.map(renderMobileMenuItem)}
              </div>

              {/* CTA Mobile */}
              <div className="pt-6 border-t border-neutral-800/50">
                <Link
                  href="/precos"
                  className="relative group block w-full text-center px-6 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,138,41,0.4)] overflow-hidden"
                  onClick={closeMobileMenu}
                >
                  <span className="relative z-10">Começar Agora</span>
                  {/* Efeito de brilho que se move */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
} 