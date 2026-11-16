# Design system — AI Contractor Voice Agent Landing Page Template

`SN-W00074` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark ground carries white Inter type, with the nav call to action outlined in red-orange (#f95500). The page pairs this accent with a red alert palette, giving the look a dark and bold tone.

**Mood:** dark, bold, urgent, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#eeeeee` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f95500` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111111` · `#ef4444` · `#0a0a0a` · `#f87171` · `#050505` · `#f95500` · `#000000` · `#1a1a1a` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Syne, Geist, Roboto, Montserrat, Poppins
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
  --color-background: #050505;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #eeeeee;
  --color-border: #ffffff;
  --color-accent: #f95500;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#111111',
    ink: '#ffffff',
    muted: '#eeeeee',
    line: '#ffffff',
    accent: '#f95500',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #050505 with white text
- **Do:** Use red-orange (#f95500) for the call to action only
- **Do:** Keep Inter for display and body text
- **Don't:** Don't use the red for body text
- **Don't:** Don't use red for large fills; keep it to the call to action
- **Don't:** Don't add light sections to the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
