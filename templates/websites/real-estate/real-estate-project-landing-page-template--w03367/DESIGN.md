# Design system — Real Estate Project Landing Page Template

`SN-W03367` · real-estate · light mode · Sinera Atlas theme `dwell` · language `vi`

## Direction

A warm, residential hero on a taupe ground with a light, thin-weight sans-serif title in white and a soft subhead beneath. Three translucent cards carry the location, masterplan and handover facts in small uppercase labels, and a solid orange (#f97316) button sits below them. Orange is the only saturated colour, and the rest of the page is cream and warm grey.

**Mood:** warm, airy, calm, residential

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffedd5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#f97316` · `#ffffff` · `#1e293b` · `#fed7aa` · `#ffedd5` · `#64748b` · `#fff7ed` · `#475569` · `#94a3b8` · `#fdba74`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Quicksand
- **Body:** Nunito
- **Loaded families:** Nunito, Quicksand
- **Scale (largest breakpoint):** h1 60px · h2 60px · h3 24px · body 12px
- **Weights in use:** bold, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-quicksand font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 animate-element delay-5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Map / location (`map-location`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Comparison (`comparison`)
7. Feature grid (`features`)
8. Stats band (`stats`)
9. Bento grid (`bento-grid`)
10. Footer (`footer`)
11. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffedd5;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #1e293b;
  --font-display: "Quicksand", sans-serif;
  --font-body: "Nunito", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffedd5',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Quicksand'], sans: ['Nunito'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) for the primary button only
- **Do:** Set the title in a light sans-serif in white over the warm ground
- **Do:** Present project facts as small translucent cards with uppercase labels
- **Don't:** Don't use orange for headings or body text
- **Don't:** Don't add a second saturated colour to the cards
- **Don't:** Don't set the title in a heavy weight; the light weight is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
