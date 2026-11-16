# Design system — Real Estate Listing Landing Page Template

`SN-W03362` · real-estate · light mode · Sinera Atlas theme `dwell` · language `lv`

## Direction

A listing-led page built around a large photograph of a light-filled interior inside a rounded frame. White translucent cards carry the price, specs and agent contact over the lower part of the photograph, and the active tab is solid orange (#ff6b35). A mint pill marks status, and the page around the hero is plain white and light grey.

**Mood:** photographic, practical, clean, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f2f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6b35` | Primary action and highlights |
| Second accent | `#86efac` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#f5f5f4` · `#ff6b35` · `#000000` · `#57534e` · `#e7e5e4` · `#292524` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.14em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_0.5rem_rgba(134,239,172,0.9)]`, `shadow-lg`, `shadow-black/30`
- **Content width:** `max-w-[520px]`, `max-w-[496px]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="shrink-0 rounded-full bg-[#FF6B35] px-4 py-2.5 text-xs font-semibold text-white transition hover:brightness-110">…</a>
```

## Page structure

Blocks in page order:

1. Call to action (`cta`)
2. Sidebar (`sidebar`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f2f2f2;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #ff6b35;
  --color-accent-2: #86efac;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f2f2',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#ff6b35',
    accent2: '#86efac',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the listing photograph in a large rounded frame with translucent white info cards over it
- **Do:** Use orange (#ff6b35) for the active tab and the primary action only
- **Do:** Use mint (#86efac) for status pills only
- **Don't:** Don't place dark text over the photograph without a white card behind it
- **Don't:** Don't use orange for body copy
- **Don't:** Don't let the agent card cover the price

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
