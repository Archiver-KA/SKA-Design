# Design system — Joreli Financial Advisory Landing Page Template

`SN-W00990` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A navy-and-gold advisory page: the hero is a deep navy field (#0a1f44) with a bold serif headline, and its last phrase is set in gold (#d4af37). Gold marks the primary button and one highlight card, while the metric cards are thin, white-bordered panels. The serif carries the voice and a clean sans handles the body, which reads as premium and wealth-focused.

**Mood:** premium, navy and gold, composed, wealth, authoritative

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a1f44` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#0a1f44` · `#d4af37` · `#ffffff` · `#64748b` · `#fafaf8` · `#94a3b8` · `#e2e8f0` · `#f1f5f9` · `#cbd5e1` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** Work Sans
- **Loaded families:** Alegreya, Work Sans
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 20px · body 14px
- **Weights in use:** bold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-10 py-5 bg-[#0A1F44] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#0A1F44] transition-all shadow-xl hover:shadow-2xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Services (`services`)
7. Articles (`blog-articles`)
8. Bento grid (`bento-grid`)
9. Stats band (`stats`)
10. Logo cloud (`logo-cloud`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a1f44;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #d4af37;
  --font-display: "a serif face", serif;
  --font-body: "Work Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a1f44',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['a serif face'], sans: ['Work Sans'] },
} }
```

## Do and don't

- **Do:** Set the last headline phrase in gold (#d4af37) and keep the rest white.
- **Do:** Use gold as the fill for the primary button and for one highlight card.
- **Do:** Keep the hero on the deep navy field (#0a1f44).
- **Don't:** Don't use gold for large background areas.
- **Don't:** Don't set the headline in a geometric sans-serif.
- **Don't:** Don't add shadows to the metric cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
