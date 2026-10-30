import { mkdir, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { personal, coursework, technicalSkills, softSkills, languageSkills, activities } from '../src/content.js';
import { cvDetails, cvCopy } from '../src/cv-content.js';

const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const local = (value, lang) => escape(value && typeof value === 'object' ? value[lang] || value.en : value);
const output = resolve('public/media/cv');
await mkdir(output, { recursive: true });
await mkdir(resolve('.preview'), { recursive: true });

function html(lang) {
  const t=cvCopy[lang], h=t.headings;
  const list=items=>items.map(s=>local(s.title,lang)).join(' · ');
  const contacts=[t.location, cvDetails.email ? `<a href="mailto:${escape(cvDetails.email)}">${escape(cvDetails.email)}</a>` : null, cvDetails.phone ? escape(cvDetails.phone) : null].filter(Boolean).join('<span class="separator"> | </span>');
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Aya Harrasse — CV ${lang.toUpperCase()}</title><style>
  @page{size:A4;margin:14mm 16mm}*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#20363d;font-size:10pt;line-height:1.5;background:white}main{max-width:178mm;margin:0 auto}header{border-bottom:2px solid #15525d;padding-bottom:13px;margin-bottom:16px}h1{font-family:Georgia,serif;color:#15525d;font-size:30pt;font-weight:400;letter-spacing:-1px;margin:0 0 2px}.subtitle{font-size:13pt;color:#15525d;margin:0 0 9px}.contact{font-size:8.3pt;color:#53676c}.separator{color:#ad7857;margin:0 4px}a{color:#15525d;text-decoration:none}section{margin-top:15px;break-inside:avoid}h2{font-size:9pt;font-weight:700;text-transform:uppercase;letter-spacing:1.3px;color:#984a28;margin:0 0 7px;padding-bottom:4px;border-bottom:1px solid #d9e4e5}h3{font-size:10.3pt;color:#15525d;margin:0}p{margin:0 0 5px}.education-entry+.education-entry{margin-top:10px}.institution{color:#53676c;font-size:9.5pt}.dates{float:right;font-size:9pt;color:#53676c;font-weight:400}.skills-row{display:grid;grid-template-columns:44mm 1fr;gap:6mm;margin-bottom:5px}.skills-row strong{color:#15525d;font-weight:600}.languages{display:grid;grid-template-columns:repeat(2,1fr);gap:5px 18px}.language-note{font-size:8pt;color:#53676c;margin-top:6px}.minor{font-size:9.4pt}.course-group strong{color:#15525d}@media screen{body{padding:30px 18px;background:#f2f5f5}main{background:#fff;padding:14mm 16mm;max-width:210mm;box-shadow:0 3px 20px #15525d12}}@media print{a{color:inherit}}
  </style></head><body><main><header><h1>${escape(personal.name)}</h1><p class="subtitle">${escape(t.title)}</p><div class="contact">${contacts}</div></header>
  <section><h2>${escape(h.profile)}</h2><p>${escape(t.profile)}</p></section>
  <section><h2>${escape(h.education)}</h2><div class="education-entry"><h3>${escape(t.engineering)}${cvDetails.engineeringDates?`<span class="dates">${escape(cvDetails.engineeringDates)}</span>`:''}</h3><p class="institution">${escape(personal.school)} · ${escape(t.location)}</p></div><div class="education-entry"><h3>${escape(t.prepa)}${cvDetails.prepaDates?`<span class="dates">${escape(cvDetails.prepaDates)}</span>`:''}</h3>${(cvDetails.prepaYears||[]).map(year=>`<p class="institution"><strong>${local(year.year,lang)}</strong> — ${escape(year.school)}, ${local(year.city,lang)}</p>`).join('')}${cvDetails.prepaSchool?`<p class="institution">${escape(cvDetails.prepaSchool)}</p>`:''}<p class="minor">${escape(t.prepaDescription)}</p></div></section>
  <section><h2>${escape(h.coursework)}</h2>${coursework.map(g=>`<p class="course-group"><strong>${local(g.title,lang)}:</strong> ${g.subjects.map(s=>local(s,lang)).join('; ')}.</p>`).join('')}</section>
  <section><h2>${escape(h.skills)}</h2>${[['programming',t.programming],['computing',t.computing],['systems',t.systems]].map(([group,title])=>`<div class="skills-row"><strong>${escape(title)}</strong><span>${list(technicalSkills.filter(s=>s.group===group))}</span></div>`).join('')}<div class="skills-row"><strong>${escape(t.soft)}</strong><span>${list(softSkills)}</span></div></section>
  <section><h2>${escape(h.languages)}</h2><div class="languages">${languageSkills.map(s=>`<div><strong>${local(s.language,lang)}</strong> — ${local(s.level,lang)}</div>`).join('')}</div><p class="language-note">${escape(t.languageNote)}</p></section>
  <section><h2>${escape(h.interests)}</h2><p>${list(activities)}</p></section>
  </main></body></html>`;
}
for(const lang of ['en','fr'])await writeFile(resolve(output,`aya-harrasse-${lang}.html`),html(lang));

const browser=process.env.CV_CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const child=spawn(browser,['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port=9231',`--user-data-dir=${resolve('.preview/cv-browser')}`],{stdio:'ignore',windowsHide:true});
let launchError;child.on('error',error=>{launchError=error;});
let ws;
try {
 let page;
 for(let i=0;i<40;i++){if(launchError)throw launchError;try{page=(await(await fetch('http://127.0.0.1:9231/json/list')).json()).find(p=>p.type==='page');if(page)break;}catch{}await new Promise(r=>setTimeout(r,250));}
 if(!page)throw Error('Chrome unavailable. Set CV_CHROME_PATH to an installed Chrome/Chromium executable. Printable HTML files were generated.');
 ws=new WebSocket(page.webSocketDebuggerUrl);await new Promise(r=>ws.addEventListener('open',r,{once:true}));
 let id=0;const pending=new Map();
 ws.addEventListener('message',event=>{const m=JSON.parse(event.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result);}});
 const send=(method,params={})=>new Promise((resolve,reject)=>{const n=++id;pending.set(n,{resolve,reject});ws.send(JSON.stringify({id:n,method,params}));});
 await send('Page.enable');
 await send('Emulation.setDeviceMetricsOverride',{width:794,height:1123,deviceScaleFactor:1,mobile:false});
 await send('Emulation.setEmulatedMedia',{media:'print'});
 for(const lang of ['en','fr']){
  await send('Page.navigate',{url:pathToFileURL(resolve(output,`aya-harrasse-${lang}.html`)).href});
  await new Promise(r=>setTimeout(r,600));
  await send('Runtime.evaluate',{expression:'document.fonts.ready',awaitPromise:true});
  await send('Runtime.evaluate',{expression:'window.scrollTo(0,0)'});
  await new Promise(r=>setTimeout(r,200));
  const shot=await send('Page.captureScreenshot',{format:'png'});
  await writeFile(resolve(`.preview/cv-${lang}.png`),Buffer.from(shot.data,'base64'));
  const pdf=await send('Page.printToPDF',{printBackground:true,preferCSSPageSize:true,displayHeaderFooter:false,generateTaggedPDF:true});
  const bytes=Buffer.from(pdf.data,'base64');
  const pages=(bytes.toString('latin1').match(/\/Type\s*\/Page\b/g)||[]).length;
  if(pages!==1)throw Error(`${lang} CV has ${pages} pages; adjust content or print styles before publication.`);
  await writeFile(resolve(output,`aya-harrasse-${lang}.pdf`),bytes);
  console.log(`Generated ${lang.toUpperCase()} CV: 1 A4 page, ${bytes.length} bytes`);
 }
 await send('Browser.close');
}finally{ws?.close();child.kill();}
