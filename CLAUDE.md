# CLAUDE.md — Acentra Automation Website

## Project Overview
**Acentra Automation** is a marketing website for an automation consulting business. It targets solopreneurs and small businesses and offers two revenue streams:
1. Done-for-you (DFY) automation services (one-time fee)
2. Monthly retainer plans (recurring revenue)

The site is designed to generate inbound leads and convert them via a free automation audit CTA.

---

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom design system, no shadcn/ui)
- **Icons**: Lucide React
- **Font**: Inter via Google Fonts
- **Hosting**: Vercel

## Run Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:3000
npm run build        # Build for production
npm run lint         # Lint codebase
```

---

## Project Structure
```
acentra-automation/
├── app/
│   ├── layout.tsx              ← Root layout (Nav, Footer, ChatbotWidget)
│   ├── page.tsx                ← Homepage (composes all homepage sections)
│   ├── globals.css             ← Global styles + Tailwind directives
│   ├── services/page.tsx       ← Service packages with detailed breakdown
│   ├── pricing/page.tsx        ← Monthly retainer tiers + FAQ
│   ├── how-it-works/page.tsx   ← 4-step process + tech stack
│   └── book-a-call/page.tsx    ← Calendly embed + consultation info
├── components/
│   ├── nav.tsx                 ← Sticky navbar with scroll behavior
│   ├── footer.tsx              ← Footer with links and social
│   ├── hero.tsx                ← Homepage hero section
│   ├── pain-points.tsx         ← Problem section (3 cards)
│   ├── services-preview.tsx    ← Services snapshot (3 cards)
│   ├── how-it-works-section.tsx← 3-step process (homepage version)
│   ├── roi-calculator.tsx      ← Interactive ROI calculator (client component)
│   ├── testimonials.tsx        ← Testimonial cards (3)
│   ├── cta-section.tsx         ← Final CTA banner
│   └── chatbot-widget.tsx      ← Floating AI chat widget (client component)
└── public/images/              ← Static images (logo, tool logos, etc.)
```

---

## Design System

### Colors (defined in tailwind.config.ts)
| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#0A0A0F` | Page background |
| `surface` | `#111118` | Card backgrounds |
| `border` | `#1E1E2E` | Card borders, dividers |
| `accent` | `#6366F1` | Primary brand accent (indigo) |
| `accent-hover` | `#818CF8` | Hover state for accent |
| `accent-muted` | `rgba(99,102,241,0.15)` | Subtle accent backgrounds |
| `cyan-accent` | `#06B6D4` | Secondary accent |
| `text-primary` | `#F8FAFC` | Headlines and primary text |
| `text-secondary` | `#94A3B8` | Body text |
| `text-muted` | `#475569` | Labels, captions, placeholders |

### Typography
- **Font**: Inter (Google Fonts) — weights 300, 400, 500, 600, 700, 800
- **Headlines**: `font-bold` or `font-extrabold`, `text-text-primary`
- **Body**: `text-text-secondary`, `leading-relaxed`
- **Labels/captions**: `text-text-muted`, `text-xs`, often `uppercase tracking-widest`

### Utility Classes (in globals.css)
- `.gradient-text` — Indigo-to-cyan gradient text (use for highlighted words in headlines)
- `.btn-primary` — Gradient indigo button with hover animation (always wrap text in `<span>`)
- `.card-glow` — Standard card style with border and hover glow effect
- `.grid-bg` — Subtle grid pattern background
- `.glow-pulse` — Pulsing indigo glow animation (use on primary CTA buttons)
- `.animate-fade-up` — Fade up reveal animation

---

## Key Components

### `<Nav />` (components/nav.tsx)
- Fixed top navbar with scroll-based blur background
- Logo: Zap icon + "Acentra" text
- Links: Services, How It Works, Pricing
- CTA: "Book Free Audit" → `/book-a-call`
- Mobile: hamburger menu with overlay

