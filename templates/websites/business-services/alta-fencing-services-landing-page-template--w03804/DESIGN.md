# Design system — Alta Fencing Services Landing Page Template

`SN-W03804` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A greyscale architectural photograph fills the hero, with a large white serif headline in two parts, the second set in italic. A small terracotta eyebrow label and a terracotta navigation button (#cc5833) are the only colour, so the page stays monochrome apart from that accent. A single cream pill button beneath the headline gives the main action a quiet, editorial weight.

**Mood:** monochrome, editorial, precise, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f0e9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#2e4036` | Secondary copy, captions |
| Border | `#2e4036` | Hairlines, dividers, outlines |
| Accent | `#cc5833` | Primary action and highlights |

Palette by frequency of use: `#2e4036` · `#f2f0e9` · `#1a1a1a` · `#cc5833` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Outfit, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tighter`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_20px_40px_rgba(0,0,0,0.03)]`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="magnetic-btn relative overflow-hidden group rounded-full bg-[#CC5833] text-[#F2F0E9] px-6 py-2.5 text-sm font-normal flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. About (`about`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Process / steps (`how-it-works`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f2f0e9;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #2e4036;
  --color-border: #2e4036;
  --color-accent: #cc5833;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f0e9',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#2e4036',
    line: '#2e4036',
    accent: '#cc5833',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Cormorant Garamond at a large size, in white, with the second line in italic.
- **Do:** Use terracotta (#cc5833) for the navigation button and the eyebrow label only.
- **Do:** Keep the hero photograph in greyscale under a darkened overlay.
- **Don't:** Don't add colour to the photography in the hero.
- **Don't:** Don't set the eyebrow label larger than the body copy.
- **Don't:** Don't use terracotta for large background fills.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
