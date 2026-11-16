# Design system — Artemis Space Exploration Landing Page Template

`SN-W01811` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Cinematic and bold: a dark, photo-led hero with a huge white bold sans title centred over a launch image darkened to near-black at the edges. Blue labels in the nav and a bright blue (#1e90ff) accent give the page its only colour. Navigation is small and uppercase. The title does the work and the blue is a signal, so the design reads as epic and direct.

**Mood:** cinematic, bold, dark, epic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8892b0` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e90ff` | Primary action and highlights |

Palette by frequency of use: `#1e90ff` · `#ffffff` · `#8892b0` · `#000000` · `#0a0a0a` · `#111111` · `#cbd5e6` · `#00aaff` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h2 48px · h3 36px · body 16px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_18px_rgba(30,144,255,0.4)]`, `shadow-[0_0_6px_#1E90FF]`
- **Content width:** `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Timeline (`timeline`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #8892b0;
  --color-border: #ffffff;
  --color-accent: #1e90ff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#8892b0',
    line: '#ffffff',
    accent: '#1e90ff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use the blue (#1e90ff) only for nav links and small highlights
- **Do:** Set the title in heavy white sans, centred over the photograph
- **Do:** Darken the photograph at the edges so the title stays legible
- **Don't:** Don't use blue for large fills
- **Don't:** Don't place the title over the brightest part of the launch image
- **Don't:** Don't add light panels in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
