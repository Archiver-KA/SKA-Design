# Design system — Virtual Keyboard Shortcut Display

`SN-W04331` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A stark monospaced page on white with heavy black rules, large uppercase headings and a full-width keyboard drawn as bordered keycaps. Each key is a white box with a thick black outline, and the rows sit on a strict grid. The design uses no colour at all, so structure and type do the work.

**Mood:** brutalist, technical, monochrome, bold, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Mono
- **Body:** IBM Plex Mono
- **Loaded families:** IBM Plex Mono
- **Scale (largest breakpoint):** h1 60px · h2 24px · body 18px
- **Weights in use:** bold
- **Letter spacing:** `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="hover:underline hover:bg-black hover:text-white px-2 text-xs uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-border: #000000;
  --font-display: "IBM Plex Mono", sans-serif;
  --font-body: "IBM Plex Mono", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#000000',
    line: '#000000',
  },
  fontFamily: { display: ['IBM Plex Mono'], sans: ['IBM Plex Mono'] },
} }
```

## Do and don't

- **Do:** Set headings in uppercase monospace with a thick black rule beneath
- **Do:** Draw keys as white boxes with thick black borders on a strict grid
- **Do:** Keep the whole page in black and white with no accent colour
- **Don't:** Don't add rounded corners to keys or panels
- **Don't:** Don't introduce colour to highlight a pressed key
- **Don't:** Don't use thin borders; the rules are meant to be heavy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
