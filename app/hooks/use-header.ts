import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { HeaderState, HeaderHook } from '../types/header';

export const useHeader = (): HeaderHook => {
  const pathname = usePathname();
  const [state, setState] = useState<HeaderState>({
    isScrolled: false,
    isMobileMenuOpen: false,
    activeDropdown: null,
    currentPath: pathname,
  });

  // Manage scroll and backdrop blur
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    
    setState(prev => ({
      ...prev,
      isScrolled: scrollY > 20,
    }));
  }, []);

  // Update current page when pathname changes
  useEffect(() => {
    setState(prev => ({
      ...prev,
      currentPath: pathname,
    }));
  }, [pathname]);

  // Manage dropdowns
  const toggleDropdown = useCallback((dropdownId: string) => {
    setState(prev => ({
      ...prev,
      activeDropdown: prev.activeDropdown === dropdownId ? null : dropdownId,
    }));
  }, []);

  // Close dropdowns when clicking outside
  const closeDropdowns = useCallback(() => {
    setState(prev => ({
      ...prev,
      activeDropdown: null,
    }));
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMobileMenuOpen: !prev.isMobileMenuOpen,
    }));
  }, []);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMobileMenuOpen: false,
    }));
  }, []);

  // Close mobile menu on resize
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
    
    // Close dropdowns when clicking outside
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