# Design system — Anachak Real Estate Landing Page Template

`SN-W03171` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A marketplace-style listing page built on pure white and neutral zinc greys, with black pill controls as the only strong colour. Tabs, a search bar and category chips sit above a grid of photo cards, each with a bold price and a small rating. The look is functional and quiet, so the listings do the talking.

**Mood:** functional, neutral, clean, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#e4e4e7` · `#fafafa` · `#f4f4f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-[860px]`
- **Common gaps:** `gap-2`, `gap-1`, `gap-0`

**Primary button**

```html
<a class="px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all hover:scale-[1.02] active:scale-95 bg-zinc-900 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Product grid (`product-grid`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

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

- **Do:** Use #18181b for selected tabs, the search action and active chips
- **Do:** Keep cards on #ffffff with #e4e4e7 borders and a bold price line
- **Do:** Set category chips as rounded-full pills in one row
- **Don't:** Don't introduce a second accent colour; the page is black and grey
- **Don't:** Don't use heavy shadows on listing cards
- **Don't:** Don't hide the price or rating inside a hover state

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
