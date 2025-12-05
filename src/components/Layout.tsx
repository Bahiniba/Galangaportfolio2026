import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import Menu from './Menu';
import imgAvatarIGk4X1NjsVgWzFvuQqadJp9IPng from "figma:asset/d8e74e8a9c52314b7998662285e91c803e62026a.png";

interface LayoutProps {
  children: ReactNode;
  showMenu?: boolean;
}

export default function Layout({ children, showMenu = true }: LayoutProps) {
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

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Stack', path: '/stack' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
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

      {/* Header - Only on non-sidebar layouts */}
      {showMenu && (
        <>
          <motion.div 
            className="relative max-w-[1920px] mx-auto px-6 py-6 md:px-12 md:py-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              {/* Profile */}
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#bffffd]">
                  <img src={imgAvatarIGk4X1NjsVgWzFvuQqadJp9IPng} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h1 className={`font-['Azeret_Mono'] text-xl tracking-[0.1em] ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    TONY B.
                  </h1>
                  <p className={`font-['Azeret_Mono'] text-xs ${
                    theme === 'dark' ? 'text-[#b3b3b3]' : 'text-[#666666]'
                  }`}>
                    PRODUCT DESIGNER
                  </p>
                </div>
              </div>

              {/* Time/Date & Menu */}
              <div className="flex items-center gap-4">
                <div className={`font-['Azeret_Mono'] text-sm hidden md:block ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {formatTime(currentTime)} {formatDate(currentTime)}
                </div>

                {/* Menu Component */}
                <Menu variant="desktop" />
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Main content */}
      <div className={showMenu ? 'relative max-w-[1920px] mx-auto px-6 md:px-12 pb-12' : ''}>
        {children}
      </div>
    </div>
  );
}