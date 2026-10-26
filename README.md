# CS501 — Theory of Computation Course Website

A responsive static website built with HTML, CSS, and vanilla JavaScript for GitHub Pages.

## Pages included
- `index.html` — course landing page and objectives
- `syllabus.html` — searchable syllabus with all topics in Units I–V
- `unit1.html` … `unit5.html` — dedicated pages for each unit
- `resources.html` — suggested lecture resources and recommended books
- `css/style.css` — responsive design and styling
- `js/script.js` — mobile navigation and syllabus topic search

## Publish on GitHub Pages
1. Create or open your GitHub repository.
2. Upload the files and folders from this project to the repository root. Keep the `css/` and `js/` folders in place.
3. In **Settings → Pages**, choose **Deploy from a branch**, select your main branch and the `/(root)` folder, then save.
4. Wait for GitHub Pages to publish the site. Open the URL shown in the Pages settings.

## Add topic PDFs
The source course document lists PDF path names but does not include the PDF files themselves. Create these folders in the repository and upload the corresponding PDFs:

- `pdfs/unit1/`
- `pdfs/unit2/`
- `pdfs/unit3/`
- `pdfs/unit4/`
- `pdfs/unit5/`

Keep the filenames and paths exactly as linked in the relevant unit page. For example, `pdfs/unit1/1-1-automata-examples.pdf`.

**Important:** The resource links will not work until you upload the corresponding PDF files. Do not upload copyrighted material unless you have permission to share it.

## Customize
- Replace the course title or add institution/faculty details in the HTML files.
- Update video URLs on `resources.html` after verifying the official playlist URLs.
- Change colors and typography in `css/style.css`.
- No build step, package manager, or framework is required.

## Accessibility and performance
- Semantic HTML, responsive layout, skip link, visible focus states, accessible mobile navigation, reduced-motion support, and no JavaScript dependencies.
- Google Fonts are optional; the page falls back to system sans-serif fonts if unavailable.
