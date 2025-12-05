import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import Menu from '../components/Menu';
import imgProfile from "figma:asset/71ed4c233544e578bf3f90b15239db5dacba5077.png";

export default function NotFound() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { t, language } = useLanguage();

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Radial gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            background: theme === 'dark' 
              ? 'radial-gradient(circle at 50% 50%, rgba(38,38,38,1) 0%, rgba(26,26,26,1) 100%)'
              : 'radial-gradient(circle at 50% 50%, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 100%)'
          }}
        />
      </div>

      {/* Main container */}
      <div className="relative max-w-[1920px] mx-auto px-4 py-4 sm:px-6 sm:py-6 md:px-12 md:py-12">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-6 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile */}
          <div className="flex items-center gap-2 sm:gap-4 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#bffffd]">
              <img src={imgProfile} alt="GALANGA Sangol Ramses" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className={`font-['Azeret_Mono'] text-base sm:text-xl tracking-[0.1em] ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t('home.title')}
              </h1>
              <p className="font-['Azeret_Mono'] text-[10px] sm:text-xs text-[#b3b3b3]">
                {t('home.subtitle')}
              </p>
            </div>
          </div>

          {/* Menu Component */}
          <Menu variant="desktop" />
        </motion.div>

        {/* 404 Content */}
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <motion.div
            className="text-center max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 Number */}
            <motion.h1 
              className={`font-['Azeret_Mono'] text-[120px] sm:text-[180px] md:text-[240px] leading-none mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              404
            </motion.h1>

            {/* Title */}
            <motion.h2 
              className={`font-['Azeret_Mono'] text-2xl sm:text-3xl md:text-4xl mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {language === 'fr' ? 'Page non trouvée' : 'Page Not Found'}
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="font-['Azeret_Mono'] text-base sm:text-lg text-[#b3b3b3] mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {language === 'fr' 
                ? 'Désolé, la page que vous recherchez n\'existe pas ou a été déplacée.'
                : 'Sorry, the page you are looking for does not exist or has been moved.'
              }
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                onClick={() => navigate('/')}
                className={`border font-['Azeret_Mono'] text-sm px-8 py-4 rounded-full w-full sm:w-auto ${
                  theme === 'dark' 
                    ? 'border-white text-white' 
                    : 'border-black text-black'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
              </motion.button>

              <motion.button
                onClick={() => navigate('/projects')}
                className={`border font-['Azeret_Mono'] text-sm px-8 py-4 rounded-full w-full sm:w-auto ${
                  theme === 'dark' 
                    ? 'border-white text-white' 
                    : 'border-black text-black'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'fr' ? 'Voir les projets' : 'View Projects'}
              </motion.button>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className={`w-24 h-1 mx-auto rounded-full ${
                theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
              }`} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
