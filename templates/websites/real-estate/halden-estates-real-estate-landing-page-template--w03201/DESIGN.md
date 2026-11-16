# Design system — Halden Estates Real Estate Landing Page Template

`SN-W03201` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light luxury-estate page on warm off-white (#f7f5f0), with a large near-black serif-style headline set in two lines. Labels and reviews are small and grey, and amber dots mark the locations. The layout is wide and calm, with a large rounded image panel as the main element below the headline.

**Mood:** luxurious, calm, airy, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f5f0` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#111827` · `#9ca3af` · `#000000` · `#6b7280` · `#d97706` · `#f7f5f0` · `#d1d5db` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, DM Serif Display, DM Sans
- **Scale (largest breakpoint):** h1 112px · h2 60px · h3 24px · body 18px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-7xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-4`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-2 border border-white/30 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-colors text-sm font-medium font-dm-sans">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Stats band (`stats`)
6. Timeline (`timeline`)
7. Product grid (`product-grid`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f7f5f0;
  --color-surface: #111827;
  --color-text: #000000;
  --color-muted: #ffffff;
  --color-border: #d1d5db;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f5f0',
    surface: '#111827',
    ink: '#000000',
    muted: '#ffffff',
    line: '#d1d5db',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines large and tight in near-black, in two lines
- **Do:** Use amber (#f59e0b) only for location dots and small markers
- **Do:** Use a large rounded image panel as the main element below the headline
- **Don't:** Don't use the dark navy or amber as page backgrounds
- **Don't:** Don't set small labels in black; keep them grey
- **Don't:** Don't add busy patterns behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
