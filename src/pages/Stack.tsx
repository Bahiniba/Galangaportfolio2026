import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import Menu from "../components/Menu";
import imgAvatarPm9TtOkN341IYtePLdPGmhG0EPng from "../assets/5e1703e6ea203cc7ab1f22352424c36fae8df2ed.png";
import imgAvatarLKaaStgbmdIe8TfrIkFlKzHazV0Png from "../assets/23ac6e3eec3898ef9e58f2d92a7ed196a8c8343e.png";
import imgAvatarIkD34VgzaLm6N50MKdcR9HvBnkPng from "../assets/70d3c922397689cde8b40bd3ced656f2626f1128.png";
import imgAvenzor from "../assets/e33195a80fd6bd33ab4ae3f418d65e36d5cb474d.png";
import imgPlywood from "../assets/afb24e8572c9450898ecde0cfdc542d61bf80fe7.png";
import imgHuggl10 from "../assets/70291f70eb21813fe3c3418cfc95f5981fc7002b.png";
import imgImage1 from "../assets/e33195a80fd6bd33ab4ae3f418d65e36d5cb474d.png";
import imgFramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png1 from "../assets/e33195a80fd6bd33ab4ae3f418d65e36d5cb474d.png";
import imgProfile from "../assets/imgProfile.jpeg";
import imgFlutter from "../assets/flutter.png";
import imgLaravel from "../assets/laravel.png";
import imgAngular from "../assets/angular.png";
import imgReact from "../assets/reactLogo.png";
import imgPython from "../assets/python.png";
import imgSpringBoot from "../assets/spring.png";
import imgNodejs from "../assets/nodeLogo.png";
import imgMysql from "../assets/mysql.png";
import imgMongodb from "../assets/mongodbLogo.png";
import imgFirebase from "../assets/firebaseLogo.png";
import imgGithub from "../assets/github.png";
import imgJira from "../assets/jira.png";
import imgTensorFlow from "../assets/tensor.png";
import imgPowerBI from "../assets/powerbi.png";
export default function Stack() {
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
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date
      .getMinutes()
      .toString()
      .padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const techSkills = [
    {
      name: "Flutter",
      icon: imgFlutter,
      color: "#E3F2FD",
      descriptionKey: "stack.flutter.description",
    },
    {
      name: "Laravel",
      icon: imgLaravel,
      color: "#FFE5E5",
      descriptionKey: "stack.laravel.description",
    },
    {
      name: "Angular",
      icon: imgAngular,
      color: "#FFF0F0",
      descriptionKey: "stack.angular.description",
    },
    {
      name: "React / NextJS",
      icon: imgReact,
      color: "#E1F5FE",
      descriptionKey: "stack.react.description",
    },
    {
      name: "Python & AI",
      icon: imgPython,
      color: "#FFF9C4",
      descriptionKey: "stack.python.description",
    },
    {
      name: "Spring Boot",
      icon: imgSpringBoot,
      color: "#E8F5E9",
      descriptionKey: "stack.springboot.description",
    },
    {
      name: "Node.js",
      icon: imgNodejs,
      color: "#F1F8E9",
      descriptionKey: "stack.nodejs.description",
    },
    {
      name: "MySQL",
      icon: imgMysql,
      color: "#E3F2FD",
      descriptionKey: "stack.mysql.description",
    },
    {
      name: "MongoDB",
      icon: imgMongodb,
      color: "#E8F5E9",
      descriptionKey: "stack.mongodb.description",
    },
    {
      name: "Firebase",
      icon: imgFirebase,
      color: "#FFF9C4",
      descriptionKey: "stack.firebase.description",
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "#E3F2FD",
      descriptionKey: "stack.docker.description",
    },
    {
      name: "GitHub",
      icon: imgGithub,
      color: "#F5F5F5",
      descriptionKey: "stack.github.description",
    },
    {
      name: "Jira",
      icon: imgJira,
      color: "#E3F2FD",
      descriptionKey: "stack.jira.description",
    },
    {
      name: "Power BI",
      icon: imgPowerBI,
      color: "#FFF9C4",
      descriptionKey: "stack.powerbi.description",
    },
    {
      name: "TensorFlow",
      icon: imgTensorFlow,
      color: "#FFE5E5",
      descriptionKey: "stack.tensorflow.description",
    },
    {
      name: "DevOps & CI/CD",
      icon: "⚙️",
      color: "#F5F5F5",
      descriptionKey: "stack.devops.description",
    },
  ];

  return (
    <div
      className={`min-h-screen relative ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Radial gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(circle at 50% 50%, rgba(38,38,38,1) 0%, rgba(26,26,26,1) 100%)"
                : "radial-gradient(circle at 50% 50%, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 100%)",
          }}
        />
      </div>

      <div className="relative flex">
        {/* Desktop Menu Component */}
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
            <div
              className="flex items-center gap-4 mb-12 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-[#bffffd]">
                <img
                  src={imgProfile}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1
                  className={`font-['Azeret_Mono'] text-[32px] tracking-[0.1em] leading-[38.4px] ${
                    theme === "dark"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  GALANGA S.R.
                </h1>
                <p className="font-['Azeret_Mono'] text-sm text-[#b3b3b3]">
                  AI & BIG DATA DEVELOPER
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="font-['Azeret_Mono'] text-base leading-relaxed text-[#b3b3b3] mb-auto tracking-[0.1em]">
              {t('stack.sidebarDescription')}
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
                    theme === "dark"
                      ? "border-white"
                      : "border-black"
                  }`}
                  whileHover={{
                    backgroundColor:
                      theme === "dark"
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.1)",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={theme === "dark" ? "white" : "black"}
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
        <main className="flex-1 px-6 py-12 lg:px-12 lg:py-12 max-w-[800px]">
          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between mb-8">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#bffffd]">
                <img
                  src={imgProfile}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1
                  className={`font-['Azeret_Mono'] text-xl tracking-[0.1em] ${
                    theme === "dark"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {t('home.title')}
                </h1>
                <p className="font-['Azeret_Mono'] text-xs text-[#b3b3b3]">
                  {t('home.subtitle')}
                </p>
              </div>
            </div>

            {/* Time/Date */}
            <div
              className={`font-['Azeret_Mono'] text-xs ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {formatTime(currentTime)}{" "}
              {formatDate(currentTime)}
            </div>

            {/* Mobile Menu Component */}
            <Menu variant="mobile" />
          </div>

          {/* Page Title */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className={`font-['Azeret_Mono'] text-4xl md:text-5xl mb-2 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {t('stack.title')}
            </h2>
          </motion.div>

          {/* Skills List */}
          <div className="space-y-6 mb-16">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`rounded-3xl p-6 ${
                  theme === "dark"
                    ? "bg-[#1a1a1a] border border-white/5"
                    : "bg-white border border-black/10"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                }}
                whileHover={{
                  scale: 1.01,
                  borderColor:
                    theme === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.15)",
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: skill.color }}
                  >
                    {typeof skill.icon === 'string' && skill.icon.length > 3 ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <span>{skill.icon}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`font-['Azeret_Mono'] text-xl mb-2 ${
                        theme === "dark"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {skill.name}
                    </h3>
                    <p className="font-['Azeret_Mono'] text-sm leading-relaxed text-[#b3b3b3]">
                      {t(skill.descriptionKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

        {/* Right Sidebar - Cards */}
        <aside className="hidden xl:block sticky top-0 h-screen w-[380px] p-12 flex-shrink-0">
          <div className="space-y-6">
            {/* 100% Happy Clients Card */}
            <motion.div
              className={`rounded-3xl p-6 flex flex-col justify-between min-h-[200px] ${
                theme === "dark"
                  ? "bg-[#1a1a1a]"
                  : "bg-white border border-black/10"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        opacity: 0,
                        scale: 0,
                        rotate: -180,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + i * 0.1,
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#ffd700"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </motion.div>
                  ))}
                </div>

                <h3
                  className={`font-['Azeret_Mono'] text-3xl mb-2 ${
                    theme === "dark"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  100%
                </h3>
                <p className="font-['Azeret_Mono'] text-xs text-[#b3b3b3]">
                  Happy Clients
                </p>
              </div>

              <div className="flex -space-x-2 mt-4">
                <motion.div
                  className={`w-10 h-10 rounded-full border-2 overflow-hidden ${
                    theme === "dark"
                      ? "border-[#1a1a1a]"
                      : "border-white"
                  }`}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                >
                  <img
                    src={imgAvatarPm9TtOkN341IYtePLdPGmhG0EPng}
                    alt="Client 1"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className={`w-10 h-10 rounded-full border-2 overflow-hidden ${
                    theme === "dark"
                      ? "border-[#1a1a1a]"
                      : "border-white"
                  }`}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                >
                  <img
                    src={
                      imgAvatarLKaaStgbmdIe8TfrIkFlKzHazV0Png
                    }
                    alt="Client 2"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className={`w-10 h-10 rounded-full border-2 overflow-hidden ${
                    theme === "dark"
                      ? "border-[#1a1a1a]"
                      : "border-white"
                  }`}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                >
                  <img
                    src={imgAvatarIkD34VgzaLm6N50MKdcR9HvBnkPng}
                    alt="Client 3"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* My Projects Card */}
            <motion.div
              className={`relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer ${
                theme === "dark"
                  ? "bg-[#1a1a1a]"
                  : "bg-white border border-black/10"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/projects")}
            >
              <div className="absolute inset-0 grid grid-cols-2 gap-2 p-3">
                {[imgAvenzor, imgPlywood, imgHuggl10].map(
                  (img, i) => (
                    <motion.div
                      key={i}
                      className="rounded-xl overflow-hidden bg-[#242424]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + i * 0.1,
                      }}
                    >
                      <img
                        src={img}
                        alt={`Project ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ),
                )}
              </div>

              <div
                className={`absolute inset-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-t from-black/90 via-transparent to-transparent"
                    : "bg-gradient-to-t from-white/90 via-transparent to-transparent"
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  className={`font-['Azeret_Mono'] text-2xl z-10 ${
                    theme === "dark"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  My Projects
                </h3>
              </div>
            </motion.div>

          </div>
        </aside>
      </div>
    </div>
  );
}