# Design system — Documentary Production Landing Page Template

`SN-W01995` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Editorial and atmospheric: a charcoal ground (#1a1a1a) with a centred serif headline in white, the first line roman and the second line italic in terracotta (#c76f4b). The nav is a small, widely spaced uppercase row at the top, and the first screen holds little else, so the type is the whole composition. The italic terracotta is the sole accent.

**Mood:** editorial, atmospheric, literary, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#f2f4f0` | Hairlines, dividers, outlines |
| Accent | `#c76f4b` | Primary action and highlights |
| Second accent | `#0d3b2f` | Supporting highlights |

Palette by frequency of use: `#f2f4f0` · `#1a1a1a` · `#c76f4b` · `#0d3b2f` · `#ffffff` · `#000000` · `#2a7b7c` · `#a23b2e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-clay/20`, `shadow-forest/20`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-clay text-mist px-10 py-4 rounded-sm font-medium text-sm hover:bg-ember transition-all duration-300 transform hover:scale-105 group border border-transparent hover:border-mist/20 shadow-lg shadow-clay/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #f2f4f0;
  --color-accent: #c76f4b;
  --color-accent-2: #0d3b2f;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#f2f4f0',
    accent: '#c76f4b',
    accent2: '#0d3b2f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, with the second line in italic terracotta (#c76f4b)
- **Do:** Keep the nav small, uppercase and widely spaced at the top
- **Do:** Centre the headline and leave the rest of the first screen empty
- **Don't:** Don't use the terracotta for body text; it is reserved for the italic line
- **Don't:** Don't use the deep green (#0d3b2f) as a block.
- **Don't:** Don't put a light background behind the headline; the page is charcoal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
