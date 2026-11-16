# Design system — Painting Services Landing Page Template

`SN-W04038` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A trade-services hero with a slate-blue overlay over a photograph, carrying a bold white headline set in two lines. Gold accents mark the eyebrow tag and the primary estimate button, and a bordered secondary button sits beside it. The layout is centred and the gradient deepens toward the foot of the hero, giving a settled, dependable tone.

**Mood:** dependable, traditional, warm, settled

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#f4cf6f` | Primary action and highlights |
| Second accent | `#f4cf6f` | Supporting highlights |

Palette by frequency of use: `#262e59` · `#ffffff` · `#f4cf6f` · `#64748b` · `#b97802` · `#f1f5f9` · `#475569` · `#e2e8f0` · `#f8fafc` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display, Geist, Roboto, Poppins, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-8`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-gold-gradient text-[#262E59] text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. About (`about`)
6. Process / steps (`how-it-works`)
7. Case studies (`case-studies`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #f4cf6f;
  --color-accent-2: #f4cf6f;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#f4cf6f',
    accent2: '#f4cf6f',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use gold for the primary estimate button and the tag above the headline
- **Do:** Keep the headline white over the navy-to-slate overlay
- **Do:** Place the service area in a small tag above the headline
- **Don't:** Don't place gold text on light backgrounds
- **Don't:** Don't use gold for more than one button per view
- **Don't:** Don't lighten the overlay until headline contrast drops

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
