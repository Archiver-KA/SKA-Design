# Design system — Ataflex Solutions Instagram Slides Template

`SN-W01818` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A single dark slide centred on a black canvas: a rounded card holds a small brand mark, a large light sans headline, a short grey paragraph and a swipe prompt at the bottom. Purple marks the brand tile and is the only colour, so the design reads as a clean carousel frame. Type is set compact and left-aligned inside the card.

**Mood:** dark, compact, minimal, swipe-ready

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#171717` · `#262626` · `#6366f1` · `#d4d4d4` · `#818cf8` · `#404040` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-inter)
- **Body:** var(--font-inter)
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 30px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="p-3 rounded-full hover:bg-white/5 transition-colors text-neutral-400 hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Marquee (`marquee`)
3. Process / steps (`how-it-works`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "var(--font-inter)", sans-serif;
  --font-body: "var(--font-inter)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['var(--font-inter)'], sans: ['var(--font-inter)'] },
} }
```

## Do and don't

- **Do:** Set each slide as a rounded dark card with a small brand mark
- **Do:** Use purple (#6366f1) only for the brand tile
- **Do:** Keep headlines light, compact and left-aligned inside the card
- **Don't:** Don't place the card on a light background
- **Don't:** Don't add extra colours to the card text
- **Don't:** Don't add large imagery; the slides rely on type

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
