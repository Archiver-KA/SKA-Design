# Design system — Major Projects in Pakistan: What Buyers and Investors Should Know

`SN-W03312` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A deep green gradient hero, from the dark green of #143d2a to a brighter green, carries a centred white bold sans headline and a small translucent label above it. Below the hero, the body sits on white with a pale green quote panel that has a dark green left rule, and a side-column table of contents. Green is the only colour in the design.

**Mood:** sober, informative, green, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f7f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#344e41` | Headings and primary copy |
| Muted text | `#526066` | Secondary copy, captions |
| Accent | `#143d2a` | Primary action and highlights |
| Second accent | `#1b7d4f` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#526066` · `#344e41` · `#143d2a` · `#176b45` · `#1b7d4f` · `#edf7f1` · `#f4f7f6` · `#263238` · `#d8f3e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Arial
- **Body:** Arial

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Case studies (`case-studies`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #f4f7f6;
  --color-surface: #ffffff;
  --color-text: #344e41;
  --color-muted: #526066;
  --color-accent: #143d2a;
  --color-accent-2: #1b7d4f;
  --font-display: "Arial", sans-serif;
  --font-body: "Arial", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f7f6',
    surface: '#ffffff',
    ink: '#344e41',
    muted: '#526066',
    accent: '#143d2a',
    accent2: '#1b7d4f',
  },
  fontFamily: { display: ['Arial'], sans: ['Arial'] },
} }
```

## Do and don't

- **Do:** Use the deep green (#143d2a) for the hero and for left rules on quote panels.
- **Do:** Set headlines in bold sans, centred on the green hero.
- **Do:** Keep body copy on white or pale green (#edf7f1) with dark green text.
- **Don't:** Don't add a gold or brown accent; the page uses greens only.
- **Don't:** Don't set body text in white outside the hero.
- **Don't:** Don't add decorative shapes beyond the hero's soft gradient.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
