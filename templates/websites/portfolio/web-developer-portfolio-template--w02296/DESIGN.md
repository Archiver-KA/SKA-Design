# Design system — Web Developer Portfolio Template

`SN-W02296` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

A charcoal page with a centred light sans headline and a dark code window below it, shown as a faded mock file named layout.html with grey placeholder bars. Colour is almost absent; the only hint is a small green status dot above the headline. Restraint and the code-window motif carry the look.

**Mood:** restrained, technical, quiet, charcoal, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#8f8b85` | Secondary copy, captions |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#8f8b85` · `#121212` · `#3a3a3a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Onest, Inter

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #121212;
  --color-text: #f5f5f5;
  --color-muted: #8f8b85;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    ink: '#f5f5f5',
    muted: '#8f8b85',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Keep the headline centred in a light sans with a small status pill above
- **Do:** Frame code samples in a dark window with a file name in the title bar
- **Do:** Keep any colour to a small green status dot
- **Don't:** Don't introduce a bright accent colour; the page has none
- **Don't:** Don't place the code window over the headline
- **Don't:** Don't set the page ground lighter than the charcoal (#121212)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
