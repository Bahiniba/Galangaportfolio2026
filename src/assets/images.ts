// Centralisation de tous les imports d'images
// Si les vraies images ne sont pas encore dans /assets/images/, des placeholders seront utilisés

import {
  placeholderProfile,
  placeholderProject,
  placeholderAvatar,
  placeholderHero,
  techLogos,
} from './placeholders';

// ==========================================
// IMAGES PRINCIPALES
// ==========================================

// Photo de profil
// Remplacez par : import imgProfile from './images/profile.png';
export const imgProfile = placeholderProfile;

// ==========================================
// SCREENSHOTS DE PROJETS
// ==========================================

// Remplacez par vos vrais imports :
// export { default as imgProject1 } from './images/project-1.png';
export const imgProject1 = placeholderProject(1);
export const imgProject2 = placeholderProject(2);
export const imgProject3 = placeholderProject(3);
export const imgProject4 = placeholderProject(4);
export const imgProject5 = placeholderProject(5);
export const imgProject6 = placeholderProject(6);

// ==========================================
// AVATARS TESTIMONIALS
// ==========================================

// Remplacez par vos vrais imports :
// export { default as imgAvatar1 } from './images/avatar-1.png';
export const imgAvatar1 = placeholderAvatar(1);
export const imgAvatar2 = placeholderAvatar(2);
export const imgAvatar3 = placeholderAvatar(3);

// ==========================================
// IMAGE HERO
// ==========================================

// Remplacez par : export { default as imgHero } from './images/hero.png';
export const imgHero = placeholderHero;

// ==========================================
// LOGOS TECHNOLOGIES
// ==========================================

// Ces logos utilisent des CDN officiels (recommandé)
export const imgFlutter = techLogos.flutter;
export const imgReact = techLogos.react;
export const imgLaravel = techLogos.laravel;
export const imgAngular = techLogos.angular;
export const imgPython = techLogos.python;
export const imgSpring = techLogos.spring;
export const imgNode = techLogos.node;
export const imgMysql = techLogos.mysql;
export const imgMongodb = techLogos.mongodb;
export const imgFirebase = techLogos.firebase;
export const imgGithub = techLogos.github;
export const imgJira = techLogos.jira;
export const imgPowerBI = techLogos.powerbi;
export const imgTensorflow = techLogos.tensorflow;

// ==========================================
// EXPORTS POUR COMPATIBILITÉ
// ==========================================

// Mapping des noms
export const images = {
  profile: imgProfile,
  projects: {
    project1: imgProject1,
    project2: imgProject2,
    project3: imgProject3,
    project4: imgProject4,
    project5: imgProject5,
    project6: imgProject6,
  },
  avatars: {
    avatar1: imgAvatar1,
    avatar2: imgAvatar2,
    avatar3: imgAvatar3,
  },
  hero: imgHero,
  tech: {
    flutter: imgFlutter,
    react: imgReact,
    laravel: imgLaravel,
    angular: imgAngular,
    python: imgPython,
    spring: imgSpring,
    node: imgNode,
    mysql: imgMysql,
    mongodb: imgMongodb,
    firebase: imgFirebase,
    github: imgGithub,
    jira: imgJira,
    powerbi: imgPowerBI,
    tensorflow: imgTensorflow,
  },
};

export default images;