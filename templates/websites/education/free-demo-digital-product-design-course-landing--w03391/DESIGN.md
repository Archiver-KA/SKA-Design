# Design system — (Free Demo) Digital Product Design Course Landing Page Template

`SN-W03391` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Crisp product-course landing page on white with a faint grid texture. The headline is heavy sans in near-black, and its second line drops to grey, which splits the message into a statement and a promise. The right side shows pale wireframe panels of an editor with one dark pill label, so the page demonstrates its subject rather than illustrating it.

**Mood:** crisp, product-focused, neutral, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#f3f4f6` · `#6b7280` · `#f9fafb` · `#e5e7eb` · `#9ca3af` · `#1f2937` · `#4b5563` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #111827;
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
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#111827',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy near-black sans, with the second line in grey (#9ca3af).
- **Do:** Use the black primary button (#111827) with an arrow, and an outlined button beside it.
- **Do:** Show the product as pale grey wireframe panels on the right, with one dark pill label.
- **Don't:** Don't colour the wireframe panels; they stay grey on white.
- **Don't:** Don't use the green status dot as a button colour.
- **Don't:** Don't place the grid texture behind body copy.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
