# Design system — Barbershop Landing Page Template

`SN-W02712` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `de`

## Direction

German barber page on a warm cream ground (#f8f5f1) with a large dark serif headline, its second line in italic grey, and a small italic subline below. Deep green (#1a4d2e) is the single accent on the nav and primary button. A thin-lined circular diagram with crosshairs and a centred wordmark gives the hero a precise, technical feel that matches the brand's exactness.

**Mood:** precise, warm, classic, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f5f1` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#1c1917` | Hairlines, dividers, outlines |
| Accent | `#1a4d2e` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#57534e` · `#78716c` · `#000000` · `#292524` · `#a8a29e` · `#f8f5f1` · `#e7e5e4` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-[#1A4D2E] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#143d24] transition-all shadow-lg shadow-green-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. Services (`services`)
7. Comparison (`comparison`)
8. Gallery / portfolio (`gallery-portfolio`)
9. About (`about`)
10. Map / location (`map-location`)
11. FAQ (`faq`)
12. Booking form (`booking`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f8f5f1;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #1c1917;
  --color-accent: #1a4d2e;
  --color-accent-2: #eab308;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f5f1',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#1c1917',
    accent: '#1a4d2e',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a dark serif (#292524) with the second line in italic grey (#78716c).
- **Do:** Use deep green (#1a4d2e) for the primary button and nav CTA only.
- **Do:** Draw supporting graphics in thin hairlines in the border tone, not in filled shapes.
- **Don't:** Don't use the yellow (#eab308) for buttons; green is the button colour.
- **Don't:** Don't fill the diagram circles with colour; keep them as outlines.
- **Don't:** Don't set the headline in sans; the serif is central to the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
