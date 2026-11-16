# Design system — Evoklingen Premium Cutlery E-commerce Template

`SN-W01153` · ecommerce · light mode · Sinera Atlas theme `market` · language `de`

## Direction

A restrained, craft-led cutlery page on a pale slate ground with a soft radial glow behind the centred hero. The headline is set in a heavy system sans-serif in near-black (#0f172a), and the action colour is the dark slate #1e293b, used as a solid button beside an outline button. Small uppercase eyebrow labels with a dot signal heritage, and the page relies on whitespace and type rather than colour.

**Mood:** refined, monochrome, craft, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e2e8f0` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#e2e8f0` · `#64748b` · `#f8fafc` · `#cbd5e1` · `#ffffff` · `#94a3b8` · `#f1f5f9` · `#334155` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm ring-1 ring-inset ring-slate-900/10 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e2e8f0;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #1e293b;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e2e8f0',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#1e293b',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use #1e293b solid for the primary button, with an outline button beside it for the secondary action.
- **Do:** Set headlines in bold system sans-serif with tight line spacing, centred over the hero.
- **Do:** Introduce small uppercase eyebrow labels with a leading dot above section headings.
- **Don't:** Don't add a second accent colour; the page is monochrome slate.
- **Don't:** Don't remove the hero glow; it is the only decoration on the first screen.
- **Don't:** Don't set headlines in a display face; the family is the system sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
