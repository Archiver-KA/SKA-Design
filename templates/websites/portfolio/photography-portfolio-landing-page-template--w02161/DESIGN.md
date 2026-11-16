# Design system — Photography Portfolio Landing Page Template

`SN-W02161` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Cinematic and restrained: a near-black ground (#080808) with cream type (#f5f0e8) and a single high-contrast serif. Cormorant Garamond is set very large and split across lines, with the surname in a lighter grey italic, giving the hero a magazine-cover rhythm. Colour is almost absent; the cream button and small tracked uppercase labels carry the emphasis.

**Mood:** cinematic, monochrome, elegant, minimal, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080808` | Page ground |
| Text | `#f5f0e8` | Headings and primary copy |
| Border | `#1e1e1e` | Hairlines, dividers, outlines |
| Accent | `#f5f0e8` | Primary action and highlights |

Palette by frequency of use: `#1e1e1e` · `#e0dbd2` · `#080808` · `#f5f0e8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, DM Sans, DM Mono
- **Weights in use:** light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080808;
  --color-text: #f5f0e8;
  --color-border: #1e1e1e;
  --color-accent: #f5f0e8;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080808',
    ink: '#f5f0e8',
    line: '#1e1e1e',
    accent: '#f5f0e8',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set all headings in Cormorant Garamond and mix roman and italic within one line
- **Do:** Use cream (#f5f0e8) for the primary button and body text
- **Do:** Set labels as small uppercase tracked text at low contrast
- **Don't:** Don't add a second accent hue; the page is monochrome
- **Don't:** Don't set headings in bold weights
- **Don't:** Don't place photos on a light ground; the page depends on dark space

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
