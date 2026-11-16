# Design system — Canadian Real Estate Landing Page Template

`SN-W03207` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photographic Canadian real estate page where a wide mountain-lodge photograph carries the hero, with a large white sans-serif headline centred over it. A copper button and a white pill search bar sit below the headline. The palette is cool snow tones with a single warm copper accent.

**Mood:** photographic, warm, grand, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#c6844e` | Primary action and highlights |
| Second accent | `#c6844e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#e2e8f0` · `#f8fafc` · `#f1f5f9` · `#94a3b8` · `#000000` · `#475569` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 30px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Listings (`listings`)
5. Map / location (`map-location`)
6. Feature grid (`features`)
7. Product grid (`product-grid`)
8. Testimonials (`testimonials`)
9. Team (`team`)
10. Timeline (`timeline`)
11. FAQ (`faq`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #c6844e;
  --color-accent-2: #c6844e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#c6844e',
    accent2: '#c6844e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans-serif, centred over the photograph
- **Do:** Use the copper (#c6844e) for the search and primary buttons only
- **Do:** Put the search bar in a single white rounded panel below the headline
- **Don't:** Don't place the headline over bright snow without a dark scrim
- **Don't:** Don't use copper for body text or links
- **Don't:** Don't add other warm colours to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
