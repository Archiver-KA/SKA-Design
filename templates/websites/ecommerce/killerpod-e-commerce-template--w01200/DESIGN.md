# Design system — Killerpod E-commerce Template

`SN-W01200` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A brutalist athletic stance: a pure black ground, a very large uppercase bold sans-serif headline in cream and a grayscale athlete photograph darkened behind it. Buttons are solid cream and outlined, set in a row under the headline, and the navigation is small and tight to the top edge. A single red-tinted navigation item is the only colour in the frame, which matches the oxblood in the palette.

**Mood:** brutalist, bold, athletic, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#1c1c1c` | Cards, panels, raised areas |
| Text | `#fffaf1` | Headings and primary copy |
| Border | `#fffaf1` | Hairlines, dividers, outlines |
| Accent | `#8b0000` | Primary action and highlights |
| Second accent | `#8b0000` | Supporting highlights |

Palette by frequency of use: `#fffaf1` · `#0a0a0a` · `#1c1c1c` · `#4b5320` · `#8b0000` · `#1e3a8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Oswald, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 16px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full py-4 border border-[#1C1C1C] text-center font-brutal uppercase text-sm tracking-tight text-[#FFFAF1] hover:bg-[#1C1C1C] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #1c1c1c;
  --color-text: #fffaf1;
  --color-border: #fffaf1;
  --color-accent: #8b0000;
  --color-accent-2: #8b0000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#1c1c1c',
    ink: '#fffaf1',
    line: '#fffaf1',
    accent: '#8b0000',
    accent2: '#8b0000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans-serif at display size, in cream (#fffaf1).
- **Do:** Keep the hero photograph in grayscale and darkened so the type stays dominant.
- **Do:** Use oxblood (#8b0000) for a single active navigation state, not for large areas.
- **Don't:** Don't round the buttons heavily; they are square-cornered.
- **Don't:** Don't use olive (#4b5320) on the hero.
- **Don't:** Don't place light text on bright photo areas without the dark overlay.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
