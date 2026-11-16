# Design system — Real Estate Project Development Landing Page Template

`SN-W03366` · real-estate · light mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A pale, quiet architectural page on off-white (#f4f4f2) with black type. The navigation uses small monospaced labels with wide letter spacing, divided by thin hairlines, and the contact action is a black filled block. The hero is mostly open space, with a large pale grey image panel on the right and a single sans-serif line at lower left, so the layout itself carries the architectural feel.

**Mood:** architectural, quiet, minimal, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f4f2` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#808080` | Secondary copy, captions |
| Border | `#1a1a1a` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1a1a1a` · `#ffffff` · `#f4f4f2` · `#808080` · `#000000` · `#737373` · `#525252` · `#d4d4d4` · `#c0c0c0` · `#e0e0de`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 48px · body 16px
- **Weights in use:** light, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-8`, `gap-12`, `gap-4`

**Primary button**

```html
<a class="mt-8 md:mt-0 px-6 py-3 border border-uslu-black rounded-full text-xs font-mono uppercase tracking-widest hover:bg-uslu-black hover:text-white transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f4f2;
  --color-surface: #000000;
  --color-text: #000000;
  --color-muted: #808080;
  --color-border: #1a1a1a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f4f2',
    surface: '#000000',
    ink: '#000000',
    muted: '#808080',
    line: '#1a1a1a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on off-white (#f4f4f2) with black type
- **Do:** Set navigation labels in a monospaced face with wide letter spacing
- **Do:** Use the black filled block for the contact action only
- **Don't:** Don't add colour to the navigation or hero
- **Don't:** Don't fill the hero with decorative graphics; the open space is the design
- **Don't:** Don't round the corners of buttons or panels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
