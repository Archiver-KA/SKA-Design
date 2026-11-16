# Design system — Crypto Sports Betting Landing Page Template

`SN-W00907` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark sports-trading hero on a charcoal ground with acid lime [#ccff00] as the one accent. The headline is uppercase, heavy and very large, with its key word LIQUIDITY in lime and the words around it in grey, which gives the page urgency. A live ticker strip in small uppercase runs along the bottom and reinforces the sense of a live market.

**Mood:** urgent, bold, high-energy, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1e1e1e` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ccff00` · `#737373` · `#a3a3a3` · `#1e1e1e` · `#262626` · `#525252` · `#000000` · `#22c55e` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[#CCFF00]/20`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-12 py-4 bg-[#CCFF00] text-black text-xs font-bold uppercase tracking-widest hover:bg-[#b3e600] transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_40px_rgba(204,255,0,0.6)] rounded-sm hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Benefits (`benefits`)
6. Feature grid (`features`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1e1e1e;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ccff00;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1e1e1e',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ccff00',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase heavy Inter
- **Do:** Use lime (#ccff00) for the key headline word and the primary button only
- **Do:** Keep the live ticker as a thin strip in small uppercase
- **Don't:** Don't use lime for body text or long paragraphs
- **Don't:** Don't set more than one headline word in lime
- **Don't:** Don't switch headlines to sentence case; the style is uppercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
