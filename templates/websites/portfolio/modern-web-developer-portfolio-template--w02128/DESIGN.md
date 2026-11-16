# Design system — Modern Web Developer Portfolio Template

`SN-W02128` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `id`

## Direction

A dark portfolio on near-black (#0a0a0a). The first screen shows a full-height menu with grey labels separated by hairline dividers, and a soft blue-violet glow rising from the bottom edge. The look is restrained and atmospheric, with the glow carrying most of the colour.

**Mood:** dark, quiet, atmospheric, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#d4d4d8` | Headings and primary copy |
| Accent | `#c7d2fe` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0a0a0a` · `#d4d4d8` · `#525252` · `#f5f5f5` · `#08080c` · `#c7d2fe` · `#e5e5e5` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Poppins

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Common gaps:** `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. 3D / canvas scene (`3d-canvas`)
3. Hero (`hero`)
4. About (`about`)
5. Call to action (`cta`)
6. Case studies (`case-studies`)
7. Timeline (`timeline`)
8. Feature grid (`features`)
9. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #d4d4d8;
  --color-accent: #c7d2fe;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#d4d4d8',
    accent: '#c7d2fe',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#0a0a0a) with light grey text (#d4d4d8).
- **Do:** Use the soft indigo glow at the foot of hero sections for colour, not solid blocks.
- **Do:** Set the menu as a full-height panel with grey labels and hairline dividers.
- **Don't:** Don't set the template on a light ground; the ground is near-black.
- **Don't:** Don't use solid indigo fills for buttons or cards; colour is limited to the glow.
- **Don't:** Don't place bright text over the glow area.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
