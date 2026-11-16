# Design system — IV Therapy Clinic Landing Page Template

`SN-W02422` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The IV clinic hero is a dark teal screen (#1e404a) with a large white headline and a two-tone second line that runs from turquoise (#0e9ec1) to olive (#a1a438). Turquoise is the primary button colour, and a thin announcement bar sits above the nav. The effect is spa-like and calm, carried by colour and gradient text rather than photography.

**Mood:** spa-like, calm, clinical, fresh

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1e404a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0e9ec1` | Primary action and highlights |
| Second accent | `#a1a438` | Supporting highlights |

Palette by frequency of use: `#0e9ec1` · `#ffffff` · `#1e404a` · `#64748b` · `#a1a438` · `#f8fafc` · `#f1f5f9` · `#cbd5e1` · `#e2e8f0` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#0E9EC1] hover:bg-[#1E404A] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1e404a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0e9ec1;
  --color-accent-2: #a1a438;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1e404a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0e9ec1',
    accent2: '#a1a438',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white over the dark teal (#1e404a) ground
- **Do:** Set the second headline line in turquoise (#0e9ec1) fading to olive (#a1a438)
- **Do:** Use turquoise for the primary button and an outlined pill for the secondary
- **Don't:** Don't use a light grey ground for the hero; the ground is dark teal
- **Don't:** Don't use the gradient text on body copy; it is for the headline only
- **Don't:** Don't fill the outlined secondary button; it stays an outline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
