# Design system — GrowthHub Freelance Membership Landing Page Template

`SN-W00429` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black loader frame with a single loading line in small monospace capitals at the bottom right, like the boot screen of a hub. Inter sets the display type, Geist Sans the body text, Three.js and GSAP drive the motion, and blue (#3b82f6) is the accent on black.

**Mood:** minimal, boot-screen, dark, unverified, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#71717a` · `#52525b` · `#a1a1aa` · `#000000` · `#60a5fa` · `#27272a` · `#3f3f46` · `#030303`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Geist Sans
- **Loaded families:** Inter, Geist Sans
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 16px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Content width:** `max-w-[1400px]`, `max-w-[1800px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full py-3 rounded border border-white/20 text-xs font-semibold text-white hover:bg-white hover:text-black transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Integrations (`integrations`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Geist Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Geist Sans'] },
} }
```

## Do and don't

- **Do:** Use the black ground (#030303) for the loader and any intro sequence
- **Do:** Set loader text in small monospace capitals in a corner
- **Do:** Keep blue (#3b82f6) as the single accent for the content after the intro
- **Don't:** Don't fill the intro with colour; it is black and white
- **Don't:** Don't keep visitors behind the loader for long
- **Don't:** Don't add a second accent colour beside the blue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
