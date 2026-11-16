# Design system — Emergency Plumbing Services Landing Page Template

`SN-W03894` · business-services · dark mode · Sinera Atlas theme `route` · language `ro`

## Direction

A dark hero with a bold white sans-serif headline and the middle phrase set in light blue. A blue announcement bar runs across the top, and the buttons are a solid blue call to action beside a green messaging button. Small floating contact cards sit on the right, so the page stays urgent but organised.

**Mood:** urgent, dark, organised, direct, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#04240f` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#9fd0ff` | Primary action and highlights |
| Second accent | `#6ceaa2` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#04240f` · `#6ceaa2` · `#d7dfec` · `#55e392` · `#c3cddf` · `#4fe08e` · `#9fd0ff` · `#5ee89b` · `#cfd8e6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #04240f;
  --color-text: #ffffff;
  --color-accent: #9fd0ff;
  --color-accent-2: #6ceaa2;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#04240f',
    ink: '#ffffff',
    accent: '#9fd0ff',
    accent2: '#6ceaa2',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans-serif with the middle phrase in light blue
- **Do:** Use the blue for the primary call to action and the top announcement bar
- **Do:** Pair the blue call to action with a green messaging button
- **Don't:** Don't set the page on a light background; the hero is dark
- **Don't:** Don't use green for headings; it is reserved for the messaging button
- **Don't:** Don't add more than one highlighted phrase to a headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
