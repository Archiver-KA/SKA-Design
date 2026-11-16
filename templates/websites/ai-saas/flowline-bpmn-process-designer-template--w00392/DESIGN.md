# Design system — Flowline BPMN Process Designer Template

`SN-W00392` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, utilitarian interface for designing process diagrams: a white canvas with thin grey toolbars, a left palette of event, task and gateway icons, and a right property panel. Colour appears only in the icons (blue, red, amber, purple) and in status and toggle states, so the page reads as a tool rather than a marketing site.

**Mood:** utilitarian, light, functional, dense, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fffbeb` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#047857` · `#065f46` · `#059669` · `#fffbeb` · `#e2e8f0` · `#ecfdf5` · `#fde68a` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, JetBrains Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Spline 3D, React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fffbeb;
  --color-text: #111111;
  --color-accent: #10b981;
  --color-accent-2: #e2e8f0;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fffbeb',
    ink: '#111111',
    accent: '#10b981',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Keep canvas and panels white or very light grey, separated by thin borders.
- **Do:** Use green only for the validation status line and enabled toggles.
- **Do:** Set toolbar labels and element names in small sans text, dark grey, with icons in their own colours.
- **Don't:** Don't turn the canvas into a marketing hero; it is a working interface.
- **Don't:** Don't add decoration to the canvas; shapes stay flat with outline strokes.
- **Don't:** Don't use dark panels; the interface is light throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
