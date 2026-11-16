# Design system — Nexus Idea Arcade SaaS Template

`SN-W00583` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black arcade page on a deep purple-black ground (#03000a) with a neon two-colour headline: WORLDS in cyan (#00f0ff) and UNLOCK in pink (#ff66b3), set in a monospaced face. Panels and buttons are thin-bordered outlines in the same cyan and pink, with a wireframe cube as the hero illustration. The look is retro-futuristic and game-like, and it works because the two neon colours alone carry the whole style.

**Mood:** retro-futuristic, neon, game-like, monospaced, high-energy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#03000a` | Page ground |
| Text | `#f7f2ff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Accent | `#00f0ff` | Primary action and highlights |
| Second accent | `#ff66b3` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00f0ff` · `#6f9bff` · `#ff66b3` · `#b45cff` · `#6b7280` · `#03000a` · `#f7f2ff` · `#ff007f` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Space Mono
- **Loaded families:** Space Grotesk, Space Mono, VT323
- **Scale (largest breakpoint):** body 14px
- **Weights in use:** bold, extrabold
- **Letter spacing:** `tracking-[0.28em]`, `tracking-[0.22em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-4xl`, `max-w-[90rem]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #03000a;
  --color-text: #f7f2ff;
  --color-muted: #6b7280;
  --color-accent: #00f0ff;
  --color-accent-2: #ff66b3;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Space Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#03000a',
    ink: '#f7f2ff',
    muted: '#6b7280',
    accent: '#00f0ff',
    accent2: '#ff66b3',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Space Mono'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in the monospaced face with one cyan word and one pink word on the ground (#03000a).
- **Do:** Use cyan (#00f0ff) and pink (#ff66b3) outlines for buttons and panels, never as solid fills.
- **Do:** Keep the 3D wireframe as the hero illustration, drawn in thin cyan lines.
- **Don't:** Don't add a third neon hue to the first screen; cyan and pink carry the style.
- **Don't:** Don't fill buttons solid with neon colour; the outline is the look.
- **Don't:** Don't use a light page background; the arcade look depends on the dark ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
