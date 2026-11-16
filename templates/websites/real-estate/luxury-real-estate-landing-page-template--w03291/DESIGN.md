# Design system — Luxury Real Estate Landing Page Template

`SN-W03291` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Polished and product-led, on a dark slate ground (#0f172a) with a soft grey gradient. A heavy white sans headline runs in two lines, and one word carries a pink-to-lavender gradient that is the page's only expressive colour. Translucent stat cards with thin borders line the lower edge, giving the first screen the feel of a dashboard rather than a brochure.

**Mood:** polished, product-led, modern, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#86198f` | Primary action and highlights |
| Second accent | `#b45309` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#86198f` · `#0f172a` · `#475569` · `#94a3b8` · `#701a75` · `#e2e8f0` · `#64748b` · `#f8fafc` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 96px · h3 60px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-purple-200`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="w-full bg-fuchsia-800 text-white py-3 rounded-lg text-sm font-medium hover:bg-fuchsia-900 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Listings (`listings`)
3. Services (`services`)
4. Stats band (`stats`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #86198f;
  --color-accent-2: #b45309;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#86198f',
    accent2: '#b45309',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the pink-violet gradient on one highlighted word of each headline only.
- **Do:** Keep stat cards as translucent dark panels with thin borders.
- **Do:** Set headlines in bold white sans.
- **Don't:** Don't apply the gradient to whole headlines; it is for one word.
- **Don't:** Don't use solid violet buttons; the buttons are white and outlined.
- **Don't:** Don't place the stat cards on light backgrounds.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
