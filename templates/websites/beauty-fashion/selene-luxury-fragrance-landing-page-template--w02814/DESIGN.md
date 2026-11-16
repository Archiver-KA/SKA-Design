# Design system — SÉLÈNE Luxury Fragrance Landing Page Template

`SN-W02814` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black fragrance page on #04060b with a cool pale blue-white accent (#d2def4) used for the ACQUIRE pill and highlights. The brand and headlines are set in light Cormorant Garamond, with small, widely tracked uppercase labels for navigation and captions. The mood is quiet, cinematic luxury, and the hero is left as an open dark field for the product.

**Mood:** luxurious, cinematic, quiet, cool

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#04060b` | Page ground |
| Surface | `#0a0e18` | Cards, panels, raised areas |
| Text | `#f4f6fa` | Headings and primary copy |
| Muted text | `#8b94a6` | Secondary copy, captions |
| Border | `#e6eefa` | Hairlines, dividers, outlines |
| Accent | `#d2def4` | Primary action and highlights |

Palette by frequency of use: `#d2def4` · `#dfe5ee` · `#f2f4f8` · `#9aa3b2` · `#8b94a6` · `#04060b` · `#6d7686` · `#0a0e18` · `#ffffff` · `#eef1f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, JetBrains Mono
- **Scale (largest breakpoint):** body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[20px]` (20px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_45px_-8px_rgba(0,0,0,0.8)]`, `shadow-2xl`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_rgba(0,0,0,0.55)]`
- **Content width:** `max-w-[15em]`, `max-w-[46ch]`
- **Section padding:** `py-[17px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-10`

**Primary button**

```html
<a class="scp2 inline-block text-xs tracking-[0.22em] uppercase text-[#04060b] bg-[#dfe5ee] py-4 px-9 rounded-full transition-colors duration-300 hover:bg-white text-center">…</a>
```

## Page structure

Blocks in page order:

1. Bento grid (`bento-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #04060b;
  --color-surface: #0a0e18;
  --color-text: #f4f6fa;
  --color-muted: #8b94a6;
  --color-border: #e6eefa;
  --color-accent: #d2def4;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#04060b',
    surface: '#0a0e18',
    ink: '#f4f6fa',
    muted: '#8b94a6',
    line: '#e6eefa',
    accent: '#d2def4',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines and the wordmark in Cormorant Garamond at a light weight
- **Do:** Use the pale blue-white (#d2def4) for the one call to action on each screen
- **Do:** Keep navigation and captions small, uppercase and widely tracked
- **Don't:** Don't use warm gold or cream tones; the palette is cool blue-greys
- **Don't:** Don't set body copy in a heavy weight; the serif stays light
- **Don't:** Don't let a headline overlap the wordmark or the navigation.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
