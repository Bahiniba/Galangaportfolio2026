import { motion } from 'motion/react';
import Layout from '../components/Layout';
import imgFramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png1 from "figma:asset/f37646889dcdd3f524bac5e8614eda07a0f86c3f.png";

export default function MasterFramer() {
  const features = [
    {
      title: 'Interactive Animations',
      description: 'Learn to create stunning animations that bring your designs to life',
    },
    {
      title: 'Component System',
      description: 'Master the art of building reusable, scalable component libraries',
    },
    {
      title: 'Responsive Design',
      description: 'Create layouts that work perfectly on any device',
    },
    {
      title: 'Advanced Interactions',
      description: 'Build complex user interactions with variants and gestures',
    },
    {
      title: 'CMS Integration',
      description: 'Connect your designs to real data sources',
    },
    {
      title: 'Performance Optimization',
      description: 'Ensure your sites load fast and run smoothly',
    },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero */}
        <div className="mb-12">
          <motion.h1 
            className="font-['Azeret_Mono'] text-[64px] leading-[70px] text-white tracking-[0.02em] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Master Framer
          </motion.h1>
          <motion.p 
            className="font-['Azeret_Mono'] text-[20px] leading-[28px] text-[#b3b3b3] max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A comprehensive course to help you become a Framer expert. Learn everything from basics to advanced techniques.
          </motion.p>
        </div>

        {/* Main image */}
        <motion.div
          className="relative rounded-[36px] overflow-hidden mb-12 aspect-video bg-[#242424]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img 
            src={imgFramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png1} 
            alt="Master Framer" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Play button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="black"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Course stats */}
        <motion.div
          className="grid grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { label: 'Lessons', value: '50+' },
            { label: 'Hours', value: '12+' },
            { label: 'Students', value: '1,000+' },
            { label: 'Level', value: 'All' },
          ].map((stat, index) => (
            <div key={index} className="bg-[#242424] rounded-[36px] p-6 text-center">
              <div className="font-['Azeret_Mono'] text-[36px] leading-[42px] text-white mb-2">
                {stat.value}
              </div>
              <div className="font-['Azeret_Mono'] text-[14px] text-[#b3b3b3]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* What you'll learn */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Azeret_Mono'] text-[48px] leading-[56px] text-white mb-8">
            What You'll Learn
          </h2>
          
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#242424] rounded-[36px] p-8 group cursor-pointer"
                whileHover={{ backgroundColor: '#2a2a2a', scale: 1.02 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="font-['Azeret_Mono'] text-[24px] leading-[28.8px] text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-['Azeret_Mono'] text-[16px] leading-[22.4px] text-[#b3b3b3]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="bg-[#242424] rounded-[36px] p-12 text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Azeret_Mono'] text-[48px] leading-[56px] text-white mb-4">
            Ready to Master Framer?
          </h2>
          <p className="font-['Azeret_Mono'] text-[20px] leading-[28px] text-[#b3b3b3] mb-8 max-w-2xl mx-auto">
            Join thousands of designers who are already building amazing websites with Framer.
          </p>
          <div className="flex gap-6 justify-center">
            <motion.button
              className="bg-white text-black font-['Azeret_Mono'] text-[18px] px-10 py-5 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
            <motion.button
              className="border border-white text-white font-['Azeret_Mono'] text-[18px] px-10 py-5 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Curriculum
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
