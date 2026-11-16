# Design system — ORIEL Design Studio Landing Page Template

`SN-W01440` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light grey ground ([#f5f5f5]) with a monochrome gradient in the hero that runs from light to mid grey. The page reads as a portfolio led by photography, with large Inter display set in tight tracking over the grey field. No colour appears in the hero, so the work supplies all of it.

**Mood:** monochrome, quiet, portfolio-led, minimal, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#3f3f46` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#e4e4e7` · `#3f3f46` · `#71717a` · `#000000` · `#52525b` · `#facc15` · `#09090b` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 36px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[85vw]`
- **Section padding:** `py-14`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-5 py-3 ring-1 ring-zinc-900/10 hover:bg-black transition font-geist text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Logo cloud (`logo-cloud`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #ffffff;
  --color-text: #3f3f46;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#ffffff',
    ink: '#3f3f46',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground light grey (#f5f5f5) with the monochrome gradient only in the hero
- **Do:** Set headlines in Inter at large size with tight tracking
- **Do:** Let the portfolio imagery carry the colour
- **Don't:** Don't add colour to the hero gradient
- **Don't:** Don't use a dark ground for the hero
- **Don't:** Don't use heavy dividers, keep rules to a single light grey line

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
