# Design system — Luxury Pen Brand Landing Page Template

`SN-W02096` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale, typographic pen-brand page: an off-white ground [#fdfdfb] with a large dark navy serif headline split over two lines, and a smaller grey serif subline beneath. A pen-tip graphic overlaps the middle of the headline and is the only object in the first screen. The small caption at the foot is quiet, so the headline itself reads as the image.

**Mood:** quiet, literary, precise, pale, typographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfdfb` | Page ground |
| Surface | `#fdfdfb` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#fef08a` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#334155` · `#64748b` · `#1e293b` · `#cbd5e1` · `#fdfdfb` · `#ffffff` · `#e2e8f0` · `#94a3b8` · `#0b1120`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter, Pinyon Script, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 128px · h2 48px · body 48px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-16`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="font-sans-clean text-xs tracking-widest uppercase border border-slate-200 px-6 py-3 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-500 rounded-sm font-custom">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fdfdfb;
  --color-surface: #fdfdfb;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #1e293b;
  --color-accent-2: #fef08a;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfdfb',
    surface: '#fdfdfb',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#1e293b',
    accent2: '#fef08a',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in a dark navy serif (#0f172a) on the off-white ground.
- **Do:** Use the grey (#64748b) for sublines and captions only.
- **Do:** Keep the first screen to one headline, one subline and one small caption.
- **Don't:** Don't add a background colour block; the page stays off-white.
- **Don't:** Don't set body copy in navy at large sizes; navy is for headlines.
- **Don't:** Don't crowd the pen graphic with other images or icons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
