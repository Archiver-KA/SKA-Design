# Design system — Party Favors E-Commerce Product Detail Template

`SN-W01290` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A plain, product-first detail page on white and near-white grey (#fafafa), with near-black type (#171717) and black primary buttons. The gallery is a large image frame on the left, and the buying panel on the right stacks the title, stars, price, quantity and two buttons. Hierarchy comes from weight and size, and the only colour sits in the product image and small status tags.

**Mood:** plain, functional, product-first, clean, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#404040` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |
| Second accent | `#e11d48` | Supporting highlights |

Palette by frequency of use: `#e5e5e5` · `#404040` · `#171717` · `#ffffff` · `#d4d4d4` · `#525252` · `#f5f5f5` · `#737373` · `#fafafa` · `#f59e0b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 36px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="h-9 px-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Modal / overlay (`modal-overlay`)
4. Cart / checkout (`cart-checkout`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #404040;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --color-accent-2: #e11d48;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#404040',
    line: '#e5e5e5',
    accent: '#171717',
    accent2: '#e11d48',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Fill primary buttons in near-black (#171717) with white text
- **Do:** Keep the gallery as the left column and the buying panel on the right
- **Do:** Set the product title large and bold in Inter, with the price directly below it
- **Don't:** Don't use amber (#f59e0b) for buttons.
- **Don't:** Don't add decorative imagery beside the product; the page stays plain
- **Don't:** Don't tint the page background; it stays white and neutral grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
