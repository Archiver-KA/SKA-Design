# Design system — Fitness Transformation Coaching Landing Page Template

`SN-W02612` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark transformation-coaching page with a red call to action. The hero sits on a dimmed photograph, with a large white headline, a red eyebrow line naming the audience and a red pill button. The palette is near-black, white and red, so the page is bold and direct with one clear action.

**Mood:** bold, dark, direct, red-accented, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#141414` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#cccccc` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d72b2b` | Primary action and highlights |
| Second accent | `#ffd700` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d72b2b` · `#0d0d0d` · `#cccccc` · `#ffd700` · `#a3a3a3` · `#333333` · `#141414` · `#737373` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Roboto
- **Body:** Roboto
- **Loaded families:** Poppins, Roboto
- **Scale (largest breakpoint):** h1 100px · h2 60px · h3 72px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-[0_0_40px_rgba(215,43,43,0.1)]`
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="group flex items-center gap-4 bg-[#D72B2B] text-white px-8 py-4 lg:py-5 rounded-full font-semibold uppercase text-sm lg:text-base hover:bg-[#FFD700] hover:text-[#0D0D0D] transition-all duration-300 glow-red group-hover:glow-yellow">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Case studies (`case-studies`)
5. Pricing (`pricing`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #141414;
  --color-text: #f5f5f5;
  --color-muted: #cccccc;
  --color-border: #ffffff;
  --color-accent: #d72b2b;
  --color-accent-2: #ffd700;
  --font-display: "Roboto", sans-serif;
  --font-body: "Roboto", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#141414',
    ink: '#f5f5f5',
    muted: '#cccccc',
    line: '#ffffff',
    accent: '#d72b2b',
    accent2: '#ffd700',
  },
  fontFamily: { display: ['Roboto'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Use the red (#d72b2b) for the primary button and the eyebrow line only.
- **Do:** Set the headline in large white type over a dimmed photograph.
- **Do:** Keep the page on the near-black ground (#0d0d0d).
- **Don't:** Don't set red text on dark photographs at small sizes.
- **Don't:** Don't put the gold (#ffd700) next to the red in the same element.
- **Don't:** Don't use a light background for the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
