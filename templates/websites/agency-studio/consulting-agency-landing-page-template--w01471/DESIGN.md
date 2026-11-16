# Design system — Consulting Agency Landing Page Template

`SN-W01471` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

A pure white ground ([#ffffff]) with black ([#000000]) IBM Plex Mono headlines in uppercase at large size. A black-and-white photograph fills the right half, so the page is greyscale throughout. Thin black outlined buttons sit beside the headline, and the monospaced face gives a technical, editorial tone with no accent colour.

**Mood:** monochrome, technical, editorial, stark, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#e5e5e5` · `#ffffff` · `#000000` · `#737373` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Mono
- **Body:** IBM Plex Mono
- **Loaded families:** IBM Plex Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 14px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="border border-black px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e5e5;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --font-display: "IBM Plex Mono", sans-serif;
  --font-body: "IBM Plex Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e5e5',
    ink: '#000000',
    muted: '#737373',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['IBM Plex Mono'], sans: ['IBM Plex Mono'] },
} }
```

## Do and don't

- **Do:** Keep the page monochrome with black (#000000) type on white
- **Do:** Set headlines in IBM Plex Mono in uppercase at large size
- **Do:** Use outlined buttons with black borders for the primary and secondary actions
- **Don't:** Don't add an accent colour
- **Don't:** Don't set headlines in a sans-serif
- **Don't:** Don't use colour photographs in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
