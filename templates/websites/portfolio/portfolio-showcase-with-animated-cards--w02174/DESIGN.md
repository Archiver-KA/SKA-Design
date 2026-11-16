# Design system — Portfolio Showcase with Animated Cards

`SN-W02174` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Light page with dark, glossy project cards: a white ground (#ffffff) with near-black text (#111111), and three dark cards with gradient fills, blurred glows and bold titles. The cards carry the only colour, and green (#22c55e) and blue (#3b82f6) appear as tags and status markers. Type is plain Inter with tight headings.

**Mood:** card-led, glossy, light, modern, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#3b82f6` · `#9333ea` · `#22c55e` · `#1e293b` · `#0f172a` · `#a855f7` · `#86efac` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 20px · h2 48px · h3 36px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-3xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-6`, `gap-8`, `gap-2`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #3b82f6;
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
    ink: '#111111',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set project cards dark with gradient fills and rounded-2xl corners
- **Do:** Keep the page ground white (#ffffff) and text near-black (#111111)
- **Do:** Use green (#22c55e) and blue (#3b82f6) only for tags and status markers
- **Don't:** Don't use dark cards for body copy blocks; cards are for projects
- **Don't:** Don't put more than three cards in a row
- **Don't:** Don't use the green as a button fill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
