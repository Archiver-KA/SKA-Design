# Design system — Email Marketing Agency Landing Page Template

`SN-W01563` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black starfield ground with heavy uppercase Inter headlines set tight over three lines, and one orange (#f97316) for the primary button and status accents. The hero pairs the copy with a dark rounded revenue card whose bar-style rows form the data language. Black, white and a single warm accent carry the page, with no light panels in the first screen.

**Mood:** high-contrast, urgent, dark, data-driven, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#a3a3a3` · `#000000` · `#737373` · `#fb923c` · `#d4d4d4` · `#22c55e` · `#050505` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Bricolage Grotesque, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 76px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-inner`, `shadow-orange-500/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group relative flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-t from-yellow-200 via-orange-400 to-orange-500 px-8 py-3 text-lg font-semibold text-[#2c1306] shadow-[0_0_40px_-5px_rgba(249,115,22,0.6)] ring-1 ring-inset ring-white/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(249,115,22,0.8)] font-sans">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Pricing (`pricing`)
6. Logo cloud (`logo-cloud`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
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
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the orange (#f97316) for the primary button and status highlights only
- **Do:** Set headlines in Inter, uppercase, with tight line spacing
- **Do:** Show metrics on dark rounded cards with thin progress bars
- **Don't:** Don't use the orange as a background for large areas
- **Don't:** Don't remove the dark ground; the page depends on black contrast
- **Don't:** Don't add light cards to the hero; keep the product panels dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
