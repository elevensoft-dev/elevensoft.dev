"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "./menuData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      const currentScrollState = window.scrollY > 20;
      if (currentScrollState !== isScrolled) {
        setIsScrolled(currentScrollState);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const renderMenuItem = (item) => {
    if (item.submenu) {
      return (
        <div key={item.id} className="relative group">
          <button className="transition-colors hover:text-white flex items-center gap-1">
            {item.title}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            {item.submenu.map((subItem) => (
              <a
                key={subItem.id}
                href={subItem.title === "ESH" ? "https://esh.elevensoft.dev/" : subItem.path}
                target={subItem.title === "ESH" ? "_blank" : "_self"}
                rel={subItem.title === "ESH" ? "noopener noreferrer" : ""}
                className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                {subItem.title}
              </a>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <Link
          key={item.id}
          href={item.path}
          className={`transition-colors hover:text-white ${
            pathname === item.path ? 'text-white' : ''
          }`}
        >
          {item.title}
        </Link>
      );
    }
  };

  const renderMobileMenuItem = (item) => {
    if (item.submenu) {
      return (
        <div key={item.id} className="mb-4">
          <div className="text-white font-semibold mb-2">{item.title}</div>
          <div className="ml-4 space-y-2">
            {item.submenu.map((subItem) => (
              <a
                key={subItem.id}
                href={subItem.title === "ESH" ? "https://esh.elevensoft.dev/" : subItem.path}
                target={subItem.title === "ESH" ? "_blank" : "_self"}
                rel={subItem.title === "ESH" ? "noopener noreferrer" : ""}
                className="block text-neutral-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {subItem.title}
              </a>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <Link
          key={item.id}
          href={item.path}
          className="block text-neutral-300 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.title}
        </Link>
      );
    }
  };

  return (
    <header
      className={`z-30 sticky top-0 w-full transition-colors duration-300 border-b border-transparent ${
        isScrolled ? 'bg-neutral-950/80 backdrop-blur border-neutral-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo/logo-light.png" alt="Logo Eleven, letra E" className="w-28 h-14" />
          
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-neutral-300 text-sm">
          {menuData?.map(renderMenuItem)}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <Link
            href="/precos"
            className="rounded-full bg-orange-400 text-black text-sm px-5 py-2.5 font-semibold transition-transform hover:scale-105"
          >
            Começar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-t border-neutral-800">
          <div className="container mx-auto px-5 py-4">
            {menuData?.map(renderMobileMenuItem)}
          </div>
        </div>
      )}
    </header>
  );
}
