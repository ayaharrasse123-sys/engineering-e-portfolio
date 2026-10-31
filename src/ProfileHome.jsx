import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, BookOpen, UserRound, MapPin, GraduationCap, Sparkles, Linkedin, Github, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const routes = ['/engineering', '/international', '/sustainability', '/activities', '/development', '/career-project'];

export default function ProfileHome({ t, personal }) {
  return (
    <motion.div className="academic-home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3 }}>
      <section className="profile-introduction" aria-labelledby="profile-name">
        <aside className="profile-aside">
          <div className="profile-photo">
            {personal.portrait ? <img src={personal.portrait} alt="Aya Harrasse" /> : <><UserRound size={72} strokeWidth={.8} /><span>{t.portrait}</span></>}
          </div>
          <div className="profile-socials" aria-label={t.socialProfiles}>
            <Link to="/engineering" className="social-icon" aria-label={t.full[1]} title={t.full[1]}><GraduationCap size={21}/></Link>
            {personal.github && <a href={personal.github} className="social-icon" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Github size={20}/></a>}
            {personal.linkedin ? <a href={personal.linkedin} className="social-icon" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={20}/></a> : <span className="social-pending"><span className="social-icon" role="img" aria-label={`LinkedIn — ${t.soon}`}><Linkedin size={20}/></span><span>LinkedIn · {t.soon}</span></span>}
          </div>
          <div className="profile-affiliation"><GraduationCap size={19} /><span>{personal.school}</span></div>
          <div className="profile-affiliation"><MapPin size={17} /><span>Toulouse, France</span></div>
          <Link className="profile-link" to="/career-project">{t.career}<ArrowUpRight size={16} /></Link>
          <div className="profile-shortcuts"><a href={personal.cvEn} target="_blank" rel="noreferrer"><FileText size={15}/>{t.cvEn}</a><span aria-hidden="true"> · </span><a href={personal.cvFr} target="_blank" rel="noreferrer">{t.cvFr}</a></div>
        </aside>
        <div className="profile-biography">
          <div className="eyebrow">{t.portfolio}</div>
          <h1 id="profile-name">Aya Harrasse<span>.</span></h1>
          <p className="profile-program">{t.subtitle}</p>
          <p>{t.intro.split(personal.school).map((part, index) => <React.Fragment key={index}>{index > 0 && <strong className="intro-school">{personal.school}</strong>}{part}</React.Fragment>)}</p>
          <div className="profile-interests"><span>{t.interestsLabel}</span><p>{t.interests}</p></div>
          <Link className="text-link profile-explore" to="/engineering">{t.explore}<ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="home-section home-about" aria-labelledby="about-title">
        <div className="home-section-label"><span>01</span>{t.aboutLabel}</div>
        <div className="home-section-content"><h2 id="about-title">{t.about}</h2><p>{t.aboutText}</p>
          <div className="principles">{t.values.map((value, i) => <article key={value}><h3>{value}</h3><p>{t.valueText[i]}</p></article>)}</div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="chapters-title">
        <div className="home-section-label"><span>02</span>{t.journeyLabel}</div>
        <div className="home-section-content"><h2 id="chapters-title">{t.chapters}</h2><p>{t.chapterText}</p>
          <div className="chapter-list">{routes.map((route, i) => <Link to={route} key={route}><span className="chapter-list-number">0{i + 1}</span><div><h3>{t.full[i + 1]}</h3><p>{t.chapterDescriptions[i]}</p></div><ArrowUpRight size={20} /></Link>)}</div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="work-title">
        <div className="home-section-label"><span>03</span>{t.workLabel}</div>
        <div className="home-section-content"><h2 id="work-title">{t.highlights}</h2><div className="work-placeholder"><BookOpen size={26} strokeWidth={1.3} /><div><p>{t.highlightsText}</p><span><Sparkles size={13} />{t.soon}</span></div></div><Link className="text-link profile-explore" to="/engineering">{t.full[1]}<ArrowRight size={17} /></Link></div>
      </section>
    </motion.div>
  );
}
