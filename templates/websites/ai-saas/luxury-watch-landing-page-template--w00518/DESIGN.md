# Design system — Luxury Watch Landing Page Template

`SN-W00518` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, cinematic watch page on near-black (#0a0a0a) with a large white serif headline set in two lines, one of them italic. Small tracked capitals in pale gold (#c8aa6e) carry the eyebrow and navigation, and a thin outline button sits under the headline. The serif and restraint make it feel like a horological catalogue rather than a retail site.

**Mood:** horological, cinematic, restrained, serif, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c8aa6e` | Primary action and highlights |

Palette by frequency of use: `#c8aa6e` · `#ffffff` · `#0a0a0a` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Cinzel, Inter, Playfair Display, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 24px · h2 14px · h3 24px · body 14px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="cursor-magnet btn-shimmer bg-[#C8AA6E] text-[#0A0A0A] px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Call to action (`cta`)
4. Services (`services`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c8aa6e;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c8aa6e',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large white serif, with one italic line.
- **Do:** Use the pale gold (#c8aa6e) for eyebrows and small labels.
- **Do:** Keep the call to action as a thin outline button.
- **Don't:** Don't set the page on a gold ground; it stays near-black.
- **Don't:** Don't use bold weights for the headline; it is light and elegant.
- **Don't:** Don't add bright colours next to the gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
