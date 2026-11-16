# Design system — Non-profit Donation Landing Page Template

`SN-W03630` · events · light mode · Sinera Atlas theme `workshop` · language `ro`

## Direction

A civic donation page that divides colour between two roles: a deep blue photographic panel carries the hero with white headline type, while a pink line opens the headline and fills the primary button. Section grounds stay white, and a serif quotation in deep blue below the fold adds a more personal tone. The result is direct and trustworthy, with the pink reserved for actions.

**Mood:** civic, direct, trustworthy, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#db2777` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#db2777` · `#64748b` · `#1e3a8a` · `#f1f5f9` · `#ec4899` · `#475569` · `#be185d` · `#fbcfe8` · `#f472b6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition-all duration-200 bg-pink-600 rounded-full hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #db2777;
  --color-accent-2: #1e3a8a;
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
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#db2777',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in pink (#db2777) and the second in white on the blue panel
- **Do:** Use the pink for primary donate buttons and the highlighted line only
- **Do:** Keep section grounds white and use deep blue (#1e3a8a) for quotes and hero panels
- **Don't:** Don't set small pink text on white
- **Don't:** Don't use blue for primary action buttons
- **Don't:** Don't add a third accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
