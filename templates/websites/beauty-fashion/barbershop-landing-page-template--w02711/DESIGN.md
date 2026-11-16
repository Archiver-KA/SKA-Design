# Design system — Barbershop Landing Page Template

`SN-W02711` · beauty-fashion · dark mode · Sinera Atlas theme `route` · language `de`

## Direction

German barbershop page on near-black (#0a0a0a) with a bold sans headline in three lines: white, then grey, then gold (#d4af37). A gold primary button sits beside an outlined secondary, and a black-and-white photograph of tools fills a panel on the right. The gold is reserved for the last headline line and the main call to action, so the palette stays austere.

**Mood:** austere, industrial, dark, gold accent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#0a0a0a` · `#a3a3a3` · `#737373` · `#000000` · `#525252` · `#333333` · `#d4af37` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_rgba(212,175,55,0.2)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-gold-500 text-black px-5 py-2 rounded-full font-medium hover:bg-white transition-colors duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Map / location (`map-location`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold sans with the final line in gold (#d4af37).
- **Do:** Use gold for the primary booking button and that one headline line only.
- **Do:** Keep photography in black and white, framed in a single panel beside the copy.
- **Don't:** Don't add colour photography; the images are monochrome.
- **Don't:** Don't set body copy in gold; it is for the headline and the button.
- **Don't:** Don't add a second accent colour beside the gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
