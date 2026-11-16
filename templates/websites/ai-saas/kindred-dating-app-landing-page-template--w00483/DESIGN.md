# Design system — Kindred Dating App Landing Page Template

`SN-W00483` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A soft, light dating-app page with a white ground and a faint rose glow in the top corner. The headline is large and bold in near-black, with its last word in coral-red (#f43f5e). A phone mockup sits right with a pink-tinted photo card, and the store buttons are a black pill and a white outlined pill. Colour is kept to the headline and the card.

**Mood:** warm, friendly, light, soft, approachable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#f4f4f5` · `#71717a` · `#e4e4e7` · `#a1a1aa` · `#f43f5e` · `#fafafa` · `#52525b` · `#ffe4e6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-zinc-100`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-lg shadow-zinc-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #f43f5e;
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
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#f43f5e',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline word in coral-red (#f43f5e) and nothing else
- **Do:** Use a black pill for the first store button and an outlined pill for the second
- **Do:** Keep the phone mockup on the right with soft shadows
- **Don't:** Don't use red for buttons
- **Don't:** Don't put the coral colour on body text
- **Don't:** Don't use dark backgrounds for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
