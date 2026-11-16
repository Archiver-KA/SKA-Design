# Design system — Plumbing Services Landing Page Template

`SN-W04051` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, understated plumbing page with a centred white serif headline in two lines, the second phrase set in grey. A small rounded tag with an open-hours status sits above it, and a single white pill button carries the main action beside a plain rating. The hero avoids colour, which gives it a luxurious, controlled tone.

**Mood:** understated, luxurious, controlled, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#06b6d4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4d4d4` · `#737373` · `#eab308` · `#a3a3a3` · `#06b6d4` · `#3b82f6` · `#1e3a8a` · `#0a0a0a` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_40px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-0.5`, `gap-2`

**Primary button**

```html
<a class="group relative px-8 py-4 rounded-full bg-white text-neutral-950 font-medium text-sm overflow-hidden transition-transform hover:scale-[1.02] duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Map / location (`map-location`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #06b6d4;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#06b6d4',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the second phrase of each headline in grey (#a3a3a3)
- **Do:** Make the primary button a solid white pill
- **Do:** Keep the hero centred with the status tag above the headline
- **Don't:** Don't add colour to the headline
- **Don't:** Don't use the yellow accent in the hero
- **Don't:** Don't add gradients behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
