# Design system — Luxury Plumbing Services Landing Page Template

`SN-W04017` · business-services · dark mode · Sinera Atlas theme `route` · language `fr`

## Direction

A warm, dark plumbing page with a large cream headline over a dimmed photograph, and the word 'projets' set in soft gold italic for emphasis. Two outlined pill buttons carry the calls to action, and a row of large numerals with small captions sets out the company's track record. The warm, earthy tones are kept throughout in place of cool technical blues.

**Mood:** warm, dark, artisanal, refined, earthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1917` | Page ground |
| Text | `#f5f0eb` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f5f0eb` · `#ffffff` · `#1a1917`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Playfair Display

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Common gaps:** `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Marquee (`marquee`)
6. Case studies (`case-studies`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Awards / press (`awards-press`)
10. Articles (`blog-articles`)
11. Call to action (`cta`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1917;
  --color-text: #f5f0eb;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1917',
    ink: '#f5f0eb',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use the cream (#f5f0eb) for headlines and body copy on the dark ground
- **Do:** Set one word per headline in gold italic for emphasis
- **Do:** Show credentials as large numerals with small caption labels beneath
- **Don't:** Don't put cream text over the bright parts of the photograph
- **Don't:** Don't use solid coloured buttons; keep them outlined
- **Don't:** Don't set the hero on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
