# Design system — Nebula Data Intelligence Platform Template

`SN-W00558` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, airy hero on white with a near-black headline. The phrase 'data teams' carries a pale blue-to-lavender gradient, and the primary button is a soft indigo fill with an outline secondary beside it. Below the hero, a dark product preview window gives the page its one dark block and serves as the main proof of the product.

**Mood:** airy, clean, technical, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#0c0d11` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#93c5fd` | Primary action and highlights |
| Second accent | `#c4b5fd` | Supporting highlights |

Palette by frequency of use: `#737373` · `#ffffff` · `#a3a3a3` · `#93c5fd` · `#a5b4fc` · `#bfdbfe` · `#67e8f9` · `#818cf8` · `#e5e5e5` · `#0c0d11`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 18px · h3 24px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_12px_#67d6e6]`, `shadow-[0_0_28px_rgba(107,124,255,.38)]`, `shadow-[0_0_25px_#4fd1e0]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-5`

**Primary button**

```html
<a class="rounded-lg px-4 py-2 font-medium transition bg-white text-neutral-950 hover:bg-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Process / steps (`how-it-works`)
5. Testimonials (`testimonials`)
6. Articles (`blog-articles`)
7. Stats band (`stats`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e5e5;
  --color-text: #0c0d11;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #93c5fd;
  --color-accent-2: #c4b5fd;
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
    surface: '#e5e5e5',
    ink: '#0c0d11',
    muted: '#737373',
    line: '#ffffff',
    accent: '#93c5fd',
    accent2: '#c4b5fd',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black (#0c0d11) with one gradient phrase in pale blue (#93c5fd) to lavender (#c4b5fd)
- **Do:** Use the soft indigo primary button (#818cf8) for the main action
- **Do:** Keep the dark product preview as the single dark block in the layout
- **Don't:** Don't use the gradient on body text; it is for the headline phrase only
- **Don't:** Don't turn the hero dark; it stays white
- **Don't:** Don't add further gradients beyond the headline phrase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
