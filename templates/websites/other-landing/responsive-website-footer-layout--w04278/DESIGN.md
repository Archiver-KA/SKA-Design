# Design system — Responsive Website Footer Layout

`SN-W04278` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark footer on deep indigo-black (#010012) with a soft purple glow behind a thin-bordered panel. The wordmark and social icons are lavender, column headings are set in small uppercase lavender above white links, and the copyright line is small and centred. The glow and the panel's translucent edge give depth without a hard boundary.

**Mood:** moody, glowing, dark, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#010012` | Page ground |
| Text | `#faf5ff` | Headings and primary copy |
| Accent | `#c084fc` | Primary action and highlights |

Palette by frequency of use: `#e9d5ff` · `#faf5ff` · `#c084fc` · `#9333ea` · `#010012` · `#7e22ce` · `#ffffff` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** semibold, extrabold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`
- **Content width:** `max-w-6xl`
- **Common gaps:** `gap-8`, `gap-12`, `gap-2`

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #010012;
  --color-text: #faf5ff;
  --color-accent: #c084fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#010012',
    ink: '#faf5ff',
    accent: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set column headings in small uppercase lavender (#c084fc) above white links
- **Do:** Keep the purple glow behind a translucent bordered panel
- **Do:** Use lavender for the logo and social icons only
- **Don't:** Don't use a light background for the footer
- **Don't:** Don't make the links lavender; keep them white
- **Don't:** Don't add a second glow colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
