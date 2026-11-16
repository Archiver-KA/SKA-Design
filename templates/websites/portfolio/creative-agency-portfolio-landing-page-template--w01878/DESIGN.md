# Design system — Creative Agency Portfolio Landing Page Template

`SN-W01878` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with large white Inter headlines at heavy weight, where one word in each heading is set in grey italic serif. Colour is almost absent: white, grey and black carry the page, and the primary action is a pale pill button. Depth comes from the dark field and small uppercase navigation rather than from accent colour, so the page reads as cinematic and editorial.

**Mood:** cinematic, monochrome, editorial, high-contrast, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#581c87` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00fa9a` · `#000000` · `#a3a3a3` · `#737373` · `#050505` · `#525252` · `#0a0a0a` · `#d4d4d4` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 100px · h2 72px · h3 24px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_25px_-5px_rgba(255,255,255,0.3)]`, `shadow-[0_0_20px_-5px_rgba(0,250,154,0.3)]`, `shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 rounded-lg bg-[#00FA9A] text-black text-sm font-semibold hover:bg-[#00e08b] transition-colors shadow-lg shadow-[#00FA9A]/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. About (`about`)
6. Case studies (`case-studies`)
7. Services (`services`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #581c87;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#581c87',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at heavy weight in white on near-black (#000000).
- **Do:** Use one grey italic serif word per headline as the only typographic contrast.
- **Do:** Make the primary button a pale pill; do not add saturated colour.
- **Don't:** Don't add saturated accent colours; the palette stays white, grey and black.
- **Don't:** Don't place the hero on a light ground; the look depends on the black field.
- **Don't:** Don't set the italic word in sans; the serif contrast is the point.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
