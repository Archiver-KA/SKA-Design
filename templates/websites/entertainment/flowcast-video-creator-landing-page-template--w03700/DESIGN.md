# Design system — FlowCast Video Creator Landing Page Template

`SN-W03700` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Pure black page with a large, left-aligned Inter headline in near-white, set in two short lines. Secondary and tertiary buttons are pills with a thin dark-indigo outline and a soft glow, and a small pill badge sits above the title. The page reads as a creator app, with quiet chrome and video thumbnails carrying the colour.

**Mood:** clean, creator-focused, restrained, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#1e1b4b` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#a1a1aa` · `#000000` · `#f4f4f5` · `#ffffff` · `#111318` · `#1c1e21` · `#09090b` · `#818cf8` · `#71717a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)]`, `shadow-[0_12px_20px_-6px_rgba(151,65,`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="rounded-lg px-2.5 py-1.5 text-xs font-medium bg-zinc-900 hover:bg-zinc-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. App download (`app-download`)
4. Product grid (`product-grid`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Call to action (`cta`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #09090b;
  --color-text: #f4f4f5;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #1e1b4b;
  --color-accent-2: #22d3ee;
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
    surface: '#09090b',
    ink: '#f4f4f5',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#1e1b4b',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at a medium-to-bold weight, left-aligned
- **Do:** Outline primary buttons in dark indigo with a soft glow
- **Do:** Let video thumbnails and cards supply the colour
- **Don't:** Don't add bright colour to the page chrome
- **Don't:** Don't centre the hero text block
- **Don't:** Don't use square buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
