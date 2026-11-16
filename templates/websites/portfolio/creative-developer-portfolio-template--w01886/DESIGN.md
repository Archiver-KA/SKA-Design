# Design system — Creative Developer Portfolio Template

`SN-W01886` · portfolio · dark mode · Sinera Atlas theme `workshop`

## Direction

A near-black page with a large red-orange haze across the top right that is the main colour field, while everything else stays black and white. Headlines are a light sans, and the surname ends in an italic serif set in pale grey-green, so the type mixes two voices. Tracked uppercase navigation and a small tagline keep the chrome quiet.

**Mood:** moody, cinematic, expressive, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#2a1215` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#999999` | Secondary copy, captions |
| Accent | `#ff8a80` | Primary action and highlights |

Palette by frequency of use: `#0a0a0a` · `#999999` · `#666666` · `#ffffff` · `#2a1215` · `#ff8a80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** -apple-system
- **Body:** -apple-system

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal, React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #2a1215;
  --color-text: #f5f5f5;
  --color-muted: #999999;
  --color-accent: #ff8a80;
  --font-display: "-apple-system", sans-serif;
  --font-body: "-apple-system", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#2a1215',
    ink: '#f5f5f5',
    muted: '#999999',
    accent: '#ff8a80',
  },
  fontFamily: { display: ['-apple-system'], sans: ['-apple-system'] },
} }
```

## Do and don't

- **Do:** Keep the red haze in the upper right as the only colour field (#ff8a80 family).
- **Do:** Set the name in a light sans with its last word in italic serif.
- **Do:** Keep navigation and taglines small, uppercase and tracked.
- **Don't:** Don't place body text on the red haze.
- **Don't:** Don't add a second accent beside the red.
- **Don't:** Don't set the display name in a bold weight; the style is light.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
