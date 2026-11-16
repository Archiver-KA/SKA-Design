# Design system — Untitled Design

`SN-W04315` · other-landing · light mode · Sinera Atlas theme `circuit` · language `ko`

## Direction

A light mobile app screen on white with a large black weekly figure at the top and one large lime [#d1fe00] START button at the centre of the layout. Secondary tiles are white with thin rules and small labels, and the nutrition card sits below with a small outlined badge. Lime appears only on the one action on the screen, so the rest of the interface stays neutral.

**Mood:** minimal, sporty, neutral, clear, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d1fe00` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#71717a` · `#27272a` · `#d1fe00` · `#fafafa` · `#a1a1aa` · `#e4e4e7` · `#f4f4f5` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 24px · h3 14px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_8px_16px_rgba(0,0,0,0.15)]`, `shadow-sm`, `shadow-[0_0_60px_rgba(0,0,0,0.1)]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="mt-8 w-full py-4 rounded-2xl bg-[#D1FE00] text-black text-sm font-semibold tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-[0_8px_24px_-8px_rgba(209,254,0,0.6)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Pricing (`pricing`)
3. Call to action (`cta`)
4. Hero (`hero`)
5. Video / media (`video-media`)
6. 3D / canvas scene (`3d-canvas`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #000000;
  --color-muted: #71717a;
  --color-border: #000000;
  --color-accent: #d1fe00;
  --color-accent-2: #ef4444;
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
    surface: '#fafafa',
    ink: '#000000',
    muted: '#71717a',
    line: '#000000',
    accent: '#d1fe00',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#d1fe00) only for the primary START action
- **Do:** Show the weekly figure as a large bold number with a small unit beside it
- **Do:** Keep secondary tiles white with thin borders and small labels
- **Don't:** Don't use lime for text, icons or links
- **Don't:** Don't add a second saturated colour to the screen
- **Don't:** Don't make the primary action the same size as the secondary tiles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
