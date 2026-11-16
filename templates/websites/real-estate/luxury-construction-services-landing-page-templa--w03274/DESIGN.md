# Design system — Luxury Construction Services Landing Page Template

`SN-W03274` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Confident and plain, on a white ground with a heavy sans headline set tight and large in deep navy (#0f172a) and supporting copy in slate grey. A solid navy button and an outlined button carry the calls to action, and a pale slate badge sits above the headline. The hero pairs text on the left with a framed kitchen photograph on the right, so the overall look is practical and trustworthy.

**Mood:** practical, confident, clean, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#0f172a` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#e2e8f0` · `#f8fafc` · `#475569` · `#cbd5e1` · `#94a3b8` · `#334155` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-none`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-6`, `gap-16`, `gap-8`

**Primary button**

```html
<a class="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Services (`services`)
5. Listings (`listings`)
6. Team (`team`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #0f172a;
  --color-accent: #0f172a;
  --color-accent-2: #f59e0b;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#0f172a',
    accent: '#0f172a',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use deep navy (#0f172a) for headlines and the primary button.
- **Do:** Keep body copy in slate grey (#475569) at a comfortable reading size.
- **Do:** Set the badge in pale slate with small text above the headline.
- **Don't:** Don't use the amber as a fill for large areas.
- **Don't:** Don't add rounded decorative shapes behind the photograph.
- **Don't:** Don't set headlines in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
