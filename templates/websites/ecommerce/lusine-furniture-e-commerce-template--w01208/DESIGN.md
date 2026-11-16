# Design system — LUSINE Furniture E-commerce Template

`SN-W01208` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A catalogue-style stance: a white page with a large serif category title, a sans-serif subline and rounded pill filters, with product photography doing the colour work. The navigation sits on a beige band under a dark green announcement bar. Product cards are large rounded frames with small dark badges, so the grid reads as furniture photography rather than interface colour.

**Mood:** catalogue, calm, neutral, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f6f6f6` | Cards, panels, raised areas |
| Text | `#1f1f1f` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#0b1e3d` | Primary action and highlights |
| Second accent | `#1a3c34` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f6f6f6` · `#0b1e3d` · `#9ca3af` · `#000000` · `#1f1f1f` · `#1a3c34` · `#4b5563` · `#e5e7eb` · `#fbbf24`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 16px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1800px]`, `max-w-[1920px]`
- **Common gaps:** `gap-1`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="flex items-center justify-between gap-2 px-5 py-2 bg-[#F3EFE8] rounded-full hover:bg-[#E5E0D8] transition-colors text-base font-medium text-[#1F1F1F]">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f6f6f6;
  --color-text: #1f1f1f;
  --color-border: #e5e7eb;
  --color-accent: #0b1e3d;
  --color-accent-2: #1a3c34;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f6f6f6',
    ink: '#1f1f1f',
    line: '#e5e7eb',
    accent: '#0b1e3d',
    accent2: '#1a3c34',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set page titles in Playfair Display and sub-lines in DM Sans.
- **Do:** Use pill-shaped filter controls in beige with small chevrons.
- **Do:** Let the product photography supply the colour and keep the interface neutral.
- **Don't:** Don't use the navy (#0b1e3d) as a UI accent; it appears in the sofa photography.
- **Don't:** Don't add a second colour to the badges; the card badge is a single dark tag.
- **Don't:** Don't set the page on a dark background; keep it white with a beige header.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
