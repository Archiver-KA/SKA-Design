# Design system — Aegis Command Tactical Operations Template

`SN-W00011` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark tactical HUD: a left sidebar lists modules with small uppercase labels, and a status strip across the top shows online state, mission status and unit counts in tiny monospaced type. The palette is cool, with pale blue-white text (#eaf4fd) and steel blue (#35506b) for structure, and status uses small green dots. The ground is near-black.

**Mood:** tactical, dense, technical, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#eaf4fd` | Headings and primary copy |
| Accent | `#35506b` | Primary action and highlights |

Palette by frequency of use: `#eaf4fd` · `#cdeeff` · `#eaf6ff` · `#35506b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sans)
- **Body:** var(--sans)
- **Loaded families:** Rajdhani, IBM Plex Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #eaf4fd;
  --color-accent: #35506b;
  --font-display: "var(--sans)", sans-serif;
  --font-body: "var(--sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#eaf4fd',
    accent: '#35506b',
  },
  fontFamily: { display: ['var(--sans)'], sans: ['var(--sans)'] },
} }
```

## Do and don't

- **Do:** Use small uppercase labels for module names and status fields
- **Do:** Show live status in a top strip with dot indicators
- **Do:** Keep structure in steel blue (#35506b) and text in pale blue-white (#eaf4fd)
- **Don't:** Don't use bright accent colours for decoration
- **Don't:** Don't add rounded decorative cards inside the HUD
- **Don't:** Don't use display-size headings in the dashboard chrome

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
