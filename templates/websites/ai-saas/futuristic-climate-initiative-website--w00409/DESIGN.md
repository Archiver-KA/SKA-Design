# Design system — Futuristic Climate Initiative website

`SN-W00409` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep navy-black page with a soft green-teal radial glow at the centre of the first screen, which reads as an atmospheric backdrop. Inter is used throughout, GSAP drives the motion, and green (#4ade80) with blue (#3b82f6) are the accents on navy (#020617).

**Mood:** atmospheric, cool, calm, data-led, deep navy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#000000` · `#64748b` · `#4ade80` · `#475569` · `#3b82f6` · `#e2e8f0` · `#60a5fa` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2 backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Bento grid (`bento-grid`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #4ade80;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#4ade80',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the background at the deep navy (#020617) with a soft radial glow, not a flat fill
- **Do:** Use Inter for all text, with green (#4ade80) reserved for metrics and key highlights
- **Do:** Use GSAP for entrance motion, as the template already loads it
- **Don't:** Don't add warm colours; the palette is cool green and blue on navy
- **Don't:** Don't set body text in blue (#3b82f6); it is an accent only
- **Don't:** Don't remove the glow; it carries the mood of the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
