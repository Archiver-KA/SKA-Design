# Design system — Aphoria Beauty E-commerce Product Page Template

`SN-W01082` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A restrained product page on warm grey (#f0efed), with a white frame for the hero product. Headings are light-weight Montserrat in near-black, and the product name is the largest text after the image. The add-to-cart bar is the only solid black block, and size choices are thin outlined pills, so the commerce controls stay quiet.

**Mood:** restrained, clean, premium, soft, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f0efed` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#1a1a1a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f0efed` · `#e7e5e4` · `#f5f5f4` · `#7f1d1d` · `#1a1a1a` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Cormorant Garamond, Montserrat
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 14px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="flex-1 bg-brand-black text-white hover:bg-brand-black/90 transition-all rounded-md py-3 text-sm tracking-wide font-medium flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f0efed;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #f5f5f4;
  --color-accent: #1a1a1a;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f0efed',
    surface: '#ffffff',
    ink: '#111111',
    line: '#f5f5f4',
    accent: '#1a1a1a',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set product names in Montserrat at a light weight
- **Do:** Make add-to-cart the only solid black block on the page
- **Do:** Use outlined pills for size and variant selection
- **Don't:** Don't use the oxblood tint for buttons
- **Don't:** Don't set prices larger than the product name
- **Don't:** Don't add saturated colour to the product frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
