# Design system — Fresh Kebab Restaurant Landing Page Template

`SN-W02905` · food-beverage · light mode · Sinera Atlas theme `route` · language `ro`

## Direction

A playful, sticker-like hero on a pale mint ground (#e6f9ea) where the display headline is set in heavy uppercase caps, filled with bright green (#28d156) and outlined in black with a hard offset shadow. Pill-shaped green nav items and a black-outlined button repeat the same outline vocabulary, and small stats sit at the bottom-right. The stance is loud and fast-casual, with green used as both fill and stroke.

**Mood:** playful, loud, fast-casual, sticker-like, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e6f9ea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#28d156` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#28d156` · `#e6f9ea` · `#6ade7d` · `#4b5563` · `#9dfaa8` · `#444444` · `#f3f4f6` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Titan One
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, black
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-hard`, `shadow-none`, `shadow-hard-sm`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full md:w-auto flex items-center justify-between gap-4 bg-[#28D156] border-2 border-black rounded-full pl-2 pr-8 py-2 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e6f9ea;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #000000;
  --color-accent: #28d156;
  --color-accent-2: #facc15;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e6f9ea',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#000000',
    accent: '#28d156',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the display headline in heavy uppercase caps, filled green (#28d156) with a black outline.
- **Do:** Give buttons and cards a black outline and hard offset shadow, matching the headline.
- **Do:** Keep the page ground pale mint (#e6f9ea) and use green as the single accent.
- **Don't:** Don't use soft shadows or blur; depth comes from hard black offsets.
- **Don't:** Don't set the headline in a light weight; it is heavy throughout.
- **Don't:** Don't use yellow (#facc15) for accents; the page uses only green and black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
