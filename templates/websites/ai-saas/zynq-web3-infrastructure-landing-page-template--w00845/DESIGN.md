# Design system — ZynQ Web3 Infrastructure Landing Page Template

`SN-W00845` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep navy hero with a large headline in white, where the word 'clarity' is set in a lavender gradient (#818cf8). The headline is a serif display face. A solid violet pill and an outlined secondary sit under a short line of copy, and the design is dark, quiet and centred.

**Mood:** dark, centred, quiet, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030014` | Page ground |
| Surface | `#030014` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#818cf8` · `#6366f1` · `#9ca3af` · `#6b7280` · `#000000` · `#030014` · `#fafafa` · `#312e81` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Space Grotesk, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** normal, semibold, medium
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(255,255,255,0.8)]`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-x-y-10`, `gap-y-0`

**Primary button**

```html
<a class="px-5 py-2.5 text-xs font-mono font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:scale-105 bg-white text-black hover:bg-indigo-50 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Code / terminal (`code-terminal`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #030014;
  --color-surface: #030014;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030014',
    surface: '#030014',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large and centred, with the highlighted phrase in lavender (#818cf8)
- **Do:** Use the violet (#6366f1) for the primary button only
- **Do:** Keep the page on the deep navy (#030014) with white text
- **Don't:** Don't set the highlight in both the headline and the buttons
- **Don't:** Don't add bright green beside the lavender
- **Don't:** Don't switch to a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
