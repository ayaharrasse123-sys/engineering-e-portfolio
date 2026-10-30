import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Calculator, Monitor, Users, ArrowUpRight, Globe2, Leaf, MessageCircle, Footprints, BookOpen, CookingPot, Camera } from 'lucide-react';
import * as content from './content';

const text = (value, lang) => typeof value === 'object' && value !== null ? value[lang] || value.en : value;
const skillsGroups = [
  { group: 'programming', key: 'programmingSkills', Icon: Code2 },
  { group: 'computing', key: 'scientificComputing', Icon: Calculator },
  { group: 'systems', key: 'toolsSystems', Icon: Monitor },
];

export function SkillsOverview({ t, lang }) {
  return <section className="personal-section skills-overview" aria-labelledby="technical-heading"><h2 id="technical-heading">{t.technicalHeading}</h2><p className="section-description">{t.skillsSummary}</p><div className="skills-overview-grid">{skillsGroups.map(({group,key,Icon})=><article className="skill-category" key={group}><Icon size={24}/><h3>{t[key]}</h3><ul className="skill-tags">{content.technicalSkills.filter(s=>s.group===group).map(s=><li key={s.title.en}>{text(s.title,lang)}</li>)}</ul></article>)}<article className="skill-category"><Users size={24}/><h3>{t.skillsTypes[1]}</h3><ul className="skill-tags">{content.softSkills.map(s=><li key={s.title.en}>{text(s.title,lang)}</li>)}</ul></article></div></section>;
}

export function MobilityOverview({ t, lang }) {
  return <div className="personal-section"><section aria-labelledby="languages-heading"><h2 id="languages-heading">{t.languages}</h2><p className="section-description">{t.languageSelfAssessment}</p><div className="language-grid">{content.languageSkills.map(s=><article className="language-card" key={s.language.en}><Globe2 size={21}/><h3>{text(s.language,lang)}</h3><p>{text(s.level,lang)}</p></article>)}</div></section><section className="mobility-preferences" aria-labelledby="preferences-heading"><h2 id="preferences-heading">{t.mobilityPreferencesHeading}</h2><p className="section-description">{t.mobilityPreferenceIntro}</p><div className="destination-grid">{content.mobilityPreferences.map(p=><article className="destination-card" key={p.code}><span className="destination-code">{p.code}</span><h3>{text(p.destination,lang)}</h3><p>{text(p.description,lang)}</p><span className="badge">{t.mobilityExploration}</span></article>)}</div><div className="company-interests"><h3>{t.companyInterests}</h3><p>{t.companyInterestsText}</p><div className="source-links">{content.mobilitySources.map(s=><a href={s.url} key={s.title} target="_blank" rel="noreferrer">{s.title}<ArrowUpRight size={15}/></a>)}</div></div><Link to="/career-project" className="text-link profile-explore">{t.detailedMobilityPlans}<ArrowUpRight size={17}/></Link></section><section className="completed-mobility"><h2>{t.experience}</h2>{content.internationalExperiences.length?content.internationalExperiences.map((e,i)=><article className="simple-card" key={i}><h3>{text(e.title,lang)}</h3><p>{text(e.description,lang)}</p><p>{text(e.reflection,lang)}</p></article>):<p>{t.noMobilityExperience}</p>}</section></div>;
}

export function EngagementOverview({ t, lang }) {
  return <section className="personal-section"><div className="engagement-grid">{content.initiatives.map((item,i)=>{const Icon=item.icon==='climate'?Leaf:MessageCircle;return <article className="engagement-entry" key={item.title.en}><div className="engagement-symbol"><Icon size={31}/></div><div><span className="eyebrow">0{i+1}</span><h2>{text(item.title,lang)}</h2><span className="badge">{text(item.status,lang)}</span><p>{text(item.description,lang)}</p>{item.photo&&<img className="record-image" src={item.photo} alt={text(item.title,lang)}/>}<details className="panel"><summary>{t.participationRecord}</summary><dl className="fields">{[[t.participationDate,item.date],[t.initiativeFields[2],item.results],[t.initiativeFields[3],item.skills],[t.reflection,item.reflection]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{text(value,lang)||t.soon}</dd></div>)}</dl></details></div></article>})}</div></section>;
}

export function ActivitiesOverview({ t, lang }) {
  const icons={running:Footprints,reading:BookOpen,cooking:CookingPot};
  return <section className="personal-section"><div className="hobby-grid">{content.activities.map(item=>{const Icon=icons[item.icon]||BookOpen;return <article className="hobby-card" key={item.title.en}><div className={`hobby-visual hobby-${item.icon}`}>{item.photo?<img src={item.photo} alt={text(item.title,lang)}/>:<Icon size={56} strokeWidth={1.1}/>}</div><div className="hobby-body"><h2>{text(item.title,lang)}</h2><p>{text(item.description,lang)}</p>{!item.photo&&<span className="photo-note"><Camera size={14}/>{t.activityPhotoPending}</span>}<details className="panel"><summary>{t.reflection}</summary><p>{text(item.reflection,lang)||t.soon}</p>{item.achievement&&<p>{text(item.achievement,lang)}</p>}</details></div></article>})}</div></section>;
}
