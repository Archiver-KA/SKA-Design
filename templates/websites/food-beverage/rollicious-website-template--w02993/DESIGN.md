# Design system — Rollicious Website Template

`SN-W02993` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A loud hero on a full orange-red field (#e85424): a heavy, condensed white wordmark fills the width, with small spaced capitals above it and a dark green (#234220) pill as the order button. The lead card is a blurred rounded panel in the same orange, so the top of the page reads as one colour block.

**Mood:** loud, graphic, bold, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f4eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#e85424` | Primary action and highlights |
| Second accent | `#234220` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e85424` · `#000000` · `#234220` · `#0f172a` · `#f3d86d` · `#f7f4eb` · `#e5e7eb` · `#111827` · `#020617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** DM Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 176px · h2 60px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-4`, `gap-x-1.5`, `gap-y-1.5`

**Primary button**

```html
<a class="flex items-center justify-center w-full uppercase transition-colors hover:bg-[#E85424] text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg py-3 shadow-lg cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Menu list (`menu-list`)
4. Hero (`hero`)
5. Marquee (`marquee`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f7f4eb;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #000000;
  --color-accent: #e85424;
  --color-accent-2: #234220;
  --font-display: "Oswald", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f4eb',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#000000',
    accent: '#e85424',
    accent2: '#234220',
  },
  fontFamily: { display: ['Oswald'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the orange-red (#e85424) as the field for hero blocks, not for small text.
- **Do:** Set the wordmark in heavy Oswald at a very large size, in white.
- **Do:** Use dark green (#234220) for the order button only.
- **Don't:** Don't set body text in orange on the orange field.
- **Don't:** Don't use a thin weight for the wordmark.
- **Don't:** Don't add a second bright colour beside the orange and green.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
