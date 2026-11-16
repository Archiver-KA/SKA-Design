# Design system — Japan Travel Agency Landing Page Template

`SN-W03068` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A travel hero built as a rounded photograph panel: a dusk shot of a temple street, darkened so the centred white headline reads over it. The Japanese subline is set in a lighter weight beneath the English line, and two pill buttons sit below, one solid white and one translucent. The navigation is plain on white, with a near-black button, so the photo carries the colour.

**Mood:** cinematic, warm, traditional, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#e2e8f0` · `#f8fafc` · `#94a3b8` · `#f1f5f9` · `#475569` · `#6366f1` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 120px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-slate-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-slate-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. Listings (`listings`)
7. Footer (`footer`)
8. Sign-in form (`auth-form`)
9. Dashboard preview (`dashboard-preview`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #facc15;
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
    accent: '#0f172a',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero photo in a rounded panel with a dark overlay under the headline
- **Do:** Set the Japanese subline in a lighter weight below the English headline
- **Do:** Use near-black (#0f172a) for the navigation button and white pills over the photo
- **Don't:** Don't use the pale slate (#e2e8f0) as an accent; it is a border tone
- **Don't:** Don't place small text over the bright sky area of the photo
- **Don't:** Don't add more than one photo panel per hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
