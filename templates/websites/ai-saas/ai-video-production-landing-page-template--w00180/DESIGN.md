# Design system — AI Video Production Landing Page Template

`SN-W00180` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `ru`

## Direction

Dark cinematic studio page on black with a large centred headline in heavy Cyrillic sans-serif, where the middle phrase fades to a grey gradient. A small red tag with a dot sits above the headline, and a single white button sits below the body copy. The look is restrained and film-like, with the type doing the staging.

**Mood:** cinematic, restrained, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fecaca` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#ef4444` · `#a3a3a3` · `#000000` · `#0a0a0a` · `#d4d4d4` · `#080808` · `#fecaca` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Involve
- **Body:** Involve
- **Loaded families:** Plus Jakarta Sans, Inter, Involve
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(204,0,0,0.15)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group relative flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-neutral-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Video / media (`video-media`)
5. Case studies (`case-studies`)
6. Bento grid (`bento-grid`)
7. 3D / canvas scene (`3d-canvas`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #111111;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #fecaca;
  --color-accent-2: #22c55e;
  --font-display: "Involve", sans-serif;
  --font-body: "Involve", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#111111',
    muted: '#737373',
    line: '#ffffff',
    accent: '#fecaca',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Involve'], sans: ['Involve'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy sans-serif, white and centred, with the middle phrase in grey gradient
- **Do:** Use the red tag (#ef4444) above the headline as the only colour in the hero
- **Do:** Keep the page on black and use a solid white button for the call to action
- **Don't:** Don't set body copy in white; it stays grey so the headline dominates
- **Don't:** Don't use a light background; the page is black throughout
- **Don't:** Don't add colour to the headline gradient; it stays grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
