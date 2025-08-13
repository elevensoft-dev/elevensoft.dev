export interface MenuItem {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  submenu?: MenuItem[];
}

export interface HeaderState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  activeDropdown: string | null;
  scrollProgress: number;
  currentPath: string;
}

export interface HeaderActions {
  toggleDropdown: (dropdownId: string) => void;
  closeDropdowns: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export interface HeaderHook extends HeaderState, HeaderActions {} 