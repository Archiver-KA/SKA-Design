# Design system — Sustainable Fashion E-commerce Landing Page Template

`SN-W01328` · ecommerce · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A document-style hero that reads like a field report: a single card on a warm stone ground (#f2f0eb), with monospace labels and figures in near-black (#141312) and a serif pull quote in the centre. A black block with bracketed uppercase text ends the card, and a small stamp in the corner is the only accent. The lime (#c6ff00) does not appear in this frame.

**Mood:** archival, typewritten, deadpan, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f0eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#141312` | Headings and primary copy |
| Accent | `#141312` | Primary action and highlights |

Palette by frequency of use: `#f2f0eb` · `#ffffff` · `#c6ff00` · `#141312` · `#1c221f` · `#1a1816`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** Arvo
- **Loaded families:** Arvo, Caveat, JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 24px · body 12px
- **Weights in use:** bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-4xl`, `max-w-screen-xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="group relative font-mono font-bold text-sm uppercase tracking-widest bg-char text-bone px-8 py-4 hover:bg-ferrous transition-colors duration-300 overflow-hidden flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Call to action (`cta`)
2. Navigation bar (`navbar`)
3. Modal / overlay (`modal-overlay`)
4. Hero (`hero`)
5. Logo cloud (`logo-cloud`)
6. Feature grid (`features`)
7. Product grid (`product-grid`)
8. Stats band (`stats`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f2f0eb;
  --color-surface: #ffffff;
  --color-text: #141312;
  --color-accent: #141312;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "Arvo", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f0eb',
    surface: '#ffffff',
    ink: '#141312',
    accent: '#141312',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['Arvo'] },
} }
```

## Do and don't

- **Do:** Set labels and figures in monospace (JetBrains Mono) in near-black (#141312)
- **Do:** Use a serif for the single pull quote and keep it centred on the card
- **Do:** Set the call to action as a black block with bracketed uppercase text
- **Don't:** Don't set paragraphs in the mono face; it is for labels and data rows
- **Don't:** Don't add the lime (#c6ff00) to this card; the first screen is paper and ink only
- **Don't:** Don't use glossy effects or gradients; the paper and ink look depends on flatness

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
