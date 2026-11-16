# Design system — Medical Laser E-commerce Landing Page Template

`SN-W01255` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, clinical hero on near-black with a bold white sans headline, its middle word Refurbished set in bright green. A solid green button sits beside a dark outlined one, and a product card on the right shows its price in white. Green is the single accent.

**Mood:** clinical, dark, medical, green-lit

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#22c55e` · `#ffffff` · `#27272a` · `#d4d4d8` · `#000000` · `#18181b` · `#71717a` · `#a1a1aa` · `#4ade80` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(34,197,94,0.3)]`, `shadow-[0_0_30px_rgba(34,197,94,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-400 text-zinc-950 font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] text-base">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Call to action (`cta`)
5. Product grid (`product-grid`)
6. Team (`team`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #27272a;
  --color-accent: #22c55e;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#27272a',
    accent: '#22c55e',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use bright green (#22c55e) only for the headline's key word and the primary button
- **Do:** Set product cards on a dark panel with the price in white
- **Do:** Keep the hero text left-aligned with the image card on the right
- **Don't:** Don't use green as a page background; the hero is black.
- **Don't:** Don't add a light section above the hero
- **Don't:** Don't use amber on the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
