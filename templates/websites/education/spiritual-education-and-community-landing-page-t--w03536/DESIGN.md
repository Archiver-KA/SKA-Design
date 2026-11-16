# Design system — Spiritual Education & Community Landing Page Template

`SN-W03536` · education · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

Spiritual Education uses a deep night-sky look: a near-black navy ground (#070b14) with a large cosmic illustration as the hero image. Amber (#f59e0b) does the emphasis work, colouring key words in the bold headline and one of the two CTA buttons. Headlines are set large and heavy, and the navigation sits in a translucent glass bar over the hero.

**Mood:** cosmic, contemplative, dark, warm-accented, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#070b14` | Page ground |
| Surface | `#0d1526` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#f59e0b` · `#ffffff` · `#94a3b8` · `#64748b` · `#cbd5e1` · `#070b14` · `#000000` · `#d97706` · `#1e293b` · `#0b1221`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 18px · h2 72px · h3 20px · body 16px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-lg`
- **Content width:** `max-w-[90rem]`, `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-1.5`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#1a4589] hover:bg-[#153870] text-white px-8 py-4 rounded flex items-center justify-center gap-3 transition-colors text-base font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. FAQ (`faq`)
4. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #070b14;
  --color-surface: #0d1526;
  --color-text: #e2e8f0;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#070b14',
    surface: '#0d1526',
    ink: '#e2e8f0',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour the key phrase of each headline in amber (#f59e0b)
- **Do:** Pair the hero illustration with the dark navy ground (#070b14)
- **Do:** Keep the navigation in a translucent glass bar over the hero
- **Don't:** Don't use light backgrounds for content sections
- **Don't:** Don't set body copy in pure white; use the light slate text (#e2e8f0)
- **Don't:** Don't add a second emphasis colour to a single headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
