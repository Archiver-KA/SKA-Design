# Design system — Culinary Food Delivery Landing Page Template

`SN-W02881` · food-beverage · light mode · Sinera Atlas theme `route` · language `en`

## Direction

Clean, neutral and restrained, close to a minimal white-and-charcoal layout. An off-white ground (#fafaf9) carries a large heavy sans headline in charcoal (#1c1917), with the second line in mid grey (#78716c) for a two-tone effect. The primary action is a black pill with an outlined pill beside it, and orange (#f97316) appears only as a small dot on the eyebrow tag.

**Mood:** clean, neutral, confident, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#e7e5e4` · `#ffffff` · `#a8a29e` · `#292524` · `#fafaf9` · `#f97316` · `#f5f5f4` · `#ffedd5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 16px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-stone-900/10`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="h-12 px-8 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-stone-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Menu list (`menu-list`)
5. Feature grid (`features`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline heavy in charcoal (#1c1917) with the second line in grey (#78716c)
- **Do:** Use the black pill (#1c1917) for the primary action and an outline for secondary
- **Do:** Limit the orange (#f97316) to the small eyebrow dot and status marks
- **Don't:** Don't fill buttons with the orange
- **Don't:** Don't add a coloured hero background
- **Don't:** Don't set the grey second line in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
