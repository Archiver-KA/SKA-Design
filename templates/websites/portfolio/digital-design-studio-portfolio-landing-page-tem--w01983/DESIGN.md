# Design system — Digital Design Studio Portfolio Landing Page Template

`SN-W01983` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Monochrome, minimal headline: a black ground with a three-line sans headline in white, its middle word digital set dimmer in grey. A short grey paragraph sits below, and the only other control is a small circular Explore Work button. A faint blue-violet glow at the right edge is the only colour and is barely visible.

**Mood:** monochrome, minimal, sharp, precise, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#171717` | Hairlines, dividers, outlines |
| Accent | `#a3a3a3` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#a3a3a3` · `#171717` · `#737373` · `#525252` · `#050505` · `#000000` · `#404040` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-screen-2xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-4`, `gap-12`, `gap-16`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Case studies (`case-studies`)
6. Services (`services`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #171717;
  --color-accent: #a3a3a3;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#171717',
    accent: '#a3a3a3',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Dim the middle headline word to grey (#a3a3a3) for emphasis
- **Do:** Keep the Explore Work action as a small circular outline button
- **Do:** Keep the blue-violet glow in the background at very low strength
- **Don't:** Don't use the deep indigo (#312e81) on buttons; the glow is faint
- **Don't:** Don't move to a light page; the page is black.
- **Don't:** Don't set body copy in white; use grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
