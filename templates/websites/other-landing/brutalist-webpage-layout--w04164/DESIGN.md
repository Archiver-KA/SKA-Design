# Design system — Brutalist Webpage Layout

`SN-W04164` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black ground with heavy white monospace type in Space Mono, uppercase and very large. A single yellow (#fde047) marks the rule under the headline and one solid feature block, while everything else stays black and white. Thick white borders and square corners give the page a blunt, poster-like character.

**Mood:** bold, poster-like, stark, blunt

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fde047` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fde047` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Space Mono
- **Loaded families:** Space Mono
- **Scale (largest breakpoint):** h1 96px · h2 24px · body 18px
- **Weights in use:** bold
- **Letter spacing:** `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Common gaps:** `gap-8`, `gap-0`

**Primary button**

```html
<a class="inline-block bg-white text-black py-3 px-8 text-lg font-bold uppercase hover:bg-yellow-300 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Three.js

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fde047;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Space Mono", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#fde047',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Space Mono'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#fde047) only for the headline rule and one solid block per screen.
- **Do:** Set headlines in Space Mono, bold and uppercase.
- **Do:** Keep borders thick, white and square-cornered.
- **Don't:** Don't add a second accent colour beside the yellow.
- **Don't:** Don't soften the corners with a radius.
- **Don't:** Don't set body copy in grey; keep it white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
