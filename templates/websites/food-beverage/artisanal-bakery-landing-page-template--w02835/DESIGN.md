# Design system — Artisanal Bakery Landing Page Template

`SN-W02835` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A confident bakery page built on a solid oxblood hero (#7f1d1d), with a large white serif wordmark and a small italic date line beneath it. The same deep red fills the navigation's catalogue button, so the brand colour appears in two places and carries the page. A thin band of uppercase product claims in small grey type runs under the hero on a white ground.

**Mood:** confident, heritage, bold, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7f1d1d` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#fafaf9` · `#d6d3d1` · `#e7e5e4` · `#57534e` · `#1c1917` · `#292524` · `#fdfbf7` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Pinyon Script, STIX Two Text, Geist, Roboto
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 24px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-16`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="bg-soria-red text-white text-sm font-medium px-6 py-2.5 hover:bg-red-900 transition-all shadow-sm rounded-sm inline-block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #7f1d1d;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#7f1d1d',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the oxblood (#7f1d1d) for the hero ground and the catalogue button only
- **Do:** Set the wordmark in a white serif with the small italic date beneath it
- **Do:** Run uppercase claims in small grey type on the marquee band
- **Don't:** Don't put the oxblood behind long passages of body copy
- **Don't:** Don't use a bright red; the brand red is a deep, muted tone
- **Don't:** Don't add a second brand colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
