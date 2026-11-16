# Design system — AI Art Landing Page Template

`SN-W00039` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm light page on a pale beige ground (#efeae5) with near-black type. The headline uses a sans for the first line and an italic serif for the second, and a large phone mockup holding a colourful painting sits on the right, so the artwork supplies the colour. Primary buttons are dark charcoal pills, and the page chrome carries little other colour.

**Mood:** warm, editorial, artful, soft, approachable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#efeae5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#111827` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#000000` · `#6b7280` · `#4b5563` · `#1f2937` · `#ec4899` · `#efeae5` · `#f472b6` · `#d1c8c0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="relative bg-pink-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Pricing (`pricing`)
8. Process / steps (`how-it-works`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #efeae5;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #111827;
  --color-accent: #111827;
  --color-accent-2: #a855f7;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#efeae5',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#111827',
    accent: '#111827',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic serif, as the first screen does
- **Do:** Put artwork in a phone frame or rounded card on the right
- **Do:** Use dark charcoal (#111827) pill buttons for every primary action
- **Don't:** Don't use a white page ground; the beige (#efeae5) is part of the look
- **Don't:** Don't set the whole headline in serif; the sans carries the first line
- **Don't:** Don't add bright colour to the page chrome; the artwork supplies it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
