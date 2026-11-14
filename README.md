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
- `src/ScrollExperience.tsx` et `src/immersion.css` : progression de lecture, repères de navigation, apparitions et présentation immersive des projets.
- `public/documents/CV_Michel_Princy.pdf` : CV téléchargeable.
- `public/images/` : portrait et captures.
- `index.html` : référencement et données structurées.

Le Master est indiqué comme obtenu le **11 novembre 2026**. LUDO Mazika est un projet personnel en bêta. Les visuels VINA et IFEM Hub sont des illustrations de fonctionnalités, pas des captures d’applications. Les captures de RAKOTO Player utilisent des données de démonstration ; celle de LUDO Mazika vient de sa bêta.

Les fenêtres de détail utilisent le dialogue natif du navigateur : navigation au clavier, fermeture avec Échap et retour du focus. Le site respecte `prefers-reduced-motion`, conserve le curseur standard et inclut un lien d’accès rapide au contenu.

## Défilement immersif

Sur ordinateur (au moins 1 000 × 680 px), les quatre projets principaux se superposent au fil du défilement. Les repères de lecture et la navigation entre projets restent accessibles au clavier. Les éléments du parcours apparaissent progressivement et le portrait accompagne discrètement le mouvement de la page. Les écrans plus petits gardent les cartes dans le flux normal pour assurer leur lisibilité.

Le défilement reste natif : aucun blocage de la molette, aucune bibliothèque d’animation supplémentaire. Les mises à jour sont regroupées dans `requestAnimationFrame`, déclenchées seulement lors du défilement ou d’un redimensionnement. Les révélations utilisent `IntersectionObserver` et ne se rejouent pas à chaque passage. Sur mobile, les cartes restent dans le flux normal et les mouvements sont allégés.

Le bouton « Réduire les effets » mémorise la préférence sur l’appareil. La préférence système `prefers-reduced-motion` est prioritaire et conserve une présentation statique et complète. L’impression montre aussi tout le contenu.
