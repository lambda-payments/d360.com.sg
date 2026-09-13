# Digital360 — digital360.com.sg

Static one-page website plus two legal pages. No build step, no dependencies.

## Structure

    index.html      Home (About, Products, Contact)
    terms.html      Terms & Conditions
    privacy.html    Privacy Policy
    css/styles.css  All styles (design tokens in :root at the top)
    js/main.js      Footer year + sticky-header anchor offset

## Hosting

Upload the folder contents to the web root. Any static host works
(Nginx, Apache, S3 + CloudFront, Netlify, Vercel, Cloudflare Pages).

## Notes

- Fonts (Barlow, Barlow Condensed) load from Google Fonts. To self-host,
  download them and replace the <link> in each page's <head>.
- Colors, fonts and the page width are CSS custom properties at the top of
  css/styles.css — change them there rather than per rule.
- The contact section is mailto-only; there is no form and no backend.
- Legal pages are linked from the footer with target="_blank".
