# Design system — Car Detailing Service Landing Page Template

`SN-W03855` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, framed layout: a near-black page holds one rounded card split into two columns, with a headline and short copy on the left and three service rows on the right. The headline is large and white, with its final word in blue (#3b82f6), and the blue also runs as a thin progress line along the card's bottom edge. Each service row pairs a white title with a grey description, which keeps the list easy to scan.

**Mood:** refined, technical, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#262626` · `#3b82f6` · `#171717` · `#ffffff` · `#404040` · `#60a5fa` · `#dbeafe` · `#737373` · `#525252` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Comfortaa, Inter
- **Scale (largest breakpoint):** h1 60px · h3 20px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-5xl`
- **Common gaps:** `gap-6`, `gap-0`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline word in blue (#3b82f6) only.
- **Do:** Keep service rows as a white title with a grey description beneath.
- **Do:** Frame the content in one rounded dark card with a thin blue progress line.
- **Don't:** Don't use blue for service titles or body copy.
- **Don't:** Don't add a photograph inside the card.
- **Don't:** Don't place the card on a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
