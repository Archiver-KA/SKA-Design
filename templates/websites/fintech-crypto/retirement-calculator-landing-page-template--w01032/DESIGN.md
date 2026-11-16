# Design system — Retirement Calculator Landing Page Template

`SN-W01032` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clean white calculator page has a large serif display headline, where the second line is italic in muted slate (#64748b). The dark slate (#0f172a) carries the primary button and the dark Freedom Number result card, while emerald (#059669) marks progress on the sliders and the on-track status. The recognisable move is the dark result card against the white form, making the answer the heaviest element.

**Mood:** clean, editorial, precise, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#0f172a` | Primary action and highlights |
| Second accent | `#059669` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#e2e8f0` · `#ffffff` · `#94a3b8` · `#64748b` · `#cbd5e1` · `#f8fafc` · `#f1f5f9` · `#059669` · `#d1fae5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 10px · h3 20px · body 10px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #0f172a;
  --color-accent-2: #059669;
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
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#0f172a',
    accent2: '#059669',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the primary button and the result card in slate (#0f172a) and keep the rest of the page white
- **Do:** Use the emerald (#059669) only for slider progress and positive status
- **Do:** Set display headlines in a serif, with the second line in italic muted slate (#64748b)
- **Don't:** Don't use emerald for buttons; it marks progress and status only
- **Don't:** Don't place the result card on a coloured background; it sits on white
- **Don't:** Don't set the headline in a sans-serif; the headline is a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
