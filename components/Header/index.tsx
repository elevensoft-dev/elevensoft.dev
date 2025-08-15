"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "./menuData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const renderMenuItem = (item: any) => {
    if (item.submenu) {
      return (
        <motion.div 
          key={item.id} 
          className="relative group"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <button className="transition-all duration-300 hover:text-white flex items-center gap-2 text-neutral-300 font-medium group-hover:text-orange-400">
            {item.title}
            <motion.svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
          
          {/* Submenu com animação */}
          <motion.div 
            className="absolute top-full left-0 mt-4 w-56 bg-neutral-900/95 backdrop-blur-xl border border-neutral-800/50 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileHover={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Linha decorativa superior */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
            
            <div className="p-2">
              {item.submenu.map((subItem: any, index: number) => (
                <motion.a
                  key={subItem.id}
                  href={subItem.title === "ESH" ? "https://esh.elevensoft.dev/" : subItem.path}
                  target={subItem.title === "ESH" ? "_blank" : "_self"}
                  rel={subItem.title === "ESH" ? "noopener noreferrer" : ""}
                  className="block px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/50 transition-all duration-200 rounded-xl mx-1 my-1 group/item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    x: 5,
                    backgroundColor: 'rgba(255, 138, 41, 0.1)',
                    borderColor: 'rgba(255, 138, 41, 0.3)'
                  }}
                >
                  <span className="flex items-center">
                    {subItem.title}
                    <motion.div
                      className="ml-auto w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          key={item.id}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={item.path}
            className={`relative transition-all duration-300 hover:text-white text-neutral-300 font-medium ${
              pathname === item.path ? 'text-white' : ''
            } group`}
          >
            {item.title}
            {/* Linha de destaque para item ativo */}
            {pathname === item.path && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
                layoutId="activeTab"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {/* Linha de hover */}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      );
    }
  };

  const renderMobileMenuItem = (item: any) => {
    if (item.submenu) {
      return (
        <motion.div 
          key={item.id} 
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white font-semibold mb-2 flex items-center">
            <span className="text-orange-400 mr-2">▶</span>
            {item.title}
          </div>
          <div className="ml-4 space-y-2">
            {item.submenu.map((subItem: any, index: number) => (
              <motion.a
                key={subItem.id}
                href={subItem.title === "ESH" ? "https://esh.elevensoft.dev/" : subItem.path}
                target={subItem.title === "ESH" ? "_blank" : "_self"}
                rel={subItem.title === "ESH" ? "noopener noreferrer" : ""}
                className="block text-neutral-300 hover:text-orange-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-neutral-800/30"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {subItem.title}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href={item.path}
            className="block text-neutral-300 hover:text-orange-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-neutral-800/30 flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {item.title}
          </Link>
        </motion.div>
      );
    }
  };

  return (
    <motion.header
      className={`z-30 sticky top-0 w-full transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-neutral-950/95 backdrop-blur-xl border-neutral-800/50 shadow-2xl' 
          : 'bg-transparent border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background decorativo sutil */}
      {isScrolled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-yellow-500/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <div className="container-hero relative z-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo com animação */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-4 group">
              <motion.div
                className="relative"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/uploads/logo/Logo_E_Eleven_Cor.png" 
                  alt="Logo Eleven, letra E" 
                  className="w-18 h-18 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,138,41,0.5)]" 
                />
                {/* Brilho sutil no logo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation com animações */}
          <motion.nav 
            className="hidden lg:flex items-center gap-10 text-neutral-300 text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {menuData?.map(renderMenuItem)}
          </motion.nav>

          {/* CTA Button com efeitos avançados */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/precos"
                className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold rounded-2xl transition-all duration-300 overflow-hidden group"
                style={{ 
                  boxShadow: isHovered 
                    ? '0 10px 40px rgba(255, 138, 41, 0.4)' 
                    : '0 4px 20px rgba(255, 138, 41, 0.3)'
                }}
              >
                {/* Efeito de brilho */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: isHovered ? '100%' : '-100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10 flex items-center">
                  Começar
                  <motion.svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button com animação */}
          <motion.button
            className="lg:hidden text-white hover:text-orange-400 transition-all duration-300 p-2 rounded-lg hover:bg-neutral-800/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="flex flex-col items-center justify-center w-6 h-6"
            >
              <motion.span
                className="w-6 h-0.5 bg-current rounded-full origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current rounded-full origin-center mt-1"
                variants={{
                  closed: { opacity: 1, scale: 1 },
                  open: { opacity: 0, scale: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current rounded-full origin-center mt-1"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu com animações */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden bg-neutral-950/98 backdrop-blur-xl border-t border-neutral-800/50 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container-hero py-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {menuData?.map(renderMobileMenuItem)}
              </motion.div>
              
              {/* CTA mobile */}
              <motion.div
                className="mt-6 pt-6 border-t border-neutral-800/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <Link
                  href="/precos"
                  className="block w-full text-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold rounded-2xl transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Começar Agora
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
