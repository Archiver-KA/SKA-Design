# Design system — Luxury Fashion E-commerce Landing Page Template

`SN-W01219` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A minimal, classical stance: a white header with a serif wordmark and small uppercase navigation, over a flat light-grey hero. A large serif headline sits centred with a spaced label above it. The design relies on the serif and the flat grey field rather than colour.

**Mood:** minimal, classical, quiet, pale

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfcfc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0a0a0a` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#0a0a0a` · `#fcfcfc` · `#e5e5e5` · `#262626` · `#fafaf9` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 36px · h2 128px · h3 20px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1920px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border border-white/30 rounded-full hover:bg-white hover:text-black opacity-0 animate-fade-in delay-500">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Product grid (`product-grid`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fcfcfc;
  --color-surface: #ffffff;
  --color-text: #0a0a0a;
  --color-border: #000000;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfcfc',
    surface: '#ffffff',
    ink: '#0a0a0a',
    line: '#000000',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, centred over a flat light-grey field.
- **Do:** Keep the header white with the serif wordmark at left and small uppercase navigation.
- **Do:** Check hero text contrast after the entry animation, since white on light grey has low contrast.
- **Don't:** Don't set white headline text on the light grey field without a darker tone; it loses contrast.
- **Don't:** Don't add accent colour; keep to black, white and grey.
- **Don't:** Don't set the hero headline in a sans-serif; the serif is the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
