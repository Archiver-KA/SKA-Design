# Design system — Nexus Studio SaaS Landing Page Template

`SN-W00589` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pure black product page with a restrained hero: a large white sans headline with a grey second line, a short paragraph, and two pill buttons. The primary action is a solid white pill with a ghost outline beside it. The only colour is the small blue logo mark in the nav, so the page depends on type scale and contrast.

**Mood:** minimal, premium, monochrome, confident, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#030712` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#fafafa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fafafa` · `#93c5fd` · `#22d3ee` · `#c084fc` · `#60a5fa` · `#000000` · `#3b82f6` · `#fdba74` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** SF Pro Text
- **Body:** SF Pro Text
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2 justify-center">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #030712;
  --color-text: #ffffff;
  --color-muted: #fafafa;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #c084fc;
  --font-display: "SF Pro Text", sans-serif;
  --font-body: "SF Pro Text", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#030712',
    ink: '#ffffff',
    muted: '#fafafa',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['SF Pro Text'], sans: ['SF Pro Text'] },
} }
```

## Do and don't

- **Do:** Set the page ground to pure black (#000000) with white headlines (#ffffff) and grey second lines.
- **Do:** Use a solid white pill (#ffffff) as the primary button, with a ghost outline beside it.
- **Do:** Keep colour to the logo mark in the nav; the hero stays monochrome.
- **Don't:** Don't add the cyan (#22d3ee) or purple (#c084fc) accents to the hero.
- **Don't:** Don't use a light page background; the ground is black.
- **Don't:** Don't add a second filled button of equal weight to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
