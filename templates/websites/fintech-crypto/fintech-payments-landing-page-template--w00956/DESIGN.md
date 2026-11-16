# Design system — Fintech Payments Landing Page Template

`SN-W00956` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A dark charcoal hero (#1a1a1a) where the key word of the headline is set in bright green (#00d97e), and the primary button uses the same green. A green-lit bar chart in a dark card shows the product, with a small status pill on top. The look is a dashboard-led fintech page with restrained glow.

**Mood:** dark, data-led, green, focused, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#252525` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00d97e` | Primary action and highlights |
| Second accent | `#9d00ff` | Supporting highlights |

Palette by frequency of use: `#00d97e` · `#ffffff` · `#a3a3a3` · `#1a1a1a` · `#1a4d3a` · `#00d9ff` · `#737373` · `#9d00ff` · `#a8d5a8` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,217,126,0.1)]`, `shadow-2xl`, `shadow-[0_0_15px_#00D97E]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full bg-[#00D97E] text-[#1A1A1A] text-sm font-semibold hover:bg-[#00b569] transition-all neon-glow-hover">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Code / terminal (`code-terminal`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #252525;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #00d97e;
  --color-accent-2: #9d00ff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#252525',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#00d97e',
    accent2: '#9d00ff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the emphasised headline word in green (#00d97e).
- **Do:** Use green for the primary button and the chart bars only.
- **Do:** Show the product as a dark dashboard card with a status pill.
- **Don't:** Don't use green for long paragraphs.
- **Don't:** Don't add purple from the palette to the hero.
- **Don't:** Don't set headlines in a mixed case with more than two colours.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
