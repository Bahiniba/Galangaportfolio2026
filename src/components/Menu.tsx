import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuProps {
  variant?: 'desktop' | 'mobile';
}

export default function Menu({ variant = 'desktop' }: MenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: t('menu.home'), path: '/' },
    { label: t('menu.projects'), path: '/projects' },
    { label: t('menu.stack'), path: '/stack' },
    { label: t('menu.contact'), path: '/contact' },
  ];

  const isDesktop = variant === 'desktop';

  return (
    <>
      {/* Menu button */}
      <motion.button
        className={`${isDesktop ? 'hidden lg:flex fixed top-12 right-12' : 'flex'} w-12 h-12 rounded-full border items-center justify-center cursor-pointer z-50 ${
          theme === 'dark' ? 'border-white' : 'border-black'
        }`}
        whileHover={{ backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setMenuOpen(!menuOpen)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-6 h-6 relative">
          <motion.div 
            className={`absolute left-0 right-0 h-0.5 rounded-full ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}
            animate={{ 
              top: menuOpen ? '50%' : '6px', 
              rotate: menuOpen ? 45 : 0,
              translateY: menuOpen ? '-50%' : 0
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className={`absolute left-0 right-0 h-0.5 rounded-full ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}
            animate={{ 
              bottom: menuOpen ? '50%' : '6px', 
              rotate: menuOpen ? -45 : 0,
              translateY: menuOpen ? '50%' : 0
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.button>

      {/* Menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`${
              isDesktop 
                ? 'hidden lg:block fixed top-28 right-12' 
                : 'fixed top-24 right-6 lg:hidden'
            } rounded-3xl overflow-hidden z-50 border ${
              theme === 'dark'
                ? 'bg-[#1a1a1a] border-white/10'
                : 'bg-white border-black/10 shadow-xl'
            }`}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                className={`px-8 py-4 font-['Azeret_Mono'] text-base cursor-pointer border-b ${
                  theme === 'dark'
                    ? 'text-white border-white/10 hover:bg-white/5'
                    : 'text-black border-black/10 hover:bg-black/5'
                } ${
                  location.pathname === item.path 
                    ? theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                    : ''
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </motion.div>
            ))}
            
            {/* Theme Toggle in Menu */}
            <motion.div
              className={`px-8 py-4 font-['Azeret_Mono'] text-base cursor-pointer flex items-center justify-between border-b ${
                theme === 'dark'
                  ? 'text-white hover:bg-white/5 border-white/10'
                  : 'text-black hover:bg-black/5 border-black/10'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: menuItems.length * 0.05 }}
              onClick={toggleTheme}
            >
              <span>Theme</span>
              <div className="flex items-center gap-2">
                {theme === 'dark' ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                    <span className="text-sm">Dark</span>
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5"/>
                      <line x1="12" y1="1" x2="12" y2="3"/>
                      <line x1="12" y1="21" x2="12" y2="23"/>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                      <line x1="1" y1="12" x2="3" y2="12"/>
                      <line x1="21" y1="12" x2="23" y2="12"/>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                    <span className="text-sm">Light</span>
                  </>
                )}
              </div>
            </motion.div>

            {/* Language Toggle in Menu */}
            <motion.div
              className={`px-8 py-4 font-['Azeret_Mono'] text-base cursor-pointer flex items-center justify-between ${
                theme === 'dark'
                  ? 'text-white hover:bg-white/5'
                  : 'text-black hover:bg-black/5'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: (menuItems.length + 1) * 0.05 }}
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            >
              <span>Language</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">{language === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}