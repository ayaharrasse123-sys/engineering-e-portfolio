// Use bilingual objects for text. Asset paths refer to files in public/.
export const personal = { name: 'Aya Harrasse', school: 'Toulouse INP–ENSEEIHT', portrait: null, cvEn: null, cvFr: null, linkedin: null, video: null, transcript: { en: '', fr: '' } };
export const academicYears = [1, 2, 3].map(year => ({ year, courses: [], skills: [], projects: [] }));
// Project schema: title, academicYear, description, objectives, technologies,
// contribution, results, skills, photos, reports, reflection. Text: { en, fr }.
export const internationalExperiences = [];
export const languageSkills = []; // { language: {en, fr}, level: {en, fr} }
export const initiatives = []; // title, description, results, skills, reflection, photo, sdgs (only when relevant)
export const activities = []; // title, description, achievement, reflection, photo
export const professionalExperiences = []; // title, dates, description, skills, reflection
export const technicalSkills = []; // { title: {en, fr}, description: {en, fr} }
export const certifications = [];
export const roleModels = [1, 2, 3].map(id => ({ id, name: '', photo: null, position: '', organization: '', education: '', journey: '', achievements: '', qualities: '', inspiration: '', learning: '', sources: [] }));
export const mobilityProjects = [1, 2, 3].map(id => ({ id, destination: '', institution: '', type: '', objectives: '', skills: '', motivation: '', roleModel: id, preparation: '', outcomes: '', feasibility: '', status: '' }));
