# Design system — Coffee Shop Landing Page Template

`SN-W01128` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A soft, warm cafe page on a cream ground, with a peach and sand gradient across the hero. The hero copy is centred and set in muted brown, with a small caps label above and a serif display face for the brand. Buttons are a thin outlined pill and a text link, so the page reads as gentle and unhurried, with terracotta used only for small accents.

**Mood:** soft, warm, gentle, unhurried

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3efe7` | Page ground |
| Text | `#4a443e` | Headings and primary copy |
| Muted text | `#5c554d` | Secondary copy, captions |
| Border | `#4a443e` | Hairlines, dividers, outlines |
| Accent | `#d48c70` | Primary action and highlights |

Palette by frequency of use: `#d48c70` · `#4a443e` · `#2c2825` · `#f3efe7` · `#5c554d` · `#e8dcc5` · `#8b9d83` · `#ffffff` · `#d8e6de` · `#ebc6b0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Inter
- **Loaded families:** Fraunces, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 60px · h3 30px · body 18px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="text-[#D48C70] border border-[#D48C70] px-8 py-3 rounded-full hover:bg-[#D48C70] hover:text-[#F3EFE7] transition-all duration-300 uppercase tracking-widest text-xs font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Integrations (`integrations`)
3. Menu list (`menu-list`)
4. Map / location (`map-location`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3efe7;
  --color-text: #4a443e;
  --color-muted: #5c554d;
  --color-border: #4a443e;
  --color-accent: #d48c70;
  --font-display: "Fraunces", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3efe7',
    ink: '#4a443e',
    muted: '#5c554d',
    line: '#4a443e',
    accent: '#d48c70',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a cream ground with a soft peach and sand gradient behind the hero
- **Do:** Set the hero headline in a serif in muted brown (#4a443e)
- **Do:** Use terracotta (#d48c70) only for small accents and the outlined button
- **Don't:** Don't use saturated colours; the palette stays in cream, brown and terracotta
- **Don't:** Don't use filled high-contrast buttons; the primary action is outlined
- **Don't:** Don't set body copy in pure black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
