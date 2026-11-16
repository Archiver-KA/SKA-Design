# Design system — Nexus Funnel Page Builder Template

`SN-W00582` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, airy page on a pale grey ground (#f1f5f9) with dark navy (#0f172a) type. The primary action is a solid navy button with a light outlined button beside it. The hero pairs a large rounded photograph with a small white card for one key fact. The page relies on neutral contrast and photography rather than a brand colour.

**Mood:** light, neutral, photographic, soft, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f1f5f9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#2563eb` · `#f1f5f9` · `#94a3b8` · `#e2e8f0` · `#cbd5e1` · `#f8fafc` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="mobile-menu-link flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-[15px] transition-colors text-slate-600 hover:bg-slate-50">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)
4. Hero (`hero`)
5. Stats band (`stats`)
6. Services (`services`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Pricing (`pricing`)
9. About (`about`)
10. Testimonials (`testimonials`)
11. Contact form (`contact-form`)
12. Booking form (`booking`)
13. FAQ (`faq`)
14. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f1f5f9;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f1f5f9',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0f172a',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to pale grey (#f1f5f9) with navy (#0f172a) text.
- **Do:** Use the solid navy button as the one primary action per hero, with a light outlined button beside it.
- **Do:** Pair the rounded hero photograph with a small white card for a single fact.
- **Don't:** Don't use the blue (#2563eb) as a button colour; the buttons are navy.
- **Don't:** Don't place text directly on the photograph without the white card.
- **Don't:** Don't add a second accent colour to the first screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
