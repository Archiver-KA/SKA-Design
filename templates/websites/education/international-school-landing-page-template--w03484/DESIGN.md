# Design system — International School Landing Page Template

`SN-W03484` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A premium school page on a dark ground (#111111) with a large, heavy white headline set over a soft, blurred photographic wash. Orange and warm yellow glows sit behind the hero, and a horizontal timeline and tile gallery follow below. Navigation stays light, with one dark button for the main action.

**Mood:** premium, dark, warm, polished, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#111111` | Secondary copy, captions |
| Border | `#111111` | Hairlines, dividers, outlines |
| Accent | `#f4b400` | Primary action and highlights |
| Second accent | `#2e7d32` | Supporting highlights |

Palette by frequency of use: `#111111` · `#fafafa` · `#f26a21` · `#ffffff` · `#f4b400` · `#2e7d32` · `#e53935`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 36px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgba(0,0,0,0.04)]`, `shadow-[0_-20px_50px_rgba(17,17,17,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#111111] text-[#FAFAFA] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#F26A21] transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Timeline (`timeline`)
5. Announcement bar (`announcement-bar`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #111111;
  --color-text: #fafafa;
  --color-muted: #111111;
  --color-border: #111111;
  --color-accent: #f4b400;
  --color-accent-2: #2e7d32;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#111111',
    ink: '#fafafa',
    muted: '#111111',
    line: '#111111',
    accent: '#f4b400',
    accent2: '#2e7d32',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Keep hero sections on the dark ground with soft orange and yellow glows
- **Do:** Set headlines heavy and large in white
- **Do:** Use the single dark button for the primary navigation action
- **Don't:** Don't add light backgrounds to hero sections
- **Don't:** Don't use orange as a text colour on dark
- **Don't:** Don't let the glows grow hard-edged; keep them soft

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
