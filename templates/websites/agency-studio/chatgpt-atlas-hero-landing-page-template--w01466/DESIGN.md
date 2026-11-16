# Design system — ChatGPT Atlas Hero Landing Page Template

`SN-W01466` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A saturated blue ground, the one bright field in this set, with white centred type and a white pill button as the main action. A small white glyph in a tile sits above the title, and translucent panels at the bottom corners suggest the product window. The hierarchy is simple: one title, one line of copy, one button.

**Mood:** bright, product-led, centred, saturated, simple

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#ff5f57` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#000000` · `#64748b` · `#94a3b8` · `#e2e8f0` · `#475569` · `#737373` · `#f5f5f5` · `#1e3a8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 16px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="bg-black hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. App download (`app-download`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #ff5f57;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#ff5f57',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero centred, with the product name above one line of copy
- **Do:** Use one white pill download button as the primary action
- **Do:** Show the product as translucent window panels at the corners
- **Don't:** Don't add a second dark background to the hero
- **Don't:** Don't use small type on the saturated blue
- **Don't:** Don't leave raw error text visible in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
