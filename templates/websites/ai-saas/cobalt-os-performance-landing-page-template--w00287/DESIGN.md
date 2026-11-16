# Design system — Cobalt OS Performance Landing Page Template

`SN-W00287` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `id`

## Direction

A plain dark utility page on charcoal (#1a1a1a) with a thin top navigation and an outlined call-to-action button. Inter type, blue accents and glass panels carry the look, and the page stays restrained.

**Mood:** plain, dark, utilitarian, unconfirmed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#c8c4bc` | Secondary copy, captions |
| Border | `#c8c4bc` | Hairlines, dividers, outlines |
| Accent | `#1d4ed8` | Primary action and highlights |
| Second accent | `#1e40af` | Supporting highlights |

Palette by frequency of use: `#c8c4bc` · `#8b3a2a` · `#1a1a1a` · `#1d4ed8` · `#1e40af` · `#000000` · `#2563eb` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 12px
- **Weights in use:** light, medium, extralight
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/80`
- **Content width:** `max-w-[1200px]`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-px`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="uppercase hover:bg-[#8b3a2a]/80 transition-colors text-xs text-[#c8c4bc] tracking-widest font-mono-custom bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg px-7 py-3.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #1a1a1a;
  --color-text: #f5f5f5;
  --color-muted: #c8c4bc;
  --color-border: #c8c4bc;
  --color-accent: #1d4ed8;
  --color-accent-2: #1e40af;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#1a1a1a',
    ink: '#f5f5f5',
    muted: '#c8c4bc',
    line: '#c8c4bc',
    accent: '#1d4ed8',
    accent2: '#1e40af',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to charcoal (#1a1a1a) with light text
- **Do:** Keep the navigation small and uppercase with an outlined call-to-action
- **Do:** Use the blue accent (#1d4ed8) only for interactive elements
- **Don't:** Don't use the brick colour (#8b3a2a) as a page background
- **Don't:** Don't add a hero layout the page does not specify
- **Don't:** Don't add decoration beyond what the page specifies

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
