# Design system — Aero Footwear Product Landing Page Template

`SN-W02700` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Sneaker product page with a near-black hero. Heavy uppercase sans headlines run in white and fading grey, and a lime (#a3e635) badge and colourway swatch are the only saturated colour. A dark configurator panel sits on the right with a price, colour choice and size row, so the page is built like a product tool, with the lime pointing at the choices.

**Mood:** bold, athletic, dark, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3e635` · `#a1a1aa` · `#71717a` · `#000000` · `#09090b` · `#27272a` · `#18181b` · `#d4ff3e` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_20px_rgba(212,255,62,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[500px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-lime-400 text-black font-semibold px-6 py-3 whitespace-nowrap hover:bg-lime-300 transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Articles (`blog-articles`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans, white fading to grey, on the near-black ground (#09090b).
- **Do:** Use the lime (#a3e635) only for the badge, the selected colour and the selected size.
- **Do:** Keep the configurator as a dark panel with a single white primary button.
- **Don't:** Don't set the hero ground in lime; it is near-black.
- **Don't:** Don't use lime for body copy or large fills.
- **Don't:** Don't add more colour swatches; the palette stays small.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
