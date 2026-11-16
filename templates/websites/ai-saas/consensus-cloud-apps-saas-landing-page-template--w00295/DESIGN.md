# Design system — Consensus Cloud Apps SaaS Landing Page Template

`SN-W00295` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light SaaS page on a white ground, with a purple-to-blue gradient on the hero product name and navy as the solid colour for buttons. The palette is cool and corporate, with slate body text and hairline borders between sections. Inter sets the whole page, the hero headline is large and heavy, and a small pill announcement sits above it.

**Mood:** corporate, cool, clear, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e3a8a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#003366` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1d4ed8` · `#475569` · `#0f172a` · `#64748b` · `#e2e8f0` · `#94a3b8` · `#003366` · `#eff6ff` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="text-sm font-medium px-5 py-2.5 rounded-full transition-colors bg-[#003366] text-white hover:bg-blue-900 shadow-md shadow-blue-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Process / steps (`how-it-works`)
5. Call to action (`cta`)
6. Pricing (`pricing`)
7. Team (`team`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #1e3a8a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #003366;
  --color-accent-2: #f59e0b;
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
    surface: '#ffffff',
    ink: '#1e3a8a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#003366',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use navy (#003366) for the primary button and the trial call to action
- **Do:** Set the hero headline large and heavy, with the gradient on the product name only
- **Do:** Separate sections with pale slate hairlines (#e2e8f0)
- **Don't:** Don't fill large areas with navy; it is for buttons and small emphasis
- **Don't:** Don't use the pale blue (#dbeafe) as the page ground
- **Don't:** Don't publish with a missing partner logo

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
