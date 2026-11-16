# Design system — Recruitment & Placement Landing Page Template

`SN-W04071` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A bright, product-style hero on a pale slate ground, with a heavy dark headline in which one word, fast, is set in indigo (#4f46e5). A floating job-board card with small status tags shows the service in use, and green marks live status. Indigo is kept for the highlighted word and the primary action, so the page reads as a clear, modern tool.

**Mood:** modern, clear, product-led, crisp, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#475569` · `#4f46e5` · `#e2e8f0` · `#f1f5f9` · `#64748b` · `#94a3b8` · `#f8fafc` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex-1 sm:flex-none bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-lg shadow-indigo-200 hover:-translate-y-1 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Code / terminal (`code-terminal`)
7. Call to action (`cta`)
8. Testimonials (`testimonials`)
9. Feature grid (`features`)
10. FAQ (`faq`)
11. Case studies (`case-studies`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #4f46e5;
  --color-accent-2: #059669;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
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
    accent: '#4f46e5',
    accent2: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy sans in dark slate, with one key word in indigo (#4f46e5)
- **Do:** Use indigo only for the highlighted word and the primary button
- **Do:** Show the product as a bordered card with small coloured status tags
- **Don't:** Don't use green for buttons; green is reserved for live and positive status tags
- **Don't:** Don't add more than one highlighted word to a headline
- **Don't:** Don't remove the bordered status tags from the product card; they carry its detail

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
