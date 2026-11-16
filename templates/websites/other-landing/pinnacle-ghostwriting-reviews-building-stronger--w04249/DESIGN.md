# Design system — Pinnacle Ghostwriting Reviews: Building Stronger Stories From Great Ideas

`SN-W04249` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A plain reading layout puts a white article card on a pale blue-grey ground (#f5f7fa), with long-form body text in dark grey and a single navy-blue (#1f4f7a) for section headings and the callout rule. The headline is large and set in a regular sans-serif, and the callout uses a pale blue fill (#eef6ff) with a thick left border. It is built for reading first.

**Mood:** plain, editorial, readable, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f7fa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#333333` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Accent | `#1f4f7a` | Primary action and highlights |

Palette by frequency of use: `#333333` · `#1f4f7a` · `#f5f7fa` · `#ffffff` · `#1f2937` · `#666666` · `#444444` · `#eef6ff` · `#fafafa`.

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
  --color-background: #f5f7fa;
  --color-surface: #ffffff;
  --color-text: #333333;
  --color-muted: #666666;
  --color-accent: #1f4f7a;
  --font-display: "Arial", sans-serif;
  --font-body: "Arial", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f7fa',
    surface: '#ffffff',
    ink: '#333333',
    muted: '#666666',
    accent: '#1f4f7a',
  },
  fontFamily: { display: ['Arial'], sans: ['Arial'] },
} }
```

## Do and don't

- **Do:** Set section headings in navy (#1f4f7a) and body text in dark grey (#333333)
- **Do:** Use the pale blue (#eef6ff) callout with a thick navy left border for highlights
- **Do:** Keep the article in a white card on the pale ground (#f5f7fa)
- **Don't:** Don't use images or icons to decorate the article; it relies on type
- **Don't:** Don't set body text in navy; reserve it for headings and rules
- **Don't:** Don't add a second accent colour to the callouts

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
