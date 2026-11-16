# Design system — High-End Audio E-commerce Landing Page Template

`SN-W01183` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A premium audio hero in which a large serif headline, Power refined. Silence absolute., sits over a faded product photograph of an amplifier and headphones washed toward white. Outlined rectangular buttons and small uppercase navigation give the chrome a restrained feel. A green chat button floats at the lower right as the only saturated element.

**Mood:** restrained, premium, technical, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#525252` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#525252` · `#262626` · `#2a2a2a` · `#d4af37` · `#050505` · `#e5e5e5` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="px-3 py-1.5 text-xs font-medium border border-lux-gold text-lux-gold rounded hover:bg-lux-gold hover:text-lux-black transition-colors font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #525252;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#525252',
    muted: '#737373',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in a large serif, with the second sentence on its own line.
- **Do:** Use outlined rectangular buttons with small uppercase labels, not filled pills.
- **Do:** Let the product photograph run under a light wash so the headline stays legible.
- **Don't:** Don't use the green chat colour in the page's own interface; it is for the chat link only.
- **Don't:** Don't set the headline over a busy part of the photograph without the wash.
- **Don't:** Don't use pill-shaped buttons; the rectangles are part of the style.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
