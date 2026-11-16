# Design system — Cybersecurity SaaS Landing Page Template

`SN-W00324` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black security page where emerald green (#10b981) is the only signal colour, used for status labels, progress bars and small kickers. The type is Inter, with a large white product name and spaced uppercase kickers above each heading. The left side of the hero holds a dim, bordered technical panel with corner marks, so the page reads as a monitoring console rather than a marketing site.

**Mood:** monitoring, precise, dark, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05070a` | Page ground |
| Surface | `#030706` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#10b981` · `#ffffff` · `#34d399` · `#94a3b8` · `#64748b` · `#030706` · `#cbd5e1` · `#171717` · `#050c09` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_10px_#34d399]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-[1400px]`, `max-w-[1200px]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full mt-6 py-3.5 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold flex items-center justify-center gap-2 transition-colors duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] group">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Three.js, Unicorn Studio (WebGL scenes), React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #05070a;
  --color-surface: #030706;
  --color-text: #cbd5e1;
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
    background: '#05070a',
    surface: '#030706',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use emerald (#10b981) for progress bars, status dots and small kickers only
- **Do:** Set kickers in small uppercase with wide letter spacing above each heading
- **Do:** Keep the hero's left panel as a dim, bordered visual with corner marks
- **Don't:** Don't add warm colours; the palette stays cool grey and green
- **Don't:** Don't fill large areas with the green
- **Don't:** Don't replace the technical panel with a stock photo

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
