# Design system — Ve Be Interiors

`SN-W03388` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Warm, dark studio page on a charcoal-brown ground with a cream serif headline. The second line is italic in a muted tan, the one expressive touch, and three statistics sit in serif figures under the buttons. A filled and an outlined button form the actions, so the page reads as calm, tactile and considered.

**Mood:** warm, tactile, calm, refined

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
- **Common gaps:** `gap-3`

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

- **Do:** Set headlines in the serif in cream (#f5f0eb) with one italic word in muted tan.
- **Do:** Keep the ground warm charcoal (#1a1917) rather than pure black.
- **Do:** Pair one filled button with one outlined button, side by side.
- **Don't:** Don't use pure white for text; the cream is the only light tone.
- **Don't:** Don't add colour to the statistics; they stay cream.
- **Don't:** Don't set the italic on more than one line.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
