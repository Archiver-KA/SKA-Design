# Design system — KAIRO Luxury Travel Expedition Template

`SN-W03072` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The page sits on a white ground with stone-toned panels (#e8e3da) and warm near-black text (#221f1c), and a rust tone (#b9412c) appears in the palette. Motion comes from GSAP, Lenis smooth scrolling and Three.js scenes, so the look is quiet and cinematic.

**Mood:** quiet, warm, cinematic, immersive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e8e3da` | Cards, panels, raised areas |
| Text | `#221f1c` | Headings and primary copy |
| Accent | `#f3ede2` | Primary action and highlights |

Palette by frequency of use: `#f3ede2` · `#ffffff` · `#e8e3da` · `#221f1c` · `#ece6da` · `#f0e9dc` · `#f4ede2` · `#b9412c` · `#0d0e11` · `#141210`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-text)
- **Body:** var(--font-text)
- **Loaded families:** Bodoni Moda, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Video / media (`video-media`)
4. Feature grid (`features`)
5. Timeline (`timeline`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e8e3da;
  --color-text: #221f1c;
  --color-accent: #f3ede2;
  --font-display: "var(--font-text)", sans-serif;
  --font-body: "var(--font-text)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e8e3da',
    ink: '#221f1c',
    accent: '#f3ede2',
  },
  fontFamily: { display: ['var(--font-text)'], sans: ['var(--font-text)'] },
} }
```

## Do and don't

- **Do:** Keep the ground off-white and panels stone-toned (#e8e3da)
- **Do:** Set text in warm near-black (#221f1c)
- **Do:** Use motion only through the existing GSAP and Lenis scroll behaviour
- **Don't:** Don't use the rust (#b9412c) as a large fill; it is a palette tone only
- **Don't:** Don't add heavy shadows or gradients to the page
- **Don't:** Don't add bright accent colours beyond the palette tones

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
