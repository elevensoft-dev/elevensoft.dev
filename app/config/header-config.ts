export const headerConfig = {
  // Theme colors
  colors: {
    primary: {
      from: 'from-orange-500',
      to: 'to-yellow-500',
      hover: {
        from: 'hover:from-orange-600',
        to: 'hover:to-yellow-600',
      },
    },
    background: {
      main: 'bg-neutral-950',
      secondary: 'bg-neutral-900/50',
      transparent: 'bg-transparent',
    },
    border: {
      primary: 'border-neutral-800/50',
      transparent: 'border-transparent',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-neutral-300',
    },
  },

  // Animations and transitions
  animations: {
    duration: 'duration-300',
    durationSlow: 'duration-500',
    ease: 'ease-in-out',
    hover: {
      scale: 'hover:scale-105',
      translate: 'hover:translate-x-1',
    },
  },

  // Responsive breakpoints
  breakpoints: {
    mobile: 'lg:hidden',
    desktop: 'hidden lg:flex',
    tablet: 'hidden md:flex',
  },

  // Z-index
  zIndex: {
    header: 'z-40',
    progress: 'z-50',
    dropdown: 'z-50',
  },

  // Header height
  height: 'h-20',

  // Padding and spacing
  spacing: {
    container: 'px-6',
    nav: 'gap-2',
    button: 'px-6 py-3',
  },

  // Shadow effects
  shadows: {
    button: 'hover:shadow-[0_0_40px_rgba(255,138,41,0.4)]',
    header: 'shadow-2xl',
  },

  // Backdrop blur
  backdrop: 'backdrop-blur-xl',
}; 