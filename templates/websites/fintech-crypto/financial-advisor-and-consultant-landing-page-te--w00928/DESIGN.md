# Design system — Financial Advisor & Consultant Landing Page Template

`SN-W00928` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `cs`

## Direction

A dark, Czech-language advisor hero on black, with the headline in white and its final phrase in muted gold. A thin rule with a small diamond marker separates the headline from the supporting line, which gives a formal, heritage tone. The primary button is a solid deep-red block with bold white text.

**Mood:** formal, dark, heritage, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f6fa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#556070` | Secondary copy, captions |
| Border | `#d9dfe8` | Hairlines, dividers, outlines |
| Accent | `#f2a33a` | Primary action and highlights |
| Second accent | `#f2a33a` | Supporting highlights |

Palette by frequency of use: `#556070` · `#d9dfe8` · `#ffffff` · `#0e1726` · `#2b5ce6` · `#f4f6fa` · `#b7c0cf` · `#dce2ec` · `#3a4659` · `#2250d0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-sm` (2px)
- **Shadows:** `shadow-[6px_6px_0_0_#0E1726]`, `shadow-[8px_8px_0_0_#2B5CE6]`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-24`
- **Common gaps:** `gap-8`, `gap-10`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f4f6fa;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #556070;
  --color-border: #d9dfe8;
  --color-accent: #f2a33a;
  --color-accent-2: #f2a33a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f6fa',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#556070',
    line: '#d9dfe8',
    accent: '#f2a33a',
    accent2: '#f2a33a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline phrase in muted gold (#f2a33a)
- **Do:** Use a thin rule with a small diamond marker between headline and body
- **Do:** Keep the primary button a solid block with bold white text
- **Don't:** Don't introduce blue; the hero uses black, white, gold and deep red
- **Don't:** Don't set body copy in gold
- **Don't:** Don't replace the diamond rule with a plain divider

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
