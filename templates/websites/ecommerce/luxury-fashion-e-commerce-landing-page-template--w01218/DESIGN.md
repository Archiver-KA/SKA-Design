# Design system — Luxury Fashion E-commerce Landing Page Template

`SN-W01218` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

An editorial fashion stance: a full-bleed street-style photograph with a large white serif headline centred over it, a small spaced eyebrow above and two buttons below, one solid white and one outlined. The header is a light band with a serif wordmark, and the photograph's yellow and teal tones are the only colour. Type stays white and sits directly on the image without a panel.

**Mood:** editorial, photographic, classic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#e5e5e5` · `#a3a3a3` · `#737373` · `#171717` · `#d4d4d4` · `#262626` · `#525252` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-[1920px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-5`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="flex-1 bg-zafiore-black text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e5e5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e5e5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in large white serif, centred over the photograph.
- **Do:** Pair a solid white primary button with an outline secondary on the image.
- **Do:** Let the photograph supply the colour and keep the interface black, white and grey.
- **Don't:** Don't switch the header wordmark to a sans-serif; keep one serif throughout.
- **Don't:** Don't put dark text over the photograph; keep the hero copy white.
- **Don't:** Don't add a coloured button; keep the interface neutral.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
