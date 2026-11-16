# Design system — Yoo

`SN-W00842` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, light hero with a near-black headline in a sans, and a coral (#e5695f) highlight on the phrase 'No leftover GUIs.' The primary button is coral and the secondary is an outlined pill. A tabbed product panel with soft grey borders sits on the right, showing toggles and a clean list, so the design feels calm and tidy rather than technical.

**Mood:** warm, tidy, calm, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#211f1c` | Headings and primary copy |
| Muted text | `#8b929e` | Secondary copy, captions |
| Accent | `#e5695f` | Primary action and highlights |
| Second accent | `#5cb87f` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#211f1c` · `#f4d9cd` · `#8b929e` · `#dfe4ea` · `#e5695f` · `#e6b34d` · `#5cb87f` · `#d8cec7` · `#b7a99f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font)
- **Body:** var(--font)

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** React
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #211f1c;
  --color-muted: #8b929e;
  --color-accent: #e5695f;
  --color-accent-2: #5cb87f;
  --font-display: "var(--font)", sans-serif;
  --font-body: "var(--font)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#211f1c',
    muted: '#8b929e',
    accent: '#e5695f',
    accent2: '#5cb87f',
  },
  fontFamily: { display: ['var(--font)'], sans: ['var(--font)'] },
} }
```

## Do and don't

- **Do:** Use the coral (#e5695f) for the headline highlight and the primary button only
- **Do:** Set headlines in the sans at a large size with one coral phrase per headline
- **Do:** Show the product as a tabbed panel with toggle rows and thin borders
- **Don't:** Don't add a dark product panel to this light layout
- **Don't:** Don't use the coral for body text
- **Don't:** Don't add a second accent colour beside the coral and the sage green used for status

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
