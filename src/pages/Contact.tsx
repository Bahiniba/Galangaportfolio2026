import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Menu from '../components/Menu';
import SEO from '../components/SEO';
import imgProfile from "figma:asset/71ed4c233544e578bf3f90b15239db5dacba5077.png";

export default function Contact() {
  const navigate = useNavigate();
  const { theme } = useTheme();
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
        title="Contact - GALANGA Sangol Ramses"
        description="Contactez-moi pour discuter de vos projets digitaux. Email: sangolgalanga@gmail.com | Téléphone: +228 70 12 67 15 | WhatsApp disponible."
      />
      <div className={`min-h-screen relative transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
        {/* Radial gradient background */}
        <div className="fixed inset-0 pointer-events-none">
          <div 
            className="absolute inset-0" 
            style={{
              background: theme === 'dark'
                ? 'radial-gradient(circle at 50% 50%, rgba(38,38,38,1) 0%, rgba(26,26,26,1) 100%)'
                : 'rgb(255,255,255)'
            }}
          />
        </div>

        <div className="relative flex">
          {/* Desktop Menu */}
          <Menu variant="desktop" />

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
                    GALANGA S.R.
                  </h1>
                  <p className={`font-['Azeret_Mono'] text-sm ${
                    theme === 'dark' ? 'text-[#b3b3b3]' : 'text-[#666666]'
                  }`}>
                    AI & BIG DATA DEVELOPER
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className={`font-['Azeret_Mono'] text-base leading-relaxed mb-auto tracking-[0.1em] ${
                theme === 'dark' ? 'text-[#b3b3b3]' : 'text-[#666666]'
              }`}>
                Have a project in mind or just want to say hello? I'd love to hear from you! Feel free to reach out through any of the channels below.
              </p>

              {/* Bottom section */}
              <div className="space-y-2 mt-auto">
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
            </div>
          </motion.aside>

          {/* Main Content */}
          <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-12 max-w-[800px]">
            {/* Mobile header */}
            <div className="lg:hidden flex items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-4 cursor-pointer" onClick={() => navigate('/')}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#bffffd]">
                  <img src={imgProfile} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h1 className={`font-['Azeret_Mono'] text-base sm:text-xl tracking-[0.1em] ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    GALANGA S.R.
                  </h1>
                  <p className={`font-['Azeret_Mono'] text-[10px] sm:text-xs ${
                    theme === 'dark' ? 'text-[#b3b3b3]' : 'text-[#666666]'
                  }`}>
                    AI &amp; BIG DATA DEVELOPER
                  </p>
                </div>
              </div>

              {/* Time/Date */}
              <div className={`font-['Azeret_Mono'] text-xs hidden sm:block ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                {formatTime(currentTime)} {formatDate(currentTime)}
              </div>

              <Menu variant="mobile" />
            </div>

            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`font-['Azeret_Mono'] text-[48px] lg:text-[64px] leading-[1.1] tracking-[0.02em] mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Let's Connect
              </h1>
              <p className={`font-['Azeret_Mono'] text-[18px] lg:text-[20px] leading-[28px] mb-12 max-w-2xl ${
                theme === 'dark' ? 'text-[#b3b3b3]' : 'text-[#666666]'
              }`}>
                Have a project in mind or just want to say hello? I'd love to hear from you!
              </p>

              {/* Email Card */}
              <motion.div 
                className={`rounded-[36px] p-8 mb-6 cursor-pointer group ${
                  theme === 'dark' ? 'bg-[#242424]' : 'bg-[#f5f5f5]'
                }`}
                whileHover={{ 
                  backgroundColor: theme === 'dark' ? '#2a2a2a' : '#e8e8e8',
                  scale: 1.01 
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className={`font-['Azeret_Mono'] text-[18px] leading-[21.6px] tracking-[0.1em] mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  📧 Email
                </p>
                <div className={`font-['Azeret_Mono'] text-[20px] lg:text-[24px] leading-[28.8px] tracking-[0.05em] transition-colors space-y-2 ${
                  theme === 'dark' 
                    ? 'text-[#b3b3b3] group-hover:text-white' 
                    : 'text-[#666666] group-hover:text-black'
                }`}>
                  <p>sangolgalanga@gmail.com</p>
                  <p>info@confortech.org</p>
                </div>
                <motion.div
                  className={`mt-6 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 ${
                    theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
                  }`}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 5L10 10L18 5M2 5V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H16C16.5304 17 17.0391 16.7893 17.4142 16.4142C17.7893 16.0391 18 15.5304 18 15V5M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5" stroke={theme === 'dark' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                className={`rounded-[36px] p-8 mb-6 cursor-pointer group ${
                  theme === 'dark' ? 'bg-[#242424]' : 'bg-[#f5f5f5]'
                }`}
                whileHover={{ 
                  backgroundColor: theme === 'dark' ? '#2a2a2a' : '#e8e8e8',
                  scale: 1.01 
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => window.location.href = 'tel:+22870126715'}
              >
                <p className={`font-['Azeret_Mono'] text-[18px] leading-[21.6px] tracking-[0.1em] mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  📱 Numéro de téléphone
                </p>
                <p className={`font-['Azeret_Mono'] text-[24px] lg:text-[32px] leading-[38.4px] tracking-[0.1em] transition-colors ${
                  theme === 'dark' 
                    ? 'text-[#b3b3b3] group-hover:text-white' 
                    : 'text-[#666666] group-hover:text-black'
                }`}>
                  +228 70 12 67 15
                </p>
                <motion.div
                  className={`mt-6 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 ${
                    theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
                  }`}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H6.5C6.63261 2 6.75979 2.05268 6.85355 2.14645C6.94732 2.24021 7 2.36739 7 2.5V6.5C7 6.63261 6.94732 6.75979 6.85355 6.85355C6.75979 6.94732 6.63261 7 6.5 7H4C4 8.85652 4.7375 10.637 6.05025 11.9497C7.36301 13.2625 9.14348 14 11 14V11.5C11 11.3674 11.0527 11.2402 11.1464 11.1464C11.2402 11.0527 11.3674 11 11.5 11H15.5C15.6326 11 15.7598 11.0527 15.8536 11.1464C15.9473 11.2402 16 11.3674 16 11.5V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H12C6.477 16 2 11.523 2 6V4Z" stroke={theme === 'dark' ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/22870126715"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-[36px] p-8 mb-12 cursor-pointer group flex items-center justify-between ${
                  theme === 'dark' ? 'bg-[#25D366]' : 'bg-[#25D366]'
                }`}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: '#1fb855' 
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M27.281 4.65C24.318 1.686 20.36 0 16.101 0C7.321 0 0.154 7.167 0.154 15.947C0.154 18.752 0.873 21.494 2.236 23.898L0 32L8.292 29.806C10.605 31.056 13.228 31.715 15.894 31.715H15.901C24.678 31.715 32 24.548 32 15.768C32 11.509 30.244 7.614 27.281 4.65ZM16.101 29.038C13.707 29.038 11.371 28.408 9.33 27.228L8.856 26.941L3.832 28.216L5.134 23.336L4.813 22.841C3.519 20.715 2.831 18.287 2.831 15.783C2.831 8.644 8.797 2.678 16.101 2.678C19.659 2.678 23.012 4.068 25.537 6.597C28.062 9.126 29.323 12.479 29.323 16.037C29.323 23.176 23.24 29.038 16.101 29.038Z" fill="#25D366"/>
                      <path d="M23.927 19.349C23.536 19.153 21.615 18.208 21.252 18.073C20.889 17.937 20.623 17.869 20.357 18.26C20.091 18.651 19.349 19.537 19.115 19.803C18.881 20.069 18.647 20.103 18.256 19.907C17.865 19.711 16.62 19.317 15.144 17.997C13.992 16.968 13.22 15.693 12.986 15.302C12.752 14.911 12.959 14.696 13.155 14.501C13.329 14.327 13.546 14.047 13.742 13.813C13.938 13.579 14.006 13.411 14.142 13.145C14.278 12.879 14.21 12.645 14.112 12.449C14.014 12.253 13.247 10.332 12.917 9.55C12.596 8.79 12.269 8.893 12.029 8.88H11.285C11.019 8.88 10.594 8.978 10.231 9.369C9.868 9.76 8.855 10.705 8.855 12.626C8.855 14.547 10.265 16.4 10.461 16.666C10.657 16.932 13.22 20.963 17.226 22.638C18.155 23.046 18.877 23.286 19.439 23.467C20.373 23.759 21.224 23.716 21.899 23.616C22.655 23.504 24.227 22.672 24.557 21.761C24.887 20.85 24.887 20.069 24.789 19.907C24.691 19.745 24.425 19.647 24.034 19.451L23.927 19.349Z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-['Azeret_Mono'] text-white text-[24px] lg:text-[32px] tracking-[0.05em]">
                      Contact WhatsApp
                    </p>
                    <p className="font-['Azeret_Mono'] text-white/80 text-[16px]">
                      Chat directement avec moi
                    </p>
                  </div>
                </div>
                
                <motion.div
                  className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 11L11 1M11 1H1M11 1V11"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
              </motion.a>
            </motion.div>
          </main>
        </div>
      </div>
    </>
  );
}