# Design system — Contractor AI Voice Agent Landing Page Template

`SN-W00297` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark floating navigation bar carries a single orange [#f95500] call to action over a near-black page. The orange is an accent rather than a page ground. Syne headings, Inter body text and 3D canvas motion complete the look.

**Mood:** dark, bold, unconfirmed, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#eeeeee` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f95500` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f95500` · `#050505` · `#111111` · `#ef4444` · `#0a0a0a` · `#f87171` · `#cc4400` · `#000000` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syne
- **Body:** Inter
- **Loaded families:** Inter, Syne
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(249,85,0,0.3)]`, `shadow-[0_0_20px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:block text-[10px] font-bold bg-gradient-to-r from-brand to-brandDark text-white px-5 py-2 rounded-full hover:brightness-110 transition-all shadow-[0_0_15px_rgba(249,85,0,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Booking form (`booking`)
6. Stats band (`stats`)
7. Pricing (`pricing`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #050505;
  --color-text: #111111;
  --color-muted: #eeeeee;
  --color-border: #ffffff;
  --color-accent: #f95500;
  --color-accent-2: #22c55e;
  --font-display: "Syne", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#050505',
    ink: '#111111',
    muted: '#eeeeee',
    line: '#ffffff',
    accent: '#f95500',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Syne'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#f95500) for the primary call to action only
- **Do:** Set headlines in Syne and body text in Inter
- **Do:** Keep the navigation a small floating dark bar with a single button
- **Don't:** Don't use the orange as a page background
- **Don't:** Don't invent a hero layout the design does not specify
- **Don't:** Don't place red (#ef4444) next to the orange button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
