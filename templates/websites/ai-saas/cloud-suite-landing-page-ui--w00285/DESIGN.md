# Design system — Cloud Suite Landing Page UI

`SN-W00285` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A restrained monochrome page on pure black, with off-white type and warm grey secondary text. Colour is almost absent: the primary button is off-white and the only other emphasis is a light gradient on one word of the headline. The layout is a conventional top navigation with a centred hero, so the look comes from contrast and spacing rather than from accent colour.

**Mood:** monochrome, restrained, clean, corporate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0c0a09` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#f5f5f4` | Primary action and highlights |

Palette by frequency of use: `#f5f5f4` · `#a8a29e` · `#000000` · `#292524` · `#d6d3d1` · `#e7e5e4` · `#1c1917` · `#0c0a09` · `#78716c` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 14px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md transition-all bg-stone-100 text-black hover:bg-stone-200 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Articles (`blog-articles`)
6. Integrations (`integrations`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Spline 3D, Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0c0a09;
  --color-text: #f1f5f9;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #f5f5f4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0c0a09',
    ink: '#f1f5f9',
    muted: '#78716c',
    line: '#292524',
    accent: '#f5f5f4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on pure black (#000000) with off-white (#f5f5f4) for the primary button
- **Do:** Use a light gradient on one headline word for emphasis, and nothing else
- **Do:** Set the navigation and secondary text in muted warm grey
- **Don't:** Don't add a brand colour; the design relies on greyscale
- **Don't:** Don't use more than one gradient word per headline
- **Don't:** Don't fill the primary button with a saturated colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
