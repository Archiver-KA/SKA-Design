# Design system — Experimental Cabin Retreat Landing Page Template

`SN-W03047` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cinematic dark scene: a near-black ground (#0d0d0f) with a very large blurred copper (#b87333) display headline and a small, tracked monospace quote below it. Copper is the only colour that shows, used as a glow on the type rather than as a fill. Words are stretched across the frame, so the first screen reads like a film title card.

**Mood:** cinematic, dark, moody, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0f` | Page ground |
| Surface | `#0d0d0f` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#efece6` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b87333` | Primary action and highlights |
| Second accent | `#b87333` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#183a2d` · `#0d0d0f` · `#efece6` · `#3d2611` · `#b87333` · `#000000` · `#eae7e0` · `#0a1410` · `#2a2a2a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · body 20px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-inner`, `shadow-[0_0_0_4px_rgba(24,58,45,0.2)]`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="relative w-24 h-40 bg-[#1a1a1a] rounded-sm border-4 border-[#2a2a2a] shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_12px_24px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center p-2 group transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Map / location (`map-location`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0d0d0f;
  --color-surface: #0d0d0f;
  --color-text: #111111;
  --color-muted: #efece6;
  --color-border: #ffffff;
  --color-accent: #b87333;
  --color-accent-2: #b87333;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0f',
    surface: '#0d0d0f',
    ink: '#111111',
    muted: '#efece6',
    line: '#ffffff',
    accent: '#b87333',
    accent2: '#b87333',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large with a copper (#b87333) glow
- **Do:** Keep the ground near-black (#0d0d0f) behind every section
- **Do:** Use small tracked monospace for quotes and captions
- **Don't:** Don't use copper as a fill for buttons or panels
- **Don't:** Don't add bright colours; the palette stays copper and black
- **Don't:** Don't put long body paragraphs in the hero; the first screen is a title card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
