# Design system — Nura Health Clinical Landing Page Template

`SN-W02490` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A translucent, photo-backed hero that fades from pale grey-green into deep green (#2e4036) at its base, with a cream (#f2f0e9) panel closing the section. Headlines are serif with one italic word in orange (#cc5833), the same pattern as the sister Nura pages, which ties them together. Text is light over the dark gradient and dark on the cream sections.

**Mood:** refined, calm, clinical, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f0e9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#2e4036` | Secondary copy, captions |
| Border | `#2e4036` | Hairlines, dividers, outlines |
| Accent | `#cc5833` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#f2f0e9` · `#1a1a1a` · `#2e4036` · `#cc5833` · `#ffffff` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Outfit
- **Loaded families:** Cormorant Garamond, JetBrains Mono, Outfit, Plus Jakarta Sans
- **Scale (largest breakpoint):** h2 48px · h3 36px · body 16px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[0_0_8px_rgba(204,88,51,0.6)]`
- **Content width:** `max-w-5xl`, `max-w-7xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="font-medium text-xs uppercase tracking-wide px-4 py-2 rounded-full backdrop-blur-sm transition-colors border bg-white/10 hover:bg-white/20 border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. About (`about`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
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
  --color-accent-2: #10b981;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Outfit", sans-serif;
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
    accent2: '#10b981',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond with one italic word in orange (#cc5833)
- **Do:** Use cream (#f2f0e9) for section grounds below the hero
- **Do:** Keep the hero on a translucent gradient, not a flat fill
- **Don't:** Don't place dark text on the dark hero gradient
- **Don't:** Don't use orange for large fills
- **Don't:** Don't mix in a second serif; body copy is set in Outfit

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
