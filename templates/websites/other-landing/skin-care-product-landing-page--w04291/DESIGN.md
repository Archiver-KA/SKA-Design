# Design system — Skin Care Product Landing Page

`SN-W04291` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black hero with a large white sans headline stacked over a smaller line in the same family. The middle words are set in warm peach, and a small pill badge with a warm-red tint sits above. A large soft-focus gradient panel of peach, grey and blue fills the right side, with a white primary button and a dark outlined secondary beside it.

**Mood:** soft, dark, editorial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#1c1917` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#000000` · `#e7e5e4` · `#f5f5f4` · `#0c0a09` · `#1c1917` · `#dc2626` · `#d6d3d1` · `#57534e` · `#ffffff` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="text-sm font-medium py-3 px-3 rounded-lg transition-colors font-geist hover:bg-stone-950">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0c0a09;
  --color-text: #f3f4f6;
  --color-muted: #57534e;
  --color-border: #1c1917;
  --color-accent: #dc2626;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0c0a09',
    ink: '#f3f4f6',
    muted: '#57534e',
    line: '#1c1917',
    accent: '#dc2626',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the middle headline words in warm peach and keep the rest white
- **Do:** Fill the primary button in white and give the secondary button a thin dark outline
- **Do:** Frame the hero visual as a large soft-focus panel with rounded corners
- **Don't:** Don't use a sharp-cornered panel for the hero visual
- **Don't:** Don't add colour to the navigation bar
- **Don't:** Don't set the subheading in a heavy weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
