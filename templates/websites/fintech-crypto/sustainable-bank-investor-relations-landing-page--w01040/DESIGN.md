# Design system — Sustainable Bank Investor Relations Landing Page Template

`SN-W01040` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white page with a small dark wordmark and a teal leaf mark uses Inter for type, with slate text (#0f172a) and emerald (#10b981) accents. Large containers have generous corner radii, and blurred glow shapes sit behind the sections. Emerald serves as the brand colour, and the page stays light and quiet.

**Mood:** light, quiet, institutional, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#94a3b8` · `#64748b` · `#f1f5f9` · `#f8fafc` · `#10b981` · `#059669` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Google Sans Flex, Google Sans
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="uppercase text-slate-500 hover:text-slate-900 hover:bg-white transition-all duration-300 text-[11px] font-semibold tracking-widest rounded-full py-2.5 px-6">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Bento grid (`bento-grid`)
7. Call to action (`cta`)
8. Articles (`blog-articles`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #e2e8f0;
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
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground white (#ffffff) with slate text (#0f172a)
- **Do:** Use the emerald (#10b981) for the logo mark and small highlights
- **Do:** Round large containers generously, with a rounded-[2rem] radius.
- **Don't:** Don't use a dark section style; the page is light throughout.
- **Don't:** Don't rely on the blurred glow shapes for contrast; they are decoration
- **Don't:** Don't fill buttons with emerald; keep it to marks and highlights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
