# Design system — Financial Services Landing Page Template

`SN-W00939` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, text-led editorial hero on cream [#fdfcf8], with a large high-contrast serif headline in near-black and a second line in grey italic. A small spaced uppercase eyebrow in rust [#9a3412] sits above it, and monospaced navigation keeps the chrome plain. A thin outlined button is the primary action, and a small market ticker card in the corner adds a single data note.

**Mood:** editorial, warm, research, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#9a3412` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#9a3412` · `#a3a3a3` · `#e5e5e5` · `#ffffff` · `#737373` · `#d4d4d4` · `#fdfcf8` · `#f5f5f5` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-neutral-100/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-x-6`

**Primary button**

```html
<a class="group flex items-center gap-3 bg-ink text-paper pl-6 pr-5 py-3 rounded-sm hover:bg-sepia transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #9a3412;
  --color-accent-2: #22c55e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#9a3412',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, with the second line in grey italic
- **Do:** Use the rust (#9a3412) for the eyebrow label only
- **Do:** Keep the primary button a thin dark outline with spaced uppercase text
- **Don't:** Don't add bright green or blue to the hero
- **Don't:** Don't fill the empty right side with imagery that competes with the text
- **Don't:** Don't set the navigation larger than the body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
