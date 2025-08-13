import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { HeaderState, HeaderHook } from '../types/header';

export const useHeader = (): HeaderHook => {
  const pathname = usePathname();
  const [state, setState] = useState<HeaderState>({
    isScrolled: false,
    isMobileMenuOpen: false,
    activeDropdown: null,
    scrollProgress: 0,
    currentPath: pathname,
  });

  // Gerenciar scroll e backdrop blur
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / windowHeight) * 100;
    
    setState(prev => ({
      ...prev,
      isScrolled: scrollY > 20,
      scrollProgress: Math.min(progress, 100),
    }));
  }, []);

  // Atualizar página atual quando mudar
  useEffect(() => {
    setState(prev => ({
      ...prev,
      currentPath: pathname,
    }));
  }, [pathname]);

  // Gerenciar dropdowns
  const toggleDropdown = useCallback((dropdownId: string) => {
    setState(prev => ({
      ...prev,
      activeDropdown: prev.activeDropdown === dropdownId ? null : dropdownId,
    }));
  }, []);

  // Fechar dropdowns ao clicar fora
  const closeDropdowns = useCallback(() => {
    setState(prev => ({
      ...prev,
      activeDropdown: null,
    }));
  }, []);

  // Toggle menu mobile
  const toggleMobileMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMobileMenuOpen: !prev.isMobileMenuOpen,
    }));
  }, []);

  // Fechar menu mobile
  const closeMobileMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMobileMenuOpen: false,
    }));
  }, []);

  // Fechar menu mobile ao redimensionar
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) {
      setState(prev => ({
        ...prev,
        isMobileMenuOpen: false,
        activeDropdown: null,
      }));
    }
  }, []);

  // Event listeners
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Fechar dropdowns ao clicar fora
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        closeDropdowns();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleScroll, handleResize, closeDropdowns]);

  return {
    ...state,
    toggleDropdown,
    closeDropdowns,
    toggleMobileMenu,
    closeMobileMenu,
  };
}; 