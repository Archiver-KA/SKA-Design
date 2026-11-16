# Design system — Local Business Automation Template

`SN-W00502` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bold, direct service page on a warm stone ground (#e8e4dc) with a serif headline in Instrument Serif set large and black. Black stat boxes and a black marquee strip carry the emphasis, and white panels hold the copy. The tone is confident and blunt, a manifesto for trade businesses, and the colour comes only from black, white and stone.

**Mood:** confident, blunt, editorial, warm, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8e4dc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#fb923c` · `#f4f1ea` · `#1a1a1a` · `#262626` · `#e8e4dc` · `#c2410c` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="rounded-md bg-[#1a1a1a] px-4 py-2 text-sm font-semibold text-[#f4f1ea] hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f1ea] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. FAQ (`faq`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e8e4dc;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-border: #000000;
  --color-accent: #000000;
  --font-display: "Instrument Serif", serif;
  --font-body: "Instrument Serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8e4dc',
    surface: '#ffffff',
    ink: '#1a1a1a',
    line: '#000000',
    accent: '#000000',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif at large size.
- **Do:** Use black (#000000) blocks for stats and the marquee strip.
- **Do:** Keep copy on white panels over the stone ground.
- **Don't:** Don't use the orange (#fb923c) as a fill; the palette stays black, white and stone.
- **Don't:** Don't set the headline in a sans-serif.
- **Don't:** Don't add gradients or glows to the panels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
