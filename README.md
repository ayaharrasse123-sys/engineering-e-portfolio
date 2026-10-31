# Aya Harrasse — Engineering e-portfolio

A bilingual, responsive React portfolio for Toulouse INP–ENSEEIHT. Built directly in this folder using Vite, Tailwind CSS, React Router, Framer Motion, and Lucide React. No backend or account system.

## Run locally

Requires a supported Node.js version (Node 22+ recommended).

```powershell
npm.cmd install
npm.cmd run dev
```

Open the Local URL printed by Vite (normally http://127.0.0.1:5173). `npm.cmd` avoids Windows PowerShell's script execution restrictions. On macOS/Linux use `npm`.

```powershell
npm.cmd run build
npm.cmd run preview
```

The production build is generated in `dist/`. The preview command serves that build locally.

## Content and translations

- `src/content.js`: personal details, asset links, academic years, experiences, activities, skills, role models, and mobility plans.
- `src/translations.js`: all English and French interface copy, page introductions, and placeholder labels.
- `src/main.jsx`: reusable components and seven page layouts.
- `src/styles.css`: base component layouts and reduced-motion behavior.
- `src/academic.css`: academic presentation, readable section tabs, and responsive refinements.
- `src/ProfileHome.jsx`: profile introduction and the overview of all seven sections.
- `src/PersonalSections.jsx`: technical and soft skills, language levels, mobility preferences, civic participation, and hobbies.
- `src/warm.css`: petrol-blue headings, white backgrounds, copper accents, serif typography, circular portrait, social icons, and light/dark colors.
- `src/ThemeToggle.jsx`: accessible light/dark switch with a browser-local preference.
- `src/cv-content.js`: CV-specific copy, contact information, and prépa schools.
- `scripts/build-cvs.mjs`: generates the English/French printable HTML and one-page PDF CVs from the shared content.

English is the first-visit default. A visitor's language choice is remembered on that browser. Changing language preserves the current route. Text content can use `{ en: 'English text', fr: 'Texte français' }` objects. Never present an unverified experience as completed.

The site has no editor dashboard: update these source files in VS Code and rebuild. Placeholders display “To be added / À ajouter”; they are not form inputs and do not imply an accomplishment.

## Add a portrait, documents, or video

Put files inside these folders:

| Folder | Contents |
| --- | --- |
| `public/media/portrait/` | Portrait photograph |
| `public/media/projects/` | Academic project photographs |
| `public/media/sports/` | Sports, hobby, and activity photographs |
| `public/media/cv/` | English and French CV PDFs |
| `public/media/certificates/` | Certificates |
| `public/media/reports/` | Project reports and documents |
| `public/media/video/` | English video pitch |
| `public/media/international/` | Travel and study photographs |
| `public/media/engagement/` | Sustainability and civic initiative photographs |
| `public/media/role-models/` | Authorized role-model photographs |

For example, after adding real files, set these fields in `src/content.js`:

```js
portrait: '/media/portrait/aya.jpg',
cvEn: '/media/cv/aya-harrasse-en.pdf',
cvFr: '/media/cv/aya-harrasse-fr.pdf',
linkedin: 'https://www.linkedin.com/in/YOUR-REAL-PROFILE/',
video: '/media/video/pitch-en.mp4',
transcript: { en: 'Your actual transcript', fr: 'Votre traduction' }
```

Leave missing assets as `null`. The site only displays real CV/profile links when configured. The video player appears when a video path exists. For accessibility, include an accurate transcript and add a `<track kind="captions">` with a WebVTT file to the video element when uploading the pitch. Compress photographs, use descriptive filenames, and avoid uploading private information.

The LinkedIn icon sits directly below the portrait. Set `personal.linkedin` to your own verified URL to activate it; while missing, it displays “To be added / À ajouter”. The adjacent GitHub icon uses `personal.github`. No other person's portrait, biography, or social profile is used.

## Update the CVs

Both CVs are available through the homepage and Career Project page. Generated files live in `public/media/cv/`: `aya-harrasse-en.pdf`, `aya-harrasse-fr.pdf`, and matching printable HTML versions. Edit `src/cv-content.js` for your email, school information, or CV profile; edit `src/content.js` for coursework, skills, languages, and interests.

Regenerate with `node scripts/build-cvs.mjs`, then run `npm.cmd run build`. The generator uses local Chrome/Chromium and checks that each PDF has one A4 page. On this Windows installation it finds Chrome automatically; elsewhere set the `CV_CHROME_PATH` environment variable to your browser executable. Browser state and inspection images stay under ignored `.preview/`. You may also open the generated HTML in a browser and print to A4 PDF.

The CVs include the supplied contact email and education chronology: 2024–2025 at Lycée Moulay Hassan in Tangier, 2025–2026 at Lycée Mohammed V in Casablanca, and the engineering programme 2026–2029 at ENSEEIHT/N7 (in progress). Civic engagement is excluded from the CVs. Telephone is omitted until supplied. Language levels are self-assessed. No internships, project results, or certifications have been invented.

## Academic projects and experiences

The Engineering page displays skills followed by a Projects section. Projects are stored in the flat `academicProjects` array in `src/content.js`, currently empty. There are no Year 1/2/3 sections on this page. The old `academicYears` array is retained as unused content for reference.

Projects support `title`, `academicYear`, `description`, `objectives`, `technologies`, `contribution`, `results`, `skills`, `photos`, `reports`, and `reflection`. Use bilingual prose for narrative fields; `photos` and `reports` are arrays of public paths. Media paths automatically render as photographs or document links. Verified HTTPS source links render as external links.

International experience records support `title`, `destination`, `description`, `competencies`, `reflection`, `documents`. Activities support `title`, `photo`, `description`, `achievement`, `reflection`. Initiatives support `title`, `photo`, `description`, `results`, `skills`, `reflection`, `sdgs`. Professional experiences support `title`, `dates`, `description`, `results`, `skills`, `reflection`. Only add SDG numbers where there is a relevant, documented connection.

The current personal content records Python, Ada, SQL, MATLAB, Linux, Windows, five self-described soft skills, Arabic (native), French (C1), English (C1), Turkish (B1), and German (beginner). Skills have no arbitrary percentage ratings. Travel, running, reading, and cooking are personal interests; no destinations, competition results, or specific reading history are claimed. Climate Fresk and The Trial of King Kong are confirmed participations; dates, results, and personal reflections remain to be supplied.

`mobilityPreferences` describes Switzerland and London as future options. The first two detailed mobility templates use these destinations; the third remains unfilled. No host organisation, acceptance, or internship is claimed. `mobilitySources` links to official careers pages for the organisations of interest. `softSkills` and `technicalSkills` populate both engineering and career development.

Role models and mobility projects already contain three complete record templates. Fill the existing keys, retaining their numeric IDs. The interactive roadmap links each mobility proposal to its corresponding role model. Actual international experiences belong on the international page; proposals belong on the career-project page.

## Publish later with GitHub and Vercel

1. Create a GitHub repository and push this project, including `package-lock.json`. Keep `node_modules`, `.npm-cache`, and `dist` out of Git.
2. Import the repository into Vercel and select the Vite framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. `vercel.json` provides React Router fallback for direct visits to the seven page URLs.
5. Future pushes can trigger new deployments. Verify all routes, both languages, and configured document links after publication.

Do not publish documents containing information you do not want public. No hosting account has been connected or deployment performed by this local build.

## Verification

Run `npm.cmd run build` for the production check. Run `node scripts/verify-pages.mjs` to render all seven routes in English and French and check for incomplete rendering or untranslated navigation. All 14 combinations passed during implementation.

The redesigned homepage was visually checked in headless Chrome at desktop (1440 px) and mobile (390 px) widths. Both show all seven navigation links with no horizontal overflow. Temporary browser artifacts stay in the ignored `.preview/` directory. Vite excludes that directory from its file watcher.

When adding content, manually inspect all seven routes at phone and desktop widths, keyboard focus, language switching, expandable panels, and the three mobility tabs. OS/browser reduced-motion settings disable animations. Page titles, HTML language, and description metadata update when navigating or switching languages.


## Mobility and activity photographs

Role model portraits are stored in `public/media/role-models` and link to their source profiles: [Mirco Musolesi](https://www.mircomusolesi.org/), [Çağlar Gülçehre at EPFL](https://people.epfl.ch/caglar.gulcehre), and [Martin Vechev at SRI Lab](https://www.sri.inf.ethz.ch/people/martin).

The International page presents four future study ambitions: UCL, EPFL, ETH Zurich, and NUS. Each profile includes a study motivation, a possible career connection, a cultural motivation, and an official programme link. These are imagined plans, not completed exchanges or confirmed placements. Career Project ends after role models; the professional roadmap has been removed from Career Development.

Campus image sources:

- UCL: https://tvlocations.net/blackbirds.htm (image: https://tvlocations.net/unilondon.jpg).
- EPFL: https://www.epfl.ch/wp-content/uploads/2020/01/EPFL-vue-aerienne.jpg.
- ETH Zurich: https://ethz.ch/de/news-und-veranstaltungen/eth-news/news/2022/10/auch-im-dritten-ranking-des-jahres-top.html.
- NUS University Town: https://www.world-architects.com/zh/stx-landscape-architects-singapore/project/nus-university-town-nus-utown.

Activities use illustrative Unsplash photographs, labelled as illustrations rather than personal photographs: travel (`photo-1488646953014-85cb44e25828`), running (`photo-1476480862126-209bfaa8edc8`), reading (`photo-1507842217343-583bb7270b66`), and cooking (`photo-1556911220-bff31c812dba`). All eight images are stored locally in `public/media` so the pages do not rely on external image requests.
