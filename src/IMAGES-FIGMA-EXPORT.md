# 📥 Comment Exporter Vos Images depuis Figma

## 🎯 Objectif

Exporter toutes les images de votre design Figma et les placer dans `/assets/images/` pour qu'elles fonctionnent en production.

---

## 📋 Étape par Étape

### 1. Ouvrir votre Fichier Figma

Allez sur https://figma.com et ouvrez votre projet de portfolio.

### 2. Identifier les Images à Exporter

Vous devez exporter :
- ✅ Votre photo de profil
- ✅ Screenshots de vos projets (6+ images recommandées)
- ✅ Avatars pour testimonials (si applicable)
- ✅ Image hero/bannière (optionnel)
- ✅ Logos de technologies (optionnel, on peut utiliser des CDN)

### 3. Exporter Chaque Image

Pour chaque image :

1. **Sélectionnez l'image** dans Figma
2. Dans le panneau de droite, cherchez **"Export"**
3. Cliquez sur **"+"** pour ajouter un export
4. Choisissez le format :
   - **PNG** pour les screenshots, photos, illustrations
   - **JPG** pour les photos (plus léger)
   - **SVG** pour les logos vectoriels
5. Choisissez la résolution :
   - **2x** ou **3x** pour des images de haute qualité
6. Cliquez sur **"Export [nom]"**
7. Téléchargez l'image

### 4. Renommer et Organiser

Renommez vos images selon cette convention :

```
Figma Export          →  Nom Final
─────────────────────────────────────
votre-photo.png       →  profile.png
projet-erp.png        →  project-1.png
projet-mobile.png     →  project-2.png
projet-ia.png         →  project-3.png
screenshot-4.png      →  project-4.png
screenshot-5.png      →  project-5.png
screenshot-6.png      →  project-6.png
user1.png             →  avatar-1.png
user2.png             →  avatar-2.png
user3.png             →  avatar-3.png
banniere.png          →  hero.png
```

### 5. Placer dans le Projet

Copiez **toutes** les images renommées dans le dossier `/assets/images/`

```
/assets/images/
├── profile.png
├── project-1.png
├── project-2.png
├── project-3.png
├── project-4.png
├── project-5.png
├── project-6.png
├── avatar-1.png
├── avatar-2.png
├── avatar-3.png
└── hero.png
```

---

## 🖼️ Dimensions Recommandées

| Type d'Image | Dimensions Minimales | Dimensions Optimales |
|-------------|---------------------|---------------------|
| Photo de profil | 400x400px | 800x800px |
| Screenshots projets | 800x600px | 1200x800px |
| Avatars | 150x150px | 300x300px |
| Image hero | 1280x720px | 1920x1080px |
| Logos techno | 64x64px | 128x128px |

---

## ⚡ Export Batch (Plusieurs Images en Même Temps)

Si vous avez beaucoup d'images :

1. Sélectionnez **plusieurs images** (Shift + Clic)
2. Dans le panneau de droite, configurez l'export
3. Cliquez sur **"Export X layers"**
4. Figma téléchargera un ZIP avec toutes les images

---

## 🔄 Alternative : Export depuis Figma Make

Si vos images sont déjà importées dans Figma Make :

### Option A : Depuis le Navigateur
1. Ouvrez les DevTools (F12)
2. Allez dans l'onglet **Network**
3. Rechargez la page
4. Cherchez les requêtes d'images (filtrez par "png", "jpg")
5. Clic droit → **Open in new tab**
6. Clic droit sur l'image → **Save as...**

### Option B : Depuis Figma Original
Retournez au fichier Figma source et exportez comme décrit ci-dessus.

---

## 🎨 Logos de Technologies

Pour les logos de technologies (Flutter, React, etc.), vous avez 2 options :

### Option 1 : Utiliser des CDN (Recommandé)
Les logos sont déjà configurés pour utiliser jsDelivr CDN dans `/utils/assetHelper.ts`.
Vous n'avez **rien à faire** !

### Option 2 : Exporter vos propres logos
Si vous avez des logos personnalisés dans Figma :
1. Exportez-les en **PNG** ou **SVG**
2. Placez-les dans `/assets/images/`
3. Nommez-les : `flutter-logo.png`, `react-logo.png`, etc.

---

## ✅ Vérification

Après avoir placé vos images, vérifiez :

```bash
# Listez les fichiers
ls -la assets/images/

# Vous devriez voir :
# profile.png
# project-1.png
# project-2.png
# etc.
```

---

## 🚀 Après l'Export

Une fois toutes les images en place :

1. **Testez en local** :
   ```bash
   npm run dev
   ```

2. **Vérifiez** que toutes les images s'affichent

3. **Commit et push** :
   ```bash
   git add assets/images/
   git commit -m "feat: add real project images"
   git push
   ```

4. **Vercel redéploie automatiquement** ✅

---

## 🆘 Problèmes Courants

### "Je ne trouve pas mes images dans Figma"
→ Vérifiez dans les frames, groupes, ou calques de votre design

### "L'export est flou"
→ Exportez en **2x** ou **3x** pour une meilleure qualité

### "Le fichier est trop lourd"
→ Utilisez JPG au lieu de PNG pour les photos
→ Optimisez avec [TinyPNG](https://tinypng.com) ou [Squoosh](https://squoosh.app)

### "Je n'ai pas accès au fichier Figma original"
→ Utilisez les images temporaires du système (déjà configurées)
→ Ou créez vos propres screenshots de vos projets

---

## 📝 Checklist Finale

- [ ] Photo de profil exportée et renommée
- [ ] Au moins 3-6 screenshots de projets
- [ ] Avatars testimonials (optionnel)
- [ ] Image hero (optionnel)
- [ ] Toutes les images placées dans `/assets/images/`
- [ ] Noms de fichiers corrects (sans espaces, minuscules)
- [ ] Images testées en local
- [ ] Commit et push effectués

---

**Une fois terminé, votre portfolio utilisera vos vraies images en production !** 🎉
