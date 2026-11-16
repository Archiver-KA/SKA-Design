# Design system — Streetwear E-commerce Landing Page Template

`SN-W01326` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, blunt streetwear hero on near-black (#050505). The headline is heavy uppercase sans-serif at near-maximal size, with the second word fading from silver-white to grey, and the two calls to action are a solid white block and a thin outlined block. Colour is nearly absent; a small indigo badge is the only hue, so the type and spacing do the work.

**Mood:** blunt, dark, monochrome, loud

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#000000` · `#71717a` · `#818cf8` · `#050505` · `#18181b` · `#6366f1` · `#52525b` · `#1e1b4b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 16px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Product grid (`product-grid`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase Inter at very large size, with tight line spacing
- **Do:** Fade the second headline word with a silver-to-grey gradient
- **Do:** Use a solid white button for the primary action and a thin outlined button beside it
- **Don't:** Don't add a warm or bright colour to the hero; the page stays near-monochrome
- **Don't:** Don't use the indigo badge for anything but a small status label
- **Don't:** Don't add gradient fills to the buttons; they stay flat white or outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
