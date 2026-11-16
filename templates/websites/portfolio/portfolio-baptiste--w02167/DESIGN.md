# Design system — PORTFOLIO Baptiste

`SN-W02167` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark industrial look: a near-black page (#0a0a0a) with oversized bold uppercase Inter headlines in white and a single lime-yellow (#dfff00) highlight for the eyebrow, status dot and primary action. Monospaced uppercase nav labels and hairline rules give it a technical, catalogue feel. The contrast between the massive headline and tiny mono labels is what makes it recognisable.

**Mood:** brutalist, industrial, technical, bold, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dfff00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1a1` · `#0a0a0a` · `#000000` · `#dfff00` · `#bef264` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Syne
- **Scale (largest breakpoint):** h3 36px · body 14px
- **Weights in use:** bold, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_10px_rgba(223,255,0,0)]`, `shadow-[0_0_15px_rgba(223,255,0,0.5)]`, `shadow-[0_0_30px_rgba(223,255,0,0.3)]`
- **Content width:** `max-w-[1440px]`, `max-w-4xl`
- **Section padding:** `py-40`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="bg-accent text-black font-bold uppercase py-6 px-12 clip-slant hover:skew-x-2 hover:scale-110 transition-all duration-300 text-base tracking-widest cursor-hover shadow-[0_0_30px_rgba(223,255,0,0.3)] hover:shadow-[0_0_50px_rgba(223,255,0,0.5)] flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Logo cloud (`logo-cloud`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #dfff00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#dfff00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero in Inter bold uppercase at display size, white on black
- **Do:** Use the lime-yellow (#dfff00) only for the eyebrow, status dot and primary action
- **Do:** Set navigation and labels in small uppercase monospace
- **Don't:** Don't round corners on panels or cards; the page is square
- **Don't:** Don't fill large areas with lime; it is a highlight
- **Don't:** Don't use soft shadows; separation comes from hairline rules

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
