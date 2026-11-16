# Design system — Fuel Pro Fitness & Nutrition Landing Page Template

`SN-W02625` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A near-black editorial fitness hero set in a serif display face. A large white serif line, 'of yourself..', sits under an outlined italic line, and small tracked gold caps (#ddb151) name the section. Gold is the only colour, with one outline button and wide spacing, so the page reads as luxurious rather than loud.

**Mood:** luxurious, editorial, restrained, dark, serif

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ddb151` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ddb151` · `#000000` · `#0a0a0a` · `#a5b4fc` · `#1d4ed8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Bebas Neue, Inter
- **Scale (largest breakpoint):** h2 128px · h3 48px · body 12px
- **Weights in use:** light, bold, semibold
- **Letter spacing:** `tracking-[0.5em]`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1600px]`, `max-w-[200px]`
- **Section padding:** `py-48`, `py-14`
- **Common gaps:** `gap-20`, `gap-6`, `gap-24`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ddb151;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ddb151',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the display headline in a large white serif, with an outlined italic line above it.
- **Do:** Use gold (#ddb151) for the small tracked caps labels only.
- **Do:** Keep the page on the near-black ground with one outline button.
- **Don't:** Don't set body copy in the display serif; small copy stays in sans-serif.
- **Don't:** Don't use gold for headlines.
- **Don't:** Don't add a second accent colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