### `<ChatbotWidget />` (components/chatbot-widget.tsx)
- Floating chat button (bottom-right)
- Opens a chat panel with "Ace" the AI assistant
- Currently uses mock responses — **TODO: Connect to Claude API or Voiceflow**
- To connect Claude API: replace the `setTimeout` in `handleSend` with a fetch to `/api/chat`
- Captures lead intent and guides toward booking

### `<ROICalculator />` (components/roi-calculator.tsx)
- Interactive client component with sliders
- Input: hours/week on manual tasks + hourly rate
- Output: monthly value lost + what automation reclaims (80% assumption)

---

## Business Logic

### Revenue Model
| Type | Price | Notes |
|------|-------|-------|
| Lead Gen Package | $1,500 one-time | Outreach automation |
| Admin Ops Package | $1,200 one-time | Invoice/scheduling automation |
| Full Growth Suite | $2,500 one-time | Both packages + dashboard |
| Monitor retainer | $150/mo | Dashboard + 1 workflow |
| Growth retainer | $350/mo | Up to 5 workflows |
| Scale retainer | $700/mo | Unlimited workflows |

### $5k/Month Roadmap
- 10 clients × $350/mo Growth retainer = $3,500 MRR
- + 1–2 new setup projects/month = $1,500–$2,500 project revenue
- Total: $5,000–$6,000/month at moderate scale

---

## Third-Party Integrations (Setup Required)

### Calendly (book-a-call page)
1. Create account at [calendly.com](https://calendly.com)
2. Create a 30-min event: "Free Automation Audit"
3. In `app/book-a-call/page.tsx`, replace the placeholder div with:
```html
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/YOUR_USERNAME/audit?background_color=0a0a0f&text_color=f8fafc&primary_color=6366f1"
  style={{ minWidth: '320px', height: '700px' }}
/>
```
4. Add to `app/layout.tsx` `<head>`:
```html
<script src="https://assets.calendly.com/assets/external/widget.js" async />
```

### Chatbot → Claude API
To replace the mock responses in `chatbot-widget.tsx`:
1. Create `app/api/chat/route.ts` with Claude API integration
2. Use `@anthropic-ai/sdk` with your `ANTHROPIC_API_KEY` env variable
3. Write a system prompt positioning Ace as an automation consultant
4. Replace the `setTimeout` mock in `handleSend` with a `fetch('/api/chat', ...)`

### Lead Form → n8n → HubSpot
When adding a lead capture form:
1. Use Tally.so embed or a native form
2. On submit, POST to your n8n webhook
3. n8n workflow: receive lead → create contact in HubSpot → send welcome email

---

## Content To Update

### Before Launch
- [ ] Replace placeholder testimonials with real client results
- [ ] Add real logo/favicon to `public/` and reference in layout
- [ ] Update email in footer: `hello@acentraautomation.com`
- [ ] Update social links in `components/footer.tsx`
- [ ] Set real domain in `app/layout.tsx` OpenGraph metadata
- [ ] Connect Calendly embed in `app/book-a-call/page.tsx`

### Nice to Have
- [ ] Add `/case-studies` page with real before/after results
- [ ] Add `/blog` page for SEO content
- [ ] Connect chatbot to real Claude API
- [ ] Add Google Analytics or Plausible

---

## Conventions

- **All pages are server components** except components with `"use client"` (ROICalculator, ChatbotWidget, Nav)
- **Section labels** always use: `text-accent text-sm font-semibold uppercase tracking-widest mb-4`
- **Section headlines** always use: `text-3xl sm:text-4xl font-bold text-text-primary`
- **Cards** always use: `card-glow rounded-2xl p-6` class combination
- **Primary CTAs** always use: `btn-primary px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2` with text wrapped in `<span>`
- **Never use inline styles** except for `animationDelay` on fade-up animations

---

## Deployment (Vercel)

```bash
# One-time setup
npm i -g vercel
vercel login

# Deploy
vercel --prod

# Set environment variables in Vercel dashboard:
# ANTHROPIC_API_KEY=sk-ant-...
```

Custom domain: Set `acentraautomation.com` (or `acentra.io`) in Vercel project settings → Domains.
