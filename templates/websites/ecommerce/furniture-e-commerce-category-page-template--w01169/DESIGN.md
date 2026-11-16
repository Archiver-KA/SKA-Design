# Design system — Furniture E-commerce Category Page Template

`SN-W01169` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A French furniture page with a deep green announcement bar (#1a3c34) above a light header and a serif headline in near-black. Playfair Display sets the headlines while DM Sans handles the filter chips, navigation and copy, a classic-meets-modern pairing. The gold feature card beside the grid is the one warm, decorative block, and the product grid below stays plain.

**Mood:** classic, warm, structured, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f6f6f6` | Cards, panels, raised areas |
| Text | `#1f1f1f` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#1a3c34` | Primary action and highlights |
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

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1800px]`, `max-w-[1920px]`
- **Common gaps:** `gap-1`, `gap-2`, `gap-x-2`

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
  --color-accent: #1a3c34;
  --color-accent-2: #1a3c34;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
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
    accent: '#1a3c34',
    accent2: '#1a3c34',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set page headlines in Playfair Display; use DM Sans for filter chips, navigation and body copy.
- **Do:** Use the deep green (#1a3c34) for the announcement bar and dark accents, not for buttons.
- **Do:** Keep product tiles plain and square-cornered, with the gold feature card as the only warm block.
- **Don't:** Don't set headlines in DM Sans; the serif is the page's voice.
- **Don't:** Don't round the product tiles; the sharp corners are part of the layout.
- **Don't:** Don't add a second gold block to the grid; one feature card is the limit.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
