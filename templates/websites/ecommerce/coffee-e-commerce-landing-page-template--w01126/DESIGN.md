# Design system — Coffee E-commerce Landing Page Template

`SN-W01126` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A SaaS-style page for freight data on a pale grey-blue ground. The headline is heavy Inter at large size, with the phrase global freight in indigo (#4f46e5). A floating data card on the right shows a shipment table with status tags, lifted by a soft shadow. Indigo marks the headline emphasis and the primary button, so the page reads as technical and confident.

**Mood:** technical, confident, crisp, data-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f1f5f9` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#4f46e5` · `#0f172a` · `#475569` · `#6366f1` · `#64748b` · `#94a3b8` · `#f1f5f9` · `#eef2ff` · `#f8fafc` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-indigo-500/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="relative block h-full w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f1f5f9;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #4f46e5;
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
    background: '#f1f5f9',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#4f46e5',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter, with the key phrase in indigo (#4f46e5)
- **Do:** Show the product as a card with a table and small status tags
- **Do:** Keep the primary button filled indigo and the secondary action as plain text
- **Don't:** Don't use the emerald (#10b981) for buttons; it appears only in status tags
- **Don't:** Don't fill the hero with decorative shapes
- **Don't:** Don't add a second heavy accent beside the indigo

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
