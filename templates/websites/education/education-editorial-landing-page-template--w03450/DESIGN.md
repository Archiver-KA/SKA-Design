# Design system — Education Editorial Landing Page Template

`SN-W03450` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

An editorial, magazine-style page on warm beige, with a heavy, tightly set headline in dark slate. The hero is a bordered split panel: text on the left and a playful illustration of a lightbulb and labelled cards on the right, drawn in navy, pink, yellow and green. Colour lives in the illustration, while the type stays dark and plain.

**Mood:** editorial, playful, warm, illustrated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#efe7d7` | Page ground |
| Surface | `#dce4ff` | Cards, panels, raised areas |
| Text | `#3c4852` | Headings and primary copy |
| Accent | `#ffd1cf` | Primary action and highlights |
| Second accent | `#ffe8b0` | Supporting highlights |

Palette by frequency of use: `#dce4ff` · `#ffd1cf` · `#17212a` · `#efe7d7` · `#3c4852` · `#fff4d8` · `#ffd5d4` · `#dff2e8` · `#ffe8b0` · `#fffaf0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** Three.js, React

## Tokens

```css
:root {
  --color-background: #efe7d7;
  --color-surface: #dce4ff;
  --color-text: #3c4852;
  --color-accent: #ffd1cf;
  --color-accent-2: #ffe8b0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#efe7d7',
    surface: '#dce4ff',
    ink: '#3c4852',
    accent: '#ffd1cf',
    accent2: '#ffe8b0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline heavy and tightly leaded in dark slate (#17212a)
- **Do:** Keep the hero as a bordered split panel, with text on one side and an illustration on the other
- **Do:** Use the pastel colours (pink, yellow, green, navy) only inside illustrations and tags
- **Don't:** Don't set body text or headlines in pastel colours
- **Don't:** Don't place more than one illustration in a single hero
- **Don't:** Don't remove the panel borders that frame the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
