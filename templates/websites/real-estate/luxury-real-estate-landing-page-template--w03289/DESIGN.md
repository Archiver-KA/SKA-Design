# Design system — Luxury Real Estate Landing Page Template

`SN-W03289` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Bright and confident: a grey gradient ground carries a heavy white sans headline in two lines, with one phrase picked out in pale blue. A white search card sits centred below the subhead, and its saturated blue search button is the only strong colour on the screen. The cool grey and blue palette keeps the page clean and trustworthy.

**Mood:** confident, clean, cool, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#94a3b8` · `#f1f5f9` · `#f8fafc` · `#64748b` · `#475569` · `#1e293b` · `#334155` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="flex items-center gap-2 text-xs font-medium bg-brand-600 text-white px-4 py-2.5 rounded-full hover:bg-brand-700 transition-all shadow-sm shadow-brand-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Listings (`listings`)
5. Services (`services`)
6. Call to action (`cta`)
7. About (`about`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --color-accent-2: #facc15;
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
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e293b',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy white sans, with the key phrase in pale blue.
- **Do:** Keep the blue for the search and valuation buttons only.
- **Do:** Place the search card centred under the subhead on the grey ground.
- **Don't:** Don't lighten the grey ground to white behind the headline.
- **Don't:** Don't set body copy in blue.
- **Don't:** Don't add a warm colour; the page stays cool.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
