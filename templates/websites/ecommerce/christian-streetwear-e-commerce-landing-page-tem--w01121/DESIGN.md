# Design system — Christian Streetwear E-commerce Landing Page Template

`SN-W01121` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A stark black streetwear page has a hero set in very large white uppercase, with the second word drawn as an outline only. The navigation is a thin row of small tracked labels, and the only other elements are a solid and an outlined button. Colour is absent, so the page is high contrast and graphic, relying on type scale and outline rather than photography.

**Mood:** stark, graphic, high contrast, streetwear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#808080` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c9a87c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#c9a87c` · `#808080` · `#2c2c2c` · `#e5e5e5` · `#f5f5f5` · `#d4d4d4` · `#8b7355` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** Oswald
- **Loaded families:** Bebas Neue, Oswald, Space Mono
- **Scale (largest breakpoint):** h1 36px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-[1600px]`, `max-w-[1400px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full bg-black text-white font-display text-xl tracking-widest py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#2C2C2C]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Product grid (`product-grid`)
3. Call to action (`cta`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f5f5f5;
  --color-text: #ffffff;
  --color-muted: #808080;
  --color-border: #ffffff;
  --color-accent: #c9a87c;
  --font-display: "Oswald", sans-serif;
  --font-body: "Oswald", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f5f5f5',
    ink: '#ffffff',
    muted: '#808080',
    line: '#ffffff',
    accent: '#c9a87c',
  },
  fontFamily: { display: ['Oswald'], sans: ['Oswald'] },
} }
```

## Do and don't

- **Do:** Set the hero in uppercase at very large size, with the second line as an outline
- **Do:** Keep the navigation to small tracked uppercase labels
- **Do:** Use square-cornered buttons for primary and secondary actions
- **Don't:** Don't add a tan or other accent colour to the hero.
- **Don't:** Don't round the buttons or the panels
- **Don't:** Don't set body copy in the outlined style; it is for display only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
