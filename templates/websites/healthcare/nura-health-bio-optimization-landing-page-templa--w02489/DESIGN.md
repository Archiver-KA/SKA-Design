# Design system — Nura Health Bio-Optimization Landing Page Template

`SN-W02489` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A cinematic full-bleed hero where a dark forest photograph sits under a near-black overlay and the headline is heavy white sans. An orange (#cc5833) italic serif word and deep green (#2e4036) panels are the only colour, which keeps the page muted and editorial. Large type over photography does most of the work, and the orange marks a single emphasis word.

**Mood:** cinematic, muted, editorial, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#2e4036` | Cards, panels, raised areas |
| Text | `#f2f0e9` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#2e4036` | Hairlines, dividers, outlines |
| Accent | `#cc5833` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#2e4036` · `#cc5833` · `#ffffff` · `#f2f0e9` · `#1a1a1a` · `#9ca3af` · `#eae8e0` · `#e5e2d6` · `#d6d3c5` · `#b34925`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Cormorant Garamond, Outfit, Plus Jakarta Sans, Space Mono
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-[#2E4036]/20`, `shadow-[0_0_20px_#CC5833]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="w-full py-4 rounded-xl bg-[#CC5833] text-white hover:bg-[#B34925] transition-colors text-xs font-semibold tracking-widest uppercase shadow-lg shadow-[#CC5833]/30">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #2e4036;
  --color-text: #f2f0e9;
  --color-muted: #9ca3af;
  --color-border: #2e4036;
  --color-accent: #cc5833;
  --color-accent-2: #22c55e;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#2e4036',
    ink: '#f2f0e9',
    muted: '#9ca3af',
    line: '#2e4036',
    accent: '#cc5833',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans with one orange italic serif word (#cc5833)
- **Do:** Use deep green (#2e4036) for panels and section grounds
- **Do:** Place full-bleed photography behind hero copy under a dark overlay
- **Don't:** Don't use orange for body text or large background areas
- **Don't:** Don't put the headline over a light photograph
- **Don't:** Don't use bright green (#22c55e) in the layout; it is not in this item's palette

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
