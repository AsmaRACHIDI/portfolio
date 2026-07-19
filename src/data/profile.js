export const profile = {
  name: 'Asma RACHIDI',
  title: 'Data Scientist | ML & NLP',
  location: 'France',
  email: 'rachidi.asm@gmail.com',
  github: 'https://github.com/AsmaRACHIDI',
  githubUsername: 'AsmaRACHIDI',
  linkedin: 'https://www.linkedin.com/in/asma-rachidi',
  bio: `Data scientist passionnée, forte de 3 ans d'expérience en open data et en santé, j'évolue sur des projets ambitieux en intelligence artificielle et en NLP. J'analyse, structure et modélise des données complexes afin d'en extraire des insights à forte valeur ajoutée. Curieuse et orientée résultats, je souhaite contribuer au sein d'une équipe dynamique et innovante en mettant la donnée au service de décisions stratégiques.`,
  // Nuage de mots de la section "À propos" : sélection des compétences phares.
  // size 3 = majeur, 2 = important, 1 = secondaire. La couleur vient du groupe.
  // L'inventaire complet vit dans skills.js (section Compétences).
  skillCloud: {
    groups: [
      { id: 'ml', name: 'Machine Learning', color: 'blue' },
      { id: 'dl', name: 'Deep Learning & Vision', color: 'indigo' },
      { id: 'nlp', name: 'NLP & IA générative', color: 'sky' },
      { id: 'data', name: 'Data & analyse', color: 'cyan' },
      { id: 'tools', name: 'Outils & cloud', color: 'teal' },
    ],
    words: [
      { label: 'Machine Learning', group: 'ml', size: 3 },
      { label: 'NLP', group: 'nlp', size: 3 },
      { label: 'PyTorch', group: 'dl', size: 2 },
      { label: 'Python', group: 'data', size: 3 },
      { label: 'RAG', group: 'nlp', size: 2 },
      { label: 'Deep Learning', group: 'dl', size: 3 },
      { label: 'SQL', group: 'data', size: 2 },
      { label: 'BERT & CamemBERT', group: 'nlp', size: 2 },
      { label: 'Docker', group: 'tools', size: 2 },
      { label: 'Clustering', group: 'ml', size: 1 },
      { label: 'LLM', group: 'nlp', size: 2 },
      { label: 'Computer Vision', group: 'dl', size: 2 },
      { label: 'Pandas / NumPy', group: 'data', size: 1 },
      { label: 'Hugging Face', group: 'nlp', size: 1 },
      { label: 'Scikit-learn', group: 'ml', size: 2 },
      { label: 'Streamlit', group: 'tools', size: 1 },
      { label: 'Keras', group: 'dl', size: 1 },
      { label: 'LangChain', group: 'nlp', size: 1 },
      { label: 'Azure', group: 'tools', size: 1 },
      { label: 'Dash / Plotly', group: 'tools', size: 1 },
    ],
  },
}
