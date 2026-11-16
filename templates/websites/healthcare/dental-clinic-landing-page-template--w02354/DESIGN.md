# Design system — Dental Clinic Landing Page Template

`SN-W02354` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A bright, clean dental page on white with near-black headlines and a cyan-to-blue gradient on the second line ('Confidence.'). The primary button is solid cyan (#0891b2) with white text, and the secondary is a pale outline. A tall photo card sits to the right with a white floating card for finance details, so the page reads as clear and modern.

**Mood:** clear, bright, modern, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0891b2` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0891b2` · `#0f172a` · `#f1f5f9` · `#06b6d4` · `#64748b` · `#94a3b8` · `#22d3ee` · `#334155` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-slate-900 text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 hover:bg-cyan-600 text-white hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Map / location (`map-location`)
4. Services (`services`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #0891b2;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#0891b2',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the second line of each headline in a cyan-to-blue gradient and keep the first line near-black.
- **Do:** Make the primary button a solid cyan (#0891b2) pill with white text.
- **Do:** Use white floating cards with a small cyan label over the hero image.
- **Don't:** Don't use the pale cyan (#cffafe) as a page background; the rendered page is white.
- **Don't:** Don't set headlines in a serif.
- **Don't:** Don't use cyan for body text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
