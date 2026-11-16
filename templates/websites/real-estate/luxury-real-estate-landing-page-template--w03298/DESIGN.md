# Design system — Luxury Real Estate Landing Page Template

`SN-W03298` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The page is warm and editorial: an off-white field, a large IBM Plex Serif headline in dark brown (#3d2a24), and one orange (#d5762b) button that carries the call to action. The second headline line is set in muted taupe (#7c6c6a) rather than a smaller size, so contrast comes from colour instead of scale. A plain sans navigation keeps the top sober.

**Mood:** warm, editorial, sober, contrast-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffcfa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#3d2a24` | Headings and primary copy |
| Muted text | `#7c6c6a` | Secondary copy, captions |
| Border | `#edeae8` | Hairlines, dividers, outlines |
| Accent | `#d5762b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#7c6c6a` · `#3d2a24` · `#d5762b` · `#000000` · `#f7f4f2` · `#edeae8` · `#8a7a78` · `#e6e3e1` · `#f5f3f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Serif
- **Body:** IBM Plex Serif
- **Loaded families:** IBM Plex Serif, Spline Sans
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-1.5`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-gradient-to-b from-[#d5762b] to-[#bc5823] text-white px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all text-sm font-medium border border-[#f91b35bf]/20">…</a>
```

## Page structure

Blocks in page order:

1. Map / location (`map-location`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Listings (`listings`)
6. Feature grid (`features`)
7. Newsletter signup (`newsletter`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js, Spline 3D
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fffcfa;
  --color-surface: #ffffff;
  --color-text: #3d2a24;
  --color-muted: #7c6c6a;
  --color-border: #edeae8;
  --color-accent: #d5762b;
  --font-display: "IBM Plex Serif", serif;
  --font-body: "IBM Plex Serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffcfa',
    surface: '#ffffff',
    ink: '#3d2a24',
    muted: '#7c6c6a',
    line: '#edeae8',
    accent: '#d5762b',
  },
  fontFamily: { display: ['IBM Plex Serif'], sans: ['IBM Plex Serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in IBM Plex Serif in dark brown (#3d2a24).
- **Do:** Use orange (#d5762b) only on the primary consultation button.
- **Do:** Set the secondary headline line in muted taupe (#7c6c6a).
- **Don't:** Don't use orange for large text or background areas.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't use pure black for headlines; keep the text warm brown.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
