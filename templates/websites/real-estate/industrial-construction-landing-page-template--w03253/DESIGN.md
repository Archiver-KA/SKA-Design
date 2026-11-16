# Design system — Industrial Construction Landing Page Template

`SN-W03253` · real-estate · light mode · Sinera Atlas theme `route` · language `de`

## Direction

A direct, structural page built on white with a pale blue-grey panel and dark navy type. The headline is set in a heavy sans at large size, tightly leaded, with its final phrase picked out in a brighter blue. A thin amber-orange rule underlines the key phrase, which is the only warm note on the page. Layout is plain and grid-based, closer to a technical document than a showcase.

**Mood:** direct, structural, regional, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#0c1b3e` | Headings and primary copy |
| Accent | `#2a9d4f` | Primary action and highlights |
| Second accent | `#0c1b3e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cfd8e6` · `#16a34a` · `#0c1b3e` · `#0b1c39` · `#dbe4f5` · `#c6d2e8` · `#2a9d4f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #0c1b3e;
  --color-accent: #2a9d4f;
  --color-accent-2: #0c1b3e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#0c1b3e',
    accent: '#2a9d4f',
    accent2: '#0c1b3e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter bold with tight leading, in dark navy (#0c1b3e) on white.
- **Do:** Use the amber-orange rule only under the key phrase of the hero headline.
- **Do:** Keep the hero image panel in pale blue tones and let it be the only tinted surface.
- **Don't:** Don't switch the page to a dark background; it is built on white.
- **Don't:** Don't add more than one accent colour to a section.
- **Don't:** Don't round the panels heavily; the layout uses square corners and thin lines.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
