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
- `src/styles.css`: navy/white visual identity, responsive layouts, and reduced-motion behavior.

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

## Academic projects and experiences

Each academic year has `courses`, `skills`, and `projects` arrays. Populate courses/skills with bilingual text objects. Projects support `title`, `academicYear`, `description`, `objectives`, `technologies`, `contribution`, `results`, `skills`, `photos`, `reports`, and `reflection`. Use bilingual prose for narrative fields; `photos` and `reports` are arrays of public paths. Media paths automatically render as photographs or document links. Verified HTTPS source links render as external links.

International experience records support `title`, `destination`, `description`, `competencies`, `reflection`, `documents`. Activities support `title`, `photo`, `description`, `achievement`, `reflection`. Initiatives support `title`, `photo`, `description`, `results`, `skills`, `reflection`, `sdgs`. Professional experiences support `title`, `dates`, `description`, `results`, `skills`, `reflection`. Only add SDG numbers where there is a relevant, documented connection.

Role models and mobility projects already contain three complete record templates. Fill the existing keys, retaining their numeric IDs. The interactive roadmap links each mobility proposal to its corresponding role model. Actual international experiences belong on the international page; proposals belong on the career-project page.

## Publish later with GitHub and Vercel

1. Create a GitHub repository and push this project, including `package-lock.json`. Keep `node_modules`, `.npm-cache`, and `dist` out of Git.
2. Import the repository into Vercel and select the Vite framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. `vercel.json` provides React Router fallback for direct visits to the seven page URLs.
5. Future pushes can trigger new deployments. Verify all routes, both languages, and configured document links after publication.

Do not publish documents containing information you do not want public. No hosting account has been connected or deployment performed by this local build.

## Verification

Run `npm.cmd run build` for the production check. Run `node scripts/verify-pages.mjs` to render all seven routes in English and French and check for incomplete rendering or untranslated placeholders. All 14 combinations passed during implementation.

Visual browser verification was unavailable in the implementation environment. Manually inspect all seven routes at phone and desktop widths, the mobile navigation, keyboard focus, language switching, expandable panels, and the three mobility tabs. OS/browser reduced-motion settings disable animations. Page titles, HTML language, and description metadata update when navigating or switching languages.
