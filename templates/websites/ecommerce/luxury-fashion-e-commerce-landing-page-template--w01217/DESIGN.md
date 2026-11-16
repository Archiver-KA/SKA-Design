# Design system — Luxury Fashion E-commerce Landing Page Template

`SN-W01217` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A cool, minimal fashion stance: a mid slate hero with an oversized bold wide sans-serif headline in white, and a second word in light italic. A navy announcement bar with white uppercase text sits above widely tracked navigation. The two buttons are a solid white and a thin outline, and the palette stays in slate, navy and white.

**Mood:** cool, minimal, editorial, contemporary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#94a3b8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#0f172a` · `#64748b` · `#f8fafc` · `#f1f5f9` · `#cbd5e1` · `#475569` · `#000000` · `#fcfcfc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 160px · h2 72px · h3 24px · body 16px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1800px]`, `max-w-4xl`
- **Section padding:** `py-40`
- **Common gaps:** `gap-4`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto bg-white text-slate-900 px-14 py-5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-slate-100 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Marquee (`marquee`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Bento grid (`bento-grid`)
6. Articles (`blog-articles`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #94a3b8;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #0f172a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#94a3b8',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#0f172a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in oversized bold sans-serif in white, with the last word in light italic.
- **Do:** Use the navy (#0f172a) for the announcement bar and dark text only.
- **Do:** Keep navigation in small, widely tracked uppercase with a single search field.
- **Don't:** Don't set the hero on a near-white ground; keep it slate grey.
- **Don't:** Don't add a warm accent colour; the palette is slate, navy and white.
- **Don't:** Don't use a thick border on the outline button; keep it thin.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
