# Design system — Architecture & Interior Design Studio Landing Page Template

`SN-W03186` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A black splash screen with a white sans-serif wordmark, a thin vertical rule to its left and a small italic line beneath. Nothing else is on the screen, so the page reads as a title card before the main site. The design is pure monochrome and depends on the wordmark's weight and one white rule.

**Mood:** minimal, monochrome, stark, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e8e6df` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#111111` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#111111` · `#555555` · `#000000` · `#aaaaaa` · `#999999` · `#101010` · `#e8e6df` · `#151515` · `#dedcd4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk

## Shape, spacing and layout

- **Corner radius:** none used — square corners

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Case studies (`case-studies`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Testimonials (`testimonials`)
6. Awards / press (`awards-press`)
7. Process / steps (`how-it-works`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e8e6df;
  --color-text: #ffffff;
  --color-muted: #555555;
  --color-border: #111111;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e8e6df',
    ink: '#ffffff',
    muted: '#555555',
    line: '#111111',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the wordmark on black with a thin white vertical rule beside it
- **Do:** Use a small italic line under the wordmark for the tagline
- **Do:** Keep the splash to one wordmark and one line of text
- **Don't:** Don't add colour to the splash
- **Don't:** Don't place navigation on the splash screen
- **Don't:** Don't enlarge the wordmark beyond the height of the rule

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
