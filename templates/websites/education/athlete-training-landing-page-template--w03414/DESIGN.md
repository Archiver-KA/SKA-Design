# Design system — Athlete Training Landing Page Template

`SN-W03414` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Stark, athletic page on pure black with a red glow in the top corners. The headline is a heavy white sans, with its second phrase faded to grey, so the statement reads as a deliberate contrast. A dark red-tinted pill navbar and a small monospaced protocol tag add the only colour, and a single white pill starts the action.

**Mood:** stark, athletic, severe, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f87171` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#a3a3a3` · `#000000` · `#525252` · `#171717` · `#262626` · `#737373` · `#f87171` · `#7f1d1d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_10px_rgba(239,68,68,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-x-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground black (#000000) with a red glow only at the top corners.
- **Do:** Set the headline in heavy white sans, with the second phrase faded to grey (#a3a3a3).
- **Do:** Use the white pill for the single hero action and keep red for the navbar tint and small tags.
- **Don't:** Don't set the headline in red; it stays white and grey.
- **Don't:** Don't add a second action button in the hero.
- **Don't:** Don't fill the navbar with a solid red.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
