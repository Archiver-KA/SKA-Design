# Design system — The Bright Starling Page Template

`SN-W02256` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, glowing media-company page: a black ground (#000000) with starfield and network line art, and blocks of saturated magenta and violet light set behind the headline. The headline is large white sans on the first and last lines, with the middle lines in a violet-to-blue gradient that works as the page's signature. Body copy is small and grey, and the glow shapes do the decorative work in place of panels or borders.

**Mood:** luminous, dark, experimental, energetic, atmospheric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Playfair Display, Outfit, JetBrains Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Video / media (`video-media`)
5. Product grid (`product-grid`)
6. Team (`team`)
7. Schedule (`schedule-agenda`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Keep the middle headline lines in a violet-to-blue gradient and the outer lines white.
- **Do:** Use the glowing blocks as the only decoration in the hero.
- **Do:** Keep the ground black so the glow reads clearly.
- **Don't:** Don't put the gradient on body copy; it is for headline lines only.
- **Don't:** Don't switch to a light ground; the glow effect fails on white.
- **Don't:** Don't outline cards; the glow shapes replace borders.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
