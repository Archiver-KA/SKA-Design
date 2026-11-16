# Design system — Decision Intelligence SaaS Landing Page Template

`SN-W00334` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A calm, precise light page on off-white (#fafafa) with a bold near-black sans headline whose second word is set in mid grey, a two-tone move that carries the page. Solid black primary buttons sit beside outlined white ones. A white card holds a flat node-and-edge diagram, so the product is explained with a clean graph rather than decoration.

**Mood:** calm, precise, light, enterprise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#111111` | Primary action and highlights |

Palette by frequency of use: `#111111` · `#ffffff` · `#737373` · `#e5e5e5` · `#fafafa` · `#10b981` · `#000000` · `#d4d4d4` · `#f9fafb` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter, JetBrains Mono, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 16px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[0_1px_2px_rgba(0,0,0,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 ease-out hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md active:scale-[0.97] active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-obsidian/10 focus:ring-offset-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. 3D / canvas scene (`3d-canvas`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Dashboard preview (`dashboard-preview`)
6. About (`about`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #111111;
  --font-display: "Inter", sans-serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#111111',
  },
  fontFamily: { display: ['Inter'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the second headline word in mid grey (#737373) beside a near-black first word
- **Do:** Use solid near-black buttons for the primary action and outlined white for the secondary
- **Do:** Show the product as a flat node-and-edge diagram inside a white card
- **Don't:** Don't use green as an accent
- **Don't:** Don't add glow or gradient effects to the hero
- **Don't:** Don't place the diagram on a dark panel; keep it white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
