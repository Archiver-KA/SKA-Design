# Design system — CoinCompass Crypto Fintech Landing Page Template

`SN-W00887` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep green page (#0d3617) with a large white headline, where the phrase Digital Asset Era is set in lime (#c8f542), over a soft green light streak. Frosted glass cards float around the hero showing transfer, wallet and card details, and a solid lime pill sits under the copy. Lime is the single accent, used on the key phrase and the primary action, which gives the glassy layout a clear focal point.

**Mood:** dark, glassy, vivid, fintech, lime-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d3617` | Page ground |
| Surface | `#12300f` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#c8f542` | Primary action and highlights |
| Second accent | `#12300f` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c8f542` · `#12300f` · `#e3e8dc` · `#0d3617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 54px · h2 48px · h3 16px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="flex items-center gap-1.5 rounded-full bg-white text-[#0d3617] px-3.5 py-1.5 text-xs font-medium font-geist transition-transform duration-150 hover:scale-[1.04]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d3617;
  --color-surface: #12300f;
  --color-text: #ffffff;
  --color-accent: #c8f542;
  --color-accent-2: #12300f;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d3617',
    surface: '#12300f',
    ink: '#ffffff',
    accent: '#c8f542',
    accent2: '#12300f',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in lime (#c8f542) and the rest in white
- **Do:** Use frosted glass cards with thin light borders for product detail cards
- **Do:** Keep the primary button a solid lime pill with dark text
- **Don't:** Don't use lime for body copy or large fills
- **Don't:** Don't stack more than two glass cards over the same visual area
- **Don't:** Don't use the pale surface (#e3e8dc) as a card fill on the dark green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
