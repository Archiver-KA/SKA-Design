# Design system — Solana DeFi Privacy Landing Page Template

`SN-W01034` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A navy institutional page has a deep navy hero ground (#0a2342) with white headlines and a pale blue-grey (#94a3b8) for the emphasised phrase. The gold (#f0b429) primary button is the only warm colour, and it sits against the cool navy as the recognisable accent. The headline is a regular-weight sans with a two-tone split, which reads as private banking rather than crypto.

**Mood:** institutional, navy, measured, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a2342` | Page ground |
| Surface | `#94a3b8` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#334155` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f0b429` | Primary action and highlights |
| Second accent | `#0a2342` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f0b429` · `#94a3b8` · `#cbd5e1` · `#0a2342` · `#64748b` · `#1e3a5f` · `#334155` · `#60a5fa` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(240,180,41,0.3)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded border border-white/20 hover:bg-white/5 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Stats band (`stats`)
5. Listings (`listings`)
6. Comparison (`comparison`)
7. FAQ (`faq`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a2342;
  --color-surface: #94a3b8;
  --color-text: #ffffff;
  --color-muted: #334155;
  --color-border: #ffffff;
  --color-accent: #f0b429;
  --color-accent-2: #0a2342;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a2342',
    surface: '#94a3b8',
    ink: '#ffffff',
    muted: '#334155',
    line: '#ffffff',
    accent: '#f0b429',
    accent2: '#0a2342',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the gold (#f0b429) only for the primary button and key highlights
- **Do:** Keep the hero and header on navy (#0a2342) with white headlines
- **Do:** Set the emphasised phrase of each headline in pale blue-grey (#94a3b8)
- **Don't:** Don't use the gold for body text or links; it is reserved for the primary action
- **Don't:** Don't add gradients or glows to the navy ground; it stays flat
- **Don't:** Don't add a second accent colour beside the gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
