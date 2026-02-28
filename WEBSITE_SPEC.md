# Sequential Analytics — Website Specification

**Domain:** sequentialanalytics.io
**Last updated:** 2026-02-28

---

## Table of Contents

1. [Site Architecture](#1-site-architecture)
2. [Design System — Primary (Main Site)](#2-design-system--primary-main-site)
3. [Design System — Services Page (Alternate)](#3-design-system--services-page-alternate)
4. [Asset Inventory](#4-asset-inventory)
5. [Page-by-Page Specification](#5-page-by-page-specification)
6. [Shared Components](#6-shared-components)
7. [External Services & Integrations](#7-external-services--integrations)
8. [SEO & Meta Tags](#8-seo--meta-tags)
9. [JavaScript Behaviors](#9-javascript-behaviors)
10. [Infrastructure Files](#10-infrastructure-files)

---

## 1. Site Architecture

### Pages

| Route | File | Title | Status |
|---|---|---|---|
| `/` | `index.html` | Sequential Analytics \| Data Systems That Ship | Active |
| `/company/` | `company/index.html` | Company \| Sequential Analytics | Active |
| `/case-studies/` | `case-studies/index.html` | Case Studies \| Sequential Analytics | Active |
| `/contact/` | `contact/index.html` | Contact \| Sequential Analytics | Active |
| `/services/` | `services/index.html` | Our Services \| Sequential Analytics | Active (alternate design) |
| (404) | `404.html` | Page Not Found \| Sequential Analytics | Active |

### Navigation Structure (Main Site)

- Logo (links to `/`)
- Company → `/company/`
- Case Studies → `/case-studies/`
- Get in touch (CTA button) → `/contact/`

### Navigation Structure (Services Page)

- Logo (links to `/`)
- Company → `/company/`
- Services → `/services/`
- Get in touch (CTA button) → `/contact/`

---

## 2. Design System — Primary (Main Site)

Used on: Homepage, Company, Case Studies, Contact, 404

### Colors

| Token | Hex | Usage |
|---|---|---|
| `sa-bg` | `#0A0A0A` | Page background |
| `sa-surface` | `#111111` | Cards, inputs, elevated surfaces |
| `sa-accent` | `#D2FF46` | Accent (lime-yellow), CTAs, stats, labels |
| `sa-text` | `#F5F5F5` | Primary text |
| `sa-muted` | `#888888` | Secondary/body text |

### Additional Colors (hardcoded in CSS/HTML)

| Color | Usage |
|---|---|
| `#E4FF73` | Hover state for accent (buttons, links) |
| `#555555` | Placeholder text, copyright text |
| `rgba(255,255,255,0.06)` | Borders (cards, dividers, nav, footer) |
| `rgba(255,255,255,0.12)` | Outline button border |
| `rgba(210,255,70,0.2)` | Accent glow / shadow on primary button hover |

### Typography

| Role | Font Family | Weights |
|---|---|---|
| Display / Headings | Bricolage Grotesque | 400, 500, 600, 700, 800 |
| Body / UI | Outfit | 300, 400, 500, 600 |

### Font Sizes (Tailwind classes used)

| Element | Mobile | Desktop |
|---|---|---|
| Hero heading (homepage) | `text-5xl` | `text-7xl` |
| Hero heading (subpages) | `text-4xl` | `text-6xl` |
| Section headings | `text-3xl` | `text-4xl` |
| Card headings | `text-2xl` | `text-3xl` |
| Sub-headings | `text-xl` | `text-xl` |
| Body text | `text-base` | `text-lg` |
| Small/secondary text | `text-sm` | `text-sm` |
| Labels / badges | `text-xs` / `text-[11px]` | Same |
| Section label | `12px` | `12px` |
| Stat values | `26px` (mobile) | `32px` |

### Spacing

| Context | Value |
|---|---|
| Container max-width | `1200px` |
| Container padding | `0 24px` |
| Nav height | `64px` |
| Section padding (vertical) | `py-24` / `md:py-32` (96px / 128px) |
| Card padding | `p-8` / `md:p-10` |
| Card border-radius | `12px` |
| Button border-radius | `8px` |
| Button padding (primary) | `12px 28px` |
| Button padding (small) | `9px 20px` |

### Component Catalog

#### Buttons

- **`.btn-primary`** — Lime background (`#D2FF46`), dark text, 600 weight, 14px. Hover: lighter lime (`#E4FF73`), lift -1px, glow shadow.
- **`.btn-primary-sm`** — Smaller variant: `9px 20px`, 13px.
- **`.btn-outline`** — Transparent, white text, 1px white/12% border. Hover: border brightens, subtle white bg.
- **`.btn-outline-sm`** — Smaller variant.

#### Cards

- **`.card`** — Interactive card with hover effect. Surface bg, 1px border, 12px radius. Hover: accent-tinted border, lift -2px, shadow.
- **`.card-static`** — Non-interactive card. Same base style, no hover.

#### Badges

- **`.badge-shipped`** — Lime tinted pill: `rgba(210,255,70,0.08)` bg, lime border/text, uppercase 11px.
- **`.badge-dev`** — Gray tinted pill: `rgba(255,255,255,0.04)` bg, gray border/text.

#### Stats

- **`.stat-value`** — Bricolage Grotesque, 800 weight, 32px, lime color.
- **`.stat-label`** — Muted gray, 13px, 400 weight.

#### Tech Badges

- **`.tech-badge`** — Small inline pills: `rgba(255,255,255,0.03)` bg, 1px border, muted text, 12px, 6px radius.

#### Process Steps

- **`.process-step`** — Left-padded 52px with absolute-positioned step number.
- **`.step-number`** — 32x32px box, lime border/text, 8px radius, accent bg tint.
- **`.step-connector`** — 1px vertical line between steps.

#### Section Label

- **`.section-label`** — Outfit, 12px, 500 weight, 0.12em tracking, uppercase, lime color.

#### Form Inputs

- **`.form-input`** — Surface bg, 8px radius, 1px border. Focus: accent border. Textarea min-height: 140px.

#### Link Accent

- **`.link-accent`** — Lime text, 14px, 500 weight, inline-flex with arrow icon. Hover: lighter lime, gap widens.

#### Divider

- **`.divider`** — 1px height, gradient from transparent → white/6% → transparent.

### Animations

| Animation | Details |
|---|---|
| Hero fade-in (`.hero-fade`) | `translateY(14px)` → 0, opacity 0 → 1, 0.7s ease, staggered via `animation-delay` |
| Scroll reveal (`.reveal`) | `translateY(20px)` → 0, opacity 0 → 1, 0.6s ease, triggered by IntersectionObserver at 8% threshold |
| Marquee | Continuous scroll left, 35s linear infinite, pauses on hover |
| Button hover | `translateY(-1px)` + box-shadow |
| Card hover | `translateY(-2px)` + border-color transition + box-shadow |
| Link accent hover | Gap 6px → 10px |

### Background Effects

- **Grid background (`.grid-bg`):** Subtle white gridlines at 72px intervals, 1.8% opacity. Used on homepage hero only.
- **CTA glow (`.cta-glow`):** 600x400px radial gradient ellipse, centered, accent color at 4% opacity.
- **Hero top glow:** 800x500px radial gradient, accent at 3% opacity, positioned top-center.

---

## 3. Design System — Services Page (Alternate)

The services page uses a **completely different color scheme** and self-contained styles (inline `<style>` block, no `main.css`).

### Colors

| Token | Hex | Usage |
|---|---|---|
| `sa-bg` | `#060B14` | Page background (deep navy) |
| `sa-surface` | `#0D1526` | Elevated surfaces |
| `sa-border` | `#1C2D4A` | Borders |
| `sa-accent` | `#00D9B8` | Accent (teal), CTAs |
| `sa-text` | `#EEF2FF` | Primary text |
| `sa-muted` | `#7A8FAF` | Secondary text |

### Unique Components

- **`.pill`** — Animated teal pill with pulsing dot.
- **`.btn-accent`** — Teal CTA button (replaces `.btn-primary`). Hover: `#00F0CC`, teal glow.
- **`.btn-ghost`** — Ghost button (replaces `.btn-outline`).
- **`.glass-card`** — Semi-transparent card with subtle white bg.
- **`.gradient-text`** — Teal-to-indigo gradient text.
- **`.feature-chip`** — Small teal-tinted tag.
- **`.dot-grid`** — Radial dot pattern bg at 30px spacing.
- **`.orb-teal`** — 700px floating teal orb with 12s float animation.
- **`.sa-input`** — Form input styled for the dark-navy theme.
- **`.h-divider`** — Same gradient divider as main site.

### Services Page Footer

Has a different footer layout (5-column grid) with:
- Logo + tagline + email subscribe form (via Formspree)
- Company links (About Us, Services, Contact)
- Services links (Strategy & Roadmaps, Automation & Integration, Data Engineering)
- Connect links (email, LinkedIn, Book a Call)
- LinkedIn link: `https://www.linkedin.com/company/sequential-analytics`

---

## 4. Asset Inventory

### `/assets/` Directory

| File | Size | Purpose |
|---|---|---|
| `logo_navbar_1x.png` | 14 KB | Navigation bar logo (standard) |
| `logo_navbar_2x.png` | 33 KB | Navigation bar logo (retina/2x) |
| `logo_full_transparent.png` | 234 KB | Footer logo (full wordmark) |
| `favicon_32x32.png` | 1.6 KB | Browser tab favicon (PNG) |
| `apple_touch_icon_180x180.png` | 13 KB | iOS home screen icon |
| `og_image_1200x630.png` | 51 KB | Social share preview image |
| `alan.png` | 1.4 MB | Founder photo (Company page) |
| `logo.png` | 33 KB | Legacy/unused |
| `logo-full.png` | 57 KB | Legacy/unused |
| `logo-icon.png` | 14 KB | Legacy/unused |
| `logo_main_wide.png` | 2.1 MB | Legacy/unused (was briefly used as nav logo) |

### Root Files

| File | Purpose |
|---|---|
| `favicon.ico` (2.8 KB) | Root favicon (ICO format) |

### Favicon Stack (per page `<head>`)

```html
<link rel="icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple_touch_icon_180x180.png">
```

### Logo Usage

| Location | File | Implementation |
|---|---|---|
| Navbar (all pages) | `logo_navbar_1x.png` | `<img>` with `srcset="logo_navbar_2x.png 2x"`, height 30px |
| Footer (main pages) | `logo_full_transparent.png` | `<img>`, height 26px |
| Footer (services) | `logo_full_transparent.png` | `<img>`, height 32px (h-8 class) |

---

## 5. Page-by-Page Specification

### 5.1 Homepage (`/`)

**Sections (in order):**

1. **Hero** — Full-viewport with grid background + top glow
   - Section label: "Data Consulting & Custom Software"
   - H1: "From paper to **production.**" (accent on "production.")
   - Subtext: "I'm a statistician and data engineer who builds production software..."
   - CTAs: "See the work" (primary → `/case-studies/`) + "Book a call" (outline → Google Calendar)

2. **Featured Work** — 5-column grid
   - **Custom Sales App card** (3/5 width): Shipped badge, stats (31 tables, 7 forms, 145 users, 12 offices), tech badges (Next.js, Supabase, TypeScript, Tailwind), link to `#rfm`
   - **SPARK Assessment card** (2/5 width): In Development badge, stats (5 pillars, 30 questions, 4 tiers), link to `#spark`

3. **Tech Strip** — Scrolling marquee
   - Items: PostgreSQL, Next.js, React, TypeScript, Python, Supabase, Tailwind CSS, SQL, FastAPI, Vercel, Figma, GitHub
   - Duplicated for seamless loop

4. **What I Build** — 3-column grid of static cards
   - Field-to-Office Digitization
   - Pipelines & Automation
   - Dashboards & Reporting

5. **CTA** — Centered with glow
   - H2: "Have a data problem?"
   - CTAs: "Get in touch" + "Book a call"

6. **Footer**

### 5.2 Company Page (`/company/`)

**Sections (in order):**

1. **Hero**
   - Section label: "About Sequential"
   - H1: "The statistician who ships production software."

2. **Who I Am** — 5-column grid (2-col photo + 3-col bio)
   - Photo: `alan.png`, 4:5 aspect ratio, object-top
   - Name: "Alan De La Cruz"
   - Title: "Founder"
   - Bio paragraphs (4 total)
   - Background card with 4 bullet points:
     1. Statistician by training — neuroscience, brain imaging, statistical modeling
     2. Professional background in occupational safety — injury rates, surveys, benchmarking databases
     3. Built data pipelines from hundreds of facilities across multiple global regions
     4. Fluent in full stack: data collection → database design → app dev → dashboards → delivery

3. **How I Work** — 4-step process
   - 01 Discovery → 02 Proposal → 03 Build → 04 Handoff
   - Each with connector lines between steps

4. **What I Believe** — 2x2 grid
   - "Data should work for you."
   - "Solve actual workflow problems."
   - "One person, end-to-end."
   - "Ship, don't present."

5. **CTA**
   - H2: "Ready to build?"

6. **Footer**

### 5.3 Case Studies Page (`/case-studies/`)

**Sections (in order):**

1. **Hero**
   - Section label: "Case Studies"
   - H1: "The work speaks."
   - Subtext: "Production systems built solo, end-to-end."

2. **Custom Sales App** (`id="rfm"`)
   - Badge: "Shipped — Flagship Project"
   - Client: R.F. MacDonald Co. — Industrial Equipment Services
   - One-liner card
   - Stats strip: 31 Database Tables, 7 Form Types, 145 Users, 12 Offices
   - The Problem / The Solution (2-column grid)
     - Problem mentions: "manually entered into an excel spreadsheet by inside sales"
     - Solution: 7 bullet points (forms, database, roles, workflow, inventory, dashboard, PWA)
   - Results card: 6 checkmark items
   - Tech stack badges: Next.js, Supabase, PostgreSQL, Vercel, TypeScript, Tailwind CSS, shadcn/ui, Row-Level Security, PWA

3. **SPARK Assessment** (`id="spark"`)
   - Badge: "In Development — Sequential Product"
   - Stats: 5 Pillars, 30 Questions, 150 Max Score, 4 Tier Bands
   - The Framework: S.P.A.R.K. breakdown (Sales, Performance, Awareness, Retention, Knowledge), each 0–30
   - What Exists Today: 4 checkmark items
   - What's Being Built: 3 arrow items
   - Bottom card: why it matters

4. **CTA**
   - H2: "Your project could be next."

5. **Footer**

### 5.4 Contact Page (`/contact/`)

**Sections (in order):**

1. **Contact section** (full viewport)
   - Section label: "Contact"
   - H1: "Have a project? Let's talk."
   - 5-column grid (3-col form + 2-col info)
   - **Form fields:**
     - Name (required)
     - Email (required)
     - Company (optional)
     - Message (required, textarea)
     - Submit button: "Send message"
   - **Success state:** Form hides, success card appears with checkmark icon + "Message sent."
   - **Info sidebar:**
     - Book a Discovery Call card (Google Calendar link)
     - Email Directly card (`info@sequentialanalytics.io`)
     - What to Expect card (01 Response within 24 hours, 02 Discovery call, 03 Clear proposal)

2. **Footer**

### 5.5 Services Page (`/services/`)

**Note:** Uses alternate design system (navy/teal). See Section 3.

**Sections (in order):**

1. **Hero** — Dot grid bg + floating teal orb
   - Pill: "Our services"
   - H1: "We are a data **analytics company.**" (gradient text)

2. **Service 1: Strategy & Roadmaps** (01 — Strategy)
   - Image + description + feature chips
   - Chips: Data maturity assessment, KPI definition, Analytics roadmapping, Tool selection, Stakeholder alignment

3. **Service 2: Automation & Integration** (02 — Automation)
   - Image + description + feature chips (reversed layout)
   - Chips: Excel / VBA macros, API pipelines, Workflow automation, System integrations, Survey automation, Excel → Word reports

4. **Service 3: Data Engineering & Dashboards** (03 — Engineering)
   - Image + description + feature chips
   - Chips: SQL database design, Data cleaning & pipelines, Power BI dashboards, Azure SQL, Survey data processing, Data validation

5. **Process** — 4-step (Discover, Design, Build, Deliver & Train)

6. **CTA** — With dot grid + gradient overlay

7. **Footer** (alternate layout with email subscribe)

### 5.6 404 Page

- Minimal design, no Tailwind CDN (uses `main.css` only)
- No mobile menu toggle
- No footer
- Content: "404" in large accent text + "Page not found." + "Back to home" button

---

## 6. Shared Components

### Navigation (Main Site)

```
[Logo]                    [Company]  [Case Studies]  [Get in touch]
```

- Fixed position, `z-index: 100`
- Background: `rgba(10,10,10,0.9)` with 24px blur
- Height: 64px
- Active page: `.nav-link.active` → white text
- Mobile: hamburger toggle at ≤768px, vertical menu slides open

### Footer (Main Site)

```
[Full Logo]                        Navigate           Connect
Data consulting & custom software  Company            info@sequentialanalytics.io
Founded 2025, California.          Case Studies       Book a Call
                                   Contact
─────────────────────────────────────────────────────────────────
© 2026 Sequential Analytics LLC. All rights reserved.
```

### CTA Section Pattern

All main pages end with a CTA section featuring:
- `.cta-glow` radial gradient behind
- Centered H2 + subtext + two buttons (primary + outline)

---

## 7. External Services & Integrations

| Service | Usage | Identifier/URL |
|---|---|---|
| Google Analytics | Page tracking | `G-YD1TBDQYVZ` |
| Formspree | Contact form + newsletter | `https://formspree.io/f/mkowpdvb` |
| Google Calendar | Booking link | `https://calendar.app.google/gNpZSJ6ZeQSfCGjLA` |
| Google Fonts | Typography | Bricolage Grotesque + Outfit |
| Tailwind CSS (CDN) | Utility-first CSS | `https://cdn.tailwindcss.com` |
| LinkedIn | Company page (services footer only) | `https://www.linkedin.com/company/sequential-analytics` |

### External Images (Services Page Only)

The services page loads 3 images from an external CDN:
- `cdn.prod.website-files.com/.../Diagram Drawing-p-1080.png`
- `cdn.prod.website-files.com/.../Zebra Marketing Photo-p-1080.jpg`
- `cdn.prod.website-files.com/.../Luke Chesser Unsplash-p-1080.jpg`

---

## 8. SEO & Meta Tags

### Per-Page Meta

| Page | Title | Description |
|---|---|---|
| Homepage | Sequential Analytics \| Data Systems That Ship | Statistician and software builder. Custom data applications, pipelines, and dashboards for B2B companies. Solo. End-to-end. |
| Company | Company \| Sequential Analytics | Alan De La Cruz — statistician, data engineer, and software builder. Custom data systems for businesses, from discovery to production. |
| Case Studies | Case Studies \| Sequential Analytics | Production software built solo. See the Custom Sales App — 7 forms, 31 tables, 145 users across 12 offices. Plus the SPARK business health assessment framework. |
| Contact | Contact \| Sequential Analytics | Have a project? Let's talk. Reach out to Sequential Analytics or book a discovery call. |
| Services | Our Services \| Sequential Analytics | Where strategy meets automation and insight. Data strategy, automation & integration, and data engineering & dashboards to transform your business. |
| 404 | Page Not Found \| Sequential Analytics | (none) |

### Open Graph Tags

All main pages include:
- `og:type`: website
- `og:url`: full canonical URL
- `og:title`: same as `<title>`
- `og:description`: same or shortened version of meta description
- `og:image`: `https://sequentialanalytics.io/assets/og_image_1200x630.png`

### Twitter Tags

Homepage only:
- `twitter:card`: summary
- `twitter:title`, `twitter:description`, `twitter:image`

Services page:
- `twitter:card`: summary_large_image
- (no twitter:title/description/image)

Other pages: no Twitter tags.

---

## 9. JavaScript Behaviors

### All Pages

1. **Mobile menu toggle** — Click hamburger button → toggle `.open` class on `#mobile-menu`
2. **Scroll reveal** — `IntersectionObserver` at 8% threshold, adds `.visible` class to `.reveal` elements

### Contact Page

3. **Form submission** — Intercepts form submit, sends via `fetch` to Formspree with `Accept: application/json`. On success: adds `.submitted` class to container (hides form, shows success). On error: button text changes to "Error — try again".

### Homepage

4. **Marquee** — CSS-only animation, pauses on hover via `animation-play-state: paused`.

### Services Page

5. **Orb float animation** — CSS keyframe, 12s ease-in-out infinite, translateY 0 → -22px.
6. **Pill dot pulse** — CSS keyframe, 2s ease infinite, scale + opacity pulse.

---

## 10. Infrastructure Files

| File | Content |
|---|---|
| `CNAME` | `sequentialanalytics.io` |
| `robots.txt` | Allow all, sitemap at `https://sequentialanalytics.io/sitemap.xml` |
| `css/main.css` | Main design system stylesheet (391 lines) |
| `COMPANY_PAGE_EDITS.md` | Change log for company page bio edits (applied) |

### Legacy Directories (from previous site version)

These directories exist in the repo but are not referenced by any current page:
- `About us_files/`
- `Contact_files/`
- `Sequential Analytics_files/`
- `Services_files/`

---

## Notes

- The services page (`/services/`) uses a completely different design system (navy + teal) from the rest of the site (dark + lime). It also has its own self-contained CSS in a `<style>` block rather than using `main.css`.
- The services page footer includes a LinkedIn link and email subscribe form not present on other pages.
- The services page nav links to "Services" instead of "Case Studies".
- The 404 page does not load Tailwind CSS CDN — it relies solely on `main.css` for styling.
- Legacy asset files (`logo.png`, `logo-full.png`, `logo-icon.png`, `logo_main_wide.png`) remain in `/assets/` but are not used by any page.
- All pages use Google Fonts with `preconnect` hints for performance.
- The contact form and services page footer subscribe form both point to the same Formspree endpoint.
