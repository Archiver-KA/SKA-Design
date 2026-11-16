# Design system — Dark Portfolio Landing Page Template

`SN-W01936` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black hero with the name set large in a bold display face, filled with an amber-gold gradient and a soft glow behind it. A grey subtitle sits centred below, and the buttons are a white pill and a dark outlined pill. The gold glow is the one warm colour in the frame, so the effect reads as cinematic rather than decorative.

**Mood:** cinematic, warm, luxurious, dark, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#555555` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#06b6d4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#171717` · `#fbbf24` · `#f59e0b` · `#000000` · `#737373` · `#06b6d4` · `#525252` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,0,0,0.5)]`, `shadow-[0_0_10px_rgba(6,182,212,0.5)]`, `shadow-[0_0_10px_rgba(245,158,11,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:block px-5 py-2 text-xs font-semibold tracking-wide text-black bg-white rounded-full hover:bg-amber-400 transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Logo cloud (`logo-cloud`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #555555;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #fbbf24;
  --color-accent-2: #06b6d4;
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
    surface: '#555555',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#fbbf24',
    accent2: '#06b6d4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in amber-gold (#fbbf24) with a soft glow
- **Do:** Keep the subtitle in grey below the name, centred
- **Do:** Use a white pill for the primary action and an outlined dark pill for the second
- **Don't:** Don't use amber as a background; it is a text and glow colour only
- **Don't:** Don't use a light page background
- **Don't:** Don't add more than one glow to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
