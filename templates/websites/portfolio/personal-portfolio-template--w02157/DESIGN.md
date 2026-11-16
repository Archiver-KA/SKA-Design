# Design system — Personal Portfolio Template

`SN-W02157` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A literary writer's page on near-black (#0a0a0a), with a large light serif name in off-white and a grey serif subline. Nav labels are small tracked uppercase, and there is no accent colour, so the page is quiet and text-led, closer to a book jacket than a marketing site.

**Mood:** literary, quiet, monochrome, elegant, text-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#737373` · `#e5e5e5` · `#525252` · `#262626` · `#ffffff` · `#d4d4d4` · `#0a0a0a` · `#f5f5f5` · `#a3a3a3` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter, Space Mono
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 36px · body 24px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #262626;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#262626',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the name large in a light serif, off-white on near-black.
- **Do:** Keep the subline in grey serif beneath the name, on one line.
- **Do:** Use small tracked uppercase for nav labels only.
- **Don't:** Don't add an accent colour to the page.
- **Don't:** Don't put imagery in the hero; the type carries the page.
- **Don't:** Don't set the name in bold; the look depends on the light serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
