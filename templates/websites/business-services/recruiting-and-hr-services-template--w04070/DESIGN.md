# Design system — Recruiting and HR Services Template

`SN-W04070` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, cinematic hero where a large display word, RECRUITING, runs across the top in a grey gradient behind a portrait. Saturated violet and blue light fields glow behind the subject, and a gold circular badge adds one warm point. The copy is short and set in a clean sans, so the photograph and the light carry the tone.

**Mood:** cinematic, bold, dark, glowing, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f5f5f5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ca8a04` | Primary action and highlights |
| Second accent | `#ca8a04` | Supporting highlights |

Palette by frequency of use: `#ef4444` · `#ffffff` · `#ca8a04` · `#000000` · `#a3a3a3` · `#f5f5f5` · `#a1a1aa` · `#d4d4d4` · `#71717a` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 12px · h3 28px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="inline-flex md:hidden hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5 site-menu-toggle">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #f5f5f5;
  --color-border: #ffffff;
  --color-accent: #ca8a04;
  --color-accent-2: #ca8a04;
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
    surface: '#000000',
    ink: '#ffffff',
    muted: '#f5f5f5',
    line: '#ffffff',
    accent: '#ca8a04',
    accent2: '#ca8a04',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on black (#000000) with the light fields behind the subject
- **Do:** Set the oversized display word behind the portrait in a grey gradient
- **Do:** Use the gold (#ca8a04) only for small badges and marks
- **Don't:** Don't place text over the bright violet light without a dark panel behind it
- **Don't:** Don't use the gold as a large fill or button background
- **Don't:** Don't set body copy in the oversized display face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
