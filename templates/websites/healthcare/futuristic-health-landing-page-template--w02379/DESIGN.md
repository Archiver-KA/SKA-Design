# Design system — Futuristic Health Landing Page Template

`SN-W02379` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A terminal-style hero on a near-black ground, with green phosphor text (#33ff33) set in a monospace face and a boot-sequence prompt as the opening. Everything is set in monospace with a green cursor-like rhythm, and amber (#ffb000) marks the secondary readouts. The page is built as a retro-futurist console, so the typography itself is the illustration.

**Mood:** retro-futurist, terminal, monochrome, technical, raw

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#0a1a0a` | Cards, panels, raised areas |
| Text | `#33ff33` | Headings and primary copy |
| Accent | `#33ff33` | Primary action and highlights |
| Second accent | `#ffb000` | Supporting highlights |

Palette by frequency of use: `#33ff33` · `#ffb000` · `#0d0d0d` · `#0a1a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fira Code
- **Body:** Fira Code
- **Loaded families:** Fira Code, VT323
- **Scale (largest breakpoint):** h1 36px · h2 48px · h3 30px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_10px_#33FF33]`, `shadow-[0_0_15px_rgba(51,255,51,0.2)]`, `shadow-[0_0_8px_#FFB000]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="text-charcoal px-6 py-2 rounded-none text-xs font-medium hover-trigger transition-all overflow-hidden group relative border border-charcoal/30 hover:border-charcoal hover:shadow-[0_0_15px_rgba(51,255,51,0.2)] bg-charcoal/5">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify, Phosphor

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #0a1a0a;
  --color-text: #33ff33;
  --color-accent: #33ff33;
  --color-accent-2: #ffb000;
  --font-display: "Fira Code", sans-serif;
  --font-body: "Fira Code", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#0a1a0a',
    ink: '#33ff33',
    accent: '#33ff33',
    accent2: '#ffb000',
  },
  fontFamily: { display: ['Fira Code'], sans: ['Fira Code'] },
} }
```

## Do and don't

- **Do:** Set all text in the monospace face, with the headline in phosphor green (#33ff33).
- **Do:** Use amber (#ffb000) only for numeric readouts and status values.
- **Do:** Keep the page on the near-black ground (#0d0d0d) with square corners.
- **Don't:** Don't round corners on panels or buttons; the square geometry is part of the look.
- **Don't:** Don't set long body paragraphs in green at full strength; reduce contrast for reading.
- **Don't:** Don't introduce a sans-serif face for headings.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
