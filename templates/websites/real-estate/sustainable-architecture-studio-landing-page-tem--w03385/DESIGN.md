# Design system — Sustainable Architecture Studio Landing Page Template

`SN-W03385` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark editorial studio page on a near-black warm ground with an off-white serif headline. The second line is set in italic in a muted gold-brown, a single expressive touch that carries the emotional tone. A filled button and an outlined button sit side by side, and the statistics are set in serif figures with small uppercase labels, so the page feels literary and calm rather than corporate.

**Mood:** editorial, literary, calm, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Playfair Display

## Shape, spacing and layout

- **Corner radius:** none used — square corners

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
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set headlines in the serif in off-white with one italic word in muted gold-brown.
- **Do:** Pair a filled primary button with an outlined secondary button, side by side.
- **Do:** Set the statistic figures in the serif with small uppercase labels beneath them.
- **Don't:** Don't introduce bright colours; the page stays warm black and off-white.
- **Don't:** Don't set the italic accent on more than one line per headline.
- **Don't:** Don't replace the headline serif with a sans.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
