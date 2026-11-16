# Design system — 3D Interactive Device Carousel

`SN-W04144` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bare dark stage where the devices carry the look and the interface is reduced to two round, outlined arrow buttons at the lower centre. The navy ground (#111827) is left almost empty, so the layout is defined by negative space. Controls are circular, light grey and white, with a thin highlight ring, which keeps them quiet against the dark ground.

**Mood:** minimal, dark, tactile, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Text | `#f3f4f6` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f3f4f6` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-text: #f3f4f6;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    ink: '#f3f4f6',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Keep navigation as two round arrow buttons at the lower centre.
- **Do:** Use the navy ground (#111827) across the whole stage.
- **Do:** Keep every control circular, in grey and white.
- **Don't:** Don't put text labels on the carousel controls.
- **Don't:** Don't add a bright accent colour; the controls stay grey and white.
- **Don't:** Don't place a heading over the device stage.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
