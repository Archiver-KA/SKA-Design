# Design system — Cinematic Video Editor Portfolio Template

`SN-W01864` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black green hero where a large white sans headline sits over a grey-to-white gradient subtitle, with a soft dark-green glow behind. Lime (#b6ff3c) is the only accent: it colours the logo mark, the status dot and the solid Hire Me pill. Outlined pills and small social chips sit beneath the call to action in muted grey.

**Mood:** cinematic, neon-accented, dark, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050807` | Page ground |
| Surface | `#0a1912` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a0b3a8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b6ff3c` | Primary action and highlights |
| Second accent | `#00ffc6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#b6ff3c` · `#a0b3a8` · `#00ffc6` · `#050807` · `#6b7f75` · `#0a1912` · `#000000` · `#001916` · `#0b1410`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-black`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="mt-3 block w-full text-center py-2 text-xs bg-[#B6FF3C]/10 text-[#B6FF3C] rounded-lg border border-[#B6FF3C]/20 hover:bg-[#B6FF3C]/20 transition-colors font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Pricing (`pricing`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050807;
  --color-surface: #0a1912;
  --color-text: #ffffff;
  --color-muted: #a0b3a8;
  --color-border: #ffffff;
  --color-accent: #b6ff3c;
  --color-accent-2: #00ffc6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050807',
    surface: '#0a1912',
    ink: '#ffffff',
    muted: '#a0b3a8',
    line: '#ffffff',
    accent: '#b6ff3c',
    accent2: '#00ffc6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#b6ff3c) for the single primary button and the status dot
- **Do:** Set the subtitle in a grey-to-white gradient beneath the headline
- **Do:** Keep secondary actions as outlined grey pills
- **Don't:** Don't use the cyan (#00ffc6) accent beside the lime
- **Don't:** Don't use lime for body text
- **Don't:** Don't place a second bright button beside the lime pill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
