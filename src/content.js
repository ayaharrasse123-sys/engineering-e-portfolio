// Use bilingual objects for text. Asset paths refer to files in public/.
export const personal = { name: 'Aya Harrasse', school: 'Toulouse INP–ENSEEIHT', portrait: null, cvEn: '/media/cv/aya-harrasse-en.pdf', cvFr: '/media/cv/aya-harrasse-fr.pdf', linkedin: 'https://www.linkedin.com/in/aya-harrasse-a510382b1/', github: 'https://github.com/ayaharrasse123-sys', video: null, transcript: { en: '', fr: '' } };
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
  { title: bilingual('Travel', 'Voyage'), icon: 'travel', description: bilingual('I enjoy travelling and discovering new places.', 'J’aime voyager et découvrir de nouveaux endroits.'), achievement: '', reflection: '', photo: null },
  { title: bilingual('Running', 'Course à pied'), icon: 'running', description: bilingual('I enjoy running in my free time.', 'J’aime pratiquer la course à pied pendant mon temps libre.'), achievement: '', reflection: '', photo: null },
  { title: bilingual('Reading', 'Lecture'), icon: 'reading', description: bilingual('Reading is one of my personal interests.', 'La lecture fait partie de mes centres d’intérêt.'), achievement: '', reflection: '', photo: null },
  { title: bilingual('Cooking', 'Cuisine'), icon: 'cooking', description: bilingual('I enjoy cooking outside my studies.', 'J’aime cuisiner en dehors de mes études.'), achievement: '', reflection: '', photo: null },
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
  { destination: bilingual('Switzerland', 'Suisse'), code: 'CH', description: bilingual('I would like to complete an international study or internship experience in Switzerland, with a focus on computer science and artificial intelligence.', 'Je souhaite effectuer une mobilité d’études ou un stage en Suisse, dans le domaine de l’informatique et de l’intelligence artificielle.') },
  { destination: bilingual('London, United Kingdom', 'Londres, Royaume-Uni'), code: 'UK', description: bilingual('I would like to explore opportunities in London, particularly in software engineering and artificial intelligence.', 'Je souhaite explorer les possibilités de mobilité à Londres, notamment en génie logiciel et en intelligence artificielle.') },
];
export const mobilitySources = [
  { title: 'Google DeepMind', url: 'https://deepmind.google/careers/' },
  { title: 'OpenAI', url: 'https://openai.com/careers/' },
];
export const certifications = [];
export const roleModels = [1, 2, 3].map(id => ({ id, name: '', photo: null, position: '', organization: '', education: '', journey: '', achievements: '', qualities: '', inspiration: '', learning: '', sources: [] }));
export const mobilityProjects = [1, 2, 3].map(id => ({ id, destination: '', institution: '', type: '', objectives: '', skills: '', motivation: '', roleModel: id, preparation: '', outcomes: '', feasibility: '', status: '' }));
Object.assign(mobilityProjects[0], {
  destination: bilingual('Switzerland', 'Suisse'),
  type: bilingual('Study exchange or internship — format to determine', 'Échange universitaire ou stage — format à préciser'),
  objectives: bilingual('Develop my computer science skills and explore applications of artificial intelligence.', 'Développer mes compétences en informatique et explorer les applications de l’intelligence artificielle.'),
  skills: bilingual('Programming, practical problem-solving, and working in an international team.', 'Programmation, résolution de problèmes concrets et travail dans une équipe internationale.'),
  motivation: bilingual('Discover the Swiss technology and research environment.', 'Découvrir l’environnement technologique et scientifique suisse.'),
  preparation: bilingual('Identify host institutions and suitable openings; check eligibility and deadlines; prepare my CV and application.', 'Identifier les établissements d’accueil et les offres adaptées ; vérifier les conditions et les dates limites ; préparer mon CV et ma candidature.'),
  outcomes: bilingual('Practical experience in an international academic or professional setting.', 'Une expérience concrète dans un cadre académique ou professionnel international.'),
  feasibility: bilingual('Host, dates, funding, housing, and administrative requirements remain to be assessed.', 'Organisme d’accueil, dates, financement, logement et démarches administratives à étudier.'),
  status: bilingual('Exploring options — no placement confirmed', 'En cours d’exploration — aucune mobilité confirmée'),
});
Object.assign(mobilityProjects[1], {
  destination: bilingual('London, United Kingdom', 'Londres, Royaume-Uni'),
  type: bilingual('Study exchange or internship — format to determine', 'Échange universitaire ou stage — format à préciser'),
  objectives: bilingual('Gain practical experience in software engineering or artificial intelligence and use English in a professional setting.', 'Acquérir une expérience pratique en génie logiciel ou en intelligence artificielle et utiliser l’anglais dans un cadre professionnel.'),
  skills: bilingual('Programming, teamwork, and technical communication in English.', 'Programmation, travail en équipe et communication technique en anglais.'),
  motivation: bilingual('Explore London’s technology sector. Google DeepMind and OpenAI are examples of organisations that interest me; a specific host is not selected.', 'Explorer le secteur technologique londonien. Google DeepMind et OpenAI font partie des organisations qui m’intéressent ; aucun organisme d’accueil n’est sélectionné.'),
  preparation: bilingual('Research opportunities suited to my level; check application requirements; prepare my CV and supporting documents.', 'Rechercher des possibilités adaptées à mon niveau ; vérifier les conditions de candidature ; préparer mon CV et les pièces demandées.'),
  outcomes: bilingual('International experience and a better understanding of software and AI work in practice.', 'Une expérience internationale et une meilleure compréhension des métiers du logiciel et de l’IA.'),
  feasibility: bilingual('Host, dates, funding, housing, and administrative requirements remain to be assessed.', 'Organisme d’accueil, dates, financement, logement et démarches administratives à étudier.'),
  status: bilingual('Exploring options — no placement confirmed', 'En cours d’exploration — aucune mobilité confirmée'),
});
