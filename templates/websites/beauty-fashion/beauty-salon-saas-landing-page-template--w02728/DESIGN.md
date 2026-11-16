# Design system — Beauty Salon SaaS Landing Page Template

`SN-W02728` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `pt-BR`

## Direction

Warm cream page built for a SaaS pitch, with a Cormorant serif carrying both headline and body text. Bronze (#b07840) fills the primary button and the status chips, and a soft tan wash sits behind the hero. White floating cards show a sample schedule with a booking list, so the product is visible on the first screen.

**Mood:** warm, refined, product-led, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf7f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2c2c2c` | Headings and primary copy |
| Muted text | `#6b6b6b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b07840` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#b07840` · `#6b6b6b` · `#2c2c2c` · `#8b5e30` · `#c9a472` · `#efd5a8` · `#faf7f2` · `#e8e0d4` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[32px]` (32px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-2xl bg-[#B07840] text-white px-6 py-3.5 text-sm font-medium shadow-[0_8px_20px_rgba(176,120,64,0.3)] hover:bg-[#8B5E30] hover:-translate-y-0.5 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Schedule (`schedule-agenda`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #faf7f2;
  --color-surface: #ffffff;
  --color-text: #2c2c2c;
  --color-muted: #6b6b6b;
  --color-border: #ffffff;
  --color-accent: #b07840;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf7f2',
    surface: '#ffffff',
    ink: '#2c2c2c',
    muted: '#6b6b6b',
    line: '#ffffff',
    accent: '#b07840',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines and body copy in Cormorant Garamond
- **Do:** Use bronze (#b07840) for the primary button and the status chips in the product mockups
- **Do:** Place product cards as white panels with soft edges over the warm hero background
- **Don't:** Don't swap in a geometric sans for body text; the serif is part of the identity
- **Don't:** Don't use bronze for large section backgrounds; it is for actions and chips
- **Don't:** Don't add hard-edged dark panels; the cards stay white on the cream ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
