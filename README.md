# Shri Automobile — Free Static Website

This is a static HTML/CSS/JavaScript website. It does not need Node.js, Express, MongoDB, environment variables, or a paid backend to display online.

## Before publishing
1. Open `script.js`.
2. Replace `91XXXXXXXXXX` with the workshop WhatsApp number (digits only, with country code).
3. Optionally update the service descriptions and workshop photos.
4. Test by opening `index.html` in your browser.

The contact form prepares a WhatsApp message. It does not store booking records in a database.

## Deploy free on Vercel
1. Upload these files to a GitHub repository (keep `index.html`, `style.css`, and `script.js` at the repository root).
2. Open https://vercel.com/new and import that repository.
3. Framework preset: Other.
4. Build command: leave empty.
5. Output directory: `.` (or leave default if Vercel detects static files).
6. Click Deploy.

Alternative: use GitHub Pages from the repository Settings → Pages → deploy from the `main` branch and root folder.

## Important
- Images are loaded from Unsplash, and fonts from Google Fonts; an internet connection is needed for those external assets.
- This is a front-end-only starter site. Do not put passwords, database URLs, or secret keys in these files.
