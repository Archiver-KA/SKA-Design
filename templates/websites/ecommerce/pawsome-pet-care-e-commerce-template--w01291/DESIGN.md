# Design system — Pawsome Pet Care E-commerce Template

`SN-W01291` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A minimal pet store on a near-white ground (#fafafa) with near-black type, led by an oversized serif wordmark that spans the hero. Below it, a two-column layout pairs a short text panel with product cards and black pill buttons. The black and white contrast is strong, and colour is limited to the photography and small category tabs.

**Mood:** minimal, editorial, monochrome, confident, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e5e5` · `#525252` · `#171717` · `#d4d4d4` · `#262626` · `#a3a3a3` · `#f43f5e` · `#f5f5f5` · `#737373`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist
- **Scale (largest breakpoint):** h1 176px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#171717',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the oversized brand wordmark in a serif at near-black (#171717)
- **Do:** Use black pill buttons for primary actions on the light ground
- **Do:** Keep category tabs small, in one rounded segmented group
- **Don't:** Don't use the rose accent (#f43f5e).
- **Don't:** Don't set the hero wordmark in sans-serif; keep the serif.
- **Don't:** Don't add a second hero photograph; the design uses one large image area

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
