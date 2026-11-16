# Design system — Hova AI Development Platform Template

`SN-W00446` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark, product-led stance shown through phone mockups rather than a light marketing page. Lime green (#a3e635) is the one strong accent, used on the highlighted headline word and the featured plan. Inter does the work: a heavy display headline over quiet body text, with rounded dark cards carrying the content.

**Mood:** dark, product-led, lime-accented, minimal, app-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#a3e635` · `#bef264` · `#a3a3a3` · `#ffffff` · `#e5e5e5` · `#737373` · `#d4d4d4` · `#0a0a0a` · `#171717` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 36px · h2 24px · h3 18px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`, `shadow-[0_0_30px_rgba(163,230,53,0.45)]`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="w-full bg-lime-400 text-neutral-950 font-medium py-3 rounded-full hover:bg-lime-300 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Testimonials (`testimonials`)
2. Hero (`hero`)
3. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #c084fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#0a0a0a',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlighted headline word in the lime accent (#a3e635)
- **Do:** Keep cards as rounded dark panels with light text
- **Do:** Use the purple (#c084fc) only as a secondary accent on small details
- **Don't:** Don't put lime on large background areas
- **Don't:** Don't use a light page background; the look depends on the dark ground
- **Don't:** Don't add a second strong accent to the same card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
