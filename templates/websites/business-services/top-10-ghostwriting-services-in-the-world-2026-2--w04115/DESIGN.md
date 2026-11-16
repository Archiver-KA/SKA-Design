# Design system — Top 10 Ghostwriting Services in the World 2026–27

`SN-W04115` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

An editorial article layout on white, with dark slate text (#30384a) and thin light grey rules (#e3e6ed) separating blocks. Numbered headings, star ratings and short bullet lists give it a plain, reference-style structure. The design uses almost no decoration, so the type and spacing do the work.

**Mood:** editorial, plain, structured, reference-like, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#30384a` | Headings and primary copy |
| Border | `#e3e6ed` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#e3e6ed` · `#30384a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Arial
- **Body:** Arial

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #30384a;
  --color-border: #e3e6ed;
  --font-display: "Arial", sans-serif;
  --font-body: "Arial", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#30384a',
    line: '#e3e6ed',
  },
  fontFamily: { display: ['Arial'], sans: ['Arial'] },
} }
```

## Do and don't

- **Do:** Set the page in dark slate (#30384a) on white with generous line spacing
- **Do:** Separate sections with light grey rules (#e3e6ed)
- **Do:** Number ranked headings and pair them with short bulleted highlights
- **Don't:** Don't add hero imagery or coloured panels to the article
- **Don't:** Don't set body paragraphs in bold weights
- **Don't:** Don't use more than one link colour in the text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
