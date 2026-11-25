# Hindam Space | مؤسسة هندام سبيس

**Excellence in Event & Retail Production | التميز في حلول المعارض والتجهيزات**

Official static website for **Hindam Space Establishment (مؤسسة هندام سبيس)**, a Saudi production and fit-out company delivering turnkey exhibition fabrication, interior solutions, retail shop fitting, indoor/outdoor signage, and commercial vehicle fleet branding across the Kingdom of Saudi Arabia.

---

## Key Features

- **Bilingual Support (Arabic RTL / English LTR)**: Instant client-side language switching via the top bar button with preference persistence in `localStorage`.
- **Responsive Corporate Design**: Built with pure HTML5, CSS3 (Grid/Flexbox, custom properties), and vanilla JavaScript—no build tools or external frameworks required.
- **Interactive Portfolio & Lightbox**: Filterable project gallery (`Exhibition Booths`, `Mall Activations & 3D`, `Signage & Arches`, `Interiors & Retail`) with full-screen lightbox navigation and keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`).
- **SEO & AI Search Optimization (GEO)**:
  - Open Graph, Twitter/X Cards, canonical & `hreflang` tags.
  - `Schema.org` JSON-LD (`LocalBusiness`, `OfferCatalog`, `FAQPage`).
  - Visible bilingual FAQ section (`#faq`).
  - Crawler and AI discovery files: `robots.txt`, `sitemap.xml`, and `llms.txt`.
- **Lead Capture**: Interactive quote request form and a floating WhatsApp quick-chat button (`+966 53 401 8003`).

---

## Project Structure

```text
hindam/
├── index.html          # Main bilingual HTML5 document & JSON-LD structured data
├── style.css           # Responsive styles, RTL/LTR rules, gallery & lightbox UI
├── script.js           # Bilingual i18n engine, gallery filter, lightbox & form handler
├── robots.txt          # Search engine & AI crawler directives
├── sitemap.xml         # XML sitemap with image entries
├── llms.txt            # Structured Markdown summary for AI search engines
├── images/             # Brand logo and curated project photography
├── assets/             # Extracted raw assets from company profile
└── Hindam Space Profile.pdf
```

---

## Running Locally

Open `index.html` directly in any modern browser:

```bash
open index.html
```

Or serve it with a local HTTP server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

---

## Contact Information

- **Website**: [www.hindam-adv.com](https://www.hindam-adv.com)
- **Headquarters**: Al Hamdaniyah District, Jeddah, Kingdom of Saudi Arabia
- **General Manager (Bandr Hassan Ata Almohamad)**: `+966 56 761 5878` | `bandrm@hindam-adv.com`
- **Business Development Manager (Siraj Muneer)**: `+966 53 401 8003` | `info@hindam-adv.com`
