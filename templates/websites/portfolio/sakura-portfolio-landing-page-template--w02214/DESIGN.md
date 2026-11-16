# Design system — Sakura Portfolio Landing Page Template

`SN-W02214` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A stark black-and-white portfolio: bold serif headlines in black, oversized uppercase role labels, and a full-width black band for section links. The primary button is a pink (#f472b6) fill with a black keyline, and the secondary button is outlined in black, so the pink is the only colour and it appears once. The page reads as high-contrast print with a single bright spot.

**Mood:** stark, high-contrast, graphic, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#f472b6` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#f9fafb` · `#f472b6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 64px · h3 80px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow`, `shadow-sm`
- **Content width:** `max-w-3xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-white/90 text-black text-sm font-semibold px-5 py-2 backdrop-blur transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. About (`about`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Logo cloud (`logo-cloud`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-border: #000000;
  --color-accent: #f472b6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#000000',
    line: '#000000',
    accent: '#f472b6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the primary button filled pink (#f472b6) with a black border and black text
- **Do:** Set headlines in a bold serif in black, large, with uppercase role labels
- **Do:** Use the black band only for navigation or section links
- **Don't:** Don't use the pink for text or large backgrounds
- **Don't:** Don't soften the black keylines to grey
- **Don't:** Don't set body copy in the display serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
