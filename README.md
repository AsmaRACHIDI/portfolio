# Portfolio — Asma RACHIDI

Portfolio de Data Scientist construit avec React, Vite et Tailwind CSS.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173/portfolio/`.

## Structure du contenu

Tout le contenu réel (texte, liens, expériences...) est centralisé dans `src/data/`, séparé du design des composants :

- `src/data/profile.js` — identité, bio, stats, liens (GitHub, LinkedIn, email)
- `src/data/experience.js` — expériences professionnelles
- `src/data/education.js` — formations et certifications
- `src/data/skills.js` — compétences par catégorie
- `src/data/projects.js` — projets, rangés par catégorie (EDA, Machine Learning, Deep Learning & IA générative)

### Ajouter un projet

Dans `src/data/projects.js`, chaque catégorie a un tableau `projects`. Remplacez une carte `comingSoon: true` par vos infos :

```js
{
  title: 'Détection de spam par NLP',
  description: 'Classification de messages avec fine-tuning de CamemBERT.',
  tag: 'NLP',
  stack: ['Python', 'CamemBERT', 'Scikit-learn'],
  github: 'https://github.com/AsmaRACHIDI/mon-projet',
  demo: '', // optionnel
  comingSoon: false,
}
```

## Déploiement sur GitHub Pages

Le projet est prêt pour GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) :

1. Créez un dépôt GitHub nommé `portfolio` (ou changez `base` dans `vite.config.js` pour qu'il corresponde au nom réel du dépôt, ex. `/mon-repo/`).
2. Poussez le code sur la branche `master`.
3. Dans les paramètres du dépôt GitHub → **Pages**, choisissez la source **GitHub Actions**.
4. Chaque push sur `master` reconstruit et republie automatiquement le site.

Le site sera accessible à `https://<votre-utilisateur>.github.io/portfolio/`.

### Déploiement manuel (alternative)

```bash
npm run build
```

Le résultat est généré dans `dist/`, prêt à être déployé sur n'importe quel hébergeur statique.
