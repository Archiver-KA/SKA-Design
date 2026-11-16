# Design system — FemSalon Beauty Salon Landing Page Template

`SN-W02748` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Cream navigation sits above a large photo hero of a bright salon, with a white serif headline set directly on the image. The headline is in Libre Baskerville at a moderate size, and the actions are a cream filled pill and a thin outlined pill. One inset photo is cropped into a circle beside the hero text, so the layout frames photography in circles and lines.

**Mood:** classic, warm, photographic, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f0e6` | Page ground |
| Surface | `#fcfbf5` | Cards, panels, raised areas |
| Text | `#3f3a33` | Headings and primary copy |
| Muted text | `#6a6456` | Secondary copy, captions |
| Border | `#3f3a33` | Hairlines, dividers, outlines |
| Accent | `#c49a5a` | Primary action and highlights |

Palette by frequency of use: `#3f3a33` · `#c49a5a` · `#6a6456` · `#dccfb8` · `#e7dfc6` · `#f3f0e6` · `#fcfbf5` · `#2a2621` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Libre Baskerville
- **Body:** Libre Baskerville
- **Loaded families:** IBM Plex Mono, Libre Baskerville, Lora
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-1`

**Primary button**

```html
<a class="hidden md:block px-5 py-2 border border-[#DCCFB8] rounded text-xs font-['IBM_Plex_Mono'] uppercase tracking-wider hover:bg-[#E7DFC6]/30 transition-all text-[#3F3A33]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Logo cloud (`logo-cloud`)
5. Booking form (`booking`)
6. Team (`team`)
7. Case studies (`case-studies`)
8. Call to action (`cta`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f3f0e6;
  --color-surface: #fcfbf5;
  --color-text: #3f3a33;
  --color-muted: #6a6456;
  --color-border: #3f3a33;
  --color-accent: #c49a5a;
  --font-display: "Libre Baskerville", serif;
  --font-body: "Libre Baskerville", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f0e6',
    surface: '#fcfbf5',
    ink: '#3f3a33',
    muted: '#6a6456',
    line: '#3f3a33',
    accent: '#c49a5a',
  },
  fontFamily: { display: ['Libre Baskerville'], sans: ['Libre Baskerville'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in Libre Baskerville in white over the photograph
- **Do:** Use a cream filled pill and a thin outlined pill for the two hero actions
- **Do:** Crop one inset photo into a circle beside the hero text
- **Don't:** Don't add sans-serif display type; the headlines stay in the serif
- **Don't:** Don't put the white headline over a light area of the photo; it needs the dark wall behind it
- **Don't:** Don't add heavy shadows to the buttons; the pills are flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
