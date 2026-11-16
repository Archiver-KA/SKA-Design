# Design system — FORGEE High-Performance Fitness Template

`SN-W02624` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark gym hero in Portuguese where lime (#c8f135) carries the emphasis. Three uppercase Inter lines sit on a near-black ground, with the last line in lime, and a lime pill button sits in the header and again in the hero. A grey subline and a dark outline button sit below. Lime works as the accent here, not the ground.

**Mood:** dark, lime-accented, uppercase, energetic, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b6b6b` | Secondary copy, captions |
| Border | `#2d2d2d` | Hairlines, dividers, outlines |
| Accent | `#c8f135` | Primary action and highlights |
| Second accent | `#ff6b1a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c8f135` · `#b0b0b0` · `#2d2d2d` · `#d4d4d4` · `#1e1e1e` · `#0a0a0a` · `#ff6b1a` · `#111111` · `#6b6b6b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Oswald, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 24px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_24px_rgba(200,241,53,0.3)]`, `shadow-[0_0_24px_rgba(200,241,53,0.1)]`, `shadow-[0_0_24px_rgba(200,241,53,0.2)]`
- **Content width:** `max-w-[1280px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#C8F135] hover:bg-[#A8D41A] text-[#0A0A0A] px-6 py-3 rounded-full text-base font-semibold transition-all shadow-[0_0_24px_rgba(200,241,53,0.1)] hover:shadow-[0_0_24px_rgba(200,241,53,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Product grid (`product-grid`)
7. Team (`team`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #6b6b6b;
  --color-border: #2d2d2d;
  --color-accent: #c8f135;
  --color-accent-2: #ff6b1a;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#6b6b6b',
    line: '#2d2d2d',
    accent: '#c8f135',
    accent2: '#ff6b1a',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase Inter, with the last line in lime (#c8f135).
- **Do:** Use lime (#c8f135) for the header button, the hero button and the final headline line only.
- **Do:** Keep the subline in sentence case and in light grey.
- **Don't:** Don't use the lime as the page ground; the ground is near-black.
- **Don't:** Don't set body copy in lime.
- **Don't:** Don't use the orange (#ff6b1a) next to the lime in the same section.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
