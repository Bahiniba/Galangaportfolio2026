# 🚀 Portfolio GALANGA Sangol Ramses

Portfolio personnel d'un développeur Full-Stack spécialisé en IA & Big Data, développement d'applications web/mobile et solutions digitales pour entreprises africaines.

## ✨ Fonctionnalités

- ✅ **Design moderne** avec grille Bento et animations Motion
- ✅ **Bilingue** : Français & Anglais
- ✅ **Thème Dark/Light** avec toggle
- ✅ **Responsive** : Mobile, Tablette, Desktop
- ✅ **SEO optimisé** avec métadonnées complètes
- ✅ **Page 404 personnalisée**
- ✅ **Navigation React Router**
- ✅ **Gestion automatique des images**

## 📁 Structure

```
/
├── pages/           # Pages principales
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── Stack.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── components/      # Composants réutilisables
│   ├── Menu.tsx
│   ├── SEO.tsx
│   └── Image.tsx
├── contexts/        # Contextes React
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx
├── locales/         # Traductions
│   ├── fr.ts
│   └── en.ts
└── utils/           # Utilitaires
    ├── assetHelper.ts
    └── routes.ts
```

## 🖼️ Images en Production

⚠️ **IMPORTANT** : Les imports `figma:asset` ne fonctionnent qu'en développement.

Le système utilise actuellement des **images de fallback** :
- Logos techno depuis jsDelivr CDN
- Photos projets depuis Unsplash
- Avatars générés par DiceBear

### Pour utiliser vos vraies images :

Consultez **`/FIX-IMAGES-PRODUCTION.md`** pour les instructions complètes.

**Résumé rapide :**
1. Uploadez vos images sur Cloudinary/ImgBB ou dans `/public/images/`
2. Modifiez les URLs dans `/utils/assetHelper.ts`
3. Redéployez

## 🚀 Déploiement

### Option 1 : Vercel (Recommandé)

```bash
# Connectez votre repo GitHub à Vercel
# Le déploiement se fait automatiquement
```

### Option 2 : Netlify

```bash
# Build command: npm run build
# Publish directory: dist
```

### Option 3 : Build local

```bash
npm install
npm run build
npm run preview
```

**📖 Guide complet :** Consultez `/DEPLOYMENT.md`

## 🛠️ Technologies

- **Frontend** : React + TypeScript + Vite
- **Styling** : Tailwind CSS v4
- **Animations** : Motion (Framer Motion)
- **Routing** : React Router v6
- **Police** : Azeret Mono
- **Icons** : Lucide React

## 📦 Installation

```bash
# Cloner le repo
git clone https://github.com/votre-username/portfolio-galanga.git

# Installer les dépendances
cd portfolio-galanga
npm install

# Lancer en dev
npm run dev

# Build production
npm run build
```

## 🔧 Configuration

### SEO

Modifiez `/components/SEO.tsx` :
```typescript
image = 'https://votre-domaine.com/og-image.jpg'
url = 'https://votre-domaine.com'
```

### Images

Modifiez `/utils/assetHelper.ts` avec vos URLs d'images.

### Traductions

Modifiez `/locales/fr.ts` et `/locales/en.ts` pour personnaliser les textes.

## 📝 Scripts

```bash
npm run dev        # Serveur de développement
npm run build      # Build production
npm run preview    # Prévisualiser le build
npm run lint       # Linter le code
```

## 📄 Documentation

- `/DEPLOYMENT.md` - Guide de déploiement complet
- `/FIX-IMAGES-PRODUCTION.md` - Gestion des images en production

## 👤 Auteur

**GALANGA Sangol Ramses**
- Email: sangolgalanga@gmail.com
- Téléphone: +228 70 12 67 15
- LinkedIn: [GALANGA Sangol Ramses](https://linkedin.com/in/sangol-ramses-galanga)

## 📜 Licence

© 2025 GALANGA Sangol Ramses - Tous droits réservés

---

**Version** : 1.0.0 - Production Ready ✅  
**Dernière mise à jour** : 5 Décembre 2025
