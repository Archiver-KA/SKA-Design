# Design system — Paradigm Crypto Trading Platform Template

`SN-W01007` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `ru`

## Direction

A dark, centred trading landing page on near-black (#0a0a0a), with a large white sans-serif headline whose second clause is set in mint green (#10b981). A soft green glow sits behind the copy, and a small outlined pill badge announces the Telegram integration. The page is high-contrast and calm, with green reserved for the headline clause.

**Mood:** dark, centred, technical, calm, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#10b981` · `#ffffff` · `#a3a3a3` · `#0a0a0a` · `#737373` · `#111111` · `#000000` · `#262626` · `#4ade80` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(16,185,129,0.3)]`, `shadow-[0_0_8px_#10B981]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium text-base hover:bg-primary hover:text-black shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. Call to action (`cta`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Sign-in form (`auth-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #111111;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#111111',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline clause in mint green (#10b981) and keep the first in white.
- **Do:** Keep the hero centred, with a small outlined badge above the headline.
- **Do:** Use the soft green glow only behind the hero copy.
- **Don't:** Don't add a second accent colour to the hero.
- **Don't:** Don't use green for body text.
- **Don't:** Don't set the headline in a serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
