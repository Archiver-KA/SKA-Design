# Design system — Spiritual Retreat Landing Page Template

`SN-W03131` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A deep forest-green hero (#0f2d1f) with white serif display type and gold italic highlights on key words, giving a devotional, premium tone. Small uppercase pills with thin borders sit above the headline, and a thin meta line closes the block.

**Mood:** devotional, premium, warm, calm, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f2d1f` | Page ground |
| Text | `#f0faf4` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#e8f8ee` · `#f0faf4` · `#b0c4ba` · `#0f2d1f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Jost
- **Body:** Jost
- **Loaded families:** Cormorant Garamond, Jost

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Team (`team`)
6. Timeline (`timeline`)
7. Services (`services`)
8. Call to action (`cta`)
9. Sign-in form (`auth-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f2d1f;
  --color-text: #f0faf4;
  --font-display: "Jost", sans-serif;
  --font-body: "Jost", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f2d1f',
    ink: '#f0faf4',
  },
  fontFamily: { display: ['Jost'], sans: ['Jost'] },
} }
```

## Do and don't

- **Do:** Set the hero on the deep green (#0f2d1f) with light text (#f0faf4)
- **Do:** Highlight one or two words per headline in gold italic
- **Do:** Keep pill labels small, uppercase, with thin borders
- **Don't:** Don't set this page on a white ground; the hero is dark green
- **Don't:** Don't use more than two highlight words in one headline
- **Don't:** Don't add a second bright colour to the nav; the green register button is the only one

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
