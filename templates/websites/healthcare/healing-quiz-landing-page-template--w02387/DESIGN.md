# Design system — Healing Quiz Landing Page Template

`SN-W02387` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A technical document mock on a charcoal ground (#16161a), set entirely in monospace with a bordered sheet centred on the screen. A thin rainbow spectrum line runs along the top edge and small teal rules mark each section, so colour appears only as hairline accents. The page reads as a specification or printed report rather than a marketing hero.

**Mood:** technical, document-like, quiet, monospace, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#16161a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#646465` | Secondary copy, captions |
| Border | `#646465` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#646465` · `#16161a` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--f-mono)
- **Body:** var(--f-mono)
- **Loaded families:** Geist Mono

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #16161a;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #646465;
  --color-border: #646465;
  --font-display: "var(--f-mono)", sans-serif;
  --font-body: "var(--f-mono)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#16161a',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#646465',
    line: '#646465',
  },
  fontFamily: { display: ['var(--f-mono)'], sans: ['var(--f-mono)'] },
} }
```

## Do and don't

- **Do:** Set all type in the monospace face, with headings in uppercase weight.
- **Do:** Use the thin spectrum rule and teal section markers as the only colour accents.
- **Do:** Keep the sheet framed by a single hairline border on the charcoal ground.
- **Don't:** Don't introduce a sans-serif or serif face; the monospace is the identity.
- **Don't:** Don't use thick coloured bars; accents stay hairline.
- **Don't:** Don't round the sheet's corners.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
