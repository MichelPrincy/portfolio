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

- `src/content.ts` : profil, expertises, quatre projets sélectionnés, sept autres réalisations avec fiches détaillées et cinq expériences professionnelles.
- `src/App.tsx` : sections, menu mobile, détails des projets et copie de l’adresse e-mail.
- `src/index.css` : design responsive, impression et réduction des animations.
- `src/ScrollExperience.tsx` et `src/immersion.css` : progression de lecture, repères de navigation, apparitions et présentation immersive des projets.
- `src/Appearance.tsx` et `src/comfort.css` : thèmes clair/sombre, tailles de lecture, décors et réactions à la souris.
- `src/HeroContacts.tsx` et `src/hero-contacts.css` : bulle de pensée près du portrait, avec accès Facebook, LinkedIn, e-mail et WhatsApp.
- `public/documents/CV_Michel_Princy.pdf` : CV téléchargeable.
- `public/images/` : portrait et captures.
- `index.html` : référencement et données structurées.

Le Master est indiqué comme obtenu le **11 novembre 2026**. LUDO Mazika est un projet personnel en bêta. Les visuels VINA et IFEM Hub sont des illustrations de fonctionnalités, pas des captures d’applications. Les captures de RAKOTO Player utilisent des données de démonstration ; celle de LUDO Mazika vient de sa bêta.

Les fenêtres de détail utilisent le dialogue natif du navigateur : navigation au clavier, fermeture avec Échap et retour du focus. Le site respecte `prefers-reduced-motion`, conserve le curseur standard et inclut un lien d’accès rapide au contenu.

## Projets et identité visuelle

Les onze réalisations sont visibles : quatre présentations immersives et sept cartes détaillées, accessibles directement depuis le lien « Voir les 7 autres réalisations ». Chaque projet dispose de son contexte, de son rôle, de ses fonctionnalités et de ses technologies dans une fenêtre de détail. Les informations ont été complétées à partir du CV fourni ; le projet de dépenses communales déjà présent est conservé.

La palette bleu ciel accompagne l’identité visuelle du site. `public/images/michel-princy-hero.webp` est l’image fournie (1 024 × 1 536 px), avec sa transparence et ses panneaux illustrés. L’image conserve ses proportions, avec une hauteur limitée à 720 px sur grand écran, sans cadre, fond ajouté ni recadrage. La mention du Master accompagne le texte et ne recouvre pas la photo. Sur tablette et téléphone, le portrait apparaît sous le texte et s’adapte à la largeur disponible. Les couleurs clair/sombre utilisent les variables `--accent`, `--highlight`, `--paper`, `--surface` et `--muted` ; le favicon et la couleur du navigateur suivent aussi cette identité.

La bulle « On échange ? » flotte à droite de la tête et regroupe quatre liens de contact, définis dans `profile` : Facebook, LinkedIn, e-mail et WhatsApp. Les liens externes s’ouvrent dans un nouvel onglet ; l’e-mail utilise `mailto:`. Les zones cliquables font 44 × 44 px, avec noms accessibles et libellés au survol ou au focus. Le flottement se met en pause pendant l’interaction et s’arrête en mode animations réduites. La bulle est masquée à l’impression et son placement s’adapte aux petits écrans.

## Exploration et sitemap

`public/robots.txt` autorise l’exploration et indique l’adresse du sitemap. `public/sitemap.xml` déclare l’URL canonique `https://portfolio-michel-princy.vercel.app/`. Le site comporte une seule page ; ses ancres de navigation ne sont pas des pages distinctes dans le sitemap. Vite copie ces fichiers dans `dist/` à la compilation.

Après déploiement, vérifier les réponses HTTP 200 et les contenus des URL publiques `/robots.txt` et `/sitemap.xml`. Dans Google Search Console, sélectionner la propriété du portfolio puis **Indexation → Sitemaps**, saisir `sitemap.xml` et soumettre. Le sitemap aide à la découverte du site ; il ne garantit pas son indexation.

## Défilement immersif

Sur ordinateur (au moins 1 000 × 680 px), les quatre projets principaux se superposent au fil du défilement. Les repères de lecture et la navigation entre projets restent accessibles au clavier. Les éléments du parcours apparaissent progressivement et le portrait accompagne discrètement le mouvement de la page. Les écrans plus petits gardent les cartes dans le flux normal pour assurer leur lisibilité.

Le défilement reste natif : aucun blocage de la molette, aucune bibliothèque d’animation supplémentaire. Les mises à jour sont regroupées dans `requestAnimationFrame`, déclenchées seulement lors du défilement ou d’un redimensionnement. Les révélations utilisent `IntersectionObserver` et ne se rejouent pas à chaque passage. Sur mobile, les cartes restent dans le flux normal et les mouvements sont allégés.

Le bouton « Réduire les effets » mémorise la préférence sur l’appareil. La préférence système `prefers-reduced-motion` est prioritaire et conserve une présentation statique et complète. L’impression montre aussi tout le contenu.

## Lisibilité et interactions

Le bouton lune/soleil de l’en-tête change le thème. Au premier passage, le thème suit le système ; un choix manuel est mémorisé dans `localStorage`. Un petit script dans `index.html` applique le thème avant l’affichage pour éviter un éclair clair lors du chargement en mode sombre. Les textes principaux font de 15 à 18 px, avec des interlignes aérés. Sur téléphone, les compétences passent en une colonne ; le menu compact est disponible aussi sur tablette.

Des pictogrammes ordinateur, document, mallette, horloge, code et étoiles animent les marges. Sur un appareil avec souris, ils accompagnent légèrement le pointeur ; une courte traînée utilise huit emplacements réutilisables, et les illustrations réagissent aux mouvements. Le curseur reste standard. Les décors sont masqués aux lecteurs d’écran et ne capturent aucun clic. Les effets suivent le bouton de réduction des animations et la préférence système. Les événements de pointeur sont regroupés par image, sans boucle JavaScript permanente, et les effets sont suspendus quand l’onglet est masqué.
