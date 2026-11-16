# Design system — Everett Electric Service Landing Page Template

`SN-W03900` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark navy ground with a warm amber accent gives this electrical service page a confident, trade-focused tone. Inter carries the headline at heavy weight, and the key words are set in amber so they stand out from the white type. The amber button is the strongest element on the first screen, while the secondary action is a quiet outlined pill beside it.

**Mood:** bold, trade-focused, warm, direct, grounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a2744` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#f5a623` | Primary action and highlights |
| Second accent | `#1a2744` | Supporting highlights |

Palette by frequency of use: `#1a2744` · `#f5a623` · `#ffffff` · `#0f172a` · `#e2e8f0` · `#f1f5f9` · `#64748b` · `#94a3b8` · `#1e293b` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-[#f5a623] text-[#1a2744] text-sm font-semibold hover:bg-[#e0961f] transition-colors shadow-[0_0_20px_rgba(245,166,35,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Articles (`blog-articles`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1a2744;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #f5a623;
  --color-accent-2: #1a2744;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a2744',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#f5a623',
    accent2: '#1a2744',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key words of each headline in amber (#f5a623) and keep the rest in white.
- **Do:** Use the amber button for the primary quote action only.
- **Do:** Keep the hero on the navy ground with the amber-lit card.
- **Don't:** Don't use amber for body text or links; it is reserved for emphasis and the primary button.
- **Don't:** Don't add a second accent colour such as blue or green.
- **Don't:** Don't set the hero headline in a serif face; keep Inter.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
