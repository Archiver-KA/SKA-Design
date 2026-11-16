# Design system — MIMIYA Circadian Color System Template

`SN-W02482` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A calm editorial stance on a warm off-white ground (#faf9f6) with white cards and slate ink (#1e293b). Playfair Display headings sit over Inter body text, and the sun-arc gradients in the colour system cards are the only saturated colour, so the rest stays quiet. Rounded cards and pills separate sections without hard rules.

**Mood:** calm, editorial, warm, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#c4632f` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#475569` · `#1e293b` · `#94a3b8` · `#f1f5f9` · `#e2e8f0` · `#1e2b4d` · `#334155` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 14px · h3 14px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_15px_rgba(255,255,255,0.9)]`, `shadow-[0_0_20px_rgba(255,255,255,1)]`
- **Content width:** `max-w-[1600px]`, `max-w-[80%]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --color-accent-2: #c4632f;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e293b',
    accent2: '#c4632f',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display and body text in Inter
- **Do:** Use the time-of-day gradients only inside the colour system cards, not on buttons
- **Do:** Keep the page ground at #faf9f6 and card surfaces at #ffffff
- **Don't:** Don't add saturated accent colours to general UI
- **Don't:** Don't build the main sections as dark panels; the page stays light
- **Don't:** Don't use hard black borders; separation comes from soft fills and rounded corners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
