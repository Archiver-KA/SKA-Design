# Design system — Restaurant & Bar Landing Page Template

`SN-W02964` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A full-height menu overlay on near-black (#0a0a0a) with very large white condensed sans section titles, each with a plus icon and a hairline divider. A cocktail photograph fills the right half on black. Small red-pink (#f43f5e) tags mark new items, and the cream (#f0eadd) tag marks the philosophy card. The type is oversized and tightly packed, so the layout feels like a bold editorial menu.

**Mood:** bold, nightlife, editorial, condensed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#f0eadd` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f43f5e` · `#4b5563` · `#0a0a0a` · `#9ca3af` · `#e7e5e4` · `#f0eadd` · `#1a1a1a` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Anton
- **Body:** Anton
- **Loaded families:** Anton, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 96px · h3 30px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #f43f5e;
  --color-accent-2: #f0eadd;
  --font-display: "Anton", sans-serif;
  --font-body: "Anton", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#f43f5e',
    accent2: '#f0eadd',
  },
  fontFamily: { display: ['Anton'], sans: ['Anton'] },
} }
```

## Do and don't

- **Do:** Set section titles in a very large condensed bold sans in white
- **Do:** Divide menu sections with hairline rules and a plus icon
- **Do:** Use the red-pink (#f43f5e) only for tags and new-item markers
- **Don't:** Don't use a serif for section titles; they are a condensed sans.
- **Don't:** Don't fill the cards with the red-pink; it marks tags only
- **Don't:** Don't add light backgrounds to the overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
