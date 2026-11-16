# Design system — Website Footer with Contact Info

`SN-W04131` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A four-column footer on a dark navy ground, with uppercase blue column headings and light grey link lists beneath them. A thin rule separates the columns from the copyright line, which is centred and small. The layout is orderly and quiet, and the headings are the only colour.

**Mood:** orderly, quiet, dark, structured, compact

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Weights in use:** semibold
- **Letter spacing:** `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-6xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-8`

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set column headings in uppercase blue with wide letter spacing
- **Do:** Keep link lists in light grey beneath each heading
- **Do:** Separate the copyright line from the columns with a thin rule
- **Don't:** Don't add icons or images to the footer columns
- **Don't:** Don't use bright colours beyond the heading blue
- **Don't:** Don't centre the column content

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
