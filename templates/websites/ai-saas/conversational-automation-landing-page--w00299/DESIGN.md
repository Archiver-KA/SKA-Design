# Design system — Conversational Automation Landing Page

`SN-W00299` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, quiet product page set inside a slate frame, with a white inner page and a centred bold headline. Indigo [#4f46e5] carries the buttons and the large stat figures, and the cards are white with hairline grey borders. Inter throughout gives a neutral, product-focused voice, with a grid of cards below the hero.

**Mood:** quiet, light, neutral, product-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#4f46e5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#334155` · `#10b981` · `#475569` · `#64748b` · `#94a3b8` · `#f3f4f6` · `#e5e7eb` · `#4f46e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full px-4 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Team (`team`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #e5e7eb;
  --color-accent: #4f46e5;
  --color-accent-2: #4f46e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#e5e7eb',
    accent: '#4f46e5',
    accent2: '#4f46e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the indigo (#4f46e5) for buttons and large stat figures
- **Do:** Keep cards white with a 1px grey border (#e5e7eb)
- **Do:** Keep the hero headline bold, centred and short
- **Don't:** Don't add a second accent beside the indigo
- **Don't:** Don't show image alt text in place of images
- **Don't:** Don't use a dark page ground for this light layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
