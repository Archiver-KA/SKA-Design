# Design system — Luxury Restaurant Landing Page Template

`SN-W02937` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, cinematic steakhouse-style page on near-black (#0a0a0a) with a very large heavy headline in a silver-to-white gradient. The brand word STONE in the wordmark and the reservation button use red, the only colour on the page. Buttons are sharp white and outline pairs, so the red is reserved for the single booking action.

**Mood:** bold, cinematic, industrial, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b91c1c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d32f2f` · `#0a0a0a` · `#6b7280` · `#000000` · `#9ca3af` · `#4b5563` · `#171717` · `#e5e5e5` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Syncopate
- **Body:** Montserrat
- **Loaded families:** Montserrat, Syncopate
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 12px · body 10px
- **Weights in use:** light, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_15px_rgba(211,47,47,0.3)]`, `shadow-[0_4px_20px_rgba(211,47,47,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="fm-tap group relative px-8 py-3 bg-white text-black text-xs font-semibold tracking-widest uppercase overflow-hidden hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Product grid (`product-grid`)
6. About (`about`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #f5f5f5;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #b91c1c;
  --font-display: "Syncopate", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#f5f5f5',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#b91c1c',
  },
  fontFamily: { display: ['Syncopate'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the hero headline very large and heavy, with a metallic gradient fill
- **Do:** Use the red accent only for the reservation button and the eyebrow line
- **Do:** Pair a solid white button with an outline button in the hero
- **Don't:** Don't use the red as a page background; it is an accent only
- **Don't:** Don't set body copy in pure white; use the muted grey for secondary text
- **Don't:** Don't add decorative imagery behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
