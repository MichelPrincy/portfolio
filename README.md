# Portfolio de Michel Princy

Portfolio professionnel en français avec React, TypeScript et Vite. Développement logiciel, automatisation, intégration IA, support informatique, réalisations et parcours professionnel.

## Démarrer

```sh
npm ci
npm run dev
```

## Compiler et vérifier

```sh
npm run build
npm run preview
```

Le build vérifie TypeScript et génère `dist/`. Ce dossier est publiable sur un hébergement statique. Les chemins relatifs permettent une publication à la racine ou dans un sous-dossier, notamment GitHub Pages. Les contacts utilisent e-mail, WhatsApp, GitHub et LinkedIn ; aucun secret ni service de formulaires n’est nécessaire.

## Modifier le portfolio

- `src/content.ts` : profil, expertises, quatre projets sélectionnés, sept autres réalisations et cinq expériences professionnelles.
- `src/App.tsx` : sections, menu mobile, détails des projets et copie de l’adresse e-mail.
- `src/index.css` : design responsive, impression et réduction des animations.
- `public/documents/CV_Michel_Princy.pdf` : CV téléchargeable.
- `public/images/` : portrait et captures.
- `index.html` : référencement et données structurées.

Le Master est indiqué comme obtenu le **11 novembre 2026**. LUDO Mazika est un projet personnel en bêta. Les visuels VINA et IFEM Hub sont des illustrations de fonctionnalités, pas des captures d’applications. Les captures de RAKOTO Player utilisent des données de démonstration ; celle de LUDO Mazika vient de sa bêta.

Les fenêtres de détail utilisent le dialogue natif du navigateur : navigation au clavier, fermeture avec Échap et retour du focus. Le site respecte `prefers-reduced-motion`, conserve le curseur standard et inclut un lien d’accès rapide au contenu.
