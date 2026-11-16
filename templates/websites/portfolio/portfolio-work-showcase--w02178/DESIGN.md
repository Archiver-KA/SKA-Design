# Design system — Portfolio Work Showcase

`SN-W02178` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Clean light portfolio: a pale grey ground (#f3f4f6) with white rounded cards, near-black headings (#0f172a) and a single orange (#ff8b33) for the eyebrow and the secondary link. The large Manrope headline sits left, with a black pill resume button and a stack of case-study cards on the right. The orange is the only warm colour, so it reads as a deliberate signal.

**Mood:** clean, light, structured, warm, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Accent | `#ff8b33` | Primary action and highlights |

Palette by frequency of use: `#ff8b33` · `#4b5563` · `#ffffff` · `#f9fafb` · `#0f172a` · `#f3f4f6` · `#020617` · `#a259ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Inter, IBM Plex Serif, IBM Plex Mono, GT Walsheim
- **Scale (largest breakpoint):** h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, bold
- **Letter spacing:** `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-12`, `gap-8`

## Page structure

Blocks in page order:

1. Case studies (`case-studies`)
2. Dashboard preview (`dashboard-preview`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #4b5563;
  --color-accent: #ff8b33;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#4b5563',
    accent: '#ff8b33',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use orange (#ff8b33) only for the eyebrow and one link per section
- **Do:** Set cards white on the pale grey ground with rounded-2xl corners
- **Do:** Use a black pill button for the main resume action
- **Don't:** Don't use orange for large fills
- **Don't:** Don't add a second accent hue
- **Don't:** Don't use dark cards on this light ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
