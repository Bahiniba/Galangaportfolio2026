import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import Menu from '../components/Menu';
import { projects, projectsList } from '../data/projects';
import imgProfile from "figma:asset/71ed4c233544e578bf3f90b15239db5dacba5077.png";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const project = projects[id as keyof typeof projects] || projects.rently;
  const [currentTime, setCurrentTime] = useState(new Date());

  // Get other projects (exclude current one)
  const otherProjects = projectsList.filter(p => p.id !== id).slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className={`min-h-screen relative ${
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

      <div className="relative flex">
        {/* Menu button - Fixed top right for desktop */}
        <div className="hidden lg:block fixed top-12 right-12 z-50">
          <Menu variant="desktop" />
        </div>

        {/* Left Sidebar - Sticky */}
        <motion.aside 
          className="hidden lg:block sticky top-0 h-screen w-[432px] p-12 flex-shrink-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col h-full">
            {/* Profile */}
            <div className="flex items-center gap-4 mb-12 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-[#bffffd]">
                <img src={imgProfile} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className={`font-['Azeret_Mono'] text-[32px] tracking-[0.1em] leading-[38.4px] ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {t('home.title')}
                </h1>
                <p className="font-['Azeret_Mono'] text-sm text-[#b3b3b3]">
                  {t('home.subtitle')}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="font-['Azeret_Mono'] text-base leading-relaxed text-[#b3b3b3] mb-auto tracking-[0.1em]">
              {t('home.aboutDescription')}
            </p>

            {/* Bottom section */}
            <div className="space-y-2 mt-auto">
              <p className="font-['Azeret_Mono'] text-base text-[#b3b3b3]">
                {t('home.footer')}
              </p>

              {/* LinkedIn button */}
              <div className="flex gap-4 mb-4">
                <motion.a
                  href="https://www.linkedin.com/in/sangol-ramses-galanga-350533220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer ${
                    theme === 'dark' ? 'border-white' : 'border-black'
                  }`}
                  whileHover={{ 
                    backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', 
                    scale: 1.1 
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

              {/* Footer links */}
              <div className="flex gap-4">
                <span className={`font-['Azeret_Mono'] text-base text-[#b3b3b3] cursor-pointer transition-colors ${
                  theme === 'dark' ? 'hover:text-white' : 'hover:text-black'
                }`}>
                  {t('home.licensing')}
                </span>
                <span className={`font-['Azeret_Mono'] text-base text-[#b3b3b3] cursor-pointer transition-colors ${
                  theme === 'dark' ? 'hover:text-white' : 'hover:text-black'
                }`}>
                  {t('home.notFound')}
                </span>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 px-6 py-12 lg:px-12 lg:py-12 max-w-[1000px]">
          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between mb-8">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#bffffd]">
                <img src={imgProfile} alt="Avatar" className="w-full h-full object-cover" />
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
            <div className={`font-['Azeret_Mono'] text-xs ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              {formatTime(currentTime)} {formatDate(currentTime)}
            </div>

            <Menu variant="mobile" />
          </div>

          {/* Project Title */}
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`font-['Azeret_Mono'] text-4xl md:text-5xl mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              {project.title} <span className="text-[#b3b3b3]">-</span> {project.subtitle}
            </h3>
          </motion.div>

          {/* Action Button */}
          {project.website && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 font-['Azeret_Mono'] text-base px-8 py-4 rounded-3xl transition-all ${
                  theme === 'dark'
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('common.view')}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-black' : 'bg-white'
                }`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke={theme === 'dark' ? 'white' : 'black'} strokeWidth="2"/>
                  </svg>
                </div>
              </motion.a>
            </motion.div>
          )}

          {/* Main Project Image */}
          <motion.div
            className={`rounded-[36px] p-3 mb-8 overflow-hidden ${
              theme === 'dark' ? 'bg-[#242424]' : 'bg-[#f5f5f5]'
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img 
                src={project.mainImage} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Project Info Card */}
          <motion.div
            className={`rounded-[36px] p-6 mb-8 ${
              theme === 'dark' ? 'bg-[#242424]' : 'bg-[#f5f5f5]'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="space-y-4 font-['Azeret_Mono'] text-xs tracking-[0.1em]">
              <div className="flex items-center gap-2">
                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{t('common.category')}:</span>
                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{project.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{t('common.client')}:</span>
                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{t('common.duration')}:</span>
                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{project.duration}</span>
              </div>
            </div>
          </motion.div>

          {/* Project Description */}
          <motion.div
            className="space-y-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="font-['Azeret_Mono'] text-sm leading-relaxed text-[#b3b3b3]">
              {language === 'fr' ? project.description.fr : project.description.en}
            </p>

            {/* My Approach Section */}
            <div>
              <h3 className={`font-['Azeret_Mono'] text-[28px] mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t('projectDetail.myApproach')}
              </h3>
              <p className="font-['Azeret_Mono'] text-sm leading-relaxed text-[#b3b3b3]">
                {t('projectDetail.approachDescription')}
              </p>
            </div>

            {/* Vision and Innovation */}
            <div>
              <h4 className={`font-['Azeret_Mono'] text-lg mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t('projectDetail.visionAndInnovation')}
              </h4>
              <p className="font-['Azeret_Mono'] text-sm leading-relaxed text-[#b3b3b3]">
                {t('projectDetail.visionDescription')}
              </p>
            </div>

            {/* Challenge */}
            <div>
              <h4 className={`font-['Azeret_Mono'] text-lg mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t('projectDetail.identifyingChallenges')}
              </h4>
              <p className="font-['Azeret_Mono'] text-sm leading-relaxed text-[#b3b3b3]">
                {language === 'fr' ? project.challenge.fr : project.challenge.en}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h4 className={`font-['Azeret_Mono'] text-lg mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t('projectDetail.resolvingProblems')}
              </h4>
              <p className="font-['Azeret_Mono'] text-sm leading-relaxed text-[#b3b3b3]">
                {language === 'fr' ? project.solution.fr : project.solution.en}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className={`font-['Azeret_Mono'] text-lg mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {language === 'fr' ? 'Technologies Utilisées' : 'Technologies Used'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className={`px-4 py-2 rounded-full text-xs font-['Azeret_Mono'] ${
                      theme === 'dark' 
                        ? 'bg-white/10 text-white' 
                        : 'bg-black/10 text-black'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className={`font-['Azeret_Mono'] text-lg mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t('projectDetail.detailedPages')}
              </h4>
              <ul className="space-y-3 font-['Azeret_Mono'] text-sm text-[#b3b3b3]">
                {(language === 'fr' ? project.features.fr : project.features.en).map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  >
                    <span>•</span>
                    <div>{feature}</div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h4 className={`font-['Azeret_Mono'] text-lg mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {t('projectDetail.conclusion')}
              </h4>
              <p className="font-['Azeret_Mono'] text-sm leading-relaxed text-[#b3b3b3]">
                {language === 'fr' ? project.results.fr : project.results.en}
              </p>
            </div>
          </motion.div>
        </main>

        {/* Right Sidebar - Other Projects */}
        <aside className="hidden xl:block sticky top-0 h-screen w-[380px] p-12 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={`font-['Azeret_Mono'] text-xl mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              {t('projectDetail.otherProjects')}
            </h3>

            <div className="space-y-4">
              {otherProjects.map((otherProject, index) => (
                <motion.div
                  key={otherProject.id}
                  className={`rounded-3xl overflow-hidden cursor-pointer group ${
                    theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-white border border-black/10'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => navigate(`/projects/${otherProject.id}`)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={otherProject.mainImage} 
                      alt={otherProject.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className={`font-['Azeret_Mono'] text-base mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      {otherProject.title}
                    </h4>
                    <p className="font-['Azeret_Mono'] text-xs text-[#b3b3b3]">
                      {otherProject.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.button
                className={`w-full border font-['Azeret_Mono'] text-sm px-6 py-3 rounded-full mt-6 ${
                  theme === 'dark' 
                    ? 'border-white text-white' 
                    : 'border-black text-black'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' 
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projects')}
              >
                {t('common.viewAll')}
              </motion.button>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
}