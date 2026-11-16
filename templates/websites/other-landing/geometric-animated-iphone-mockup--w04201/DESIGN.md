# Design system — Geometric Animated iPhone Mockup

`SN-W04201` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A phone-sized hero on a deep navy ground (#112d4e). An iPhone frame holds a black screen with a glowing teal wireframe shape, and a white headline sits centred over the shape with a pale mint pill button beneath it. The page is built around the device, and the geometry does the decorating.

**Mood:** futuristic, sleek, geometric, animated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#112d4e` | Page ground |
| Surface | `#ececec` | Cards, panels, raised areas |
| Text | `#1c1c1e` | Headings and primary copy |
| Accent | `#112d4e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c4c4c4` · `#ececec` · `#1c1c1e` · `#333333` · `#000000` · `#112d4e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** SF Pro Display
- **Body:** SF Pro Display
- **Loaded families:** SF Pro Display, Montserrat

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #112d4e;
  --color-surface: #ececec;
  --color-text: #1c1c1e;
  --color-accent: #112d4e;
  --font-display: "SF Pro Display", sans-serif;
  --font-body: "SF Pro Display", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#112d4e',
    surface: '#ececec',
    ink: '#1c1c1e',
    accent: '#112d4e',
  },
  fontFamily: { display: ['SF Pro Display'], sans: ['SF Pro Display'] },
} }
```

## Do and don't

- **Do:** Keep the device mockup centred on the navy ground
- **Do:** Overlay the headline on the animated shape with a clear margin
- **Do:** Use a single pale button for the call to action
- **Don't:** Don't add more than one hero shape at a time
- **Don't:** Don't use a light background behind the phone frame
- **Don't:** Don't set the headline in dark ink on the black screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
