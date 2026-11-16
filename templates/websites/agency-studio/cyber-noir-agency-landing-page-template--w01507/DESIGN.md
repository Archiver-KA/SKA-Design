# Design system — Cyber-Noir Agency Landing Page Template

`SN-W01507` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground (#000000) with an italic, heavy uppercase headline in orange (#fb923c) that glows softly, the only saturated colour in the first screen. Below, dark cards with thin orange edges connect to a central node in a radial diagram, so orange draws the hierarchy. Body copy is small and muted, and the whole composition is centred and symmetrical.

**Mood:** cyber, dramatic, centred, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#030303` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#a3a3a3` · `#fb923c` · `#737373` · `#000000` · `#fed7aa` · `#ea580c` · `#404040` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_rgba(249,115,22,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Stats band (`stats`)
4. Logo cloud (`logo-cloud`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #030303;
  --color-text: #000000;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb923c;
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
    surface: '#030303',
    ink: '#000000',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb923c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy italic uppercase, and colour them orange (#fb923c) with a soft glow.
- **Do:** Use orange outlines on cards and connectors to tie the diagram to the accent.
- **Do:** Keep the ground black (#000000) and body copy in muted grey.
- **Don't:** Don't use the orange (#f97316) as a page background; the page is black.
- **Don't:** Don't use a light theme; the page is dark.
- **Don't:** Don't add gradient fills to the cards; they are flat dark with orange edges.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
