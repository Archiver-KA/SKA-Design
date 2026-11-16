# Design system — netpiedev.in

`SN-W02140` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A confident agency landing page on white (#ffffff) with near-black slate headlines in bold Inter. Emerald green (#059669) marks the emphasised phrases in the headline, the primary button and a small eyebrow pill, and nothing else. The hero is tight and left-aligned, with a soft blue-tinted glow and floating stat cards on the right, so the page reads as a crisp sales page with one accent.

**Mood:** confident, clean, commercial, bright, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f1f5f9` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#059669` · `#0f172a` · `#ffffff` · `#475569` · `#10b981` · `#64748b` · `#f1f5f9` · `#e2e8f0` · `#fbbf24` · `#d1fae5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-slate-200/50`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Services (`services`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f1f5f9;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #059669;
  --color-accent-2: #10b981;
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
    surface: '#f1f5f9',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#059669',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasised phrases of headlines in emerald (#059669) and keep the rest near-black (#0f172a).
- **Do:** Use solid green for the primary button, with a white outline button beside it.
- **Do:** Keep the eyebrow label as a small pill with a light green tint.
- **Don't:** Don't add amber (#fbbf24) to the page; it does not appear on the first screen.
- **Don't:** Don't set whole paragraphs in green.
- **Don't:** Don't remove the blue-tinted glow behind the hero; it balances the green.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
