# Design system — Creator Marketing Landing Page Template

`SN-W01503` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a near-black sans headline set heavy and tight, where one word, 'control', is set in a light italic serif with a pink gradient (#db2777 to #ec4899). A pink gradient button and a white outlined secondary sit beneath, and a product card shows campaign progress in soft grey panels. Pink is the single accent, used for the action and the emphasis word.

**Mood:** clean, energetic, modern, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#db2777` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#f1f5f9` · `#0f172a` · `#ffffff` · `#64748b` · `#db2777` · `#f8fafc` · `#94a3b8` · `#ec4899` · `#e2e8f0` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 30px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-16`

**Primary button**

```html
<a class="group relative px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium shadow-sm hover:shadow-md hover:opacity-90 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Process / steps (`how-it-works`)
6. Schedule (`schedule-agenda`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #db2777;
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
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#db2777',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one emphasis word in an italic serif in pink (#db2777) within the heavy sans headline.
- **Do:** Use the pink gradient only for the primary button and that emphasis word.
- **Do:** Keep product cards on white or very light grey (#f8fafc) with soft borders.
- **Don't:** Don't add a second accent colour, such as the green status labels in the mockup.
- **Don't:** Don't set body copy in pink.
- **Don't:** Don't place dark panels on the white page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
