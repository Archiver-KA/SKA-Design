# Design system — Real Estate Personal Brand Landing Page Template

`SN-W02203` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A direct, conversion-focused light layout in Inter with a heavy, tightly set three-line headline. The first and last lines are near-black navy (#0f172a) and the middle line steps down to slate grey, which creates emphasis without colour. Buttons are dark navy and the imagery is a large rounded portrait, so the page leans on contrast and one person rather than decoration.

**Mood:** direct, high-contrast, professional, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#f1f5f9` · `#475569` · `#e2e8f0` · `#334155` · `#64748b` · `#f8fafc` · `#cbd5e1` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="flex justify-center items-center w-full py-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Testimonials (`testimonials`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. About (`about`)
8. FAQ (`faq`)
9. Timeline (`timeline`)
10. Booking form (`booking`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #0f172a;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#0f172a',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter with the middle line in slate grey (#475569)
- **Do:** Make the primary button dark navy (#0f172a) with white text
- **Do:** Keep the page white and use grey only for supporting copy
- **Don't:** Don't use the light grey (#e2e8f0) for buttons; it works as a surface tint
- **Don't:** Don't add coloured accents; the page is navy and grey only
- **Don't:** Don't crop the portrait tightly against the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
