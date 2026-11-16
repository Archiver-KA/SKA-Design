# Design system — AI Era Immersive Landing Page

`SN-W00093` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Marlowe is an immersive, dark page on a pure black ground (#000000) with a large centred headline in a gradient that runs from pale cyan to violet and pink. Text is white or light grey, and the one primary button is a pill with a violet-to-cyan gradient fill. Soft blurred glow shapes sit behind the hero, so the colour comes from light rather than from solid blocks.

**Mood:** immersive, dark, glowing, gradient-led, ethereal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e879f9` | Primary action and highlights |
| Second accent | `#e879f9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cffafe` · `#e879f9` · `#000000` · `#22d3ee` · `#67e8f9` · `#d946ef` · `#8b5cf6` · `#2e1065` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 36px · body 20px
- **Weights in use:** light, extralight, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-fuchsia-500/20`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-16`, `gap-10`

**Primary button**

```html
<a class="text-sm font-light border border-white/80 rounded-full px-6 py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #e879f9;
  --color-accent-2: #e879f9;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#e879f9',
    accent2: '#e879f9',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the hero headline centred on pure black (#000000) with a cyan-to-violet gradient fill
- **Do:** Use the pill-shaped gradient button for the single primary action per section
- **Do:** Keep the blurred glow shapes behind the hero to carry the colour
- **Don't:** Don't use solid colour blocks in the hero; the colour lives in gradients and glows
- **Don't:** Don't add a second button style with a different gradient
- **Don't:** Don't put the headline on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
