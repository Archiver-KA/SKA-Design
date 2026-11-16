# Design system — Accounting Services Landing Page Template

`SN-W00854` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A dark, premium hero with a near-black ground and a warm gold (#b89818) radial glow that dominates the top of the page. The headline is set in white and pale warm grey in Inter, and the one gold accent is kept to the glow and the primary button. Testimonial quotes and feature blocks sit on dark cards with thin borders, so the gold reads as luxury rather than warning.

**Mood:** premium, dark, warm, luxurious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0b` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e8e6e3` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b89818` | Primary action and highlights |

Palette by frequency of use: `#b89818` · `#ffffff` · `#e8e6e3` · `#0a0a0b` · `#000000` · `#d4af1c` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden sm:block bg-[#b89818] hover:bg-[#d4af1c] text-[#0a0a0b] px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all no-underline">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0b;
  --color-surface: #000000;
  --color-text: #e8e6e3;
  --color-border: #ffffff;
  --color-accent: #b89818;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0b',
    surface: '#000000',
    ink: '#e8e6e3',
    line: '#ffffff',
    accent: '#b89818',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the gold (#b89818) for the background glow and the primary button only
- **Do:** Set the headline in Inter in warm white (#e8e6e3), all caps for the top line if needed
- **Do:** Keep feature and testimonial cards dark with thin white borders
- **Don't:** Don't put gold body text on the dark ground
- **Don't:** Don't add a second glow colour to the hero
- **Don't:** Don't use a light background for the testimonial section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
