# Design system — Romantic Interactive Proposal Template

`SN-W03646` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A playful, single-question flow set over a full-bleed photograph of yellow flowers, with a frosted translucent card centred on top. The card holds a thin progress bar at its top edge, a large question label and two stacked answer buttons. Colour comes from the photograph, while the interface stays white and quiet, with large rounded corners on the card and every button.

**Mood:** playful, soft, frosted, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fecdd3` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffe4e6` | Hairlines, dividers, outlines |
| Accent | `#881337` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#fecdd3` · `#ffffff` · `#fff1f2` · `#881337` · `#ffe4e6` · `#f43f5e` · `#fda4af` · `#4c0519` · `#e11d48` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit
- **Scale (largest breakpoint):** h1 36px · h2 24px · body 18px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-[280px]`
- **Common gaps:** `gap-3`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="w-full py-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl text-white font-medium text-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:scale-[1.02] transition-all z-10 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fecdd3;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #ffe4e6;
  --color-accent: #881337;
  --color-accent-2: #3b82f6;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fecdd3',
    surface: '#ffffff',
    ink: '#111111',
    line: '#ffe4e6',
    accent: '#881337',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Keep the question card frosted white with large rounded corners over the photograph
- **Do:** Show progress as a thin bar along the top edge of the card
- **Do:** Stack answer buttons full-width inside the card
- **Don't:** Don't place more than one card on the screen at a time
- **Don't:** Don't add colour to the card; let the photograph carry it
- **Don't:** Don't use sharp corners on buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
