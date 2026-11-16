# Design system — Luxury Auto Dealer Landing Page Template

`SN-W04002` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A cinematic hero where a large, light serif headline with one italic word sits over a desaturated photograph of cars under a grey wash. The lettering is high-contrast and centred, and the nav and captions are small, widely spaced capitals. The photograph is greyed so the headline and the cars read as one picture, and no bright colour competes with them.

**Mood:** cinematic, restrained, elegant, monochrome, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#141414` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8c8c88` | Secondary copy, captions |
| Border | `#141414` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#141414` · `#8c8c88` · `#f2f0eb` · `#d1d1d1` · `#ffffff` · `#6b7280` · `#000000` · `#d1d5db` · `#1a1a1a` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="p-3 border border-softblack/10 rounded-full hover:bg-softblack hover:text-alabaster transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Timeline (`timeline`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #141414;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #8c8c88;
  --color-border: #141414;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#141414',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#8c8c88',
    line: '#141414',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in a light serif, with one italic word per heading
- **Do:** Keep photography desaturated under a dark wash
- **Do:** Use widely spaced uppercase for navigation and captions
- **Don't:** Don't add bright colour to the hero
- **Don't:** Don't set headlines in a heavy weight
- **Don't:** Don't place body copy over the bright parts of the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
