# Design system — Compounding Pharmacy Landing Page Template

`SN-W02338` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A clinical, restrained pharmacy page on white, using a muted slate blue (#3f5669) for headlines and primary buttons. Secondary actions are soft warm-grey pills (#efede8), and body copy is set in a serif at grey (#464646). With no decoration on the first screen, trust comes from type and spacing.

**Mood:** clinical, restrained, trustworthy, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#efede8` | Cards, panels, raised areas |
| Text | `#464646` | Headings and primary copy |
| Muted text | `#3f5669` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#3f5669` | Primary action and highlights |
| Second accent | `#244091` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3f5669` · `#048489` · `#464646` · `#efede8` · `#e5e7eb` · `#f3f4f6` · `#244091` · `#f4b11b` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Lora
- **Body:** Lora
- **Loaded families:** Lora, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="bg-[#3F5669] hover:bg-[#244091] text-white font-heading text-sm font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Articles (`blog-articles`)
5. Services (`services`)
6. Feature grid (`features`)
7. Logo cloud (`logo-cloud`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #efede8;
  --color-text: #464646;
  --color-muted: #3f5669;
  --color-border: #e5e7eb;
  --color-accent: #3f5669;
  --color-accent-2: #244091;
  --font-display: "Lora", serif;
  --font-body: "Lora", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#efede8',
    ink: '#464646',
    muted: '#3f5669',
    line: '#e5e7eb',
    accent: '#3f5669',
    accent2: '#244091',
  },
  fontFamily: { display: ['Lora'], sans: ['Lora'] },
} }
```

## Do and don't

- **Do:** Use slate blue (#3f5669) for headlines, primary buttons and links.
- **Do:** Make secondary actions soft warm-grey pills (#efede8) with dark text.
- **Do:** Set body copy in a serif at grey (#464646) for a calm reading tone.
- **Don't:** Don't add teal or navy accents; the palette is slate.
- **Don't:** Don't set headlines in a serif; they are sans.
- **Don't:** Don't use bright colours; the page is slate and warm grey only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
