import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import imgAvatarIGk4X1NjsVgWzFvuQqadJp9IPng from "figma:asset/d8e74e8a9c52314b7998662285e91c803e62026a.png";

interface SidebarProps {
  description: string;
}

export default function Sidebar({ description }: SidebarProps) {
  const navigate = useNavigate();

  return (
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
            <img src={imgAvatarIGk4X1NjsVgWzFvuQqadJp9IPng} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-['Azeret_Mono'] text-[32px] text-white tracking-[0.1em] leading-[38.4px]">
              TONY B.
            </h1>
            <p className="font-['Azeret_Mono'] text-sm text-[#b3b3b3]">
              PRODUCT DESIGNER
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="font-['Azeret_Mono'] text-base leading-relaxed text-[#b3b3b3] mb-auto tracking-[0.1em]">
          {description}
        </p>

        {/* Bottom section */}
        <div>
          {/* Social icons */}
          <div className="flex gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center cursor-pointer"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>

          {/* Footer text */}
          <div className="space-y-2">
            <p className="font-['Azeret_Mono'] text-base text-[#b3b3b3]">
              © by UIhub in Framer
            </p>
            <div className="flex gap-4">
              <span className="font-['Azeret_Mono'] text-base text-[#b3b3b3] cursor-pointer hover:text-white transition-colors">
                Licensing
              </span>
              <span className="font-['Azeret_Mono'] text-base text-[#b3b3b3] cursor-pointer hover:text-white transition-colors">
                404
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
