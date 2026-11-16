# Design system — Meadow Bear Kids Education Landing Page Template

`SN-W03502` · education · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A playful children's page on a warm cream ground (#fffbf0), with a rounded display face in Nunito set heavy and a thick dark-brown outline around the title. Yellow (#ffd966) buttons carry a solid bottom edge so they read as pressable, and soft green and lilac accents come from the illustration framing. Sparkles and small drawn creatures are scattered at the margins, so the page reads like a picture book.

**Mood:** playful, warm, childlike, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fffbf0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#6b4c3b` | Headings and primary copy |
| Accent | `#ffd966` | Primary action and highlights |
| Second accent | `#a8d5a2` | Supporting highlights |

Palette by frequency of use: `#3e2a1e` · `#ffffff` · `#ffd966` · `#6b4c3b` · `#a8d5a2` · `#c9a9e9` · `#7ec8e3` · `#ff7f7f` · `#fffbf0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nunito
- **Body:** Nunito
- **Loaded families:** Nunito, Quicksand
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-[0_4px_0_0_#3E2A1E]`, `shadow-[8px_8px_0_0_#3E2A1E]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-[#FFD966] text-[#3E2A1E] font-nunito font-semibold tracking-tight text-2xl md:text-3xl px-10 py-5 rounded-[2rem] cartoon-border-lg hover-bounce flex items-center gap-3 group relative overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Marquee (`marquee`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fffbf0;
  --color-surface: #ffffff;
  --color-text: #6b4c3b;
  --color-accent: #ffd966;
  --color-accent-2: #a8d5a2;
  --font-display: "Nunito", sans-serif;
  --font-body: "Nunito", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fffbf0',
    surface: '#ffffff',
    ink: '#6b4c3b',
    accent: '#ffd966',
    accent2: '#a8d5a2',
  },
  fontFamily: { display: ['Nunito'], sans: ['Nunito'] },
} }
```

## Do and don't

- **Do:** Set titles in Nunito at heavy weight with a thick dark-brown outline
- **Do:** Give yellow (#ffd966) buttons a solid bottom edge so they read as pressable
- **Do:** Use rounded-2xl panels and pill shapes for every container
- **Don't:** Don't use thin or light-weight type for headings
- **Don't:** Don't place a yellow button on a yellow background
- **Don't:** Don't use sharp corners or flat, edge-less buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
