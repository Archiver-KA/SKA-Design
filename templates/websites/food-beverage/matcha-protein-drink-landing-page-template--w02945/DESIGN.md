# Design system — Matcha Protein Drink Landing Page Template

`SN-W02945` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A saturated, all-orange page on a bright orange ground (#ff5500) with a large pale-orange serif wordmark, ZEST, set behind the hero. Numbered cards with small tracked labels hold a stat, a phone mock-up and a serif headline with an italic second line. The page is a single warm hue, so the contrast comes from size and the white type rather than from a second colour.

**Mood:** bold, sunny, playful, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ff5500` | Page ground |
| Surface | `#2c1810` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f9f6f0` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff5500` · `#000000` · `#2c1810` · `#9ca3af` · `#f9f6f0` · `#fb923c` · `#1a1a1a` · `#2a2a2a` · `#fdfbf7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Lora
- **Loaded families:** Playfair Display, Lora
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 24px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[3.5rem]` (3.5rem), `rounded-[3rem]` (3rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-black/10`
- **Content width:** `max-w-[150px]`, `max-w-[1600px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-8`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="group flex items-center gap-2 bg-white text-[#FF5500] pl-5 pr-2 py-2 rounded-full hover:bg-citrus-dark hover:text-white transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Newsletter signup (`newsletter`)
4. Marquee (`marquee`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ff5500;
  --color-surface: #2c1810;
  --color-text: #ffffff;
  --color-muted: #f9f6f0;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --color-accent-2: #22c55e;
  --font-display: "Playfair Display", serif;
  --font-body: "Lora", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ff5500',
    surface: '#2c1810',
    ink: '#ffffff',
    muted: '#f9f6f0',
    line: '#ffffff',
    accent: '#fb923c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Lora'] },
} }
```

## Do and don't

- **Do:** Set the hero wordmark in a large serif in a lighter orange tint over the ground
- **Do:** Use white for all text on the orange ground
- **Do:** Number each card with a small tracked label in the top corner
- **Don't:** Don't add a second hue; the page is orange by design
- **Don't:** Don't use dark text on the orange ground
- **Don't:** Don't place the phone mock-up without a card frame around it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
