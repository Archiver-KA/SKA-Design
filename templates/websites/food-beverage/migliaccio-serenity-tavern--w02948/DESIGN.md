# Design system — Migliaccio Serenity Tavern

`SN-W02948` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black private-dining page with a large off-white Playfair Display headline, the second word in grey italic, and a short rule under the hero copy. Tracked caps eyebrows and a circular badge give it a quiet emblem. The page is monochrome and restrained.

**Mood:** exclusive, quiet, monochrome, ceremonial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#d4d4d8` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fde68a` | Primary action and highlights |
| Second accent | `#ce1126` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#52525b` · `#c5a059` · `#fde68a` · `#71717a` · `#0c0a09` · `#a1a1aa` · `#d4d4d8` · `#1a1612`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 36px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-16`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-amber-200/90 text-zinc-900 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Menu list (`menu-list`)
2. Hero (`hero`)
3. Navigation bar (`navbar`)
4. About (`about`)
5. Timeline (`timeline`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #d4d4d8;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #fde68a;
  --color-accent-2: #ce1126;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#d4d4d8',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#fde68a',
    accent2: '#ce1126',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Playfair Display with the second line in grey italic
- **Do:** Use a thin rule to separate the hero copy from the headline
- **Do:** Keep small labels in tracked uppercase in a muted grey
- **Don't:** Don't use a gold ground; the ground is near-black.
- **Don't:** Don't set headlines in dark text on a dark ground
- **Don't:** Don't add a second accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
