import React, { createContext, useContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';
import { motion, MotionConfig } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Menu, X, Plus, UserRound, BookOpen, Globe2, Leaf, Camera, BriefcaseBusiness, Compass, Sparkles, MoveUpRight, FileText, Linkedin, Play, Lightbulb } from 'lucide-react';
import { translations } from './translations';
import * as content from './content';
import './styles.css';
import './academic.css';
import './warm.css';
import ThemeToggle from './ThemeToggle';
import ProfileHome from './ProfileHome';
import { SkillsOverview, MobilityOverview, EngagementOverview, ActivitiesOverview, CourseworkOverview } from './PersonalSections';

const paths = ['/', '/engineering', '/international', '/sustainability', '/activities', '/development', '/career-project'];
const icons = [Compass, BookOpen, Globe2, Leaf, Camera, BriefcaseBusiness, MoveUpRight];
const Context = createContext();
const usePortfolio = () => useContext(Context);
function LocalText({value}) {
  const {lang,t} = usePortfolio();
  if (Array.isArray(value)) return <div className="asset-list">{value.map((item,i)=><LocalText key={i} value={item}/>)}</div>;
  if (value && typeof value === 'object') return value[lang] || value.en || null;
  if (typeof value === 'string' && value.startsWith('/media/')) {
    const files=value.split(', ').filter(Boolean);
    return <div className="asset-list">{files.map(file=>/\.(jpe?g|png|webp|avif|gif)$/i.test(file)?<a href={file} target="_blank" rel="noreferrer" key={file}><img className="record-image" src={file} alt={lang==='fr'?'Photographie du portfolio':'Portfolio photograph'} loading="lazy"/></a>:<a className="text-link" href={file} target="_blank" rel="noreferrer" key={file}>{t.view}<ArrowUpRight size={14}/></a>)}</div>;
  }
  if(typeof value==='string' && /^https:\/\//.test(value)) return <div className="asset-list">{value.split(', ').map(url=><a className="text-link" key={url} href={url} target="_blank" rel="noreferrer">{url}<ArrowUpRight size={14}/></a>)}</div>;
  return value;
}
function Badge(){const {t}=usePortfolio();return <span className="badge">{t.soon}</span>}
function Fields({labels, values = []}) { const {t} = usePortfolio(); return <dl className="fields">{labels.map((label,i)=><div key={label}><dt>{label}</dt><dd>{values[i] ? <LocalText value={values[i]}/> : <span>{t.soon}</span>}</dd></div>)}</dl>; }
function Panel({title, children, open=false}) { return <details className="panel" open={open || undefined}><summary>{title}<Plus size={18}/></summary><div className="panel-body">{children}</div></details>; }
function PageHeading({index, intro}){const {t}=usePortfolio();const Icon=icons[index];return <header className="page-heading"><div className="eyebrow"><Icon size={15}/> {String(index).padStart(2,'0')} / {t.portfolio}</div><h1>{t.full[index]}</h1><p>{intro}</p></header>}
function Note(){const {t}=usePortfolio();return <p className="content-note"><Sparkles size={16}/>{t.editNote}</p>}
function Frame({children}){return <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.4}}>{children}</motion.div>}
function Header(){const {t,lang,setLang}=usePortfolio();const [open,setOpen]=useState(false);const location=useLocation();useEffect(()=>setOpen(false),[location]);return <header className="site-header"><div className="nav-wrap"><Link className="brand" to="/" aria-label="Aya Harrasse"><span className="monogram">ah<span>.</span></span><span className="brand-name">AYA HARRASSE<span>{t.portfolio}</span></span></Link><nav aria-label={lang==='en'?'Main navigation':'Navigation principale'} className={open?'navigation is-open':'navigation'}>{paths.map((path,i)=><NavLink key={path} to={path} end>{t.nav[i]}</NavLink>)}</nav><div className="nav-actions"><ThemeToggle lang={lang}/><div className="languages" aria-label={lang==='en'?'Language':'Langue'}>{['en','fr'].map(l=><button key={l} aria-pressed={lang===l} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}</div><button className="menu-button" aria-label={t.menu} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div></header>}
function Footer(){const {t}=usePortfolio();return <footer><div className="footer-top"><Link to="/" className="footer-name">Aya Harrasse<span>.</span></Link><p>{t.footer}</p><Link to="/career-project">{t.career}<ArrowUpRight size={17}/></Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Aya Harrasse</span><span>{t.footerNote}</span></div></footer>}
function Engineering(){
  const {t,lang}=usePortfolio();
  return <Frame>
    <PageHeading index={1} intro={t.academicIntro}/>
    <SkillsOverview t={t} lang={lang}/>
    <CourseworkOverview t={t} lang={lang}/>
    <section className="personal-section engineering-projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">{t.projectsSection}</h2>
      {content.academicProjects.map((project,i)=><article className="simple-card" key={i}>
        <h3><LocalText value={project.title}/></h3>
        <Fields labels={t.projectFields} values={[project.title,project.academicYear,project.description,project.objectives,project.technologies,project.contribution,project.results,project.skills,project.photos,project.reports,project.reflection]}/>
      </article>)}
    </section>
  </Frame>;
}
function International(){const {t,lang}=usePortfolio();return <Frame><PageHeading index={2} intro={t.internationalIntro}/><MobilityOverview t={t} lang={lang}/></Frame>}
function Sustainability(){const {t,lang}=usePortfolio();return <Frame><PageHeading index={3} intro={t.sustainabilityIntro}/><EngagementOverview t={t} lang={lang}/></Frame>}
function Activities(){const {t,lang}=usePortfolio();return <Frame><PageHeading index={4} intro={t.activitiesIntro}/><ActivitiesOverview t={t} lang={lang}/></Frame>}
function Development(){const {t}=usePortfolio();return <Frame><PageHeading index={5} intro={t.developmentIntro}/><section className="section"><h2>{t.professional}</h2><Panel title={t.professional} open><Fields labels={t.experienceFields}/></Panel>{content.professionalExperiences.map((e,i)=><Panel title={<LocalText value={e.title}/>} key={i}><Fields labels={t.experienceFields} values={[e.title,e.dates,e.description,e.results,e.skills,e.reflection]}/></Panel>)}</section><section className="section"><div className="section-head"><h2>{t.skills}</h2><p>{t.skillsNote}</p></div><div className="three-columns">{t.skillsTypes.map((s,i)=><div className="simple-card" key={s}>{i===0?<BookOpen/>:i===1?<UserRound/>:<FileText/>}<h3>{s}</h3>{(i===0?content.technicalSkills:i===1?content.softSkills:content.certifications).length===0&&<Badge/>}{(i===0?content.technicalSkills:i===1?content.softSkills:content.certifications).map((v,k)=><p key={k}><LocalText value={v.title}/> — <LocalText value={v.description}/></p>)}</div>)}</div></section><Note/></Frame>}
function Career(){const {t,lang}=usePortfolio();return <Frame><PageHeading index={6} intro={t.careerIntro}/><section className="section toolkit"><div className="section-head"><div><div className="eyebrow">A / {t.full[6]}</div><h2>{t.hub}</h2></div><p>{t.hubText}</p></div><div className="three-columns">{[{title:t.cvEn,url:content.personal.cvEn},{title:t.cvFr,url:content.personal.cvFr},{title:t.linkedin,url:content.personal.linkedin}].map((item,i)=><article className="document-card" key={item.title}>{i===2?<Linkedin size={29} strokeWidth={1.3}/>:<FileText size={29} strokeWidth={1.3}/>}<h3>{item.title}</h3>{i===2&&<p>{t.optional}</p>}{item.url?<a href={item.url} target="_blank" rel="noreferrer" className="text-link">{i===2?t.visit:t.view}<ArrowUpRight size={16}/></a>:<Badge/>}</article>)}</div><div className="pitch-grid"><div className={content.personal.video?"video-placeholder has-pitch-video":"video-placeholder"}>{content.personal.video?<video controls playsInline preload="metadata" poster="/media/video/aya-harrasse-pitch-poster.jpg" src={content.personal.video} aria-label={t.pitch}/>:<><span className="play-icon"><Play size={27} fill="currentColor"/></span><h3>{t.pitch}</h3><Badge/></>}</div><div className="pitch-copy"><div className="eyebrow">{t.pitch}</div><h2>{t.pitchNote}</h2><ol>{t.pitchStages.map(s=><li key={s}>{s}</li>)}</ol><Panel title={t.transcript}><p>{content.personal.transcript[lang]||t.soon}</p></Panel></div></div></section><section className="section"><div className="eyebrow">B / {t.model}</div><h2>{t.models}</h2><p className="section-description">{t.modelsText}</p><div className="three-columns">{content.roleModels.map(m=><article className="model-card" key={m.id}><a className="model-portrait-link" href={m.profile} target="_blank" rel="noreferrer" aria-label={m.name}><img className="model-portrait" src={m.photo} alt={m.name} loading="lazy" width="320" height="320"/></a><span className="eyebrow">0{m.id}</span><h3>{m.name}</h3><p className="model-organization">{m.organization}</p><p className="model-inspiration"><LocalText value={m.inspiration}/></p></article>)}</div></section></Frame>}
function App(){const [lang,setLang]=useState(()=>{try{return localStorage.getItem('portfolio-language')==='fr'?'fr':'en'}catch{return 'en'}});const t=translations[lang];const {pathname}=useLocation();useEffect(()=>{document.documentElement.lang=lang;try{localStorage.setItem('portfolio-language',lang)}catch{}const index=paths.indexOf(pathname);document.title=`${index>=0?t.full[index]:t.notFound} — Aya Harrasse`;document.querySelector('meta[name="description"]').content=lang==='fr'?'Portfolio d’Aya Harrasse, étudiante en ingénierie informatique à Toulouse INP–ENSEEIHT. Parcours, réflexions et projet professionnel.':"Aya Harrasse’s engineering portfolio: learning, reflections and professional plans at Toulouse INP–ENSEEIHT."},[lang,pathname,t]);useEffect(()=>{window.scrollTo({top:0,behavior:'instant'})},[pathname]);return <Context.Provider value={{lang,setLang,t}}><MotionConfig reducedMotion="user"><a className="skip-link" href="#main">{t.skip}</a><Header/><main id="main" tabIndex={-1}><Routes><Route path="/" element={<ProfileHome t={t} personal={content.personal}/>}/><Route path="/engineering" element={<Engineering/>}/><Route path="/international" element={<International/>}/><Route path="/sustainability" element={<Sustainability/>}/><Route path="/activities" element={<Activities/>}/><Route path="/development" element={<Development/>}/><Route path="/career-project" element={<Career/>}/><Route path="*" element={<section className="page-heading"><h1>{t.notFound}</h1><Link className="button primary" to="/">{t.home}</Link></section>}/></Routes></main><Footer/></MotionConfig></Context.Provider>}
createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
