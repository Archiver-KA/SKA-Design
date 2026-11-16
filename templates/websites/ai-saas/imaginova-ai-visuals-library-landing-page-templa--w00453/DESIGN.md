# Design system — Imaginova AI Visuals Library Landing Page Template

`SN-W00453` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, glossy AI-image showcase on a near-black ground with cyan (#06b6d4) and violet highlights, and small colourful tiles floating around the hero. Plus Jakarta Sans at heavy weight sets large, tight headlines, while glass-style pills and rounded cards hold the controls. Colour comes from the tiles and the imagery, and the interface itself stays neutral and gallery-like.

**Mood:** glossy, neutral interface, gallery-like, dark, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050510` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#d946ef` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#6ee7b7` · `#22d3ee` · `#06b6d4` · `#6366f1` · `#050510` · `#d946ef` · `#10b981` · `#0ea5e9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Inter, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-black/40`, `shadow-black/50`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-14`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full bg-white text-black hover:bg-white/90 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Video / media (`video-media`)
6. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050510;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #d946ef;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050510',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#d946ef',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Keep the interface neutral and let the generated images carry the colour
- **Do:** Use cyan (#06b6d4) for the primary button and the active filter
- **Do:** Set headlines in Plus Jakarta Sans at heavy weight with tight spacing
- **Don't:** Don't tint the whole page with the violet accent
- **Don't:** Don't place more than one floating tile in each corner
- **Don't:** Don't use a serif face for headings; the style is sans throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
