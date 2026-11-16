# Design system — Nexar AI Autonomy Stack

`SN-W00565` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero (#030712) with a bold white headline where the second line switches to a pale green italic serif, which is the one stylistic break on the page. A short subline sits beneath in muted grey, and a blue Book Demo button marks the nav action. Below, a large dark panel is a placeholder for product footage, so the page is built around the imagery to come.

**Mood:** technical, dark, editorial, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#93c5fd` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#000000` · `#09090b` · `#6b7280` · `#93c5fd` · `#3b82f6` · `#1d4ed8` · `#1e3a8a` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 18px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_8px_25px_rgba(0,123,255,0.8)]`, `shadow-inner`, `shadow-blue-900/50`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Comparison (`comparison`)
7. Call to action (`cta`)
8. Stats band (`stats`)
9. FAQ (`faq`)
10. Booking form (`booking`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #93c5fd;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#93c5fd',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a pale green italic serif under the white sans line
- **Do:** Use the blue (#3b82f6) only for the nav demo button and primary actions
- **Do:** Keep the large media panel dark and full width below the copy
- **Don't:** Don't use the italic serif for body copy or buttons
- **Don't:** Don't add a light background to the hero
- **Don't:** Don't place text over the media panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
