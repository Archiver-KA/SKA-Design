# Design system — Delphi One Crypto Valuation Landing Page Template

`SN-W00918` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, minimal voting and valuation hero on white, with a large near-black sans headline whose second line is set in mid grey. The one primary action is a solid near-black pill, with a quiet outlined button beside it. A bordered input-style strip below the buttons acts as a product entry point rather than a feature grid.

**Mood:** calm, light, minimal, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#e4e4e7` · `#71717a` · `#f4f4f5` · `#a1a1aa` · `#fafafa` · `#d4d4d8` · `#27272a` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-4 font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
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
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black with the second line in mid grey
- **Do:** Use a solid near-black pill for the primary action only
- **Do:** Keep surfaces white or barely tinted and separated by hairline borders
- **Don't:** Don't add a green accent to the hero
- **Don't:** Don't set body copy in black; it sits in muted grey
- **Don't:** Don't fill the hero with feature cards before the first call to action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
