# Design system — Marketing & Retail Portfolio Template

`SN-W02106` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A personal CV page for a marketing professional: a near-black ground [#0f0f0f] carries a large white sans introduction, and beige [#e6e4df] cards hold the work history in a row beneath it. Each card has a small square logo tile, a date line and a bold role title, and a black panel on the right summarises education. Colour appears only in the small logo tiles.

**Mood:** plain, professional, structured, warm, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#e6e4df` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d62e2e` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#000000` · `#e6e4df` · `#ffffff` · `#a3a3a3` · `#0f0f0f` · `#141414` · `#f2f0ea` · `#1a1a1a` · `#6366f1` · `#0046ad`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-blue-900/20`, `shadow-black/20`
- **Content width:** `max-w-[1600px]`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-12`, `gap-1`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-surface: #e6e4df;
  --color-text: #ffffff;
  --color-border: #000000;
  --color-accent: #d62e2e;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    surface: '#e6e4df',
    ink: '#ffffff',
    line: '#000000',
    accent: '#d62e2e',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the introduction large, white and written as a plain first-person sentence.
- **Do:** Set each experience as a beige card with a logo tile, an uppercase date and a bold title.
- **Do:** Use the black panel only for the education and history summary.
- **Don't:** Don't add a hero photograph; the first screen is text and cards.
- **Don't:** Don't use the beige cards as the page background; they hold content only.
- **Don't:** Don't use the accent red outside the logo tiles.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
