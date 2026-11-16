# Design system — Adaptive Learning Engine Landing Page Template

`SN-W03397` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Stark dark page on near-black with a heavy uppercase headline in white, and its final word set in rose-pink (#f43f5e). The subhead is a short two-line statement in light grey. A white pill and a dark outlined button sit side by side, and the layout is open with little ornament, so the rose word is the main colour on the first screen.

**Mood:** stark, urgent, focused, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#27272a` · `#71717a` · `#18181b` · `#3f3f46` · `#050505` · `#a1a1aa` · `#d4d4d8` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 14px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-rose-900/20`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group relative overflow-hidden bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Dashboard preview (`dashboard-preview`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #27272a;
  --color-accent: #f43f5e;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#27272a',
    accent: '#f43f5e',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase white with the final word in rose (#f43f5e).
- **Do:** Use the white pill for the primary action and a dark outlined button for the secondary.
- **Do:** Keep the subhead to two lines in light grey (#a1a1aa).
- **Don't:** Don't colour more than one word in the headline.
- **Don't:** Don't use the rose as a button fill.
- **Don't:** Don't add a background panel behind the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
