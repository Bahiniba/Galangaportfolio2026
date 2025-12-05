import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import Menu from '../components/Menu';
import SEO from '../components/SEO';
import { projectsList } from '../data/projects';
import imgProfile from "figma:asset/71ed4c233544e578bf3f90b15239db5dacba5077.png";
import imgImage1 from "figma:asset/1dbe275bee644aace1d22428b3092bf6e74f77a2.png";
import imgFramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png1 from "figma:asset/f37646889dcdd3f524bac5e8614eda07a0f86c3f.png";

export default function Projects() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());

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
    <>
      <SEO 
        title="Mes Projets - GALANGA Sangol Ramses"
        description="Découvrez mes réalisations : applications web/mobile, systèmes ERP/CRM, solutions IA et projets de transformation digitale pour entreprises africaines."
      />
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
            className="flex items-center justify-between mb-6 md:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile */}
            <div className="flex items-center gap-2 sm:gap-4 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#bffffd]">
                <img src={imgProfile} alt="Confort Technologie" className="w-full h-full object-cover" />
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

              {/* Description text */}
              <p className="font-['Azeret_Mono'] text-sm leading-relaxed text-[#b3b3b3] mb-8">
                {t('projects.description')}
              </p>

              {/* Footer text - EN BAS */}
              <div className="space-y-2 mt-auto">
                <p className="font-['Azeret_Mono'] text-xs text-[#b3b3b3]">
                  {t('home.footer')}
                </p>

                {/* LinkedIn button */}
                <div className="flex gap-4 mb-4">
                  <motion.a
                    href="https://www.linkedin.com/in/sangol-ramses-galanga-350533220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer ${
                      theme === 'dark'
                        ? 'border-white'
                        : 'border-black'
                    }`}
                    whileHover={{
                      backgroundColor:
                        theme === 'dark'
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(0,0,0,0.1)',
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={theme === 'dark' ? 'white' : 'black'}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-['Azeret_Mono'] text-xl text-white mb-1">{project.title}</h3>
                      <p className="font-['Azeret_Mono'] text-sm text-[#b3b3b3]">{project.category}</p>
                    </div>
                    
                    {/* Arrow button */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
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
    </>
  );
}