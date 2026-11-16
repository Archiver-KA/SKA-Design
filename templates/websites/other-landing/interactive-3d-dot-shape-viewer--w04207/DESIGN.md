# Design system — Interactive 3D Dot Shape Viewer

`SN-W04207` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy viewer (#020617) with a field of small white dots forming a globe in the centre, and a floating control panel on the right. The panel is a slate card (#1e293b) with compact sliders and white labels, and the slider thumbs are cyan (#06b6d4). Type is a plain system sans, and the dots are the visual, with the controls kept small.

**Mood:** minimal, technical, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#1e293b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#06b6d4` | Primary action and highlights |

Palette by frequency of use: `#fafcff` · `#ffffff` · `#06b6d4` · `#e2e4ea` · `#e0eaf0` · `#7dd3fc` · `#1e293b` · `#020617` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px)
- **Shadows:** `shadow`
- **Common gaps:** `gap-2`

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #1e293b;
  --color-text: #ffffff;
  --color-accent: #06b6d4;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#1e293b',
    ink: '#ffffff',
    accent: '#06b6d4',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Draw the shape as small white dots on the dark ground
- **Do:** Keep the control panel compact with sliders and labels
- **Do:** Use cyan (#06b6d4) on slider thumbs only
- **Don't:** Don't use a light background for the viewer
- **Don't:** Don't add colour to the dots beyond the single white tint
- **Don't:** Don't cover the shape with the control panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
