# Design system — Nura Precision Health Landing Page Template

`SN-W02491` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark hero in layered deep green-grey, with a white headline and its emphasised word set in a cream italic serif. Pill buttons are dark green (#2e4036) on the grey ground, and the layout is wide, with a 3D canvas as the focal visual. The look is quiet and high contrast, and the second phrase of each headline carries the emphasis.

**Mood:** moody, precise, premium, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2e4036` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#f2f0e9` | Headings and primary copy |
| Muted text | `#1a1a1a` | Secondary copy, captions |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |
| Accent | `#cc5833` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1a1a1a` · `#cc5833` · `#f2f0e9` · `#2e4036` · `#ffffff` · `#2a2a35` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Cormorant Garamond, IBM Plex Mono, Outfit, Plus Jakarta Sans
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="magnetic group relative overflow-hidden rounded-full bg-[#CC5833] px-6 py-2.5 text-sm font-medium text-[#F2F0E9] shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. 3D / canvas scene (`3d-canvas`)
4. About (`about`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #2e4036;
  --color-surface: #1a1a1a;
  --color-text: #f2f0e9;
  --color-muted: #1a1a1a;
  --color-border: #1a1a1a;
  --color-accent: #cc5833;
  --color-accent-2: #22c55e;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2e4036',
    surface: '#1a1a1a',
    ink: '#f2f0e9',
    muted: '#1a1a1a',
    line: '#1a1a1a',
    accent: '#cc5833',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set headlines in white with the key word in cream italic serif
- **Do:** Use dark green (#2e4036) pill buttons on dark grounds
- **Do:** Keep the hero as a dark gradient, with the 3D canvas as the main visual
- **Don't:** Don't set text in #1a1a1a on the dark green ground
- **Don't:** Don't use orange (#cc5833) as a button fill on dark grounds
- **Don't:** Don't use bright green (#22c55e) as a surface colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
