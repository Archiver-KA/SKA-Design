# Design system — Mechaniker.ch Job Marketplace Landing Page Template

`SN-W01253` · ecommerce · light mode · Sinera Atlas theme `market` · language `de`

## Direction

A practical job-board hero on white: a near-black bold sans headline with one phrase in grey italic serif, and a red solid button as the single strong colour. A search bar sits under the copy as one white field with a red action at its end. A grey image placeholder on the right carries a small match card.

**Mood:** practical, clear, industrial, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#dc2626` · `#1c1917` · `#ffffff` · `#a8a29e` · `#e7e5e4` · `#57534e` · `#78716c` · `#f5f5f4` · `#fafaf9` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Playfair Display, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 14px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-md` (6px)
- **Shadows:** `shadow-stone-200/50`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --color-accent: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use red (#dc2626) only for the logo mark, the search button and the match indicator
- **Do:** Set the headline in bold sans with one italic grey serif phrase
- **Do:** Keep the search bar as one white field with a red action button
- **Don't:** Don't tint the page background red or pink; the ground is white
- **Don't:** Don't use red for body text or headings
- **Don't:** Don't make the search bar a full pill; it is a small-radius box

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
