# Design system — AfriSend Money Transfer 

`SN-W00856` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The page is a white layout with a dark ink headline in Inter, an emerald (#10b981) accent, and glass panels and gradient fills behind the content. Corners are fully rounded on the buttons and the hero card uses a large radius.

**Mood:** clean, modest, light, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#10b981` · `#a3a3a3` · `#e2e8f0` · `#059669` · `#f1f5f9` · `#64748b` · `#94a3b8` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="uppercase text-slate-500 hover:text-slate-900 hover:bg-white transition-all duration-300 text-[11px] font-semibold tracking-widest rounded-full py-2.5 px-5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. App download (`app-download`)
6. Testimonials (`testimonials`)
7. Logo cloud (`logo-cloud`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the emerald (#10b981) for the primary action and small highlights
- **Do:** Set headlines in Inter in dark ink (#0f172a) with rounded pill buttons
- **Do:** Use large-radius cards (rounded-[2rem]) for the hero and feature blocks
- **Don't:** Don't add a second accent colour
- **Don't:** Don't use the glass blur on plain text
- **Don't:** Don't set the page on a dark ground; the page is white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
