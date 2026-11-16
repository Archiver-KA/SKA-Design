# Design system — Marketing & Retail Portfolio Website Template

`SN-W02107` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A variant of the same personal CV layout: a near-black ground [#0f0f0f] with a large white sans introduction, and a row of beige [#e6e4df] experience cards beneath. The first card carries a small round portrait, which gives the row a human anchor, and a black panel on the right lists education and history. The cards are kept even in height and the type is set at one size.

**Mood:** personal, plain, structured, warm, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#e6e4df` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#d62e2e` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#000000` · `#e6e4df` · `#ffffff` · `#a3a3a3` · `#0f0f0f` · `#141414` · `#f2f0ea` · `#1a1a1a` · `#6366f1` · `#1e3a8a`.

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

- **Do:** Place a small round portrait at the top of the first experience card.
- **Do:** Keep the introduction large and white, written in plain sentences.
- **Do:** Use beige cards (#e6e4df) in an even row, with equal heights.
- **Don't:** Don't enlarge the portrait into a full-width hero; it stays small inside the card.
- **Don't:** Don't add colour to the cards beyond the logo tiles.
- **Don't:** Don't put body copy in the black panel; it holds the summary only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
