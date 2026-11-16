# Design system — Kaffebaren Silkeborg

`SN-W04232` · other-landing · light mode · Sinera Atlas theme `circuit` · language `da`

## Direction

A quiet, editorial café page with a flat mid-grey hero under a white navigation bar. The logo and headline use a serif face, with the second word of the name in italic, and small letter-spaced capitals carry the navigation. White text on the grey hero is set with a single outlined button as the call to action.

**Mood:** editorial, quiet, serif, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#171717` · `#737373` · `#ffffff` · `#a3a3a3` · `#f5f5f5` · `#e5e5e5` · `#fafafa` · `#262626` · `#525252` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-1`, `gap-16`

**Primary button**

```html
<a class="inline-block border border-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the logo and headline in a serif face, with the second name word in italic
- **Do:** Use small, letter-spaced capitals for navigation and eyebrow labels
- **Do:** Keep the call to action as one outlined button
- **Don't:** Don't use solid colour buttons; the call to action is an outline
- **Don't:** Don't set the navigation in a sans-serif
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
