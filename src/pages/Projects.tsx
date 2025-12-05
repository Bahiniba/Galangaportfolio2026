import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import Menu from '../components/Menu';
import { projectsList } from '../data/projects';
import imgProfile from "../assets/imgProfile.jpeg";
import { useIsMobile } from '../components/ui/use-mobile';

export default function Projects() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

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
        ></div>
      </div>

      {/* Main container */}
      <div className="relative max-w-[1920px] mx-auto px-6 py-6 md:px-12 md:py-12">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}> 
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#bffffd]">
              <img src={imgProfile} alt="Confort Technologie" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className={`font-['Azeret_Mono'] text-xl tracking-[0.1em] ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t('home.title')}
              </h1>
              <p className="font-['Azeret_Mono'] text-xs text-[#b3b3b3]">
                {t('home.subtitle')}
              </p>
            </div>
          </div>

          {/* Time/Date */}
          <div className={`font-['Azeret_Mono'] text-sm hidden md:block ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            {formatTime(currentTime)} {formatDate(currentTime)}
          </div>

          {/* Menu Component */}
          <Menu variant="desktop" />
        </motion.div>

        {/* Main Grid Layout */}
        <div className="flex gap-6 max-w-[1800px] mx-auto">
          {/* Left Sidebar - About - STICKY */}
          <motion.div 
            className={`hidden lg:block sticky top-6 self-start w-[340px] rounded-[32px] p-8 flex-shrink-0 ${
              theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white border border-black/10'
            }`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxHeight: 'calc(100vh - 48px)' }}
          >
            {/* More about Me button - EN HAUT */}
            <motion.button
              className={`border font-['Azeret_Mono'] text-sm px-6 py-3 rounded-full mb-6 w-full ${
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
              {t('projects.moreAboutMe')}
            </motion.button>

            {/* Social icons - EN HAUT */}
            <div className="flex gap-4 mb-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer ${
                    theme === 'dark' ? 'border-white' : 'border-black'
                  }`}
                  whileHover={{ 
                    backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', 
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>

            {/* Description text */}
            <p className="font-['Azeret_Mono'] text-sm leading-relaxed text-[#b3b3b3] mb-8">
              {t('projects.description')}
            </p>

            {/* Footer text - EN BAS */}
            <div className="space-y-2 mt-auto">
              <p className="font-['Azeret_Mono'] text-xs text-[#b3b3b3]">
                {t('home.footer')}
              </p>
              <div className="flex gap-4">
                <span className={`font-['Azeret_Mono'] text-xs text-[#b3b3b3] cursor-pointer transition-colors ${
                  theme === 'dark' ? 'hover:text-white' : 'hover:text-black'
                }`}>
                  {t('home.licensing')}
                </span>
                <span className={`font-['Azeret_Mono'] text-xs text-[#b3b3b3] cursor-pointer transition-colors ${
                  theme === 'dark' ? 'hover:text-white' : 'hover:text-black'
                }`}>
                  {t('home.notFound')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Projects Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6 auto-rows-[280px]">
              {/* Project Cards - All projects */}
              {projectsList.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative bg-[#1a1a1a] rounded-[32px] overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <img 
                    src={project.mainImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-300 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                  <div className={`absolute bottom-4 left-4 transition-opacity duration-300 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <h3 className="font-['Azeret_Mono'] text-xl text-white mb-1">{project.title}</h3>
                    <p className="font-['Azeret_Mono'] text-sm text-[#b3b3b3]">{project.category}</p>
                  </div>
                  {/* Arrow button */}
                  <motion.div
                    className={`absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H1M11 1V11" stroke="black" strokeWidth="2"/>
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}