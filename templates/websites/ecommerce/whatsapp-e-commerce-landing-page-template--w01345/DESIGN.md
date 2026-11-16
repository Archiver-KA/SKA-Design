# Design system — WhatsApp E-commerce Landing Page Template

`SN-W01345` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A clean, friendly ordering page on white, where a single messaging green (#25d366) marks the actions because ordering runs through a chat app. The headline is heavy near-black sans-serif, centred over two lines, with a pale green eyebrow pill above it. A solid green button sits beside a plain outlined button, and a dark ticker strip runs along the top, so the layout reads as a simple shop front.

**Mood:** friendly, simple, direct, conversational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#25d366` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#f5a623` · `#f5f5f5` · `#737373` · `#25d366` · `#e5e5e5` · `#fafafa` · `#20bd5a` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 14px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-green-500/20`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors bg-green-50 px-3 py-1.5 rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Product grid (`product-grid`)
5. Stats band (`stats`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #25d366;
  --color-accent-2: #25d366;
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
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#25d366',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the messaging green (#25d366) for the primary order button and the eyebrow dot only
- **Do:** Set the centred headline in heavy near-black sans-serif over two lines
- **Do:** Pair the solid green button with a plain outlined button for browsing
- **Don't:** Don't use the green for body text or large fills; it is an action colour
- **Don't:** Don't add orange or other accents; the page has one action colour
- **Don't:** Don't use the green on more than the order and contact actions

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
