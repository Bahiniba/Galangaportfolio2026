# ✅ SOLUTION SIMPLE : Dossier Assets Local

## 🎯 Concept

Au lieu d'utiliser des imports `figma:asset` (qui ne marchent qu'en dev) ou des CDN externes, on utilise un **dossier local `/assets/images/`** avec vos vraies images.

---

## 📂 Structure Créée

```
/assets/
├── images/              ← Mettez VOS images ici
│   ├── profile.png
│   ├── project-1.png
│   ├── project-2.png
│   ├── project-3.png
│   └── ...
├── images.ts            ← Exports centralisés
└── placeholders.ts      ← Placeholders SVG temporaires
```

---

## 🚀 Comment ça Marche

### 1. État Actuel (Temporaire)

Le fichier `/assets/images.ts` utilise des **placeholders SVG** générés automatiquement :
- Photo de profil : Rectangle turquoise avec "GR"
- Projets : Rectangles gris avec "Projet 1", "Projet 2", etc.
- Avatars : Cercles colorés avec numéros
- Logos techno : Depuis CDN officiels

**Le site fonctionne immédiatement !** ✅

### 2. Après avoir Ajouté Vos Images

Dès que vous mettez une image dans `/assets/images/profile.png`, modifiez `/assets/images.ts` :

**AVANT (placeholder)** :
```typescript
export const imgProfile = placeholderProfile;
```

**APRÈS (votre vraie image)** :
```typescript
export { default as imgProfile } from './images/profile.png';
```

---

## 📸 Comment Ajouter Vos Images

### Étape 1 : Exporter depuis Figma

Suivez le guide `/IMAGES-FIGMA-EXPORT.md` pour exporter vos images.

### Étape 2 : Placer dans `/assets/images/`

Copiez vos images dans le dossier :

```bash
# Exemple
cp ~/Downloads/ma-photo.png /assets/images/profile.png
cp ~/Downloads/projet-erp.png /assets/images/project-1.png
cp ~/Downloads/projet-mobile.png /assets/images/project-2.png
# etc.
```

### Étape 3 : Modifier `/assets/images.ts`

Remplacez les lignes une par une :

```typescript
// Photo de profil
// AVANT :
export const imgProfile = placeholderProfile;
// APRÈS :
export { default as imgProfile } from './images/profile.png';

// Projet 1
// AVANT :
export const imgProject1 = placeholderProject(1);
// APRÈS :
export { default as imgProject1 } from './images/project-1.png';

// Projet 2
// AVANT :
export const imgProject2 = placeholderProject(2);
// APRÈS :
export { default as imgProject2 } from './images/project-2.png';

// ... et ainsi de suite pour toutes vos images
```

### Étape 4 : Test

```bash
npm run dev
```

Vérifiez que vos images s'affichent correctement.

### Étape 5 : Déployer

```bash
git add assets/
git commit -m "feat: add real project images"
git push
```

Vercel redéploie automatiquement ✅

---

## 🔄 Utiliser les Images dans Vos Pages

Au lieu d'importer depuis `figma:asset`, importez depuis `/assets/images.ts` :

**AVANT (ne fonctionne pas en production)** :
```typescript
import imgProfile from "figma:asset/71ed4c233544e578bf3f90b15239db5dacba5077.png";
```

**APRÈS (fonctionne partout)** :
```typescript
import { imgProfile } from '../assets/images';
```

### Exemple Complet

**Page Home.tsx** :

```typescript
// En haut du fichier
import { 
  imgProfile, 
  imgProject1, 
  imgProject2,
  imgReact,
  imgFlutter 
} from '../assets/images';

// Dans le JSX
<img src={imgProfile} alt="Profile" />
<img src={imgProject1} alt="Projet 1" />
<img src={imgReact} alt="React" />
```

---

## 📋 Liste des Images à Préparer

### Priorité HAUTE (Site fonctionnel)
- [ ] `profile.png` - Votre photo (400x400px min)
- [ ] `project-1.png` - Screenshot projet principal
- [ ] `project-2.png` - Screenshot 2ème projet
- [ ] `project-3.png` - Screenshot 3ème projet

### Priorité MOYENNE (Compléter le portfolio)
- [ ] `project-4.png`
- [ ] `project-5.png`
- [ ] `project-6.png`
- [ ] `hero.png` - Image bannière (1920x1080px)

### Priorité BASSE (Optionnel)
- [ ] `avatar-1.png`, `avatar-2.png`, `avatar-3.png`
- [ ] Logos techno (déjà fournis via CDN)

---

## 🎨 Formats Acceptés

| Format | Usage | Avantages |
|--------|-------|-----------|
| **PNG** | Screenshots, logos avec transparence | Qualité parfaite, transparence |
| **JPG** | Photos, grandes images | Fichiers plus légers |
| **SVG** | Logos vectoriels | Scalable, très léger |
| **WebP** | Photos modernes | Meilleure compression (optionnel) |

---

## 🔧 Optimisation des Images (Optionnel)

Pour réduire le poids :

1. **TinyPNG** : https://tinypng.com
   - Upload PNG/JPG
   - Téléchargez la version compressée
   - Économie : 50-70% de poids

2. **Squoosh** : https://squoosh.app
   - Upload n'importe quelle image
   - Ajustez qualité/compression
   - Exportez en WebP ou JPG optimisé

---

## ✅ Avantages de Cette Approche

✅ **Simple** : Pas de CDN externe, pas de configuration complexe  
✅ **Rapide** : Images servies localement  
✅ **Offline** : Fonctionne sans internet  
✅ **Control** : Vous gérez 100% de vos assets  
✅ **Déploiement** : Automatique avec Vercel/Netlify  
✅ **Placeholder** : Site fonctionnel immédiatement  

---

## 🆘 Dépannage

### "Import error: cannot find module"

→ Vérifiez que l'image existe dans `/assets/images/`  
→ Vérifiez le nom exact du fichier (sensible à la casse)

### "Image not displaying"

→ Ouvrez DevTools (F12) → Console  
→ Vérifiez les erreurs  
→ Vérifiez le chemin d'import

### "Build fails with image import"

→ Vite supporte PNG, JPG, SVG, WebP nativement  
→ Vérifiez que le format est supporté  
→ Essayez de convertir en PNG

---

## 🎯 Résumé : 3 Étapes Simples

1. **Exportez vos images depuis Figma** → `/IMAGES-FIGMA-EXPORT.md`
2. **Mettez-les dans `/assets/images/`** → Renommez selon convention
3. **Modifiez `/assets/images.ts`** → Remplacez placeholders par vrais imports

**C'est tout !** 🎉

---

**Le site fonctionne MAINTENANT avec des placeholders. Remplacez quand vous serez prêt !**
