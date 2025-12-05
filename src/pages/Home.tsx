import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import Menu from "../components/Menu";
import { projectsList } from "../data/projects";
import imgProfile from "../assets/imgProfile.jpeg";
import imgAvenzor from "../assets/e33195a80fd6bd33ab4ae3f418d65e36d5cb474d.png";
import imgPlywood from "../assets/afb24e8572c9450898ecde0cfdc542d61bf80fe7.png";
import imgHuggl10 from "../assets/70291f70eb21813fe3c3418cfc95f5981fc7002b.png";
import imgCharmantFramerWebsite from "../assets/5eae6245088eea1bddcbbef33c9947bf9ed58577.png";
import imgPredictScreen from "../assets/19695858df7ddfb9a4fb00ccf293f997de6b0233.png";
import imgHuggl20 from "../assets/62cc135783ac479861c83f00572b7529cf840530.png";
import imgAvatarPm9TtOkN341IYtePLdPGmhG0EPng from "../assets/5e1703e6ea203cc7ab1f22352424c36fae8df2ed.png";
import imgAvatarLKaaStgbmdIe8TfrIkFlKzHazV0Png from "../assets/23ac6e3eec3898ef9e58f2d92a7ed196a8c8343e.png";
import imgAvatarIkD34VgzaLm6N50MKdcR9HvBnkPng from "../assets/70d3c922397689cde8b40bd3ced656f2626f1128.png";
import imgFlutter from "../assets/flutter.png";
import imgReact from "../assets/reactLogo.png";
import imgPython from "../assets/python.png";
import imgLaravel from "../assets/laravel.png";
import imgFirebase from "../assets/firebaseLogo.png";
import imgContactBg from "../assets/imgContactBG.jpg";

const projectImages = [
  imgAvenzor,
  imgPlywood,
  imgHuggl10,
  imgCharmantFramerWebsite,
  imgPredictScreen,
  imgHuggl20,
];

export default function Home() {
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

  return (
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
      <div className="relative max-w-[1920px] mx-auto px-6 py-6 md:px-12 md:py-12">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile */}
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#bffffd]">
              <img
                src={imgProfile}
                alt="Confort Technologie"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1
                className={`font-['Azeret_Mono'] text-xl tracking-[0.1em] ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {t("home.title")}
              </h1>
              <p
                className={`font-['Azeret_Mono'] text-xs ${
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
            className={`font-['Azeret_Mono'] text-sm hidden md:block ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
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
              theme === "dark" ? "bg-[#1a1a1a]" : "bg-[#f5f5f5]"
            }`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxHeight: "calc(100vh - 48px)" }}
          >
            {/* More about Me button - EN HAUT */}
            <motion.button
              className={`border font-['Azeret_Mono'] text-sm px-6 py-3 rounded-full mb-6 w-full ${
                theme === "dark"
                  ? "border-white text-white"
                  : "border-black text-black"
              }`}
              whileHover={{
                scale: 1.05,
                backgroundColor:
                  theme === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t("home.moreAboutMe")}
            </motion.button>

            {/* Description text */}
            <p
              className={`font-['Azeret_Mono'] text-sm leading-relaxed mb-8 ${
                theme === "dark"
                  ? "text-[#b3b3b3]"
                  : "text-[#666666]"
              }`}
            >
              {t("home.description")}
            </p>

            {/* Footer text - EN BAS */}
            <div className="space-y-2 mt-auto">
              <p
                className={`font-['Azeret_Mono'] text-xs ${
                  theme === "dark"
                    ? "text-[#b3b3b3]"
                    : "text-[#666666]"
                }`}
              >
                {t("home.footer")}
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
          </motion.div>

          {/* Right Grid - Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* My Projects Card */}
            <motion.div
              className="relative bg-[#1a1a1a] rounded-[32px] overflow-hidden aspect-square group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => navigate("/projects")}
            >
              {/* Grid of project images */}
              <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
                {projectImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-2xl overflow-hidden bg-[#242424]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.1,
                    }}
                  >
                    <img
                      src={img}
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="font-['Azeret_Mono'] text-3xl text-white z-10">
                  {t("home.selectedWork")}
                </h3>
              </div>

              {/* Arrow button */}
              <motion.div
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M1 11L11 1M11 1H1M11 1V11"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>

            {/* Container vertical pour My Stack + Contact */}
            <div className="flex flex-col gap-6">
              {/* My Stack Card */}
              <motion.div
                className="bg-[#214ade] rounded-[32px] p-8 flex-1 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onClick={() => navigate("/stack")}
              >
                <h3 className="font-['Azeret_Mono'] text-3xl text-white">
                  {t("home.myStack")}
                </h3>

                {/* Tool icons/logos */}
                <div className="flex gap-3 flex-wrap justify-center items-center">
                  {[
                    { logo: imgFlutter, bg: "#E3F2FD" },
                    { logo: imgReact, bg: "#E1F5FE" },
                    { logo: imgPython, bg: "#FFF9C4" },
                    { logo: imgLaravel, bg: "#FFE5E5" },
                    { logo: imgFirebase, bg: "#FFF9C4" },
                  ].map((tool, i) => (
                    <motion.div
                      key={i}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center p-2"
                      style={{ backgroundColor: tool.bg }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + i * 0.1,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <img
                        src={tool.logo}
                        alt={`Tech ${i + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="self-end w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M1 11L11 1M11 1H1M11 1V11"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                className="relative bg-[#1a1a1a] rounded-[32px] p-8 flex-1 flex flex-col justify-between cursor-pointer group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onClick={() => navigate("/contact")}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={imgContactBg}
                    alt="Contact illustration"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Orange overlay with 5% opacity */}
                <div className="absolute inset-0 bg-[#ff8c00] opacity-5" />

                <h3 className="font-['Azeret_Mono'] text-3xl text-[rgb(255,255,255)] relative z-10">
                  Contact
                </h3>

                <motion.div
                  className="self-end w-12 h-12 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center relative z-10"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(0,0,0,0.2)",
                  }}
                >
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M1 11L11 1M11 1H1M11 1V11"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* 100% Happy Clients Card */}
            <motion.div
              className="bg-[#1a1a1a] rounded-[32px] p-8 aspect-[2/1] flex flex-col justify-between cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-6">
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
                        delay: 0.8 + i * 0.1,
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#ffd700"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </motion.div>
                  ))}
                </div>

                <h3 className="font-['Azeret_Mono'] text-4xl text-white mb-2">
                  100%
                </h3>
                <p className="font-['Azeret_Mono'] text-sm text-[#b3b3b3]">
                  Happy Clients
                </p>
              </div>

              {/* Client avatars */}
              <div className="flex -space-x-3">
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-[#1a1a1a] overflow-hidden"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={imgAvatarPm9TtOkN341IYtePLdPGmhG0EPng}
                    alt="Client 1"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-[#1a1a1a] overflow-hidden"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={imgAvatarLKaaStgbmdIe8TfrIkFlKzHazV0Png}
                    alt="Client 2"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="w-12 h-12 rounded-full border-2 border-[#1a1a1a] overflow-hidden"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={imgAvatarIkD34VgzaLm6N50MKdcR9HvBnkPng}
                    alt="Client 3"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}