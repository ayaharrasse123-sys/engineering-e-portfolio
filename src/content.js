// Use bilingual objects for text. Asset paths refer to files in public/.
export const personal = { name: 'Aya Harrasse', school: 'Toulouse INP–ENSEEIHT', portrait: '/media/portrait/aya-harrasse.png', cvEn: '/media/cv/aya-harrasse-en.pdf', cvFr: '/media/cv/aya-harrasse-fr.pdf', linkedin: 'https://www.linkedin.com/in/aya-harrasse-a510382b1/', github: 'https://github.com/ayaharrasse123-sys', video: '/media/video/aya-harrasse-pitch.mp4', transcript: { en: '', fr: '' } };
export const academicYears = [1, 2, 3].map(year => ({ year, courses: [], skills: [], projects: [] }));
export const academicProjects = []; // Flat project list displayed on the Engineering page.
// Project schema: title, academicYear, description, objectives, technologies,
// contribution, results, skills, photos, reports, reflection. Text: { en, fr }.
export const internationalExperiences = [];
const bilingual = (en, fr) => ({ en, fr });
export const languageSkills = [
  { language: bilingual('Arabic', 'Arabe'), level: bilingual('Native language', 'Langue maternelle') },
  { language: bilingual('French', 'Français'), level: bilingual('C1 — Advanced', 'C1 — Avancé') },
  { language: bilingual('English', 'Anglais'), level: bilingual('C1 — Advanced', 'C1 — Avancé') },
  { language: bilingual('Turkish', 'Turc'), level: bilingual('B1 — Intermediate', 'B1 — Intermédiaire') },
  { language: bilingual('German', 'Allemand'), level: bilingual('Beginner', 'Débutant') },
];
export const initiatives = [
  { title: bilingual('Climate Fresk', 'Fresque du climat'), icon: 'climate', status: bilingual('Participated', 'Participation réalisée'), description: bilingual('I participated in a Climate Fresk workshop, a collaborative activity about climate change, its causes, and its consequences.', 'J’ai participé à une Fresque du climat, un atelier collaboratif sur le changement climatique, ses causes et ses conséquences.'), results: '', skills: '', reflection: '', photo: null, sdgs: [] },
  { title: bilingual('The Trial of King Kong', 'Le Procès de King Kong'), icon: 'dialogue', status: bilingual('Participated', 'Participation réalisée'), description: bilingual('I participated in The Trial of King Kong, an interactive theatre event addressing gender-based and sexual violence.', 'J’ai participé au Procès de King Kong, un spectacle interactif de sensibilisation aux violences sexistes et sexuelles.'), results: '', skills: '', reflection: '', photo: null, sdgs: [] },
];
export const activities = [
  { title: bilingual('Travel', 'Voyage'), icon: 'travel', description: bilingual('I enjoy travelling and discovering new places.', 'J’aime voyager et découvrir de nouveaux endroits.'), achievement: '', reflection: '', photo: '/media/activities/travel.jpg' },
  { title: bilingual('Running', 'Course à pied'), icon: 'running', description: bilingual('I enjoy running in my free time.', 'J’aime pratiquer la course à pied pendant mon temps libre.'), achievement: '', reflection: '', photo: '/media/activities/running.jpg' },
  { title: bilingual('Reading', 'Lecture'), icon: 'reading', description: bilingual('Reading is one of my personal interests.', 'La lecture fait partie de mes centres d’intérêt.'), achievement: '', reflection: '', photo: '/media/activities/reading.jpg' },
  { title: bilingual('Cooking', 'Cuisine'), icon: 'cooking', description: bilingual('I enjoy cooking outside my studies.', 'J’aime cuisiner en dehors de mes études.'), achievement: '', reflection: '', photo: '/media/activities/cooking.jpg' },
];
export const professionalExperiences = []; // title, dates, description, skills, reflection
export const technicalSkills = [
  { title: bilingual('Python', 'Python'), group: 'programming', description: bilingual('Programming', 'Programmation') },
  { title: bilingual('Ada', 'Ada'), group: 'programming', description: bilingual('Programming', 'Programmation') },
  { title: bilingual('SQL', 'SQL'), group: 'programming', description: bilingual('Database queries', 'Requêtes de bases de données') },
  { title: bilingual('MATLAB', 'MATLAB'), group: 'computing', description: bilingual('Scientific computing', 'Calcul scientifique') },
  { title: bilingual('Linux', 'Linux'), group: 'systems', description: bilingual('Operating system', 'Système d’exploitation') },
  { title: bilingual('Windows', 'Windows'), group: 'systems', description: bilingual('Operating system', 'Système d’exploitation') },
];
export const coursework = [
  { title: bilingual('Mathematics', 'Mathématiques'), subjects: [bilingual('Analysis and calculus', 'Analyse et calcul différentiel et intégral'), bilingual('Linear algebra', 'Algèbre linéaire'), bilingual('Statistics', 'Statistiques'), bilingual('Measure theory', 'Théorie de la mesure'), bilingual('Lebesgue integration', 'Intégration de Lebesgue'), bilingual('Continuous probability', 'Probabilités continues')] },
  { title: bilingual('Physics', 'Physique'), subjects: [bilingual('Electromagnetism', 'Électromagnétisme'), bilingual('Thermodynamics', 'Thermodynamique'), bilingual('Optics', 'Optique'), bilingual('Wave optics', 'Optique ondulatoire'), bilingual('Mechanics', 'Mécanique'), bilingual('Electronics', 'Électronique')] },
];
export const softSkills = [
  { title: bilingual('Teamwork', 'Travail en équipe'), description: bilingual('Working with others towards a shared objective.', 'Travailler avec d’autres personnes pour atteindre un objectif commun.') },
  { title: bilingual('Project management', 'Gestion de projet'), description: bilingual('Organising tasks, priorities, and deadlines.', 'Organiser les tâches, les priorités et les échéances.') },
  { title: bilingual('Creativity', 'Créativité'), description: bilingual('Considering different approaches to a problem.', 'Envisager différentes approches face à un problème.') },
  { title: bilingual('Problem-solving', 'Résolution de problèmes'), description: bilingual('Analysing a problem and identifying possible solutions.', 'Analyser un problème et identifier des solutions possibles.') },
  { title: bilingual('Adaptability', 'Adaptabilité'), description: bilingual('Adjusting to new tools and working situations.', 'S’adapter à de nouveaux outils et contextes de travail.') },
];
export const mobilityPreferences = [
  {
    code: 'UK', name: 'University College London (UCL)', destination: bilingual('London, United Kingdom', 'Londres, Royaume-Uni'), photo: '/media/mobility/ucl.jpg',
    description: bilingual('At UCL, I would like to deepen my understanding of artificial intelligence and machine learning. Its AI-focused study options make it a university I would like to explore for a future study experience, building on my computer science training at ENSEEIHT.', 'À UCL, je souhaiterais approfondir mes connaissances en intelligence artificielle et en apprentissage automatique. Ses formations orientées vers l’IA en font une université que j’aimerais explorer pour un futur séjour d’études, dans la continuité de ma formation en informatique à l’ENSEEIHT.'),
    career: bilingual('I imagine using this experience to move towards a career as an AI or software engineer. Working on a team project in English would help me explain technical ideas clearly and connect theory with practical applications.', 'J’imagine cette expérience comme une étape vers un métier d’ingénieure en IA ou en logiciel. Un projet en équipe en anglais m’aiderait à expliquer clairement mes idées techniques et à relier la théorie aux applications concrètes.'),
    culture: bilingual('Living in London would also mean discovering a multicultural city, becoming more independent, and using English every day beyond the classroom.', 'Vivre à Londres serait aussi l’occasion de découvrir une ville multiculturelle, de gagner en autonomie et de pratiquer l’anglais chaque jour en dehors des cours.'),
    url: 'https://www.ucl.ac.uk/engineering/study/ai-and-machine-learning'
  },
  {
    code: 'CH', name: 'EPFL', destination: bilingual('Lausanne, Switzerland', 'Lausanne, Suisse'), photo: '/media/mobility/epfl.jpg',
    description: bilingual('EPFL interests me for its computer science programme and its artificial intelligence and machine learning study areas. I would like to explore how mathematical foundations, programming, and experimentation come together in a research-oriented environment.', 'L’EPFL m’intéresse pour sa formation en informatique et ses domaines d’études en intelligence artificielle et en apprentissage automatique. J’aimerais découvrir comment les bases mathématiques, la programmation et l’expérimentation se rejoignent dans un environnement tourné vers la recherche.'),
    career: bilingual('My goal would be to strengthen my Python and data analysis skills through a supervised project, and to discover whether applied AI research could become part of my professional path.', 'Mon objectif serait de renforcer mes compétences en Python et en analyse de données grâce à un projet encadré, et de découvrir si la recherche appliquée en IA pourrait faire partie de mon parcours professionnel.'),
    culture: bilingual('Lausanne would let me discover life in Switzerland while studying in an international community. I would also enjoy exploring the region around Lake Geneva and balancing my studies with running outdoors.', 'Lausanne me permettrait de découvrir la vie en Suisse au sein d’une communauté internationale. J’aimerais aussi explorer la région du lac Léman et équilibrer mes études avec la course à pied en plein air.'),
    url: 'https://www.epfl.ch/schools/ic/education/master/computer-science/specializations-master-info/'
  },
  {
    code: 'CH', name: 'ETH Zurich', destination: bilingual('Zurich, Switzerland', 'Zurich, Suisse'), photo: '/media/mobility/eth.jpg',
    description: bilingual('ETH Zurich is another university I would like to consider. Its computer science studies include machine intelligence, which matches my interest in understanding how algorithms learn from data and solve complex problems.', 'L’ETH Zurich est une autre université que j’aimerais envisager. Ses études en informatique abordent l’intelligence machine, en lien avec mon envie de comprendre comment les algorithmes apprennent à partir des données et résolvent des problèmes complexes.'),
    career: bilingual('I would like to develop a more rigorous approach to algorithms and machine learning, then apply it in an engineering project. This could help me prepare for technical roles that combine software development with AI.', 'Je souhaiterais développer une approche plus rigoureuse des algorithmes et de l’apprentissage automatique, puis l’appliquer dans un projet d’ingénierie. Cela pourrait me préparer à des métiers techniques associant développement logiciel et IA.'),
    culture: bilingual('Living in Zurich would challenge me to adapt to a German-speaking environment. As a beginner in German, I would see this as a chance to practise the language and become more confident in unfamiliar situations.', 'Vivre à Zurich me demanderait de m’adapter à un environnement germanophone. Débutante en allemand, j’y verrais une occasion de pratiquer la langue et de prendre confiance face à des situations nouvelles.'),
    url: 'https://ethz.ch/en/studies/master/degree-programmes/engineering-sciences/computer-science.html'
  },
  {
    code: 'SG', name: 'National University of Singapore (NUS)', destination: bilingual('Singapore', 'Singapour'), photo: '/media/mobility/nus.jpg',
    description: bilingual('At NUS, I would like to explore computer science and artificial intelligence in a different academic setting. Its computing and AI programmes make Singapore an interesting destination for a future study experience beyond Europe.', 'À NUS, j’aimerais explorer l’informatique et l’intelligence artificielle dans un cadre universitaire différent. Ses formations en informatique et en IA font de Singapour une destination intéressante pour un futur séjour d’études hors d’Europe.'),
    career: bilingual('I imagine contributing to a practical software or AI project with an international team. My aim would be to improve my programming, learn different approaches to problem-solving, and better understand how I could work as an engineer internationally.', 'Je m’imagine contribuer à un projet concret en logiciel ou en IA avec une équipe internationale. Mon objectif serait de progresser en programmation, de découvrir d’autres façons de résoudre les problèmes et de mieux comprendre comment exercer le métier d’ingénieure à l’international.'),
    culture: bilingual('Singapore would be an opportunity to discover Southeast Asia and a multicultural, English-speaking study environment. Adapting to daily life far from home would help me build independence and intercultural communication skills.', 'Singapour serait l’occasion de découvrir l’Asie du Sud-Est et un environnement d’études multiculturel et anglophone. M’adapter à la vie quotidienne loin de chez moi m’aiderait à gagner en autonomie et à développer ma communication interculturelle.'),
    url: 'https://www.comp.nus.edu.sg/programmes/'
  },
];
export const mobilitySources = [
  { title: 'Google DeepMind', url: 'https://deepmind.google/careers/' },
  { title: 'OpenAI', url: 'https://openai.com/careers/' },
];
export const certifications = [];
export const roleModels = [
  {
    id: 1, photo: '/media/role-models/mirco-musolesi.jpg', profile: 'https://www.mircomusolesi.org/', name: 'Mirco Musolesi', organization: 'University College London',
    inspiration: bilingual('I admire Professor Mirco Musolesi for his research on artificial intelligence, reinforcement learning, and AI safety. His work inspires me to explore how intelligent agents can make reliable decisions in complex environments. Studying at UCL would allow me to deepen my knowledge of these topics and discover new approaches to building responsible AI systems.', 'J’admire le professeur Mirco Musolesi pour ses recherches en intelligence artificielle, en apprentissage par renforcement et en sécurité de l’IA. Ses travaux m’inspirent à explorer comment les agents intelligents peuvent prendre des décisions fiables dans des environnements complexes. Étudier à UCL me permettrait d’approfondir mes connaissances sur ces sujets et de découvrir de nouvelles approches pour construire des systèmes d’IA responsables.'),
  },
  {
    id: 2, photo: '/media/role-models/caglar-gulcehre.jpg', profile: 'https://people.epfl.ch/caglar.gulcehre', name: 'Çağlar Gülçehre', organization: 'EPFL',
    inspiration: bilingual('Professor Çağlar Gülçehre inspires me through his work on reinforcement learning, reasoning, and AI alignment. I am particularly interested in how AI systems can learn from feedback and improve their reasoning abilities. His research reflects my ambition to understand the learning mechanisms behind modern artificial intelligence.', 'Le professeur Çağlar Gülçehre m’inspire par ses travaux sur l’apprentissage par renforcement, le raisonnement et l’alignement de l’IA. Je m’intéresse particulièrement à la manière dont les systèmes d’IA peuvent apprendre à partir de retours et améliorer leurs capacités de raisonnement. Ses recherches reflètent mon ambition de comprendre les mécanismes d’apprentissage qui sous-tendent l’intelligence artificielle moderne.'),
  },
  {
    id: 3, photo: '/media/role-models/martin-vechev.webp', profile: 'https://www.sri.inf.ethz.ch/people/martin', name: 'Martin Vechev', organization: 'ETH Zurich',
    inspiration: bilingual('Professor Martin Vechev is a role model for his contributions to safe and reliable artificial intelligence. His research combines machine learning with automated reasoning to improve the trustworthiness of AI systems. I would like to explore how mathematical and computational methods can help develop AI that is both powerful and dependable.', 'Le professeur Martin Vechev est un modèle pour ses contributions à une intelligence artificielle sûre et fiable. Ses recherches associent l’apprentissage automatique au raisonnement automatisé pour renforcer la confiance dans les systèmes d’IA. Je souhaiterais explorer comment les méthodes mathématiques et informatiques peuvent contribuer à développer une IA à la fois puissante et digne de confiance.'),
  },
];
