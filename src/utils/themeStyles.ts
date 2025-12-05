export const getThemeStyles = (theme: 'light' | 'dark') => ({
  // Background colors
  bg: {
    primary: theme === 'dark' ? 'bg-black' : 'bg-white',
    secondary: theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-[#f5f5f5]',
    card: theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white',
    hover: theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5',
  },
  
  // Text colors
  text: {
    primary: theme === 'dark' ? 'text-white' : 'text-black',
    secondary: theme === 'dark' ? 'text-[#b3b3b3]' : 'text-[#666666]',
    muted: theme === 'dark' ? 'text-[#808080]' : 'text-[#999999]',
  },
  
  // Border colors
  border: {
    primary: theme === 'dark' ? 'border-white' : 'border-black',
    secondary: theme === 'dark' ? 'border-white/10' : 'border-black/10',
    card: theme === 'dark' ? 'border-white/5' : 'border-black/5',
  },
  
  // Gradients
  gradient: {
    radial: theme === 'dark'
      ? 'radial-gradient(circle at 50% 50%, rgba(38,38,38,1) 0%, rgba(26,26,26,1) 100%)'
      : 'radial-gradient(circle at 50% 50%, rgba(250,250,250,1) 0%, rgba(240,240,240,1) 100%)',
    overlay: theme === 'dark'
      ? 'bg-gradient-to-t from-black/90 via-transparent to-transparent'
      : 'bg-gradient-to-t from-white/90 via-transparent to-transparent',
  },
});
