# BrightClean Home Services — portfolio demo

This is a fictional cleaning-company website made with plain HTML, CSS, and JavaScript.
It has no backend, database, paid API, package manager, or build step.

## Files

- `index.html` — page content, section layout, contact links, and the demo inquiry form.
- `styles.css` — colors, spacing, responsive layout, and the living-room illustration.
- `script.js` — mobile navigation, footer year, and a demo-only form confirmation.

## Preview locally on Windows

1. Download and unzip the project folder.
2. Open the `brightclean_home_services` folder.
3. Double-click `index.html`. It should open in your default browser, including Microsoft Edge.
4. Click the navigation links and test the form. The form only displays a local demo confirmation; it does not send or save anything.
5. To edit the site, right-click a file and choose **Open with** a text editor. Visual Studio Code is optional; Windows Notepad can edit the files too.
6. Save your edits and refresh the browser tab to see them.

## What to customize before showing this as a real-business site

Search the files for the comments marked `EDIT` or `DEMO`.

- Company name: update “BrightClean Home Services” in `index.html`, including the title and footer.
- Phone: replace `+1 (555) 014-0123` and the `tel:` target with the business's authorized phone number.
- Email: replace `hello@example.com` and the `mailto:` target with the business's authorized email.
- Service areas: replace Oakwood, Maple Heights, Riverside Park, and Westfield with real service areas.
- Prices: no prices are currently advertised. If the owner wants pricing, add verified prices and explain any conditions; do not invent them.
- Images: the hero and about artwork are made with CSS shapes, so no image files are required. If you add images, use images the business owns or has permission to use, provide useful alt text, and optimize file size.
- Testimonials: the current quotes and names are explicitly demo content. Replace them only with genuine reviews and permission from the people quoted.
- Contact form: it is intentionally non-functional for message delivery. Before launch, connect a real form endpoint or backend, test it, and revise the demo notice so it truthfully explains how data is handled.

## Publish for free with GitHub Pages

GitHub Pages is a free static-hosting option for public repositories. Account features and terms can change, so check GitHub's current documentation if the UI differs.

1. Create or sign in to a GitHub account at https://github.com/.
2. Create a new **public** repository, for example `brightclean-demo`.
3. On the repository page, choose **Add file → Upload files**.
4. Upload `index.html`, `styles.css`, `script.js`, and this `README.md` from this folder. Upload the files themselves, not a nested folder containing them.
5. Commit the uploaded files to the repository's default branch.
6. Open **Settings → Pages**.
7. Under the build/deployment source, choose **Deploy from a branch**. Select the default branch (often `main`) and the root folder `/`, then save.
8. Wait for the Pages deployment to finish. GitHub will display the published URL on the Pages settings page. Open it and test the layout and all links on desktop and mobile.
9. If you change files later, upload/commit the changes and wait for the site to redeploy.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Before using this as a client deliverable

- Confirm the client has permission to use their business name, photos, and any supplied brand assets.
- Replace all fictional contact details, areas, and demo testimonials.
- Explain that the inquiry form currently does not send messages. Do not present it as a working lead-capture form until delivery is configured and tested.
- Test keyboard navigation, mobile layout, and links in a browser.
