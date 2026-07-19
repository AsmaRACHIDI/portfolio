// Structure prête à l'emploi : ajoutez vos projets dans le tableau `projects`
// de chaque catégorie. Un projet "à venir" (comingSoon: true) affiche une carte
// placeholder — remplacez-le simplement par vos vraies infos quand le projet est prêt.
//
// Exemple de projet complet :
// {
//   title: 'Détection de spam par NLP',
//   description: 'Classification de messages avec fine-tuning de CamemBERT.',
//   tag: 'NLP',
//   stack: ['Python', 'CamemBERT', 'Scikit-learn'],
//   github: 'https://github.com/AsmaRACHIDI/...',
//   demo: '',
//   comingSoon: false,
// }

export const projectCategories = [
  {
    id: 'eda',
    title: 'Exploration de données',
    subtitle: 'EDA & Data Storytelling',
    color: 'blue',
    projects: [
      { title: 'Projet à venir', description: "Analyse exploratoire d'un jeu de données publiques : nettoyage, visualisation et premiers insights.", tag: 'EDA', stack: [], comingSoon: true },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Supervisé · Non supervisé · Clustering',
    color: 'violet',
    projects: [
      { title: 'Projet à venir', description: 'Modèle de classification supervisée avec optimisation des hyperparamètres.', tag: 'Supervisé', stack: [], comingSoon: true },
      { title: 'Projet à venir', description: "Segmentation de données par apprentissage non supervisé.", tag: 'Non supervisé', stack: [], comingSoon: true },
      { title: 'Projet à venir', description: 'Clustering pour la détection de groupes homogènes dans les données.', tag: 'Clustering', stack: [], comingSoon: true },
    ],
  },
  {
    id: 'dl',
    title: 'Deep Learning & IA Générative',
    subtitle: 'LLM · Computer Vision · Analyse de sentiments · RAG',
    color: 'fuchsia',
    projects: [
      { title: 'Projet à venir', description: "Cas d'usage autour des LLMs et du prompt engineering.", tag: 'LLM', stack: [], comingSoon: true },
      { title: 'Projet à venir', description: "Reconnaissance ou classification d'images par réseau de neurones convolutif.", tag: 'Computer Vision', stack: [], comingSoon: true },
      { title: 'Projet à venir', description: 'Analyse de sentiments sur des données textuelles.', tag: 'Analyse de sentiments', stack: [], comingSoon: true },
      { title: 'Projet à venir', description: 'Pipeline de Retrieval-Augmented Generation : embeddings, indexation et récupération d\'information.', tag: 'RAG', stack: [], comingSoon: true },
    ],
  },
]
