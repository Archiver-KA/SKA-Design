# Design system — Authentic Italian Restaurant Landing Page Template

`SN-W02839` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, inviting restaurant hero on off-white (#fafafa), with a large dark serif headline set over four lines and small grey pill tags listing product attributes. The primary action is a near-black pill, and the navigation's Sign In button is also black, so the accent is neutral rather than coloured. The page's photography sits outside the hero.

**Mood:** clean, friendly, neutral, inviting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#18181b` · `#e5e5e5` · `#000000` · `#171717` · `#020617` · `#f8fafc` · `#f4f4f5` · `#fca5a5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 18px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center text-base font-medium text-neutral-800 bg-neutral-100/60 border border-neutral-200 rounded-full px-6 py-3 hover:bg-neutral-100">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Menu list (`menu-list`)
3. Bento grid (`bento-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-border: #ffffff;
  --color-accent: #18181b;
  --color-accent-2: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    line: '#ffffff',
    accent: '#18181b',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a dark serif with a tight line stack
- **Do:** Make the primary action a near-black pill with white text
- **Do:** Use small grey pill tags for feature lists under the intro copy
- **Don't:** Don't add a coloured accent; the buttons are black.
- **Don't:** Don't set the intro copy in a heavy weight
- **Don't:** Don't place the headline inside a coloured block; it sits on white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
