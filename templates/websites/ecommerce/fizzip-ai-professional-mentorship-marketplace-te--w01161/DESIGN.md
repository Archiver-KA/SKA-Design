# Design system — Fizzip AI Professional Mentorship Marketplace Template

`SN-W01161` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A search-first professional marketplace on white, with a large centred question as the headline and a wide search field beneath it. The announcement bar is dark slate (#0f172a), the main action is blue (#2563eb), and a purple gradient (#7c3aed) marks the AI coaching feature. Panels are light grey cards with rounded corners, and a row of step tabs floats at the bottom of the screen.

**Mood:** focused, professional, clean, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#7c3aed` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#64748b` · `#94a3b8` · `#475569` · `#7c3aed` · `#2563eb` · `#f8fafc` · `#ede9fe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 20px · h2 30px · h3 18px · body 16px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-black/20`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-base hover:bg-blue-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Announcement bar (`announcement-bar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Product grid (`product-grid`)
6. Timeline (`timeline`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --color-accent-2: #7c3aed;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
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
    muted: '#64748b',
    line: '#ffffff',
    accent: '#2563eb',
    accent2: '#7c3aed',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the blue (#2563eb) for search and other primary actions.
- **Do:** Reserve the purple (#7c3aed) for the AI coaching card and its button.
- **Do:** Keep the dark announcement bar (#0f172a) to one line of text and one link.
- **Don't:** Don't use the light grey (#e2e8f0) as an accent; it is a surface colour.
- **Don't:** Don't add a second search field; one centred search is the entry point.
- **Don't:** Don't put the blue and the purple on the same button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
