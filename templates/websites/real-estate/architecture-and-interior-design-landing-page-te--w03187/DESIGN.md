# Design system — Architecture and Interior Design Landing Page Template

`SN-W03187` · real-estate · light mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A split-screen Spanish studio page: a white text column on the left with a dark serif headline and an italic gold second line, and a warm photograph filling the right side. The buttons are blue, and small green asterisk marks act as ornaments. Colour comes from the photograph and the gold italic, which keeps the text column quiet.

**Mood:** editorial, warm, split, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#173a2b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#173a2b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--sa-font-body)
- **Body:** var(--sa-font-body)
- **Loaded families:** Fraunces, Be Vietnam Pro
- **Scale (largest breakpoint):** h1 112px · h2 48px · h3 20px · body 15px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-24`
- **Common gaps:** `gap-3`, `gap-x-4`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #173a2b;
  --font-display: "var(--sa-font-body)", sans-serif;
  --font-body: "var(--sa-font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    line: '#ffffff',
    accent: '#173a2b',
  },
  fontFamily: { display: ['var(--sa-font-body)'], sans: ['var(--sa-font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in a dark serif, with the second line in italic gold
- **Do:** Keep the text column on white and the photograph on the right
- **Do:** Use the blue button only for the primary call to action
- **Don't:** Don't set the italic phrase in a sans-serif
- **Don't:** Don't add a second button colour
- **Don't:** Don't use the green asterisk as a bullet or as a large graphic

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
