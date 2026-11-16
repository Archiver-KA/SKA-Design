# Design system — HÓRUS - Contabilidade

`SN-W00980` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A near-black page with white Inter headlines and muted gold (#b89818) used for the eyebrow line and the primary button. The hero is left-aligned in a narrow column, with an outlined secondary button beside the gold one. Gold carries the calls to action and grey carries the supporting copy, so the tone is sober and financial.

**Mood:** sober, financial, dark, measured, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#02040a` | Page ground |
| Surface | `#0a0f1a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b89818` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#b89818` · `#94a3b8` · `#02040a` · `#e2e8f0` · `#cbd5e1` · `#64748b` · `#a38615` · `#0a0f1a` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-[0_0_20px_rgba(184,152,24,0.3)]`, `shadow-sm`, `shadow-[0_0_30px_rgba(184,152,24,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#b89818] hover:bg-[#a38615] text-white transition-all duration-300 flex items-center justify-center text-base font-medium group shadow-[0_0_20px_rgba(184,152,24,0.3)] hover:shadow-[0_0_30px_rgba(184,152,24,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #02040a;
  --color-surface: #0a0f1a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #b89818;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#02040a',
    surface: '#0a0f1a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#b89818',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#b89818) for the eyebrow line and the primary button only.
- **Do:** Set headlines left-aligned in white Inter in a narrow column.
- **Do:** Pair the gold primary with an outlined secondary button.
- **Don't:** Don't use the lighter gold (#a38615) for large areas.
- **Don't:** Don't centre the hero text.
- **Don't:** Don't set grey body copy below contrast on the dark ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
