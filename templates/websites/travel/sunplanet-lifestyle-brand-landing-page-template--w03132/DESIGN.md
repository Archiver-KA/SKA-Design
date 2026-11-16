# Design system — Sunplanet Lifestyle Brand Landing Page Template

`SN-W03132` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold, editorial lifestyle page built on one flat yellow ground (#ffe459) with near-black type and no other colour. The headline is very large, with an italic first line and a roman second line, and a small sans caption sits in a side column. The yellow fills the whole first screen, so colour is the design.

**Mood:** bold, editorial, playful, minimal, graphic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffe459` | Page ground |
| Surface | `#f2ede4` | Cards, panels, raised areas |
| Text | `#141414` | Headings and primary copy |
| Border | `#141414` | Hairlines, dividers, outlines |
| Accent | `#ffe459` | Primary action and highlights |

Palette by frequency of use: `#141414` · `#fbf7ef` · `#ffe459` · `#f2ede4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Instrument Serif, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 12px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-screen-2xl`, `max-w-screen-md`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-1`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-3 px-8 py-4 border border-[#141414] hover:bg-[#141414] hover:text-[#FBF7EF] transition-colors duration-300 rounded-full group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffe459;
  --color-surface: #f2ede4;
  --color-text: #141414;
  --color-border: #141414;
  --color-accent: #ffe459;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffe459',
    surface: '#f2ede4',
    ink: '#141414',
    line: '#141414',
    accent: '#ffe459',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Fill the first screen with the yellow (#ffe459) and keep type near-black (#141414)
- **Do:** Set the headline very large, with an italic first line and a roman second line
- **Do:** Keep supporting text small and tucked into a side column
- **Don't:** Don't add a second accent colour; yellow is the whole palette on this screen
- **Don't:** Don't put photos in the hero; the page stays type-only
- **Don't:** Don't use a white or cream ground; the yellow is the ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
