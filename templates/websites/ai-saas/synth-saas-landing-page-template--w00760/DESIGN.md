# Design system — SYNTH SaaS Landing Page Template

`SN-W00760` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pure black hero (#000000) with a very large white uppercase Inter headline set in three tight lines on the left, and a blurred, warm bokeh image filling the lower half. The nav is small uppercase text, with ACCESS API picked out in lavender (#818cf8) as the only colour. The contrast between a heavy uppercase statement and a soft, out-of-focus image sets the tone.

**Mood:** stark, bold, uppercase, atmospheric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#818cf8` · `#000000` · `#0f172a` · `#6366f1` · `#a5b4fc` · `#4f46e5` · `#cbd5e1` · `#020617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Panchang, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-8`, `gap-2`, `gap-1`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Call to action (`cta`)
5. Case studies (`case-studies`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter bold, uppercase and tightly leaded, in white
- **Do:** Use lavender (#818cf8) only for the single highlighted nav link
- **Do:** Keep the image below the headline soft and out of focus
- **Don't:** Don't set the hero headline in lowercase; the template is uppercase throughout
- **Don't:** Don't add a light section background
- **Don't:** Don't use the lavender on buttons or body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
