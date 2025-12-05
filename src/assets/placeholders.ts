// Images placeholder SVG pour fonctionnement immédiat
// Ces images seront utilisées si les vraies images ne sont pas encore dans /assets/images/

// Photo de profil placeholder
export const placeholderProfile = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23bffffd' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='140' fill='%23000'%3EGR%3C/text%3E%3C/svg%3E`;

// Screenshot projet placeholder
export const placeholderProject = (num: number) => 
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect fill='%232a2a2a' width='1200' height='800'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='80' fill='%23ffffff'%3EProjet ${num}%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='32' fill='%23b3b3b3'%3ERemplacez par votre screenshot%3C/text%3E%3C/svg%3E`;

// Avatar placeholder
export const placeholderAvatar = (num: number) => 
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23${['e3f2fd', 'fff0f0', 'f1f8e9'][num - 1] || 'f5f5f5}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='80' fill='%23333'%3E${num}%3C/text%3E%3C/svg%3E`;

// Image hero placeholder
export const placeholderHero = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232a2a2a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231a1a1a;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='1920' height='1080'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='120' fill='%23ffffff'%3EGALANGA Sangol Ramses%3C/text%3E%3C/svg%3E`;

// Logos techno depuis CDN
export const techLogos = {
  flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  laravel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  spring: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  jira: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  powerbi: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
};

// Helper pour charger une image avec fallback
export async function loadImageWithFallback(
  primaryPath: string,
  fallback: string
): Promise<string> {
  try {
    // Essayer de charger l'image depuis /assets/images/
    const response = await fetch(primaryPath);
    if (response.ok) {
      return primaryPath;
    }
  } catch (error) {
    console.warn(`Image not found: ${primaryPath}, using fallback`);
  }
  return fallback;
}

export default {
  placeholderProfile,
  placeholderProject,
  placeholderAvatar,
  placeholderHero,
  techLogos,
  loadImageWithFallback,
};
