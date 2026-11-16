# Design system — JING Brew E-commerce Landing Page Template

`SN-W01194` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A bold, modern wellness stance: a near-white page, near-black type in a heavy sans-serif, and a dark product card as the only strong shape. The headline runs to two lines, the second in mid grey, which builds hierarchy without colour. Pill-shaped buttons and a soft off-white panel behind the card keep the tone calm and clean.

**Mood:** modern, clean, bold, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#ffffff` · `#e7e5e4` · `#f5f5f4` · `#a8a29e` · `#292524` · `#44403c` · `#fafaf9` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex h-12 items-center justify-center rounded-full bg-stone-900 px-8 text-sm font-medium text-white transition-all hover:bg-stone-800 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter at display size, with the second line in muted grey (#78716c).
- **Do:** Use near-black (#1c1917) for the primary button and the product card.
- **Do:** Use pill-shaped buttons for primary and secondary actions.
- **Don't:** Don't use the amber (#f59e0b) or green (#22c55e) accents on the hero.
- **Don't:** Don't leave the product card flat on the page; keep the soft off-white panel behind it.
- **Don't:** Don't set headlines in a serif; the look is sans-serif throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
