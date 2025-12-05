import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import Menu from "../components/Menu";
import SEO from "../components/SEO";
import imgProfile from "figma:asset/71ed4c233544e578bf3f90b15239db5dacba5077.png";
import imgAvatarPm9TtOkN341IYtePLdPGmhG0EPng from "figma:asset/5e1703e6ea203cc7ab1f22352424c36fae8df2ed.png";
import imgAvatarLKaaStgbmdIe8TfrIkFlKzHazV0Png from "figma:asset/23ac6e3eec3898ef9e58f2d92a7ed196a8c8343e.png";
import imgAvatarIkD34VgzaLm6N50MKdcR9HvBnkPng from "figma:asset/70d3c922397689cde8b40bd3ced656f2626f1128.png";
import imgAvenzor from "figma:asset/e33195a80fd6bd33ab4ae3f418d65e36d5cb474d.png";
import imgPlywood from "figma:asset/afb24e8572c9450898ecde0cfdc542d61bf80fe7.png";
import imgHuggl10 from "figma:asset/70291f70eb21813fe3c3418cfc95f5981fc7002b.png";
import imgImage1 from "figma:asset/1dbe275bee644aace1d22428b3092bf6e74f77a2.png";
import imgFramerScreenC7HjIv5NzbalKnGeCxH7AHzeE0Png1 from "figma:asset/f37646889dcdd3f524bac5e8614eda07a0f86c3f.png";
import imgFlutter from "figma:asset/989aa47122f2888ba48cf8b54d890115fa5485a2.png";
import imgLaravel from "figma:asset/de4e6a69468ad20c82cd41a022a6b17caf4946f8.png";
import imgAngular from "figma:asset/0167e29ae960dc2fe4676938fd6655d9af114a1d.png";
import imgReact from "figma:asset/3ae1f504213859f3d64d82460466b8a67c61c6f1.png";
import imgPython from "figma:asset/69b784fd22bca4ee6a7a61771af4126afea89757.png";
import imgSpringBoot from "figma:asset/a513f271cee07b3106c6462a8e0adf17b2cb7184.png";
import imgNodejs from "figma:asset/65658365932f5742675f3680cf912dfaa4176b0e.png";
import imgMysql from "figma:asset/b601a1b673bd1f6d563f420c50c05632ea042cd7.png";
import imgMongodb from "figma:asset/b347dcdd51a47279e608fce75f980687934a6248.png";
import imgFirebase from "figma:asset/37fd3115db9f64990af9610232c831f9ffa6fd54.png";
import imgGithub from "figma:asset/f3018b26b7e8d58d254f7494d360a2340fed8789.png";
import imgJira from "figma:asset/07af9e6e62b716259b86b8615960bdc3375d7737.png";
import imgPowerBI from "figma:asset/f0a51d0feec921f333bb41ceb7ad7580f1ef0981.png";
import imgTensorFlow from "figma:asset/23372b0031b8a8f4ad7cbfb075608e627214bc98.png";

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
    <>
      <SEO
        title="Technologies & Stack - GALANGA Sangol Ramses"
        description="Découvrez mes compétences techniques : Flutter, React, Laravel, Python, IA, Node.js, MongoDB, Firebase, Docker et plus. Stack technique complète pour vos projets digitaux."
      />
      <div
        className={`min-h-screen relative transition-colors duration-300 ${
          theme === "dark" ? "bg-black" : "bg-white"
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
                  : "rgb(255,255,255)",
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
            <div
              className="flex items-center gap-2 sm:gap-4 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#bffffd]">
                <img
                  src={imgProfile}
                  alt="Confort Technologie"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1
                  className={`font-['Azeret_Mono'] text-base sm:text-xl tracking-[0.1em] ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {t("home.title")}
                </h1>
                <p
                  className={`font-['Azeret_Mono'] text-[10px] sm:text-xs ${
                    theme === "dark"
                      ? "text-[#b3b3b3]"
                      : "text-[#666666]"
                  }`}
                >
                  {t("home.subtitle")}
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
          </motion.div>

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
              {t("stack.title")}
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
                    {typeof skill.icon === "string" && skill.icon.length > 3 ? (
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
        </div>
      </div>
    </>
  );
}