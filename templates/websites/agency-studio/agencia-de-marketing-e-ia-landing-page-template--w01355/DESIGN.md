# Design system — Agencia de Marketing e IA Landing Page Template

`SN-W01355` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A black first screen with a thin translucent navbar, a white square mark beside the name, and little else visible. The hero media does not show in this still, so the layout is judged from the stats row: grey body copy on the left and two large white figures with spaced capital labels on the right. The look is quiet and monochrome.

**Mood:** quiet, monochrome, austere, sparse

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d1d5db` · `#9ca3af` · `#000000` · `#0a0a0a` · `#030303` · `#22c55e` · `#e5e7eb` · `#3b82f6` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_15px_rgba(59,130,246,0.15)]`
- **Content width:** `max-w-[1400px]`, `max-w-[1600px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="uppercase transition-colors hover-trigger hover:bg-gray-200 cursor-pointer text-xs font-medium text-black tracking-wider bg-white rounded-full px-6 py-2">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #3b82f6;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the ground black and the type white, with grey for body copy.
- **Do:** Set stat figures large and white, with small spaced capitals as their labels.
- **Do:** Keep the navbar translucent and small, with one outlined button at the right.
- **Don't:** Don't crowd the hero; the empty space is part of the layout.
- **Don't:** Don't use green for large areas unless a section needs it.
- **Don't:** Don't set body copy in a bold weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
