# Design system — Interactive Event Cards Layout

`SN-W03613` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The event cards section sits on black (#000000) with a serif headline in white above two tilted 3D cards. One card is a dark violet gradient and the other a deep green one, each with a small icon tile, a title and a session count. Lavender (#ddd6fe) and mint (#a7f3d0) are kept for small labels and card text. The effect is a glossy, layered stack that reads as dimensional.

**Mood:** glossy, dimensional, dark, layered, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ede9fe` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ddd6fe` | Primary action and highlights |
| Second accent | `#a7f3d0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ddd6fe` · `#a7f3d0` · `#ede9fe` · `#d1fae5` · `#000000` · `#0f0a19` · `#1e0f3d` · `#6366f1` · `#f5f3ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 30px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-purple-500/25`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-lg ring-1 ring-white/10 transition-all hover:ring-white/20 hover:shadow-lg font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #ede9fe;
  --color-border: #ffffff;
  --color-accent: #ddd6fe;
  --color-accent-2: #a7f3d0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#ede9fe',
    line: '#ffffff',
    accent: '#ddd6fe',
    accent2: '#a7f3d0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Tilt the cards in 3D and give each one a gradient from dark violet or dark green
- **Do:** Set card titles in the serif used for the headline, in white
- **Do:** Use lavender (#ddd6fe) and mint (#a7f3d0) only for small labels
- **Don't:** Don't place the cards flat or without a tilt
- **Don't:** Don't add more than two card colours
- **Don't:** Don't set the card titles in a heavy sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
