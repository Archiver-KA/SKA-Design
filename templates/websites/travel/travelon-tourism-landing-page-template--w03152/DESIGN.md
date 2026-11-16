# Design system — TravelOn Tourism Landing Page Template

`SN-W03152` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A full-bleed travel hero: an aerial photograph of turquoise sea and boats fills the screen, with a large white italic serif headline centred over it and a lime-green (#a3e635) pill button as the one bright action. The nav is small serif, light on the photo, so the page leans on the image and the lime button.

**Mood:** vivid, photographic, breezy, bright, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#a3e635` · `#ffffff` · `#0f172a` · `#000000` · `#94a3b8` · `#64748b` · `#1e293b` · `#e2e8f0` · `#cbd5e1` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-lime-400 text-slate-900 px-8 py-3 rounded-full text-sm font-semibold hover:bg-lime-300 transition-colors uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Newsletter signup (`newsletter`)
7. Pricing (`pricing`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #1e293b;
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
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large white italic serif over the photograph
- **Do:** Use the lime green (#a3e635) for the primary button only
- **Do:** Keep the nav in small serif, light on the photo
- **Don't:** Don't set body copy in dark grey over the photo
- **Don't:** Don't use lime for text on white; the contrast is weak
- **Don't:** Don't add a second bright button colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
