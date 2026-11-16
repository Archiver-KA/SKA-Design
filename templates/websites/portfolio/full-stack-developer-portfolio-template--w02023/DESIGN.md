# Design system — Full Stack Developer Portfolio Template

`SN-W02023` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, uppercase hero on near-black (#0a0a0a) with a heavy white sans headline over three lines, the middle word in grey. The primary button is a solid amber (#f59e0b) block, and the same amber picks out the availability label, so the page has one warm accent. Small stat cards sit at the right and bottom edges, giving the hero a data-driven feel.

**Mood:** bold, uppercase, dark, data-driven

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#555555` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#6b7280` · `#9ca3af` · `#d1d5db` · `#000000` · `#0a0a0a` · `#4b5563` · `#22c55e` · `#0d0d0d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-amber-500 text-black px-8 py-4 rounded-sm font-semibold tracking-tight hover:bg-amber-400 transition-all transform hover:-translate-y-1 flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Timeline (`timeline`)
6. Case studies (`case-studies`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #555555;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #22c55e;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#555555',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white uppercase sans, with the middle word in grey
- **Do:** Use amber (#f59e0b) for the primary button and the availability label only
- **Do:** Place small stat cards at the edges of the hero
- **Don't:** Don't use the light grey surface (#555555) for panels on the dark ground
- **Don't:** Don't set the headline in black; the ground is dark
- **Don't:** Don't add a second accent colour beside the amber

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
