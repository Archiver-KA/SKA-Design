# Design system — Luxury Real Estate Landing Page Template

`SN-W03295` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photographic hero leads: a dusk shot of a white modern villa with a pool, under a large Cormorant Garamond headline in white. Gold (#c9a96e) is the only accent, used on the primary button and the navigation call to action, and it stays small against the image. Inter sets the navigation and the supporting line in a light weight, so the serif headline stays the focal point.

**Mood:** elegant, photographic, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfaf5` | Page ground |
| Surface | `#f5f0e8` | Cards, panels, raised areas |
| Text | `#1a1814` | Headings and primary copy |
| Muted text | `#8a8278` | Secondary copy, captions |
| Border | `#8a8278` | Hairlines, dividers, outlines |
| Accent | `#c9a96e` | Primary action and highlights |

Palette by frequency of use: `#c9a96e` · `#8a8278` · `#1a1814` · `#fdfaf5` · `#f5f0e8` · `#6b7b6e` · `#d4b57a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-[0.12em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(201,169,110,0.4)]`, `shadow-[0_0_15px_rgba(201,169,110,0.4)]`
- **Content width:** `max-w-[1280px]`, `max-w-[800px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-[#C9A96E] text-[#1A1814] font-sans font-medium uppercase tracking-[0.12em] text-xs px-6 py-3 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(201,169,110,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Listings (`listings`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfaf5;
  --color-surface: #f5f0e8;
  --color-text: #1a1814;
  --color-muted: #8a8278;
  --color-border: #8a8278;
  --color-accent: #c9a96e;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfaf5',
    surface: '#f5f0e8',
    ink: '#1a1814',
    muted: '#8a8278',
    line: '#8a8278',
    accent: '#c9a96e',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond at large size, in white over photography.
- **Do:** Use the gold (#c9a96e) only for primary buttons and the nav call to action.
- **Do:** Set navigation and supporting text in Inter, small and light.
- **Don't:** Don't set gold text over photographs; the gold belongs to buttons.
- **Don't:** Don't place headlines over bright sky without the photograph's darker tones behind them.
- **Don't:** Don't add a second accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
