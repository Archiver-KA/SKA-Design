# Design system — Smart Electronics Product Landing Page Template

`SN-W00714` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A product-page layout in the Apple-influenced mould: a white ground and a tight, heavy black headline in which one word is grey and one phrase is blue (#2563eb). The product sits in a soft circular light field with small floating labels, and the call to action is a solid blue button beside a plain outline. Blue is the only colour, marking the key phrase and the primary action.

**Mood:** minimal, premium, clean, product-led, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#71717a` · `#ffffff` · `#f4f4f5` · `#fafafa` · `#2563eb` · `#a1a1aa` · `#27272a` · `#3b82f6` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Bento grid (`bento-grid`)
6. Product grid (`product-grid`)
7. Call to action (`cta`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #2563eb;
  --color-accent-2: #ffedd5;
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
    accent: '#2563eb',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy near-black Inter, with one grey word and one blue phrase.
- **Do:** Use blue (#2563eb) for the key phrase and the primary button only.
- **Do:** Place the product in a soft circular light field with small floating labels.
- **Don't:** Don't add a second highlight colour to the headline.
- **Don't:** Don't put the product on a coloured background; keep it on white.
- **Don't:** Don't outline the floating labels heavily; they are light pills.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
