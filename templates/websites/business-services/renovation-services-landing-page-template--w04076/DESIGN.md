# Design system — Renovation Services Landing Page Template

`SN-W04076` · business-services · light mode · Sinera Atlas theme `route` · language `es`

## Direction

A photographic hero where a large white sans headline in capitals is paired with an italic light-blue second word, set over an interior photograph. A wide-tracked eyebrow label sits above it, and a frosted card holds the service details beside the photo. The palette is restrained, and the photography supplies most of the colour.

**Mood:** architectural, calm, editorial, restrained, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#334155` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#334155` · `#64748b` · `#151515` · `#cbd5e1` · `#000000` · `#020617` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Bricolage Grotesque, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full font-medium text-lg py-4 rounded-xl hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg bg-cyan-600 text-white shadow-cyan-900/20 group mt-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Listings (`listings`)
5. Testimonials (`testimonials`)
6. Bento grid (`bento-grid`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #334155;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
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
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#334155',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white capitals, with the closing word in italic light blue
- **Do:** Put a wide-tracked eyebrow label above the headline
- **Do:** Hold the service details in a frosted card with dark text
- **Don't:** Don't place the frosted card over the headline
- **Don't:** Don't set body copy in the italic style
- **Don't:** Don't add strong colour to the hero beyond the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
