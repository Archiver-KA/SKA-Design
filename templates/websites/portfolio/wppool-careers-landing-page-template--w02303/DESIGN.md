# Design system — WPPOOL Careers Landing Page Template

`SN-W02303` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a heavy dark-navy sans headline whose closing phrase turns solid orange, the only warm colour on the page. A small uppercase pill sits above the headline, and the primary button is solid orange beside a white outlined secondary. A faint grey glow behind the hero keeps the top light and the orange focused.

**Mood:** bright, confident, corporate, warm accent, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#e2e8f0` · `#f1f5f9` · `#94a3b8` · `#f8fafc` · `#475569` · `#1e293b` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-brand-orange/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-slate-900 rounded-full hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Team (`team`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Product grid (`product-grid`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #e2e8f0;
  --color-accent-2: #16a34a;
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
    line: '#f1f5f9',
    accent: '#e2e8f0',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy dark sans with the closing phrase in orange
- **Do:** Use the orange only for the headline phrase and the primary button
- **Do:** Keep a small uppercase pill above the headline
- **Don't:** Don't use the pale slate (#e2e8f0) as an accent; it is a surface tint
- **Don't:** Don't fill secondary buttons with orange
- **Don't:** Don't put dark sections at the top; the hero stays on white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
